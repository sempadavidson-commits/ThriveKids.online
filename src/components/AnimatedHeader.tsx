import React from 'react';
import { motion } from 'motion/react';

interface AnimatedHeaderProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'span';
}

export default function AnimatedHeader({ text, className = "", tag = 'h2' }: AnimatedHeaderProps) {
  const characters = Array.from(text);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.025,
      }
    }
  };
  
  const charVariants = {
    hidden: { opacity: 0, scale: 0.9, display: 'inline-block' },
    visible: { 
      opacity: 1, 
      scale: 1,
      display: 'inline-block',
      transition: {
        duration: 0.15,
        ease: 'easeOut'
      }
    }
  };
  
  const Tag = tag;
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`inline-block ${className}`}
    >
      <Tag>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
