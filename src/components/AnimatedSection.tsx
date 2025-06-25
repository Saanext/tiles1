"use client";

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
};

const AnimatedSection = ({ children, className, id, as: Tag = 'section' }: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Tag ref={ref} id={id} className={cn('animated-section', { 'is-visible': isVisible }, className)}>
      {children}
    </Tag>
  );
};

export default AnimatedSection;
