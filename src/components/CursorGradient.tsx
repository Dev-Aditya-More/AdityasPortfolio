import React, { useEffect, useRef } from 'react';

// Pre-calculated once — no recalc on re-render
const GLITTER_COUNT = 8;
const glitterOffsets = Array.from({ length: GLITTER_COUNT }, (_, i) => ({
  x: Math.sin((i / GLITTER_COUNT) * Math.PI * 2) * 55,
  y: Math.cos((i / GLITTER_COUNT) * Math.PI * 2) * 55,
  transitionDelay: `${(i / GLITTER_COUNT) * 0.15}s`,
}));

const CursorGradient = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const glitterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const pos = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const { x, y } = pos.current;
        if (blobRef.current) {
          blobRef.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
        }
        glitterRefs.current.forEach((el, i) => {
          if (el) {
            el.style.transform = `translate(${x - 4 + glitterOffsets[i].x}px, ${y - 4 + glitterOffsets[i].y}px)`;
          }
        });
        if (wrapperRef.current) wrapperRef.current.style.opacity = '1';
      });
    };

    const onLeave = () => {
      if (wrapperRef.current) wrapperRef.current.style.opacity = '0';
    };
    const onEnter = () => {
      if (wrapperRef.current) wrapperRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0, transition: 'opacity 300ms' }}
      aria-hidden="true"
    >
      <div
        ref={blobRef}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/20 via-compose/20 to-kotlin/20 blur-3xl opacity-40"
        style={{ willChange: 'transform', transition: 'transform 0.18s ease-out' }}
      />
      {glitterOffsets.map((offset, i) => (
        <div
          key={i}
          ref={(el) => { glitterRefs.current[i] = el; }}
          className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-50"
          style={{
            willChange: 'transform',
            transition: `transform 0.25s ${offset.transitionDelay} ease-out`,
            boxShadow: '0 0 8px 2px rgba(255,255,255,0.6)',
            animation: `glitter ${1.8 + i * 0.2}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorGradient;
