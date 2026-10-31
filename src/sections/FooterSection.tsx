import { ArrowUp, Mail } from 'lucide-react';
import { content } from '../data/content';
import { LinkedInIcon, GitHubIcon } from '../components/Icons';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] pt-8 sm:pt-10 pb-12 sm:pb-14 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Monogram and Copyright */}
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] text-xs font-serif-heading font-bold text-[var(--accent)]">
            {content.personal.monogram}
          </span>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            © {currentYear} {content.personal.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-2">
          <a
            href={content.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 ease-out hover:-translate-y-0.5 cursor-pointer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={`mailto:${content.personal.email}`}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 ease-out hover:-translate-y-0.5 cursor-pointer"
            aria-label="Email"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
          {content.personal.githubUrl ? (
            <a
              href={content.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 ease-out hover:-translate-y-0.5 cursor-pointer"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>

        {/* Right: Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}
