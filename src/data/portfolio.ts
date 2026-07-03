export const portfolioData = {
  personal: {
    name: "Muhammad Hamad",
    title: "Generative AI Engineer | Full-Stack Developer | Agentic Systems Specialist",
    heroHeading: "I build autonomous agentic workflows and scalable full-stack applications.",
    heroDescription: "I develop robust AI tools, MCP-powered systems, and MERN stack applications that connect intelligent models with real-world ecosystems.",
    aboutHeading: "About Me",
    aboutText: "Generative AI Engineer and Full-Stack Developer with a strong academic foundation from Quaid-i-Azam University and hands-on experience building agentic AI systems, MCP-powered workflows, and scalable web applications. Skilled in orchestrating Model Context Protocol servers, integrating deep learning models with Python, and delivering robust end-to-end solutions with the MERN stack. I bring a practical, problem-solving approach to every project, with a consistent focus on intelligent automation, system efficiency, and high-performance software engineering.",
    email: "muhammadhamad1104@gmail.com",
    phone: "+92-302-1104820",
    whatsapp: "https://wa.me/923021104820",
    github: "https://github.com/muhammadhamad1104",
    linkedin: "https://www.linkedin.com/in/muhammad-hamad-7b6b35293"
  },
  resume: {
    isAvailable: true,
    fileUrl: "/files/Muhammad_Hamad_CV.pdf.pdf"
  },
  credibility: [
    { label: "Focus", value: "Generative AI & Agentic Systems" },
    { label: "Education", value: "BSCS 2022–2026" },
    { label: "Tech Stack", value: "MERN, Python, FastAPI" },
    { label: "Experience", value: "Crown Nova Technologies & SoftechInc" }
  ],
  skills: [
    "Generative AI", "Agentic AI", "MCP Server", "Machine Learning", "Deep Learning",
    "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Bootstrap", "PHP",
    "C++", "Python", "Java", "Docker", "Kubernetes", "Git", "GitHub", "Postman", "MySQL",
    "Data Structures", "Algorithms", "OOP", "Software Engineering", "REST APIs",
    "LangGraph", "n8n", "Make"
  ],
  projects: [
    {
      title: "Bulao",
      slug: "bulao",
      category: "Voice-First AI Platform",
      status: "Built",
      contribution: "Backend & AI Orchestration",
      coverImageReady: true,
      coverImage: "/images/projects/bulao/bulao-cover.png",
      description: "Voice-first, Urdu-native AI service-orchestration platform for Pakistan’s informal service economy.",
      overview: "Bulao is a voice-first, Urdu-native service-orchestration experience designed around Pakistan’s informal service economy. It helps users express service needs in Urdu, Roman Urdu, or English and follow a guided path from request to provider discovery, price transparency, booking, tracking, and dispute support.",
      problem: "Informal service booking is often fragmented. Customers may struggle to describe problems, compare providers, understand pricing, and follow up after a booking.",
      approach: "Engineered a voice-first home services platform with a backend and 6-agent orchestration swarm using FastAPI, Python, and DigitalOcean GenAI that automates provider discovery, ranking, pricing, booking, and post-service follow-up.",
      myContribution: "I focused on backend architecture and the 6-agent orchestration swarm using FastAPI and Python. Integrated a deterministic offline fallback mode and containerized the architecture for production readiness.",
      keyCapabilities: [
        "Voice-led request flow",
        "6-agent orchestration swarm",
        "Provider discovery and recommendations",
        "Transparent pricing flow",
        "Booking and service tracking",
        "Deterministic offline fallback mode",
        "Containerized architecture"
      ],
      technology: "Python, FastAPI, DigitalOcean GenAI, Docker, Agentic Swarm",
      screenGalleryLabel: "Prototype screen",
      mobileScreens: [
        { image: "/images/projects/bulao/bulao-splash.png", title: "Splash Screen", caption: "Bulao voice-first interface.", alt: "Bulao splash screen" },
        { image: "/images/projects/bulao/bulao-home.png", title: "Home", caption: "Main dashboard.", alt: "Bulao home" },
        { image: "/images/projects/bulao/bulao-providers.png", title: "Providers", caption: "Select from top-rated providers.", alt: "Bulao providers" },
        { image: "/images/projects/bulao/bulao-processing-loading.png", title: "Processing", caption: "Analyzing voice request.", alt: "Bulao processing" },
        { image: "/images/projects/bulao/bulao-processing-agents.png", title: "Agents at Work", caption: "Orchestration swarm processing.", alt: "Bulao agents" },
        { image: "/images/projects/bulao/bulao-booking-confirmed.png", title: "Booking Confirmed", caption: "Service successfully booked.", alt: "Bulao booking" },
        { image: "/images/projects/bulao/bulao-tracking.png", title: "Tracking", caption: "Track provider arrival.", alt: "Bulao tracking" },
        { image: "/images/projects/bulao/bulao-feedback.png", title: "Feedback", caption: "Post-service feedback.", alt: "Bulao feedback" }
      ],
      projectContext: "Built as a team project for the AI Seekho 2026 Hackathon.",
      tags: ["Python", "FastAPI", "GenAI", "Docker"],
      github: "https://github.com/muhammadhamad1104/Bulao"
    },
    {
      title: "AI-Powered CV Generator",
      slug: "ai-cv-generator",
      category: "MERN + MCP Project",
      status: "Built",
      contribution: "Full-Stack Developer",
      coverImageReady: true,
      coverImage: "/images/projects/mian-traders/mian-traders-cover.png",
      description: "A full-stack system using React 19, Node.js, and MongoDB that automates the CV lifecycle through natural language commands via Claude Desktop.",
      overview: "Built a full-stack system using React 19, Node.js, and MongoDB that automates the CV lifecycle through natural language commands via Claude Desktop.",
      problem: "Creating and formatting professional CVs is often tedious and time-consuming. Users need a way to generate professional resumes through simple conversational interfaces.",
      approach: "Integrated MCP servers to fetch user data and generate professional PDFs in Europass, Modern, and Classic formats using Python and ReportLab.",
      myContribution: "Developed the full-stack MERN application, integrated MCP servers for natural language processing, and implemented the PDF generation logic using Python and ReportLab.",
      keyCapabilities: [
        "Natural language CV generation",
        "Claude Desktop integration",
        "MCP server integration",
        "Europass, Modern, and Classic PDF formats",
        "MERN stack backend for data management"
      ],
      technology: "React 19, Node.js, MongoDB, Express, Python, ReportLab, MCP",
      screenGalleryLabel: "Application interface",
      mobileScreens: [],
      projectContext: "Full-Stack AI Project integrating MERN and MCP.",
      tags: ["React", "Node.js", "MongoDB", "MCP", "Python"],
      github: "https://github.com/muhammadhamad1104/ai-cv-generator"
    },
    {
      title: "Agentic Website Converter",
      slug: "agentic-website-converter",
      category: "Final Year Project",
      status: "In Development",
      contribution: "AI Engineer",
      coverImageReady: true,
      coverImage: "/images/projects/ar-ecommerce/auracart-ar-cover.png",
      description: "An AI-driven tool to convert static UI designs into dynamic, functional MERN components using agentic AI orchestration.",
      overview: "Developing an AI-driven tool to convert static UI designs into dynamic, functional MERN components using agentic AI orchestration.",
      problem: "Translating static UI designs into functional, full-stack components is a manual, repetitive process that slows down development.",
      approach: "Using agentic AI orchestration to analyze static designs and automatically generate the corresponding React components and backend logic.",
      myContribution: "I am designing the agentic workflow and building the core conversion engine to translate designs into MERN stack components.",
      keyCapabilities: [
        "Static UI design analysis",
        "Agentic AI orchestration",
        "Dynamic component generation",
        "MERN stack code output"
      ],
      technology: "Generative AI, Agentic AI, React, Node.js, Express, MongoDB",
      screenGalleryLabel: "FYP interface concept",
      mobileScreens: [],
      projectContext: "This project is actively in development.",
      tags: ["Agentic AI", "MERN Stack", "Generative AI", "React"],
      github: "https://github.com/muhammadhamad1104/agentic-website-converter"
    },
    {
      title: "AI-Based University FAQ Chatbot",
      slug: "university-faq-chatbot",
      category: "Full-Stack NLP Project",
      status: "Built",
      contribution: "Full-Stack AI Developer",
      coverImageReady: true,
      coverImage: "/images/projects/university-faq-chatbot/unibot-faq-cover.png",
      deviceType: "browser",
      description: "A full-stack university FAQ chatbot that compares a TF-IDF and cosine-similarity baseline with an LLM-RAG pipeline using LangChain, FAISS, Hugging Face embeddings, and Groq.",
      overview: "A full-stack university FAQ chatbot that compares a TF-IDF and cosine-similarity baseline with an LLM-RAG pipeline using LangChain, FAISS, Hugging Face embeddings, and Groq.",
      problem: "Traditional university websites often force students to hunt through static pages and dense PDFs for basic answers. While keyword search helps, it struggles with conversational questions or nuanced context like scholarship eligibility.",
      approach: "I developed a dual-pipeline architecture to solve this. The first is a traditional TF-IDF baseline that matches exact keywords. The second is an advanced RAG (Retrieval-Augmented Generation) pipeline using FAISS and Hugging Face embeddings, passed to the Groq API (Llama 3.1 8B Instant) to generate natural, conversational answers.",
      myContribution: "I built the entire end-to-end system: parsing the university data into vector embeddings, engineering the FAISS retrieval logic, wrapping it in a FastAPI backend, and building a responsive React/Vite web interface.",
      keyCapabilities: [
        "React/Vite responsive chat interface",
        "FastAPI backend architecture",
        "Traditional TF-IDF keyword baseline",
        "LLM-RAG pipeline using LangChain",
        "FAISS vector store for semantic retrieval",
        "Hugging Face embeddings integration",
        "Groq API (Llama 3.1 8B) for natural response generation"
      ],
      technology: "React · Vite · FastAPI · Python · TF-IDF · Scikit-Learn · LangChain · FAISS · Hugging Face · Groq API",
      screenGalleryLabel: "AI interface concept",
      mobileScreens: [
        { image: "/images/projects/university-faq-chatbot/unibot-faq-search.png", title: "Search", caption: "Search university FAQs.", alt: "FAQ search" },
        { image: "/images/projects/university-faq-chatbot/unibot-faq-categories.png", title: "Categories", caption: "Browse by category.", alt: "FAQ categories" },
        { image: "/images/projects/university-faq-chatbot/unibot-chat-admissions.png", title: "Admissions", caption: "Ask about admissions.", alt: "Admissions chat" },
        { image: "/images/projects/university-faq-chatbot/unibot-chat-fee-structure.png", title: "Fee Structure", caption: "Inquire about fees.", alt: "Fee structure chat" },
        { image: "/images/projects/university-faq-chatbot/unibot-chat-history.png", title: "Chat History", caption: "View previous conversations.", alt: "Chat history" },
        { image: "/images/projects/university-faq-chatbot/unibot-chat-library-dark.png", title: "Dark Mode", caption: "Library queries in dark mode.", alt: "Dark mode chat" },
        { image: "/images/projects/university-faq-chatbot/unibot-settings.png", title: "Settings", caption: "Customize your experience.", alt: "Chatbot settings" },
        { image: "/images/projects/university-faq-chatbot/unibot-about.png", title: "About", caption: "Learn about the chatbot.", alt: "About chatbot" }
      ],
      projectContext: "Academic project exploring NLP and GenAI architectures.",
      tags: ["Python", "FastAPI", "React", "LangChain", "Groq"],
      github: "https://github.com/muhammadhamad1104/AI-University-Chatbot"
    }
  ],
  spotlight: {
    title: "AI-OS – Unified AI Operating System",
    slug: "ai-os",
    category: "Agentic Systems & AI Architecture",
    status: "Built",
    contribution: "AI Systems Architect",
    coverImageReady: true,
    coverImage: "/images/projects/trilex-compiler/trilex-cover.png",
    deviceType: "browser",
    description: "Architected and open-sourced a high-performance modular monolith system designed for agent routing, automated API key rotation, and real-time observability.",
    overview: "AI-OS is a high-performance modular monolith system designed for agent routing, automated API key rotation, and real-time observability.",
    problem: "Managing multiple LLM APIs, handling rate limits, and monitoring agent performance can become extremely complex in production AI applications.",
    approach: "Architected a unified AI operating system with a smart key manager, fallback models, and a FastAPI core engine for sub-10ms event routing.",
    myContribution: "Implemented a FastAPI core engine, a smart key manager using Celery, Redis, and Playwright, a Claude Code Proxy routing requests to fallback models (Gemini, Groq, OpenRouter), a Next.js admin dashboard, and Prometheus/Grafana observability pipelines. Containerized the entire 8-microservice stack using Docker Compose.",
    keyCapabilities: [
      "Sub-10ms event routing via FastAPI core engine",
      "Automated API key rotation stack",
      "Smart key management using Celery, Redis, and Playwright",
      "Claude Code Proxy for fallback models (Gemini, Groq, OpenRouter)",
      "Next.js admin dashboard",
      "Prometheus/Grafana observability pipelines",
      "Docker Compose containerization of 8-microservice stack"
    ],
    technology: "FastAPI, Python, Celery, Redis, Playwright, Next.js, Docker, Prometheus, Grafana",
    screenGalleryLabel: "Architecture interface concept",
    mobileScreens: [],
    projectContext: "Open-source high-performance agent routing and API management system.",
    tags: ["FastAPI", "Python", "Celery", "Redis", "Docker"],
    github: "https://github.com/Muhammad-Hamad/AI-OS"
  },
  capabilities: [
    {
      title: "Generative AI & Agents",
      description: "MCP Servers, Agentic Workflows, Claude Desktop, FastMCP, LLM Integration"
    },
    {
      title: "Full-Stack Development",
      description: "MERN Stack, React 19, Node.js, Express, MongoDB, Tailwind CSS, Bootstrap, PHP"
    },
    {
      title: "Machine Learning",
      description: "Deep Learning, Predictive Models, Neural Networks, Python, Scikit-Learn"
    },
    {
      title: "Backend & DevOps",
      description: "FastAPI, Docker, Kubernetes, Celery, Redis, PostgreSQL, MySQL, Postman"
    }
  ],
  experience: [
    {
      role: "Generative AI Engineer",
      company: "Crown Nova Technologies Limited",
      period: "Oct 2025 – Jun 2026"
    },
    {
      role: "AI/ML Engineer Intern",
      company: "SoftechInc.ai",
      period: "Jul 2025 – Oct 2025"
    },
    {
      role: "Teacher Assistant",
      company: "Quaid-i-Azam University",
      period: "Sep 2025 – Jun 2026"
    },
    {
      role: "Freelance Web Developer",
      company: "Client Project",
      period: "Mar 2025 – Jun 2025"
    }
  ],
  moreBuilds: [
    "Irf Wardrobe - Full-Stack E-commerce",
    "Neural Network Classification System",
    "DigiDine Restaurant Management System (AI Chatbot)"
  ],
  certificates: [
    {
      title: "Introduction to Model Context Protocol",
      provider: "Anthropic",
      date: "2026",
      fileUrl: "/files/certificates/introduction-to-model-context-protocol.pdf",
      isAvailable: true
    },
    {
      title: "Advanced Model Context Protocol Topics",
      provider: "Anthropic",
      date: "2026",
      fileUrl: "/files/certificates/model-context-protocol-advanced-topic.pdf",
      isAvailable: true
    },
    {
      title: "Google AI Essentials",
      provider: "Google",
      date: "2026",
      fileUrl: "/files/certificates/google-ai-essential.jpeg",
      isAvailable: true
    },
    {
      title: "Python Data Structures",
      provider: "Coursera",
      date: "2026",
      fileUrl: "/files/certificates/python-data-structure.jpeg",
      isAvailable: true
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      provider: "Coursera",
      date: "2026",
      fileUrl: "/files/certificates/programming-for-everyone-getting-started-with-python.jpeg",
      isAvailable: true
    },
    {
      title: "AI Seekho 2026 Hackathon",
      provider: "AI Seekho",
      date: "2026",
      fileUrl: "/files/certificates/AI-Seekho-2026-Certificate-of-Participation.pdf",
      isAvailable: true
    },
    {
      title: "AI/ML Engineer Internship",
      provider: "SoftechInc",
      date: "2025",
      fileUrl: "/files/certificates/Muhammad_Hamad_Internship_Certificate.jpeg",
      isAvailable: true
    },
    {
      title: "Shield of Appreciation (Zindgi Prize)",
      provider: "QBCS Media",
      date: "2026",
      fileUrl: "/files/certificates/certificate-of-appriciation-organizing-business-round-competition.jpeg",
      isAvailable: true
    }
  ]
};
