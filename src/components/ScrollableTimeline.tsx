'use client';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  company: string;
  icon?: ReactNode;
  description: ReactNode;
}

interface ScrollableTimelineProps {
  workEntries: TimelineEntry[];
  educationEntries: TimelineEntry[];
}

export const ScrollableTimeline = ({ workEntries, educationEntries }: ScrollableTimelineProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile view
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Use the longer array length to determine how many scroll sections to create
  const maxLength = Math.max(workEntries.length, educationEntries.length);
  
  // Calculate the progress percentage for the progress bar
  const progressPercentage = maxLength > 1 ? (activeIndex / (maxLength - 1)) * 100 : 100;

  useEffect(() => {
    // For SSR compatibility, only access window after component mounts
    if (typeof window !== 'undefined') {
      // Set initial width
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 1024);
      
      // Add resize handler to update both width and mobile state
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 1024);
      };
      
      window.addEventListener('resize', handleResize);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.getAttribute('data-index'));
              if (!isNaN(index)) {
                setActiveIndex(index);
                if (index > 0) setHasScrolled(true);
              }
            }
          });
        },
        {
          rootMargin: '-45% 0px -45% 0px',
          threshold: 0.1
        }
      );

      sectionRefs.current.forEach(ref => {
        if (ref) observer.observe(ref);
      });

      // Hide the scroll indicator after user has scrolled a bit
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setHasScrolled(true);
        }
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  return (
    <div className="min-h-[2200px] relative">
      <div className="sticky min-h-[700px] top-0 h-screen flex flex-col lg:flex-row justify-center items-center">
        {/* Timeline - vertical on desktop, horizontal on mobile/md */}
        <div className="relative w-full lg:w-24 h-24 lg:h-screen flex flex-col justify-center items-center">
          {/* Container for timeline - horizontal on mobile/md, vertical on desktop */}
          <div className="relative w-[80%] h-full lg:w-full lg:h-[50vh]">
            {/* Line - horizontal on mobile/md, vertical on desktop */}
            <div className="absolute h-[2px] lg:h-full w-full lg:w-[2px] bg-gray-200 dark:bg-gray-800 top-1/2 lg:top-0 left-0 lg:left-1/2 transform -translate-y-1/2 lg:-translate-y-0 lg:-translate-x-1/2" />
            
            {/* Simplified progress bar approach - always horizontal except for lg screens */}
            <div 
              className="absolute h-[2px] bg-gradient-to-r from-[#ffcc4d] to-[#f5a623] top-1/2 left-0 -translate-y-1/2 transition-all duration-500 ease-out lg:hidden z-10"
              style={{ width: `${progressPercentage}%` }}
            />
            
            {/* Vertical bar only for lg screens */}
            <div 
              className="absolute w-[2px] bg-gradient-to-t from-[#ffcc4d] to-[#f5a623] top-0 left-1/2 -translate-x-1/2 transition-all duration-500 ease-out hidden lg:block z-10"
              style={{ height: `${progressPercentage}%` }}
            />
            
            {/* Timeline items container - row on mobile/md, column on desktop */}
            <div className="absolute w-full h-full flex flex-row lg:flex-col justify-between items-center">
              {Array.from({ length: maxLength }).map((_, i) => {
                // Get the date to show on the timeline, preferring work entries
                const displayDate =
                  (i < workEntries.length ? workEntries[i].date :
                    i < educationEntries.length ? educationEntries[i].date : "");

                // Determine state: active, completed, or upcoming
                const isActive = i === activeIndex;
                const isCompleted = i < activeIndex;

                return (
                  <div key={i} className="flex items-center justify-center relative">
                    {/* Date label - above on mobile/md, left on desktop */}
                    <span
                      className={`absolute bottom-full lg:bottom-auto lg:right-1/2 mb-2 lg:mb-0 lg:mr-6 text-sm font-medium whitespace-nowrap transition-all duration-300
                        ${isActive ? 'text-[#ffcc4d]' : 
                          isCompleted ? 'text-[#ffcc4d]/80' : 
                          'text-white-500 dark:text-gray-400'}`}
                    >
                      {displayDate}
                    </span>

                    {/* Dot with enhanced styles */}
                    <motion.div
                      className={`size-4 rounded-full z-10 border-2 transition-colors duration-300
                        ${isActive ? 'bg-[#ffcc4d] border-[#ffcc4d]/30' : 
                          isCompleted ? 'bg-[#ffcc4d]' : 
                          'bg-gray-300 dark:bg-gray-700 border-transparent'}`}
                      animate={{ 
                        scale: isActive ? 1.5 : 1,
                        boxShadow: isActive ? '0 0 12px rgba(255, 204, 77, 0.5)' : 'none'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Pulse animation for active dot */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#ffcc4d]/20"
                        animate={{
                          scale: [1, 2],
                          opacity: [0.7, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content cards */}
        <div className="max-w-5xl w-full px-4 flex flex-col lg:flex-row gap-2 lg:gap-6">
          {/* Left card - Education */}
          <div className={`bg-white/5 backdrop-blur-sm dark:bg-gray-900/50 rounded-xl border border-gray-200/10 dark:border-white/5 p-4 lg:p-6 relative min-h-[320px] lg:min-h-[350px] lg:max-h-[500px] overflow-hidden lg:w-1/2`}>
            <div className="text-center mb-3 lg:mb-4">
              <h3 className="text-lg lg:text-xl font-bold text-[#ffcc4d]">Formation</h3>
            </div>
            <AnimatePresence mode="wait">
              {activeIndex < educationEntries.length ? (
                <motion.div
                  key={`education-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <div className="flex items-center mb-3 lg:mb-6 gap-2 lg:gap-4">
                    {educationEntries[activeIndex].icon && (
                      <div className="text-[#ffcc4d] size-8 lg:size-10 flex items-center justify-center rounded-full bg-[#ffcc4d]/10 backdrop-blur-sm">
                        {educationEntries[activeIndex].icon}
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg lg:text-2xl font-semibold">{educationEntries[activeIndex].title}</h3>
                      <p className="text-sm lg:text-base text-[#ffcc4d]/90 font-medium">{educationEntries[activeIndex].company}</p>
                    </div>
                  </div>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-sm lg:text-base">
                    {educationEntries[activeIndex].description}
                  </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 dark:text-gray-400"></p>
                </div>
              )}
            </AnimatePresence>
          </div>
          {/* Right card - Work Experience */}
          {activeIndex !== 2 && (
            <div className="bg-white/5 backdrop-blur-sm dark:bg-gray-900/50 rounded-xl border border-gray-200/10 dark:border-white/5 p-4 lg:p-6 relative min-h-[320px] lg:min-h-[350px] lg:max-h-[500px] overflow-hidden w-full lg:w-1/2">
              <div className="text-center mb-3 lg:mb-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#ffcc4d]">Expérience Professionnelle</h3>
              </div>
              <AnimatePresence mode="wait">
                {activeIndex < workEntries.length ? (
                  <motion.div
                    key={`work-${activeIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <div className="flex items-center mb-3 lg:mb-6 gap-2 lg:gap-4">
                      {workEntries[activeIndex].icon && (
                        <div className="text-[#ffcc4d] size-8 lg:size-10 flex items-center justify-center rounded-full bg-[#ffcc4d]/10 backdrop-blur-sm">
                          {workEntries[activeIndex].icon}
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg lg:text-2xl font-semibold">{workEntries[activeIndex].title}</h3>
                        <p className="text-sm lg:text-base text-[#ffcc4d]/90 font-medium">{workEntries[activeIndex].company}</p>
                      </div>
                    </div>
                    <div className="prose prose-sm dark:prose-invert max-w-none text-sm lg:text-base">
                      {workEntries[activeIndex].description}
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500 dark:text-gray-400">No work experience for this period</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
        {/* Scroll indicator contained within the section - not fixed to the viewport */}
        <AnimatePresence>
          {activeIndex < 1 && (
            <motion.div 
              className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex flex-col items-center gap-2 backdrop-blur-md bg-white/0 dark:bg-black/40 px-5 py-3 rounded-xl border border-white/10"
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <p className="text-sm lg:text-base font-medium text-white mb-1">Scrollez pour découvrir mon parcours</p>
                
                <motion.div 
                  className="bg-[#ffcc4d]/20 rounded-full p-2 border border-[#ffcc4d]"
                  animate={{ 
                    boxShadow: ['0 0 0 rgba(255, 204, 77, 0)', '0 0 15px rgba(255, 204, 77, 0.5)', '0 0 0 rgba(255, 204, 77, 0)']
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "loop" 
                  }}
                >
                  <ChevronDown className="size-6 text-[#ffcc4d]" />
                </motion.div>
              </motion.div>
              
              {/* Subtle arrow trail */}
              <div className="flex flex-col items-center mt-1 relative h-12">
                {[0, 1].map((idx) => (
                  <motion.div
                    key={idx}
                    className="absolute"
                    animate={{ 
                      y: [0, 12], 
                      opacity: [0.6, 0]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.3,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <ChevronDown className="size-5 text-[#ffcc4d]/50" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Invisible sections for triggering timeline */}
      <div className="absolute top-0 left-0 w-full">
        {Array.from({ length: maxLength }).map((_, i) => (
          <div
            key={`section-${i}`}
            ref={el => { sectionRefs.current[i] = el; }}
            data-index={i}
            className='h-[80vh]'
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
};