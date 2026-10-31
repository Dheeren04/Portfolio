import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import { content } from '../data/content';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 sm:py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
            <Award className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>04 / CERTIFICATIONS</span>
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--text)] leading-[1.1]">
            Industry credentials & verified simulations.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-muted)] font-sans-body">
            Demonstrated competencies certified by international industry leaders and professional programs.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md"
            >
              <div>
                {/* Header: Issuer & Date */}
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-elevated)] text-[var(--accent)] border border-[var(--border)]">
                      <Shield className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text)]">
                      {cert.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-serif-heading text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">
                  {cert.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-[var(--accent)]">
                  {cert.issuer}
                </p>

                {cert.description && (
                  <p className="mt-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Bottom: Verification link */}
              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>Verified Credential</span>
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline transition-colors duration-200"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    Direct Verification
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
