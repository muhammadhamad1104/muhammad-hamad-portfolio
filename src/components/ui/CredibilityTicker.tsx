"use client";

import React from "react";
import { Smartphone, GraduationCap, LineChart, Briefcase } from "lucide-react";

const credibilityItems = [
  {
    icon: Smartphone,
    title: "Generative AI",
    description: "Agentic Systems Focus"
  },
  {
    icon: GraduationCap,
    title: "BSCS 2022–2026",
    description: "Quaid-i-Azam University"
  },
  {
    icon: LineChart,
    title: "CGPA 3.2",
    description: "Academic Standing"
  },
  {
    icon: Briefcase,
    title: "AI Engineer",
    description: "Crown Nova Tech"
  }
];

export function CredibilityTicker() {
  return (
    <div className="tickerViewport border-y border-border bg-background-secondary py-6 md:py-8 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />

      <div className="tickerTrack">
        {/* Original items exactly once */}
        <div className="tickerGroup">
          {credibilityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={`${item.title}-${index}-orig`}
                className="tickerItem flex items-center gap-4 px-6 md:px-10 transition-transform duration-300 hover:-translate-y-1 group/item"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted group-hover/item:text-accent-sage group-hover/item:border-accent-sage/30 transition-colors shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-base md:text-lg font-bold text-text-primary group-hover/item:text-accent-primary transition-colors whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="text-sm text-text-muted whitespace-nowrap">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Duplicated items exactly once for seamless looping */}
        <div className="tickerGroup" aria-hidden="true">
          {credibilityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={`${item.title}-${index}-dup`}
                className="tickerItem flex items-center gap-4 px-6 md:px-10 transition-transform duration-300 hover:-translate-y-1 group/item"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted group-hover/item:text-accent-sage group-hover/item:border-accent-sage/30 transition-colors shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-base md:text-lg font-bold text-text-primary group-hover/item:text-accent-primary transition-colors whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="text-sm text-text-muted whitespace-nowrap">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
