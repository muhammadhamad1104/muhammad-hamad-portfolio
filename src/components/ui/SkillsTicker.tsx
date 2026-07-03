"use client";

import React from "react";

const verifiedSkills = [
  "Generative AI",
  "Agentic AI",
  "MCP Server",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "C++",
  "Python",
  "Java",
  "REST APIs",
  "GraphQL",
  "Git",
  "GitHub",
  "Figma",
  "Vercel",
  "LangChain",
  "FAISS",
  "RAG",
  "Groq",
  "Gemini API",
  "TF-IDF",
  "Docker",
  "Postman",
  "LangGraph",
  "n8n",
  "Make"
];

export function SkillsTicker() {
  return (
    <div className="tickerViewport bg-background-secondary border-y border-border py-4 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />
      
      <div className="tickerTrack" style={{ animationDuration: "50s" }}>
        {/* Original items exactly once */}
        <div className="tickerGroup">
          {verifiedSkills.map((skill, index) => (
            <span 
              key={`${skill}-${index}-orig`}
              className="tickerItem text-text-muted font-medium text-sm md:text-base px-4 md:px-6 transition-all duration-300 hover:scale-110 hover:text-accent-primary focus-visible:scale-110 focus-visible:text-accent-primary focus-visible:outline-none cursor-default"
              tabIndex={0}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Duplicated items exactly once for seamless looping */}
        <div className="tickerGroup" aria-hidden="true">
          {verifiedSkills.map((skill, index) => (
            <span 
              key={`${skill}-${index}-dup`}
              className="tickerItem text-text-muted font-medium text-sm md:text-base px-4 md:px-6 transition-all duration-300 hover:scale-110 hover:text-accent-primary focus-visible:scale-110 focus-visible:text-accent-primary focus-visible:outline-none cursor-default"
              tabIndex={-1}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
