import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        border: '2px solid #666',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
};

export default CustomCursor;
