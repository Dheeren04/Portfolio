import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { content } from '../data/content';
import { GitHubIcon } from '../components/Icons';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
            <FolderGit2 className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>03 / SELECTED WORKS</span>
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--text)] leading-[1.1]">
            Practical software built for security, scale & efficiency.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[var(--text-muted)] font-sans-body">
            Core projects addressing fundamental data engineering, integrity, and robust software patterns.
          </p>
        </div>

        {/* 3-Card Responsive Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-lg"
            >
              <div>
                {/* Top metadata row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--accent)] transition-colors duration-200 group-hover:border-[var(--accent)]/40">
                      {idx === 0 ? (
                        <Layers className="h-4 w-4" />
                      ) : idx === 1 ? (
                        <ShieldCheck className="h-4 w-4" />
                      ) : (
                        <Sparkles className="h-4 w-4" />
                      )}
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/12 text-[var(--accent)] border border-[var(--accent)]/20 font-medium">
                    {project.subtitle}
                  </span>
                </div>

                {/* Project Title & Description */}
                <h3 className="font-serif-heading text-2xl font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed font-sans-body">
                  {project.description}
                </p>

                {/* Highlights List */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-xs text-[var(--text-muted)] border-t border-[var(--border)] pt-3">
                    {project.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom: Tech Tags and Action Buttons */}
              <div className="mt-8 pt-5 border-t border-[var(--border)] space-y-4">
                {/* Tech Tags: var(--accent) at 12% opacity bg with var(--accent) text */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--accent)]/12 text-[var(--accent)] border border-[var(--accent)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links: var(--accent), underline on hover */}
                <div className="flex items-center gap-4 pt-1">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline transition-colors duration-200"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      <span>Source Code</span>
                    </a>
                  ) : null}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline transition-colors duration-200"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}

                  {!project.githubUrl && !project.liveUrl && (
                    <span className="text-[11px] font-mono text-[var(--text-muted)] italic">
                      // Academic Implementation & Documentation
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
