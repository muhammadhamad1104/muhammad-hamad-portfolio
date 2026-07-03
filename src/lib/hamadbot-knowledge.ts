import { portfolioData } from "@/data/portfolio";

export const getHamadBotKnowledge = (): string => {
  const p = portfolioData.personal;

  // Format Projects safely (serializable string representation only)
  const projectsText = portfolioData.projects
    .map((proj) => {
      const capabilities = proj.keyCapabilities ? proj.keyCapabilities.join(", ") : "N/A";
      return `- Project: ${proj.title}
  Slug: ${proj.slug}
  Category: ${proj.category}
  Status: ${proj.status}
  Technologies: ${proj.technology}
  Contribution: ${proj.contribution}
  Description: ${proj.description}
  Overview: ${proj.overview}
  Problem: ${proj.problem}
  Approach: ${proj.approach}
  My Contribution: ${proj.myContribution}
  Capabilities: ${capabilities}
  GitHub: ${proj.github || "N/A"}`;
    })
    .join("\n\n");

  // Format Spotlight safely
  const spot = portfolioData.spotlight;
  const spotCapabilities = spot.keyCapabilities ? spot.keyCapabilities.join(", ") : "N/A";
  const spotlightText = `- Project: ${spot.title}
  Slug: ${spot.slug}
  Category: ${spot.category}
  Status: ${spot.status}
  Technologies: ${spot.technology}
  Contribution: ${spot.contribution}
  Description: ${spot.description}
  Overview: ${spot.overview}
  Problem: ${spot.problem}
  Approach: ${spot.approach}
  My Contribution: ${spot.myContribution}
  Capabilities: ${spotCapabilities}
  GitHub: ${spot.github || "N/A"}`;

  // Format Skills
  const skillsText = portfolioData.skills.join(", ");

  // Format Experience
  const expText = portfolioData.experience
    .map((exp) => `- Role: ${exp.role} at ${exp.company} (${exp.period})`)
    .join("\n");

  // Format Certificates
  const certsText = portfolioData.certificates
    .map((cert) => `- Certificate: ${cert.title} by ${cert.provider} (${cert.date})`)
    .join("\n");

  return `MUHAMMAD HAMAD'S PORTFOLIO KNOWLEDGE BASE

PERSONAL PROFILE:
Name: ${p.name}
Title: ${p.title}
About: ${p.aboutText}
Email: ${p.email}
Phone: ${p.phone}
WhatsApp Link: ${p.whatsapp}
GitHub Profile: ${p.github}
LinkedIn Profile: ${p.linkedin}

RÉSUMÉ:
File Path: ${portfolioData.resume.fileUrl}
Available: ${portfolioData.resume.isAvailable ? "Yes" : "No"}

SKILLS & TECHNOLOGIES:
${skillsText}

WORK EXPERIENCE & EDUCATION:
${expText}

CERTIFICATIONS:
${certsText}

FEATURED PROJECTS:
${projectsText}

SPOTLIGHT PROJECT:
${spotlightText}

TRUTHFULNESS & STATUS GUIDELINES:
- Bulao: Voice-First AI Home Services Platform engineered during the AI Seekho 2026 Hackathon using FastAPI and Python agentic swarm.
- AI-Powered CV Generator: Full-stack MERN and MCP system automating CV generation.
- Agentic Website Converter: Final Year Project using Generative AI to convert static designs to MERN components (In Development).
- AI-Based University FAQ Chatbot: Dual-pipeline NLP academic project comparison of TF-IDF and LLM-RAG (LangChain, FAISS, Groq).
- AI-OS: Spotlight project. Unified AI Operating System & API Key Rotation Stack built with FastAPI, Celery, Redis, and Next.js.
- Hamad built Bulao as part of a team. He focused on backend architecture and the 6-agent orchestration swarm.
- Never claim there is a live demo/deployed URL unless explicitly stated above.
- Never invent experience, metrics, dates, companies, grades, features, or certification provider details not listed above.
`;
};
