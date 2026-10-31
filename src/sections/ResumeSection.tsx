import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Languages,
} from 'lucide-react';
import { content } from '../data/content';
import { ResumeModal } from '../components/ResumeModal';

export function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="resume" className="py-12 sm:py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[var(--border)]">
          <div className="max-w-2xl lg:max-w-3xl">
            <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>02 / RESUME & EXPERTISE</span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--text)] leading-[1.1]">
              Academic journey & technical repertoire.
            </h2>
          </div>

          {/* Action CTAs: Download & Preview Modal */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition-all duration-200 ease-out hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 cursor-pointer shadow-sm"
            >
              <Eye className="h-4 w-4" />
              <span>View Resume</span>
            </button>

            <a
              href={content.personal.resumePdf}
              download="Harshitha_A_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[#0F0D1A] shadow-sm transition-all duration-200 ease-out hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Grid: Education Timeline & Technical Skills */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 text-xl font-serif-heading font-bold text-[var(--text)]">
              <GraduationCap className="h-5 w-5 text-[var(--accent)]" />
              <h3>Education</h3>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--border)]">
              {content.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[30px] sm:-left-[38px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] group-hover:scale-125 transition-transform duration-200" />

                  <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-medium text-[var(--accent)] bg-[var(--accent)]/12 px-2.5 py-0.5 rounded-md">
                        {edu.period}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[var(--surface-elevated)] text-[var(--text)] border border-[var(--border)]">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="mt-2 text-base font-semibold text-[var(--text)]">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-[var(--text-muted)] font-medium">
                      {edu.institution}
                    </p>

                    {edu.details && (
                      <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills Grid & Languages */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 text-xl font-serif-heading font-bold text-[var(--text)]">
              <Briefcase className="h-5 w-5 text-[var(--accent)]" />
              <h3>Technical Competencies</h3>
            </div>

            <div className="space-y-6">
              {content.skills.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md"
                >
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-[var(--accent)]/12 border border-[var(--accent)]/20 text-[var(--accent)] transition-all duration-200 hover:bg-[var(--accent)]/20 hover:scale-[1.02]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-70" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Spoken Languages Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  <Languages className="h-4 w-4 text-[var(--accent)]" />
                  <span>Languages Spoken</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {content.spokenLanguages.map((lang, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)]"
                    >
                      <div className="text-sm font-semibold text-[var(--text)]">
                        {lang.name}
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        {lang.proficiency}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal Viewer */}
      <ResumeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        pdfUrl={content.personal.resumePdf}
      />
    </section>
  );
}
