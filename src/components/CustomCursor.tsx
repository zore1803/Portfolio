import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;

    let frame = 0;

    const moveCursor = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
        }
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hovering = Boolean(target.closest('button') || target.closest('a'));
      const ring = ringRef.current;
      if (!ring) return;
      ring.style.transform = hovering ? 'scale(1.5)' : 'scale(1)';
      ring.style.background = hovering ? 'rgba(16, 185, 129, 0.1)' : 'transparent';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden lg:block"
    >
      <div
        ref={ringRef}
        className="w-full h-full rounded-full border-2 border-emerald-500/50 flex items-center justify-center transition-all duration-300"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
      </div>
    </div>
  );
};

export default CustomCursor;
