"use client";

import React, { useState } from "react";
import { MonitorSmartphone, Code2, Cpu, Database, ChevronDown } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

interface CapabilityProps {
  capability: {
    title: string;
    description: string;
  };
  details: {
    what: string;
    typical: string;
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function CapabilityInteractiveCard({ capability, details, index, isExpanded, onToggle }: CapabilityProps) {
  const icons = {
    "Generative AI & Agents": <Cpu className="w-6 h-6 shrink-0 transition-colors duration-300" strokeWidth={1.5} />,
    "Full-Stack Development": <MonitorSmartphone className="w-6 h-6 shrink-0 transition-colors duration-300" strokeWidth={1.5} />,
    "Machine Learning": <Database className="w-6 h-6 shrink-0 transition-colors duration-300" strokeWidth={1.5} />,
    "Backend & DevOps": <Code2 className="w-6 h-6 shrink-0 transition-colors duration-300" strokeWidth={1.5} />,
  };

  const icon = icons[capability.title as keyof typeof icons] || <Code2 className="w-6 h-6 shrink-0" strokeWidth={1.5} />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full"
    >
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={onToggle}
        className={cn(
          "w-full text-left p-6 md:p-8 bg-surface rounded-2xl border transition-all duration-300 group flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring relative overflow-hidden",
          isExpanded 
            ? "border-accent-primary shadow-lg shadow-accent-primary/5 -translate-y-1" 
            : "border-border hover:border-accent-primary/50 hover:-translate-y-1 hover:shadow-md"
        )}
      >
        {/* Subtle top accent line */}
        <div 
          className={cn(
            "absolute top-0 left-0 right-0 h-1 bg-accent-primary transition-all duration-500",
            isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-50"
          )} 
        />
        
        <div className="flex items-start justify-between w-full mb-6">
          <div 
            className={cn(
              "p-3 rounded-xl transition-colors duration-300",
              isExpanded 
                ? "bg-accent-primary/10 text-accent-primary" 
                : "bg-background text-text-muted group-hover:text-accent-primary group-hover:bg-accent-primary/5"
            )}
          >
            {icon}
          </div>
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 text-text-muted group-hover:text-text-primary group-hover:bg-background border border-transparent",
            isExpanded ? "rotate-180 bg-background border-border text-text-primary" : ""
          )}>
            <ChevronDown size={18} />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-text-primary mb-3 transition-colors duration-300 group-hover:text-accent-primary">{capability.title}</h3>
        <p className={cn(
          "text-sm leading-relaxed transition-colors duration-300",
          isExpanded ? "text-text-primary/90" : "text-text-muted group-hover:text-text-primary/80"
        )}>
          {capability.description}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border/50 w-full"
            >
              <div className="pt-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">What I work with</p>
                  <p className="text-sm text-text-primary leading-relaxed">{details.what}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Typical work</p>
                  <p className="text-sm text-text-primary leading-relaxed">{details.typical}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

const detailedCapabilities = [
  {
    what: "MCP Servers, Agentic Workflows, Claude Desktop, FastMCP, LLM Integration.",
    typical: "Developing autonomous agentic workflows, orchestrating MCP servers, and integrating context-aware AI tools."
  },
  {
    what: "MERN Stack, React 19, Node.js, Express, MongoDB, Tailwind CSS, Bootstrap, PHP.",
    typical: "Building scalable web applications, REST APIs, and full-stack systems."
  },
  {
    what: "Deep Learning, Predictive Models, Neural Networks, Python, Scikit-Learn.",
    typical: "Training neural networks, predictive modeling, and developing machine learning solutions."
  },
  {
    what: "FastAPI, Docker, Kubernetes, Celery, Redis, PostgreSQL, MySQL, Postman.",
    typical: "Architecting high-performance backends, containerizing microservices, and managing databases."
  }
];

export function CapabilitiesSection({ capabilities }: { capabilities: { title: string; description: string }[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Mobile allows stacking technically if we remove parent constraints, but the prompt says:
    // "only one card expanded at a time on desktop. support multiple stacked expanded cards on mobile if necessary for usability."
    // It's cleaner to just toggle one at a time for both, or let them toggle independently.
    // Let's implement one at a time for simplicity and cleanliness.
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      {capabilities.map((cap, index) => (
        <CapabilityInteractiveCard 
          key={cap.title} 
          capability={cap} 
          details={detailedCapabilities[index]}
          index={index} 
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
