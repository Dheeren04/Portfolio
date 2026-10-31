import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  // Check reduced motion & session storage
  useEffect(() => {
    try {
      const alreadySeen = sessionStorage.getItem('ha_intro_seen');
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (alreadySeen === 'true' || prefersReducedMotion) {
        setShouldRender(false);
        onComplete();
        return;
      }
    } catch {
      // Ignore storage errors
    }

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Progress counter animation
    const startTime = Date.now();
    const duration = 2400; // 2.4 seconds

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          handleFinish();
        }, 300);
      }
    }, 25);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const handleFinish = () => {
    setIsExiting(true);
    try {
      sessionStorage.setItem('ha_intro_seen', 'true');
    } catch {
      // Ignore
    }

    setTimeout(() => {
      document.body.style.overflow = '';
      setShouldRender(false);
      onComplete();
    }, 750);
  };

  const handleSkip = () => {
    handleFinish();
  };

  if (!shouldRender) return null;

  const nameLetters = "Harshitha A".split("");

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-curtain"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--text)] select-none cursor-pointer overflow-hidden"
          onClick={handleSkip}
          aria-label="Intro animation. Click anywhere to skip."
        >
          {/* Subtle ambient background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Center animated accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="w-24 h-[2px] bg-[var(--accent)] mb-8 rounded-full origin-center"
            />

            {/* Letter by letter reveal of Harshitha A */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--text)] mb-3 flex items-center justify-center gap-[2px]">
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={char === " " ? "w-3" : "inline-block"}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Editorial Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
              className="text-xs sm:text-sm tracking-wider uppercase text-[var(--text-muted)] font-medium"
            >
              Information Science Engineer · Aspiring Developer
            </motion.p>

            {/* Progress counter & progress bar */}
            <div className="w-48 sm:w-64 mt-10">
              <div className="flex justify-between items-center text-xs font-mono text-[var(--text-subtle)] mb-2">
                <span>LOADING</span>
                <span>{progress}%</span>
              </div>
              <div className="h-[2px] w-full bg-[var(--border)] overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-[var(--accent)] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
            </div>
          </div>

          {/* Skip hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-8 right-8 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] flex items-center gap-1.5 transition-colors"
          >
            <span>Click anywhere to skip</span>
            <span className="px-1.5 py-0.5 rounded border border-[var(--border)] text-[10px]">ESC</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
