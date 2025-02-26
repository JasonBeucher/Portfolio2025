'use client';

import { motion } from "framer-motion";
import PaperPlaneIcon from "@/assets/icons/paper_plane.svg";
import { useEffect, useState } from "react";

export const PaperPlaneAnimation = () => {
  const [windowWidth, setWindowWidth] = useState(1000);
  const [isPerformingTrick, setIsPerformingTrick] = useState(false);
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Create a smoother sinusoidal path from left to right
  const pathWidth = windowWidth + 200;
  const pathHeight = 200;
  const wavelength = 800;
  const amplitude = pathHeight / 3;
  
  // Generate the SVG path for a sinusoidal wave
  const generateSinePath = () => {
    let path = `M -100 ${pathHeight}`;
    
    for (let i = 0; i <= pathWidth; i += 10) {
      const x = i;
      const y = pathHeight + amplitude * Math.sin((2 * Math.PI * x) / wavelength);
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  const handleClick = () => {
    if (!isPerformingTrick) {
      setIsPerformingTrick(true);
      // Reset after animation completes
      setTimeout(() => {
        setIsPerformingTrick(false);
      }, 1500);
    }
  };

  const sinePath = generateSinePath();
  
  return (
    <div className="absolute top-0 left-0 w-full h-20 -z-20 dark:hidden">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
        className="pointer-events-none opacity-0"
      >
        <path
          d={sinePath}
          fill="transparent"
          stroke="transparent"
          id="plane-path"
        />
      </svg>
      
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          offsetPath: `path("${sinePath}")`,
          offsetRotate: "auto",
        }}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatDelay: 0,
          ease: "easeOut",
        }}
      >
        <motion.div
          animate={isPerformingTrick ? {
            // Loop trick animation
            rotate: [0, 0, 360, 720, 720],
            scale: [1, 1.3, 1.3, 1.1, 1],
            y: [0, -30, -10, 0, 0],
          } : {
            rotate: [0, 5, -3, 4, 0],
          }}
          transition={isPerformingTrick ? {
            duration: 1.5,
            times: [0, 0.1, 0.5, 0.8, 1],
            ease: "easeInOut",
          } : {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
          style={{
            transformOrigin: "center center", 
            cursor: "pointer",
          }}
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative">
            {/* Visual indicator that the plane is clickable */}
            <motion.div 
              className="absolute -inset-3 rounded-full bg-white/5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.2, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
            
            {/* Sparkle effect when doing a trick */}
            {isPerformingTrick && (
              <motion.div
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute size-1.5 bg-white rounded-full"
                    style={{
                      top: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
                      left: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0],
                      x: [0, 20 * Math.cos(i * Math.PI / 4)],
                      y: [0, 20 * Math.sin(i * Math.PI / 4)]
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                ))}
              </motion.div>
            )}
            
            <PaperPlaneIcon className="size-14 md:size-16 text-white" />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Instructions text */}
      <motion.div 
        className="absolute top-16 left-1/2 transform -translate-x-1/2 text-white/60 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
      </motion.div>
    </div>
  );
};
