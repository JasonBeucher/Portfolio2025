'use client';

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: ReactNode;
  isLast?: boolean;
  icon?: ReactNode;
}

export const TimelineItem = ({
  date,
  title,
  company,
  description,
  isLast = false,
  icon
}: TimelineItemProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    rootMargin: '-50px',
    triggerOnce: true
  });
  
  return (
    <div 
      ref={ref}
      className={`flex gap-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* Line and dot */}
      <div className="relative flex flex-col items-center">
        <div 
          className={`w-4 h-4 rounded-full bg-sky-500 z-10 border-4 border-white dark:border-gray-950 transition-transform duration-500 ${isInView ? 'scale-100' : 'scale-0'}`}
        />
        {!isLast && (
          <div 
            className="w-[2px] bg-gradient-to-b from-sky-500 to-transparent grow transition-all duration-1000"
            style={{ height: isInView ? '100%' : '0%' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <div 
            className={`text-sm text-gray-400 dark:text-gray-500 font-medium transition-all delay-100 duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            {date}
          </div>
          
          <div 
            className={`text-lg md:text-xl font-semibold transition-all delay-200 duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            {title}
          </div>

          <div 
            className={`md:ml-auto flex gap-2 items-center text-sky-500 transition-all delay-300 duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          >
            {icon && <div>{icon}</div>}
            <span>{company}</span>
          </div>
        </div>
        
        <div 
          className={`mt-2 text-gray-600 dark:text-gray-400 transition-all delay-400 duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
