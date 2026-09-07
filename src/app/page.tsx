import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CapabilitiesSection } from "@/components/ui/CapabilitiesSection";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { CertificateCard } from "@/components/ui/CertificateCard";
import { ButtonLink } from "@/components/ui/Button";
import { CredibilityTicker } from "@/components/ui/CredibilityTicker";
import { SkillsTicker } from "@/components/ui/SkillsTicker";
import { HeroPortrait } from "@/components/ui/HeroPortrait";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main id="main-content" className="flex-1 flex flex-col pt-16 md:pt-20">
        
        {/* 2. Hero Section */}
        <SectionContainer id="hero" className="pt-0 pb-12 md:pb-24 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10 pt-2 lg:pt-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-[2px] h-4 bg-accent-primary shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  {portfolioData.personal.title.replace(" · ", " · ")}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight mb-6">
                I build agentic workflows that turn complex problems into <span className="text-accent-primary">intelligent solutions.</span>
              </h1>
              <p className="text-base md:text-lg text-text-muted mb-8 max-w-2xl leading-relaxed">
                {portfolioData.personal.heroDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <ButtonLink href="#work" size="lg">
                  Explore My Work
                </ButtonLink>
                <ButtonLink href="/resume" variant="secondary" size="lg">
                  View Résumé <ArrowRight size={18} className="shrink-0" />
                </ButtonLink>
              </div>
              
              <div className="w-full pt-6 border-t border-border/50">
                <p className="text-sm text-text-primary font-medium mb-2 uppercase tracking-wider">Core Stack</p>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  Python · FastAPI · GenAI · React · Node.js · Express.js
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8 lg:ml-auto w-full max-w-md mx-auto lg:max-w-[420px]"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl relative group flex items-center justify-center">
                <HeroPortrait />
              </div>
              
              {/* Currently Building Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-surface border border-border p-5 rounded-xl shadow-xl w-full sm:w-[260px] self-start lg:self-end flex flex-col gap-4"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-sage opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-sage"></span>
                  </span>
                  <span className="text-xs font-semibold text-accent-sage uppercase tracking-wider">In Development</span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1 line-clamp-1">Jarvis Voice Assistant</p>
                  <p className="text-xs text-text-muted">ElevenLabs · AI · Python</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* 3. Credibility Ribbon */}
        <CredibilityTicker />

        {/* 4. Featured Work */}
        <SectionContainer id="work" className="bg-background">
          <SectionHeading 
            title="Featured Work" 
            subtitle="Recent projects demonstrating agentic AI, full-stack systems, and innovative workflows." 
          />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonLink href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" variant="outline">
              <Github size={18} className="shrink-0" /> Explore More on GitHub
            </ButtonLink>
          </div>
        </SectionContainer>

        {/* 5. Engineering Spotlight */}
        <SectionContainer className="bg-background-secondary border-y border-border relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-[2px] h-4 bg-accent-primary shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                  Engineering Spotlight
                </span>
              </div>
              <h2 className="text-3xl font-bold text-text-primary mb-3">{portfolioData.spotlight.title}</h2>
              <p className="text-accent-primary font-medium text-sm mb-4">{portfolioData.spotlight.category}</p>
              <p className="text-text-muted mb-6 leading-relaxed">
                {portfolioData.spotlight.description}
              </p>
              <div className="mb-8">
                <p className="text-sm text-text-muted/80 leading-relaxed break-words">
                  {portfolioData.spotlight.tags.join(" · ")}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href={`/projects/${portfolioData.spotlight.slug}`} variant="primary">
                  Read Case Study <ArrowRight size={16} className="shrink-0" />
                </ButtonLink>
                <ButtonLink href={portfolioData.spotlight.github} variant="outline" target="_blank" rel="noopener noreferrer">
                  View on GitHub <ExternalLink size={16} className="shrink-0" />
                </ButtonLink>
              </div>
            </div>
            <div className="md:w-5/12 w-full h-64 md:h-80 relative bg-surface border border-border rounded-2xl overflow-hidden">
              <Image 
                src="/images/projects/ai-os-platform/cover-ai-os.png"
                alt="AI-OS Platform Overview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 400px"
                priority
              />
            </div>
          </div>
        </SectionContainer>

        {/* 6. Capabilities */}
        <SectionContainer>
          <SectionHeading 
            title="Capabilities" 
            subtitle="My technical focus areas, ranging from AI systems to full-stack backends."
          />
          <CapabilitiesSection capabilities={portfolioData.capabilities} />
        </SectionContainer>

        {/* 7. Working Stack Ticker */}
        <SkillsTicker />

        {/* 8. About */}
        <SectionContainer id="about" className="bg-background border-b border-border">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                {portfolioData.personal.aboutHeading}
                <span className="text-accent-primary">.</span>
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                {portfolioData.personal.aboutText}
              </p>
            </div>
            <div className="lg:col-span-4 bg-surface border border-border p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-text-primary mb-4">At a glance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-accent-sage shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">Based in</p>
                    <p className="text-text-muted text-sm">Islamabad, Pakistan</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-accent-primary shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">Education</p>
                    <p className="text-text-muted text-sm">BSCS at QAU (Expected 2026)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-accent-steel shrink-0" />
                  <div>
                    <p className="font-medium text-text-primary">Focus</p>
                    <p className="text-text-muted text-sm">Generative AI & Agents</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </SectionContainer>

        {/* 9. Experience and Education */}
        <SectionContainer id="experience">
          <SectionHeading title="Experience & Education" />
          <div className="max-w-3xl">
            {portfolioData.experience.map((exp, index) => (
              <TimelineItem 
                key={index}
                role={exp.role}
                company={exp.company}
                period={exp.period}
                index={index}
              />
            ))}
          </div>
        </SectionContainer>

        {/* 10. Learning & Recognition */}
        <SectionContainer className="bg-background-secondary border-y border-border">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">Learning & Recognition</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {portfolioData.certificates.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} index={index} />
              ))}
            </div>
          </div>
        </SectionContainer>

        {/* 11. Contact */}
        <SectionContainer id="contact" className="text-center py-24 md:py-32 bg-surface">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Let&apos;s build something useful<span className="text-accent-primary">.</span>
            </h2>
            <p className="text-lg text-text-muted mb-10 leading-relaxed">
              Open to AI engineering roles, full-stack opportunities, and innovative agentic system work.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink href={`mailto:${portfolioData.personal.email}`} size="lg">
                <Mail size={18} className="shrink-0" /> Email me
              </ButtonLink>
              <ButtonLink href={portfolioData.personal.whatsapp} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                <Phone size={18} className="shrink-0" /> WhatsApp
              </ButtonLink>
            </div>
            
            <div className="flex justify-center items-center gap-6 mt-12 pt-12 border-t border-border/50">
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary flex items-center gap-2 transition-colors">
                <Github size={20} className="shrink-0" /> <span className="font-medium">GitHub</span>
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary flex items-center gap-2 transition-colors">
                <Linkedin size={20} className="shrink-0" /> <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </SectionContainer>
      </main>
      
      <Footer />
    </>
  );
}
