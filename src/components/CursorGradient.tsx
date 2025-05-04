
import React, { useState, useEffect } from 'react';

const CursorGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Main gradient blob */}
      <div 
        className={`absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/20 via-compose/20 to-kotlin/20 blur-3xl transition-opacity duration-300 ${isVisible ? 'opacity-40' : 'opacity-0'}`}
        style={{
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
      
      {/* Glitter particles */}
      {Array.from({ length: 12 }).map((_, index) => (
        <div 
          key={index}
          className={`absolute w-[8px] h-[8px] rounded-full bg-white transition-opacity duration-300 ${isVisible ? 'opacity-60' : 'opacity-0'}`}
          style={{
            transform: `translate(
              ${mousePosition.x - 4 + Math.sin(index * 30) * (50 + Math.random() * 30)}px, 
              ${mousePosition.y - 4 + Math.cos(index * 30) * (50 + Math.random() * 30)}px
            )`,
            transition: `transform ${0.2 + Math.random() * 0.3}s ease-out`,
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.7)',
            animation: `glitter ${1 + Math.random() * 2}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorGradient;
