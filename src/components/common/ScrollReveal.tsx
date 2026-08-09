'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const locale = useLocale();
  const isRtl = locale === 'ar';

  // Adjust horizontal direction based on RTL
  let adjustedDirection = direction;
  if (isRtl) {
    if (direction === 'left') adjustedDirection = 'right';
    if (direction === 'right') adjustedDirection = 'left';
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: adjustedDirection === 'left' ? 40 : adjustedDirection === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as any,
        delay: delay,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
