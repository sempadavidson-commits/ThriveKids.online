import React, { ReactNode } from 'react';

interface FadeInSectionProps {
  key?: React.Key;
  id?: string;
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  direction?: 'up' | 'none';
}

export default function FadeInSection({
  id,
  children,
  className = '',
}: FadeInSectionProps) {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
}
