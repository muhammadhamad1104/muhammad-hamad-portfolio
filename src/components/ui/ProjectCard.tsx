import { PremiumPlaceholder } from "./PremiumPlaceholder";
import { ButtonLink } from "./Button";
import { ArrowRight, Globe } from "lucide-react";
import { GithubIcon as Github } from "./Icons";
import * as motion from "motion/react-client";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    title: string;
    slug: string;
    category: string;
    status: string;
    contribution: string;
    description: string;
    coverImageReady?: boolean;
    coverImage?: string;
    tags: string[];
    github?: string;
    liveUrl?: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isBuilt = project.status === "Built";
  const statusColor = isBuilt ? "text-accent-sage" : "text-accent-primary";
  const statusDotColor = isBuilt ? "bg-accent-sage" : "bg-accent-primary";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-surface rounded-2xl border border-border overflow-hidden transition-all hover:border-accent-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/5"
    >
      <div className="h-60 w-full relative p-4 pb-0">
        {project.coverImageReady && project.coverImage ? (
          <div className="relative w-full h-full rounded-t-xl rounded-b-none border-b-0 overflow-hidden bg-background/50 border border-border border-b-0">
            <Image 
              src={project.coverImage}
              alt={`Conceptual cover artwork for ${project.title}, a voice-first Urdu-native home-service platform`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <PremiumPlaceholder className="rounded-t-xl rounded-b-none border-b-0 h-full w-full bg-background/50" />
        )}
        <div className="absolute top-6 left-6 flex flex-col gap-1 backdrop-blur-sm bg-surface/80 p-3 rounded-lg border border-border/50 shadow-sm z-10">
          <div className="flex items-center gap-2">
            <span className="text-text-muted text-[10px] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${statusDotColor} shrink-0`} aria-hidden="true" />
            <span className={`text-xs font-medium ${statusColor}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-text-primary mb-1">{project.title}</h3>
          <p className="text-sm text-text-muted font-medium flex items-center gap-2">
            <span className="w-[1px] h-3 bg-accent-primary shrink-0" />
            {project.contribution}
          </p>
        </div>
        
        <p className="text-text-muted text-sm sm:text-base mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-8 mt-auto">
          <p className="text-sm text-text-muted/80 leading-relaxed break-words">
            {project.tags.join(" · ")}
          </p>
        </div>
        
        <div className="flex items-center gap-4 pt-6 border-t border-border">
          <ButtonLink href={`/projects/${project.slug}`} variant="primary">
            Case Study <ArrowRight size={16} className="shrink-0" />
          </ButtonLink>
          <div className="flex gap-2 ml-auto">
            {project.liveUrl && (
              <ButtonLink href={project.liveUrl} variant="ghost" size="sm" className="px-3" target="_blank" rel="noopener noreferrer">
                <Globe size={18} className="shrink-0" />
                <span className="sr-only sm:not-sr-only sm:inline-block">Live</span>
              </ButtonLink>
            )}
            <ButtonLink href={project.github} variant="ghost" size="sm" className="px-3" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="shrink-0" />
              <span className="sr-only sm:not-sr-only sm:inline-block">GitHub</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
