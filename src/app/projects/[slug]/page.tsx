import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ButtonLink } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { MobileScreenCarousel } from "@/components/ui/MobileScreenCarousel";
import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const allProjects = [...portfolioData.projects, portfolioData.spotlight];
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found | Muhammad Hamad",
    };
  }
  return {
    title: `${project.title} | Muhammad Hamad`,
    description: project.description,
  };
}

export function generateStaticParams() {
  const allProjects = [...portfolioData.projects, portfolioData.spotlight];
  return allProjects.map((p) => ({
    slug: p.slug,
  }));
}

function ProjectVisualPlaceholder({ slug }: { slug: string }) {
  // Bulao: Urdu voice waveform, service nodes, and a transparent process line.
  if (slug === "bulao") {
    return (
      <div className="w-full h-full bg-background-secondary rounded-2xl border border-border overflow-hidden relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <svg width="400" height="150" viewBox="0 0 400 150" className="stroke-accent-primary fill-none stroke-2">
            <path d="M 0 75 Q 25 10, 50 75 T 100 75 T 150 75 T 200 75 T 250 75 T 300 75 T 350 75 T 400 75" />
            <circle cx="100" cy="75" r="5" className="fill-accent-sage" />
            <circle cx="200" cy="75" r="5" className="fill-accent-sage" />
            <circle cx="300" cy="75" r="5" className="fill-accent-sage" />
          </svg>
        </div>
        <p className="text-text-muted font-medium z-10 bg-background/80 px-4 py-2 rounded-lg border border-border backdrop-blur-sm">Original project visual coming soon</p>
      </div>
    );
  }
  
  // AI-Powered CV Generator: ledger rows, transaction dots, and a business-flow composition.
  if (slug === "ai-cv-generator") {
    return (
      <div className="w-full h-full bg-background-secondary rounded-2xl border border-border overflow-hidden relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 flex flex-col items-center justify-center gap-4">
          <div className="w-2/3 h-4 bg-accent-sage rounded" />
          <div className="w-3/4 h-4 bg-text-muted rounded" />
          <div className="w-1/2 h-4 bg-accent-primary rounded" />
          <div className="w-2/3 h-4 bg-text-muted rounded" />
        </div>
        <p className="text-text-muted font-medium z-10 bg-background/80 px-4 py-2 rounded-lg border border-border backdrop-blur-sm">Original project visual coming soon</p>
      </div>
    );
  }

  // Agentic Website Converter: furniture silhouette, room grid, and AR placement corners.
  if (slug === "agentic-website-converter") {
    return (
      <div className="w-full h-full bg-background-secondary rounded-2xl border border-border overflow-hidden relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#3A3932 1px, transparent 1px), linear-gradient(90deg, #3A3932 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="absolute inset-0 opacity-20 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200" className="stroke-accent-primary fill-none stroke-2">
            {/* AR Corners */}
            <path d="M 20 50 L 20 20 L 50 20 M 150 20 L 180 20 L 180 50 M 180 150 L 180 180 L 150 180 M 50 180 L 20 180 L 20 150" />
            <rect x="60" y="80" width="80" height="40" className="stroke-text-muted stroke-[1]" />
          </svg>
        </div>
        <p className="text-text-muted font-medium z-10 bg-background/80 px-4 py-2 rounded-lg border border-border backdrop-blur-sm">Original project visual coming soon</p>
      </div>
    );
  }

  // University FAQ Chatbot: question document nodes, retrieval path, and response flow.
  if (slug === "university-faq-chatbot") {
    return (
      <div className="w-full h-full bg-background-secondary rounded-2xl border border-border overflow-hidden relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <svg width="300" height="200" viewBox="0 0 300 200" className="stroke-accent-sage fill-none stroke-2">
            <rect x="20" y="80" width="60" height="40" rx="5" />
            <path d="M 80 100 L 130 100" className="stroke-text-muted stroke-[1] stroke-dasharray-4" />
            <circle cx="150" cy="100" r="20" className="stroke-accent-primary" />
            <path d="M 170 100 L 220 100" className="stroke-text-muted stroke-[1] stroke-dasharray-4" />
            <rect x="220" y="70" width="60" height="60" rx="5" />
          </svg>
        </div>
        <p className="text-text-muted font-medium z-10 bg-background/80 px-4 py-2 rounded-lg border border-border backdrop-blur-sm">Original project visual coming soon</p>
      </div>
    );
  }

  // AI-OS: token blocks flowing through scanner, parser, and semantic checks.
  if (slug === "ai-os") {
    return (
      <div className="w-full h-full bg-background-secondary rounded-2xl border border-border overflow-hidden relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center gap-2">
          <div className="w-12 h-12 bg-accent-steel rotate-45 rounded-sm" />
          <div className="w-12 h-12 bg-accent-primary rounded-sm" />
          <div className="w-12 h-12 bg-accent-sage rounded-full" />
        </div>
        <p className="text-text-muted font-medium z-10 bg-background/80 px-4 py-2 rounded-lg border border-border backdrop-blur-sm">Original project visual coming soon</p>
      </div>
    );
  }

  // Generic
  return (
    <div className="w-full h-full bg-background-secondary rounded-2xl border border-border overflow-hidden relative flex items-center justify-center">
      <p className="text-text-muted font-medium z-10 bg-background/80 px-4 py-2 rounded-lg border border-border backdrop-blur-sm">Original project visual coming soon</p>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const allProjects = [...portfolioData.projects, portfolioData.spotlight];
  const projectIndex = allProjects.findIndex(p => p.slug === slug);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const project = allProjects[projectIndex] as any;
  
  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? allProjects[projectIndex - 1] : null;
  const nextProject = projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : null;

  const isBuilt = project.status === "Built";
  const statusColor = isBuilt ? "text-accent-sage" : "text-accent-primary";
  const statusDotColor = isBuilt ? "bg-accent-sage" : "bg-accent-primary";

  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col pt-16 md:pt-20 min-h-[80vh]">
        <SectionContainer className="pt-0">
          <ButtonLink href="/#work" variant="ghost" size="sm" className="mb-8 pl-0 hover:bg-transparent text-text-muted hover:text-text-primary gap-2">
            <ArrowLeft size={16} className="shrink-0" /> Back to Work
          </ButtonLink>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-text-muted text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${statusDotColor} shrink-0`} aria-hidden="true" />
                <span className={`text-xs font-medium uppercase tracking-wider ${statusColor}`}>
                  {project.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-xs font-medium uppercase tracking-wider">
                <span className="w-1 h-1 rounded-full bg-border shrink-0" aria-hidden="true" />
                {project.contribution}
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed font-light">
              {project.description}
            </p>
          </div>
          
          {project.mobileScreens && project.mobileScreens.length > 0 ? (
            <div className="w-full mb-16 md:mb-24">
              <MobileScreenCarousel 
                screens={project.mobileScreens} 
                label={project.screenGalleryLabel || "Prototype screen"} 
                ariaLabel={`${project.title} screens`}
                deviceType={project.deviceType || "mobile"}
              />
            </div>
          ) : (
            <div className="aspect-[16/9] md:aspect-[21/9] w-full mb-16 md:mb-24">
              <ProjectVisualPlaceholder slug={slug} />
            </div>
          )}

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {project.overview}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">The Problem</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {project.problem}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">The Approach</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {project.approach}
                </p>
              </section>

              {slug === "bulao" && (
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Mobile experience flow</h2>
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    The Bulao prototype maps the journey from a voice-led service request to provider discovery, confirmed booking, live tracking, and service feedback.
                  </p>
                  <div className="text-sm md:text-base font-medium text-text-primary leading-relaxed border-l-2 border-accent-primary pl-4 py-1">
                    Voice request → Intent processing → Provider discovery → Booking → Tracking → Feedback
                  </div>
                </section>
              )}

              {slug === "ai-cv-generator" && (
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">CV Generation workflow</h2>
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    The AI-Powered CV Generator automates resume creation from initial prompt to PDF generation, leveraging MCP servers to gather data and Claude Desktop for intelligence.
                  </p>
                  <div className="text-sm md:text-base font-medium text-text-primary leading-relaxed border-l-2 border-accent-primary pl-4 py-1">
                    User natural language request → MCP server data retrieval → Claude Desktop processing → MERN backend → ReportLab PDF generation
                  </div>
                </section>
              )}

              {slug === "agentic-website-converter" && (
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Conversion pipeline</h2>
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    The Agentic Website Converter analyzes static UI designs and orchestrates agentic workflows to generate fully functional React components.
                  </p>
                  <div className="text-sm md:text-base font-medium text-text-primary leading-relaxed border-l-2 border-accent-primary pl-4 py-1">
                    Upload static design → Agentic visual analysis → Component structure mapping → React/Node.js code generation → Functional UI
                  </div>
                </section>
              )}

              {slug === "university-faq-chatbot" && (
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">AI response workflow</h2>
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    The project evaluates how a traditional keyword-based retrieval pipeline and a modern retrieval-augmented generation approach can support clearer responses to university-related questions.
                  </p>
                  <div className="text-sm md:text-base font-medium text-text-primary leading-relaxed border-l-2 border-accent-primary pl-4 py-1">
                    Student question → Traditional TF-IDF baseline → RAG retrieval with FAISS → Groq LLM response → Clear answer delivery
                  </div>
                </section>
              )}

              {slug === "ai-os" && (
                <section>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">Agent routing architecture</h2>
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    AI-OS manages high-performance agent routing, handling API limits and model fallbacks automatically to ensure reliable LLM integrations.
                  </p>
                  <div className="text-sm md:text-base font-medium text-text-primary leading-relaxed border-l-2 border-accent-primary pl-4 py-1">
                    Incoming request → FastAPI core engine → Key rotation (Celery/Redis) → Claude Code Proxy → LLM response → Prometheus observability
                  </div>
                </section>
              )}
              
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4">My Contribution</h2>
                <p className="text-lg text-text-muted leading-relaxed">
                  {project.myContribution}
                </p>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-10">
              <div className="bg-surface border border-border p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-text-primary mb-4">Key Capabilities</h3>
                <ul className="space-y-3">
                  {project.keyCapabilities?.map((cap: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent-primary shrink-0" />
                      <span className="text-text-muted">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2 text-sm text-text-muted/80 leading-relaxed">
                  {project.tags.join(" · ")}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">Project Context</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {project.projectContext}
                </p>
              </div>

              {project.github && (
                <div className="pt-6">
                  <ButtonLink href={project.github} variant="outline" className="w-full" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="shrink-0" /> View on GitHub
                  </ButtonLink>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            {prevProject ? (
              <ButtonLink href={`/projects/${prevProject.slug}`} variant="ghost" className="mr-auto">
                <ArrowLeft size={16} className="shrink-0 mr-2" />
                <div className="text-left">
                  <span className="block text-xs text-text-muted mb-1">Previous</span>
                  <span className="block font-medium">{prevProject.title}</span>
                </div>
              </ButtonLink>
            ) : <div />}
            
            {nextProject ? (
              <ButtonLink href={`/projects/${nextProject.slug}`} variant="ghost" className="ml-auto flex-row-reverse">
                <ArrowRight size={16} className="shrink-0 ml-2" />
                <div className="text-right">
                  <span className="block text-xs text-text-muted mb-1">Next</span>
                  <span className="block font-medium">{nextProject.title}</span>
                </div>
              </ButtonLink>
            ) : <div />}
          </div>

        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
