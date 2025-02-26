'use client';

import { ReactNode, useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface TimelineProps {
  children: ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => {
  // For initial client-side rendering safety
  const [isMounted, setIsMounted] = useState(false);
  // For scroll-based animation
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '-10px',
    triggerOnce: true
  });
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Combine mounted state with scroll visibility
  const isVisible = isMounted && isInView;
  
  return (
    <div ref={ref} className="relative pt-8 pb-8">
      {/* Initial dot at the top */}
      <div className="absolute top-0 left-[19px]">
        <div 
          className={`w-2 h-2 rounded-full bg-sky-500 transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-0'}`} 
        />
      </div>
      
      {children}
    </div>
  );
};
