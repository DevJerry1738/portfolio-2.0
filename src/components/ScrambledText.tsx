'use client';

import { useEffect, useState, ElementType } from 'react';

interface ScrambledTextProps {
  text: string;
  className?: string;
  scrambleDelay?: number;     // ms before starting
  scrambleDuration?: number;  // how long the scramble lasts
  as?: ElementType;           // ← correct type
}

export default function ScrambledText({
  text,
  className = '',
  scrambleDelay = 0,
  scrambleDuration = 800,
  as: Component = 'span',
}: ScrambledTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!text) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text);
      return;
    }

    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    const scramble = () => {
      let count = 0;
      const maxCount = Math.floor(scrambleDuration / 50);

      interval = setInterval(() => {
        count++;

        let scrambled = '';
        for (let i = 0; i < text.length; i++) {
          if (count / maxCount > i / text.length) {
            scrambled += text[i];
          } else {
            scrambled += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        setDisplayText(scrambled);

        if (count >= maxCount) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, 50);
    };

    timeout = setTimeout(scramble, scrambleDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, scrambleDelay, scrambleDuration]);

  return <Component className={className}>{displayText}</Component>;
}