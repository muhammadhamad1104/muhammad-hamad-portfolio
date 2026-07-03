"use client";

import React, { useState } from "react";
import Image from "next/image";

export function HeroPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Soft warm radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/10 via-background/5 to-transparent opacity-60 pointer-events-none" />
      
      {/* Thin frame lines */}
      <div className="absolute inset-4 border border-border/30 rounded-xl z-30 pointer-events-none" />

      {/* Fallback Silhouette */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-border">
        <div className="w-24 h-24 rounded-full bg-border/20 border border-border/30" />
        <div className="w-32 h-20 rounded-t-[2.5rem] bg-border/20 border border-border/30" />
        <span className="text-xs font-medium tracking-wide text-text-muted uppercase mt-4">Portrait unavailable</span>
      </div>

      {/* Image */}
      {!imgError && (
        <Image
          src="/images/profile/profile-photo.png"
          alt="Portrait of Muhammad Hamad"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover z-20"
          onError={() => setImgError(true)}
          priority
        />
      )}
    </div>
  );
}
