
import React, { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large blurred circles that move at different speeds */}
      <div 
        className="absolute rounded-full bg-primary/5 w-[40vw] h-[40vw] blur-3xl"
        style={{ 
          top: '10%', 
          left: '10%', 
          transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.01}px)` 
        }} 
      />
      <div 
        className="absolute rounded-full bg-android/5 w-[35vw] h-[35vw] blur-3xl"
        style={{ 
          top: '40%', 
          right: '5%', 
          transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.02}px)` 
        }} 
      />
      <div 
        className="absolute rounded-full bg-compose/5 w-[25vw] h-[25vw] blur-3xl"
        style={{ 
          bottom: '10%', 
          left: '20%', 
          transform: `translate(${scrollY * 0.01}px, ${scrollY * 0.03}px)` 
        }} 
      />
      <div 
        className="absolute rounded-full bg-kotlin/5 w-[30vw] h-[30vw] blur-3xl"
        style={{ 
          top: '70%', 
          right: '30%', 
          transform: `translate(${scrollY * -0.02}px, ${scrollY * -0.01}px)` 
        }} 
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-[5px] h-[5px] rounded-full opacity-20 ${
            i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-kotlin' : 'bg-android'
          }`}
          style={{
            top: `${15 + i * 15}%`,
            left: `${10 + i * 16}%`,
            transform: `translate(${scrollY * (0.05 * (i % 3 + 1))}px, ${scrollY * (-0.03 * ((i % 2) + 1))}px)`
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
