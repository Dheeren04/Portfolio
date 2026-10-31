import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring for ambient glow lagging gracefully behind cursor
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.5 });

  useEffect(() => {
    // Only enable on pointer-capable devices (mouse/trackpad) and when reduced motion is not preferred
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setIsPointerDevice(false);
      return;
    }

    setIsPointerDevice(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hover on interactive elements to subtly scale dot
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointerDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden="true">
      {/* 1. Ambient soft cursor glow spotlight behind the dot */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          x: glowX,
          y: glowY,
          width: 380,
          height: 380,
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          opacity: 0.11,
          filter: 'blur(38px)',
        }}
      />

      {/* 2. Single crisp dot with subtle accent glow */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] pointer-events-none shadow-[0_0_12px_var(--accent)]"
        style={{
          x: mouseX,
          y: mouseY,
          width: 7,
          height: 7,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 1 : 0.85,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </div>
  );
}
