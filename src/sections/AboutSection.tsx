import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { content } from '../data/content';

function StatCounter({
  target,
  suffix = '',
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const stepTime = 30;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="p-5 sm:p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-center transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-md"
    >
      <div className="font-serif-heading text-3xl sm:text-4xl font-bold text-[var(--accent)]">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-xs sm:text-sm font-medium text-[var(--text-muted)]">
        {label}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-mono uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[var(--text)] leading-[1.1]">
            Engineering with curiosity, discipline & precision.
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative paragraphs from resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed"
          >
            {content.about.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans-body">
                {p}
              </p>
            ))}

            <div className="pt-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
                <GraduationCap className="h-4 w-4 text-[var(--accent)]" />
                <span>Professional Objective</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] italic">
                "{content.personal.summary}"
              </p>
            </div>
          </motion.div>

          {/* Right Column: Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm space-y-5 transition-all duration-200 ease-out hover:border-[var(--accent)]/40 hover:-translate-y-0.5">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <span className="font-serif-heading text-xl font-bold text-[var(--text)]">
                  Quick Facts
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/12 text-[var(--accent)] font-medium">
                  At a glance
                </span>
              </div>

              <dl className="space-y-3.5">
                {content.about.quickFacts.map((fact, i) => (
                  <div key={i} className="flex justify-between items-start text-sm">
                    <dt className="text-[var(--text-subtle)] font-medium shrink-0">
                      {fact.label}
                    </dt>
                    <dd className="text-right text-[var(--text)] font-medium pl-3">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span>Bengaluru, India</span>
                </span>
                <span className="font-mono">IST (UTC+5:30)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Stats Row */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {content.stats.map((stat, i) => (
            <StatCounter
              key={i}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
