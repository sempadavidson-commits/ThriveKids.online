import React from 'react';

interface AnimatedHeaderProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'span';
}

export default function AnimatedHeader({ text, className = "", tag = 'h2' }: AnimatedHeaderProps) {
  const Tag = tag;
  return (
    <Tag className={className}>
      {text}
    </Tag>
  );
}
