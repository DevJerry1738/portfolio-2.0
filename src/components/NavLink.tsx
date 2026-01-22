'use client';

import { useTextScramble } from '../hooks/useTextScramble'; // we'll extract the hook next

interface NavLinkProps {
  href: string;
  children: string;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className = '' }: NavLinkProps) {
  const { displayText, scramble } = useTextScramble(children);

  return (
    <a
      href={href}
      className={className}
      onMouseEnter={scramble}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
}