import { useState } from 'react';

export function useTextScramble(originalText: string) {
  const [displayText, setDisplayText] = useState(originalText);

  const chars = '!<>-_\\/[]{}—=+*^?#________';

  const scramble = () => {
    let frame = 0;

    interface QueueItem {
      from: string;
      to: string;
      start: number;
      end: number;
      char?: string;
    }

    const queue: QueueItem[] = [];

    for (let i = 0; i < originalText.length; i++) {
      queue.push({
        from: originalText[i] || '',
        to: originalText[i] || '',
        start: Math.floor(Math.random() * 40),
        end: Math.floor(Math.random() * 40) + 40,
      });
    }

    const interval = setInterval(() => {
      let output = '';
      let complete = 0;

      queue.forEach((item) => {
        if (frame >= item.end) {
          complete++;
          output += item.to;
        } else if (frame >= item.start) {
          if (!item.char || Math.random() < 0.28) {
            item.char = chars[Math.floor(Math.random() * chars.length)];
          }
          output += `<span>${item.char}</span>`;
        } else {
          output += item.from;
        }
      });

      setDisplayText(output);
      frame++;

      if (complete === queue.length) {
        clearInterval(interval);
      }
    }, 30);
  };

  return { displayText, scramble };
}