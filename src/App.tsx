import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { IntroLoader } from './components/IntroLoader';
import { CursorEffect } from './components/CursorEffect';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ResumeSection } from './sections/ResumeSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { FooterSection } from './sections/FooterSection';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  const activeSection = useActiveSection([
    'hero',
    'about',
    'resume',
    'projects',
    'certifications',
    'contact',
  ]);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-200 selection:bg-[var(--accent)]/20 selection:text-[var(--text)]">
      {/* Minimal ambient cursor motion follower */}
      <CursorEffect />

      {/* Intro Loader Animation Screen (Plays once per session, clickable to skip) */}
      <IntroLoader onComplete={() => { }} />

      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Sticky Blurred Header & Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
