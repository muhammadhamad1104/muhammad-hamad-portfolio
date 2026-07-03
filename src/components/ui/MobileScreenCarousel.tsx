"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

export interface MobileScreen {
  image: string;
  title: string;
  caption: string;
  alt: string;
}

export interface MobileScreenCarouselProps {
  screens: MobileScreen[];
  label?: string;
  ariaLabel?: string;
  autoAdvanceInterval?: number;
  deviceType?: "mobile" | "browser";
}

export function MobileScreenCarousel({ 
  screens, 
  label = "Prototype screen", 
  ariaLabel = "Mobile screens carousel",
  autoAdvanceInterval = 5000,
  deviceType = "mobile"
}: MobileScreenCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Listen to prefers-reduced-motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  }, [screens.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  }, [screens.length]);

  // Auto-advance logic
  useEffect(() => {
    if (reducedMotion || isHovered || isFocused || isDragging || screens.length <= 1) return;
    
    const timer = setInterval(goToNext, autoAdvanceInterval);
    return () => clearInterval(timer);
  }, [reducedMotion, isHovered, isFocused, isDragging, goToNext, autoAdvanceInterval, screens.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard if carousel is focused or hovered to avoid global hijacking
      if (!isFocused && !isHovered) return;
      
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFocused, isHovered, goToPrev, goToNext]);

  return (
    <div 
      className="w-full bg-background-secondary rounded-2xl border border-border overflow-hidden relative flex flex-col md:flex-row shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      ref={containerRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Visual / Image Column */}
      <div className={`w-full ${deviceType === "browser" ? "md:w-[66%] lg:w-[66%]" : "md:w-1/2 lg:w-[45%]"} flex items-center justify-center p-6 md:p-10 lg:p-12 bg-surface/50 border-b md:border-b-0 md:border-r border-border relative`}>
        <div 
          className={`relative w-full shadow-2xl bg-background overflow-hidden flex shrink-0 border-surface ${
            deviceType === "browser" 
              ? "max-w-[800px] aspect-[16/10] md:aspect-video rounded-xl border-4 md:border-8" 
              : "max-w-[280px] aspect-[9/19] rounded-[2rem] border-[6px]"
          }`}
        >
          {deviceType === "browser" ? (
            <div className="absolute top-0 left-0 right-0 h-6 md:h-8 bg-surface flex items-center px-3 gap-1.5 z-20 pointer-events-none border-b border-border">
              <div className="w-2 h-2 rounded-full bg-border" />
              <div className="w-2 h-2 rounded-full bg-border" />
              <div className="w-2 h-2 rounded-full bg-border" />
            </div>
          ) : (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-surface rounded-b-xl z-20 pointer-events-none" />
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`absolute inset-0 w-full ${deviceType === "browser" ? "top-6 md:top-8 h-[calc(100%-1.5rem)] md:h-[calc(100%-2rem)]" : "h-full"}`}
              drag={!reducedMotion ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, { offset, velocity }) => {
                setIsDragging(false);
                const swipe = offset.x;
                if (swipe < -50 || velocity.x < -500) {
                  goToNext();
                } else if (swipe > 50 || velocity.x > 500) {
                  goToPrev();
                }
              }}
            >
              <Image 
                src={screens[currentIndex].image}
                alt={screens[currentIndex].alt}
                fill
                sizes={deviceType === "browser" ? "(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 900px" : "(max-width: 768px) 100vw, 300px"}
                className="object-contain pointer-events-none select-none opacity-100 mix-blend-normal filter-none"
                priority
                quality={95}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Content Column */}
      <div className={`w-full ${deviceType === "browser" ? "md:w-[34%] lg:w-[34%]" : "md:w-1/2 lg:w-[55%]"} flex flex-col p-6 md:p-10 lg:p-12 justify-center`}>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-primary">
              {label}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-surface border border-border text-text-muted">
              {currentIndex + 1} / {screens.length}
            </span>
          </div>
          
          <div className="min-h-[140px] md:min-h-[160px] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentIndex}`}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 leading-tight">
                  {screens[currentIndex].title}
                </h3>
                <p className="text-base md:text-lg text-text-muted leading-relaxed">
                  {screens[currentIndex].caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <button
              onClick={goToPrev}
              className="w-11 h-11 rounded-full border border-border bg-surface flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              aria-label="Previous screen"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              onClick={goToNext}
              className="w-11 h-11 rounded-full border border-border bg-surface flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              aria-label="Next screen"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
            {screens.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={idx === currentIndex}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
                  idx === currentIndex 
                    ? "w-6 h-1.5 bg-accent-primary" 
                    : "w-1.5 h-1.5 bg-border hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
