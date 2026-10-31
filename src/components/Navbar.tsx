import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { content } from '../data/content';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: string;
}

export function Navbar({ theme, toggleTheme, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
          <nav className="glass-nav rounded-2xl border border-[var(--border)] px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm">
            {/* Logo / Monogram */}
            <a
              href="#"
              className="group flex items-center gap-2.5 font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Harshitha A - Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-sm font-sans-body font-semibold text-[var(--accent)] transition-all duration-200 group-hover:border-[var(--accent)] group-hover:shadow-sm">
                {content.personal.monogram}
              </span>
              <span className="hidden sm:inline-block font-medium tracking-tight">
                {content.personal.name}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 flex flex-col items-center ${
                      isActive
                        ? 'text-[var(--text)] font-semibold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Controls: Theme Toggle & Resume CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle Button: var(--surface) bg, icon in var(--accent) */}
              <button
                type="button"
                onClick={toggleTheme}
                className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] cursor-pointer"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-4 w-4 text-[var(--accent)]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="h-4 w-4 text-[var(--accent)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Desktop Download Resume CTA: solid var(--text) with var(--bg) text */}
              <a
                href={content.personal.resumePdf}
                download="Harshitha_A_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[var(--text)] px-4 py-2 text-xs sm:text-sm font-medium text-[var(--bg)] transition-all duration-200 hover:bg-[var(--accent)] hover:text-[#0F0D1A] dark:hover:text-[#0F0D1A] hover:shadow-sm"
              >
                <span>Resume</span>
                <Download className="h-3.5 w-3.5" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors duration-200 hover:border-[var(--accent)] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'bg-[var(--surface-elevated)] text-[var(--accent)] font-semibold'
                      : 'text-[var(--text)] hover:bg-[var(--surface-hover)]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </a>
              ))}

              <div className="mt-3 pt-3 border-t border-[var(--border)]">
                <a
                  href={content.personal.resumePdf}
                  download="Harshitha_A_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-3 text-sm font-semibold text-[#0F0D1A] shadow-sm hover:bg-[var(--accent-hover)] transition-colors duration-200"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
