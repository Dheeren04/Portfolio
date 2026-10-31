import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Download,
  FolderGit2,
  Mail,
  Sparkles,
} from 'lucide-react';
import { content } from '../data/content';
import { LinkedInIcon, GitHubIcon } from '../components/Icons';

export function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status pill badge: transparent background, 1px border, green dot, text-muted */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-transparent text-xs font-medium text-[var(--text-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Technical Internships & Collaborations</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[var(--text)] leading-[1.08]">
                Hi, I'm <span className="font-semibold text-[var(--accent)]">{content.personal.name}.</span>
              </h1>

              {/* Role Line: Subtitle in text, sparkle icon in accent-secondary */}
              <div className="flex items-center gap-2 text-base sm:text-xl lg:text-2xl font-serif-heading italic text-[var(--text)]">
                <Sparkles className="h-4 w-4 text-[var(--accent-secondary)] shrink-0" />
                <span className="font-normal text-[var(--text)]">
                  Information Science Student · Python · Data Analytics
                </span>
              </div>
            </div>

            {/* Supporting Line: text-muted, line-height 1.7 for WCAG AA */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-[1.7] max-w-xl font-sans-body">
              {content.personal.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Primary button: solid accent, dark text (#0F0D1A), rounded-full, hover lift */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[#0F0D1A] shadow-sm transition-all duration-200 ease-out hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FolderGit2 className="h-4 w-4 transition-transform duration-200 group-hover:rotate-6" />
                <span>View Projects</span>
              </a>

              {/* Secondary button: transparent background, 1px accent border, text in accent, hover fills with accent at 10% */}
              <a
                href={content.personal.resumePdf}
                download="Harshitha_A_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-transparent px-5 py-3.5 text-sm font-semibold text-[var(--accent)] transition-all duration-200 ease-out hover:bg-[var(--accent)]/10 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Row of 3 Highlight Chips under buttons: accent color at low opacity */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              {['Python', 'SQL & Databases', 'Data Analytics'].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/12 text-[var(--accent)] border border-[var(--accent)]/20"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {chip}
                </span>
              ))}
            </div>

            {/* Social Links: 44px rounded squares, surface bg, 1px border, text-muted to accent on hover */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-subtle)]">
                Connect:
              </span>

              {/* LinkedIn */}
              <a
                href={content.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-all duration-200 ease-out hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5"
                aria-label="LinkedIn profile of Harshitha A"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${content.personal.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-all duration-200 ease-out hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5"
                aria-label="Send email to Harshitha A"
                title="Email Harshitha A"
              >
                <Mail className="h-4 w-4" />
              </a>

              {/* GitHub (Render only if configured) */}
              {content.personal.githubUrl ? (
                <a
                  href={content.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition-all duration-200 ease-out hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5"
                  aria-label="GitHub profile of Harshitha A"
                  title="GitHub Profile"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </motion.div>

          {/* Right Column: Profile Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* ONE very subtle radial glow of the accent at ~10-12% opacity behind profile photo area */}
              <div className="absolute -inset-6 rounded-full bg-[var(--accent)]/11 blur-3xl pointer-events-none -z-10" />

              {/* Profile Card: rounded-3xl, 1px border, soft shadow with accent at 15% opacity */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl p-2 bg-[var(--surface)] border border-[var(--border)] shadow-[0_12px_36px_var(--accent-glow)] overflow-hidden">
                {!imageError ? (
                  <img
                    src={content.personal.profileImage}
                    alt="Harshitha A — Information Science & Engineering Student, Python Developer and Data Analyst in Bengaluru"
                    width="288"
                    height="384"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover rounded-[1.25rem] transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full rounded-[1.25rem] bg-[var(--surface-elevated)] flex flex-col items-center justify-center text-center p-6 border border-[var(--border)]">
                    <span className="font-serif-heading text-6xl font-bold text-[var(--accent)] mb-2">
                      {content.personal.monogram}
                    </span>
                    <span className="text-sm font-medium text-[var(--text)]">
                      {content.personal.name}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] mt-1">
                      Information Science
                    </span>
                  </div>
                )}

                {/* Caption chip: var(--surface) at 80% opacity with backdrop-blur */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[var(--surface)]/80 backdrop-blur-md border border-[var(--border)] px-3 py-2 text-center shadow-sm">
                  <p className="text-xs font-semibold text-[var(--text)]">
                    Bengaluru, India
                  </p>
                  <p className="text-[10px] text-[var(--text-muted)] truncate" title="Nagarjuna College of Engineering & Technology">
                    Nagarjuna College of Engineering & Technology
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
            aria-label="Scroll down to About section"
          >
            <span>DISCOVER MORE</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-200"
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
