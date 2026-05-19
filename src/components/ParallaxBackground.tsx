import React, { useEffect, useRef } from 'react';

const BLOBS = [
  { cls: 'absolute rounded-full bg-primary/5 w-[40vw] h-[40vw] blur-3xl', style: { top: '10%', left: '10%' }, tx: -0.02, ty: 0.01 },
  { cls: 'absolute rounded-full bg-android/5 w-[35vw] h-[35vw] blur-3xl', style: { top: '40%', right: '5%' },  tx: 0.03,  ty: -0.02 },
  { cls: 'absolute rounded-full bg-compose/5 w-[25vw] h-[25vw] blur-3xl', style: { bottom: '10%', left: '20%' }, tx: 0.01, ty: 0.03 },
  { cls: 'absolute rounded-full bg-kotlin/5 w-[30vw] h-[30vw] blur-3xl',  style: { top: '70%', right: '30%' }, tx: -0.02, ty: -0.01 },
];

const PARTICLES = Array.from({ length: 6 }, (_, i) => ({
  cls: `absolute w-[5px] h-[5px] rounded-full opacity-20 ${i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-kotlin' : 'bg-android'}`,
  style: { top: `${15 + i * 15}%`, left: `${10 + i * 16}%` },
  tx: 0.05 * (i % 3 + 1),
  ty: -0.03 * ((i % 2) + 1),
}));

const ParallaxBackground = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const sy = window.scrollY;
        blobRefs.current.forEach((el, i) => {
          if (el) el.style.transform = `translate(${sy * BLOBS[i].tx}px, ${sy * BLOBS[i].ty}px)`;
        });
        particleRefs.current.forEach((el, i) => {
          if (el) el.style.transform = `translate(${sy * PARTICLES[i].tx}px, ${sy * PARTICLES[i].ty}px)`;
        });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {BLOBS.map((b, i) => (
        <div
          key={i}
          ref={(el) => { blobRefs.current[i] = el; }}
          className={b.cls}
          style={{ ...b.style, willChange: 'transform' }}
        />
      ))}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          ref={(el) => { particleRefs.current[i] = el; }}
          className={p.cls}
          style={{ ...p.style, willChange: 'transform' }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
