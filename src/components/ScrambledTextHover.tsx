// src/components/ScrambledTextHover.tsx
'use client';

import { useState, ElementType } from 'react';

interface ScrambledTextHoverProps {
  text: string;
  className?: string;
  as?: ElementType;
}

export default function ScrambledTextHover({
  text,
  className = '',
  as: Component = 'span',
}: ScrambledTextHoverProps) {
  const [display, setDisplay] = useState(text);
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/';

  const scramble = () => {
    let i = 0;
    const interval = setInterval(() => {
      if (i > 12) {
        clearInterval(interval);
        setDisplay(text);
        return;
      }

      let result = '';
      for (let j = 0; j < text.length; j++) {
        if (Math.random() > 0.4 + i * 0.07) {
          result += chars[Math.floor(Math.random() * chars.length)];
        } else {
          result += text[j];
        }
      }
      setDisplay(result);
      i++;
    }, 60);

    return () => clearInterval(interval);
  };

  return (
    <Component
      className={className}
      onMouseEnter={scramble}
      onTouchStart={scramble} // for mobile
    >
      {display}
    </Component>
  );
}