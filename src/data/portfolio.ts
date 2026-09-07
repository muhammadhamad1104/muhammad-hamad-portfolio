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
    linkedin: "https://www.linkedin.com/in/muhammadhamad1104/"
  },
  resume: {
    isAvailable: true,
    fileUrl: "/files/Muhammad_Hamad_CV.pdf"
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
      coverImage: "/images/projects/cv-generator/cv-gen-cover-v2.png",
      deviceType: "browser",
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
      mobileScreens: [
        { image: "/images/projects/cv-generator/dashboard-manually.png", title: "Dashboard (Manual Mode)", caption: "Managing CVs via the manual interface.", alt: "Dashboard manual" },
        { image: "/images/projects/cv-generator/profile-manually-add.png", title: "Add Profile (Manual)", caption: "Creating a user profile manually.", alt: "Add profile" },
        { image: "/images/projects/cv-generator/generate-manually.png", title: "Generate CV (Manual)", caption: "Selecting options to generate a CV.", alt: "Generate CV" },
        { image: "/images/projects/cv-generator/template.png", title: "Template Selection", caption: "Choosing a professional CV template.", alt: "Template selection" },
        { image: "/images/projects/cv-generator/preview-manually.png", title: "Preview CV", caption: "Previewing the generated PDF.", alt: "Preview CV" },
        { image: "/images/projects/cv-generator/fastmcp-tools.png", title: "FastMCP Server", caption: "Configuring FastMCP tools for Claude.", alt: "FastMCP tools" },
        { image: "/images/projects/cv-generator/fastmcp-deployment.png", title: "Server Deployment", caption: "Deploying the MCP server.", alt: "FastMCP deployment" },
        { image: "/images/projects/cv-generator/ask-claude-about-tools.png", title: "Claude Integration", caption: "Claude querying available MCP tools.", alt: "Claude tools check" },
        { image: "/images/projects/cv-generator/ask-claude-to-generate-profile.png", title: "Agentic Profile Creation", caption: "Asking Claude to generate a profile from text.", alt: "Claude profile generation" },
        { image: "/images/projects/cv-generator/database-profile-added.png", title: "Profile Synchronized", caption: "Profile automatically added to MongoDB.", alt: "Database profile added" },
        { image: "/images/projects/cv-generator/ask-claude-to-generate-cv.png", title: "Agentic CV Generation", caption: "Commanding Claude to build the final CV.", alt: "Claude CV generation" },
        { image: "/images/projects/cv-generator/database-cv-added.png", title: "CV Synchronized", caption: "Generated CV saved to the database directly.", alt: "Database CV added" },
        { image: "/images/projects/cv-generator/claude-tool-generated-cv.png", title: "Final Output", caption: "The final CV PDF created autonomously by Claude.", alt: "Claude generated CV" }
      ],
      projectContext: "Full-Stack AI Project integrating MERN and MCP.",
      tags: ["React", "Node.js", "MongoDB", "MCP", "Python"],
      github: "https://github.com/muhammadhamad1104/cv-generator"
    },
    {
      title: "Agentic Website Converter",
      slug: "agentic-website-converter",
      category: "Final Year Project",
      status: "Built",
      contribution: "AI Engineer",
      coverImageReady: true,
      coverImage: "/images/projects/agentic-static-to-dynamic-website-converter/agentic-static-to-dynamic-website-converter-cover.png",
      description: "An AI-driven tool to convert static UI designs into dynamic, functional MERN components using agentic AI orchestration.",
      overview: "An AI-driven tool to convert static UI designs into dynamic, functional MERN components using agentic AI orchestration.",
      problem: "Translating static UI designs into functional, full-stack components is a manual, repetitive process that slows down development.",
      approach: "Using agentic AI orchestration to analyze static designs and automatically generate the corresponding React components and backend logic.",
      myContribution: "I designed the agentic workflow and built the core conversion engine to translate designs into MERN stack components.",
      keyCapabilities: [
        "Static UI design analysis",
        "Agentic AI orchestration",
        "Dynamic component generation",
        "MERN stack code output"
      ],
      technology: "Generative AI, Agentic AI, React, Node.js, Express, MongoDB",
      screenGalleryLabel: "Platform interfaces",
      mobileScreens: [
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/login.png", title: "Login", caption: "User authentication.", alt: "Login Screen" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/register.png", title: "Register", caption: "New user registration.", alt: "Register Screen" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/profile-dashboard.png", title: "Dashboard", caption: "User profile dashboard.", alt: "Dashboard" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/how-it-work.png", title: "How It Works", caption: "Process overview.", alt: "How It Works" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/features.png", title: "Features", caption: "Key capabilities.", alt: "Features" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/pricing.png", title: "Pricing", caption: "Subscription plans.", alt: "Pricing" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/step1.png", title: "Step 1", caption: "Initial step in conversion.", alt: "Step 1" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/step2.png", title: "Step 2", caption: "Processing design.", alt: "Step 2" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/step3.png", title: "Step 3", caption: "Generating components.", alt: "Step 3" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/step4.png", title: "Step 4", caption: "Refining output.", alt: "Step 4" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/step5.png", title: "Step 5", caption: "Finalizing code.", alt: "Step 5" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/step6.png", title: "Step 6", caption: "Export preparation.", alt: "Step 6" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/step7.png", title: "Step 7", caption: "Ready to deploy.", alt: "Step 7" },
        { image: "/images/projects/agentic-static-to-dynamic-website-converter/converted-project-details.png", title: "Converted Project", caption: "Detailed view of the converted project.", alt: "Converted Project Details" }
      ],
      projectContext: "Final Year Project converting static UI to dynamic websites.",
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
      github: "https://github.com/muhammadhamad1104/nlp-chatbot"
    },
    {
      title: "DigiDine (Restaurant AI Chatbot)",
      slug: "digidine",
      category: "Full-Stack AI Project",
      status: "Built",
      contribution: "Full-Stack Developer",
      coverImageReady: true,
      coverImage: "/images/projects/digidine/digidine-cover.png",
      deviceType: "browser",
      description: "A comprehensive restaurant management system integrated with an AI Chatbot for seamless customer interaction and operations.",
      overview: "DigiDine is a robust restaurant management system built to streamline operations and enhance the customer experience using an integrated AI Chatbot.",
      problem: "Restaurants often face operational bottlenecks and struggle to handle customer inquiries efficiently during peak hours.",
      approach: "Developed a full-stack platform with an integrated NLP-based AI Chatbot to handle reservations, menu queries, and support.",
      myContribution: "Engineered the full-stack backend and integrated the AI Chatbot into the customer-facing interface.",
      keyCapabilities: [
        "AI Chatbot for customer inquiries",
        "Restaurant management dashboard",
        "Full-stack MERN architecture"
      ],
      technology: "MERN Stack, Python, NLP, Chatbot",
      screenGalleryLabel: "Application screens",
      mobileScreens: [
        { image: "/images/projects/digidine/digidine-home.png", title: "DigiDine Home", caption: "Landing page for the restaurant system.", alt: "DigiDine home" },
        { image: "/images/projects/digidine/private-sign-in.png", title: "Private Portal", caption: "Secure sign-in for administrators.", alt: "Private sign-in" },
        { image: "/images/projects/digidine/admin-dashbord.png", title: "Admin Dashboard", caption: "Management dashboard for staff.", alt: "Admin dashboard" },
        { image: "/images/projects/digidine/admin-dashboard-statistics.png", title: "Statistics", caption: "Detailed analytics and insights.", alt: "Dashboard statistics" },
        { image: "/images/projects/digidine/dini-ai-chatbot-using-openai-langchain-rag-databases.png", title: "Dini AI Chatbot", caption: "Integrated NLP-based customer service bot.", alt: "Dini AI chatbot" }
      ],
      projectContext: "Full-stack project focusing on AI integration in hospitality.",
      tags: ["React", "Node.js", "AI Chatbot", "MongoDB"],
      liveUrl: "https://digidine.us"
    },
    {
      title: "Irf Wardrobe",
      slug: "irf-wardrobe",
      category: "Full-Stack E-Commerce",
      status: "Built",
      contribution: "Full-Stack Developer",
      coverImageReady: true,
      coverImage: "/images/projects/irf-wardrobe/irf-wardrobe-cover.png",
      deviceType: "browser",
      description: "A complete full-stack e-commerce platform with a modern UI and secure checkout.",
      overview: "Irf Wardrobe is a modern e-commerce platform offering a seamless shopping experience with a secure checkout flow and inventory management.",
      problem: "Small retail businesses need a reliable, customized e-commerce presence to scale their operations without high overhead.",
      approach: "Built a fully functional MERN stack e-commerce application featuring product catalogs, cart management, and secure payment processing.",
      myContribution: "Developed the frontend store, built the backend API for product and user management, and implemented the checkout flow.",
      keyCapabilities: [
        "Product catalog and search",
        "Shopping cart management",
        "Secure checkout integration",
        "Admin inventory dashboard"
      ],
      technology: "MERN Stack, React, Node.js, Express, MongoDB",
      screenGalleryLabel: "Platform screens",
      mobileScreens: [
        { image: "/images/projects/irf-wardrobe/home-page.png", title: "Home Page", caption: "Landing page for Irf Wardrobe.", alt: "Home page" },
        { image: "/images/projects/irf-wardrobe/home-featured-product.png", title: "Featured Products", caption: "Highlighted products on the home page.", alt: "Featured products" },
        { image: "/images/projects/irf-wardrobe/about-page.png", title: "About Us", caption: "Information about the brand.", alt: "About page" },
        { image: "/images/projects/irf-wardrobe/contact-page.png", title: "Contact", caption: "Get in touch with customer support.", alt: "Contact page" },
        { image: "/images/projects/irf-wardrobe/products-page.png", title: "Product Catalog", caption: "Browse all available clothing items.", alt: "Products page" },
        { image: "/images/projects/irf-wardrobe/1-product-page.png", title: "Product Details", caption: "Detailed view of a single product.", alt: "Product details" },
        { image: "/images/projects/irf-wardrobe/view-cart-page.png", title: "Shopping Cart", caption: "Review selected items before checkout.", alt: "View cart" },
        { image: "/images/projects/irf-wardrobe/checkout-page.png", title: "Checkout", caption: "Secure payment and order placement.", alt: "Checkout page" },
        { image: "/images/projects/irf-wardrobe/admin-dashboard.jpeg", title: "Admin Dashboard", caption: "Overview of sales and analytics.", alt: "Admin dashboard" },
        { image: "/images/projects/irf-wardrobe/admin-product-management.jpeg", title: "Product Management", caption: "Manage inventory and product listings.", alt: "Product management" }
      ],
      projectContext: "E-commerce platform development.",
      tags: ["React", "Node.js", "E-Commerce", "MongoDB"],
      liveUrl: "https://irfwardrobe.com"
    },
    {
      title: "Jarvis Voice Assistant",
      slug: "jarvis-voice-assistant",
      category: "AI & Voice Assistant",
      status: "Built",
      contribution: "AI Engineer",
      coverImageReady: true,
      coverImage: "/images/projects/jarvis/jarvis_option_3_driving_hud_concept.jpg",
      description: "A voice assistant named Jarvis with embedded memory and natural voice synthesis using ElevenLabs, capable of performing automated tasks.",
      overview: "Jarvis is an intelligent voice assistant with embedded memory and voice synthesis powered by ElevenLabs, capable of performing various automated tasks and maintaining context.",
      problem: "Traditional assistants lack long-term memory and natural sounding voices for seamless daily interactions.",
      approach: "Integrated ElevenLabs for high-quality voice synthesis and implemented a memory system allowing the assistant to remember context and execute tasks.",
      myContribution: "Developed the core voice assistant, integrated the ElevenLabs API, and implemented the memory and task execution logic.",
      keyCapabilities: [
        "Voice synthesis using ElevenLabs",
        "Embedded memory for contextual awareness",
        "Task execution and automation"
      ],
      technology: "ElevenLabs, Python, GenAI, Voice Synthesis",
      screenGalleryLabel: "Project interfaces",
      mobileScreens: [
        { image: "/images/projects/jarvis/Connected_Services_Mockup.jpg", title: "Connected Services", caption: "Mockup of connected services for Jarvis.", alt: "Connected Services Mockup" },
        { image: "/images/projects/jarvis/jarvis_option_3_driving_hud_concept.jpg", title: "Driving HUD Concept", caption: "HUD concept for Jarvis.", alt: "Driving HUD Concept" }
      ],
      projectContext: "Personal AI voice assistant project.",
      tags: ["ElevenLabs", "AI", "Voice Assistant", "Python"]
    },
    {
      title: "Social Media Platform",
      slug: "social-media-platform",
      category: "Full-Stack Web App",
      status: "In Progress",
      contribution: "Full-Stack Developer",
      coverImageReady: false,
      coverImage: "",
      description: "A modern social media platform currently in development, featuring real-time interactions and a dynamic user experience.",
      overview: "Developing a feature-rich social media platform to connect users through real-time feeds, interactions, and media sharing.",
      problem: "Creating a highly scalable and engaging social networking experience with real-time updates.",
      approach: "Building the platform using modern full-stack web technologies to ensure a responsive and dynamic user experience.",
      myContribution: "Architecting the full-stack application and implementing core features such as user authentication and real-time feeds.",
      keyCapabilities: [
        "Real-time user interactions",
        "Dynamic content feeds",
        "Scalable full-stack architecture"
      ],
      technology: "MERN Stack, Real-time Web",
      screenGalleryLabel: "Platform interfaces",
      mobileScreens: [],
      projectContext: "Future addition currently in progress.",
      tags: ["React", "Node.js", "Social Media", "In Progress"]
    }
  ],
  spotlight: {
    title: "AI-OS – Unified AI Operating System",
    slug: "ai-os",
    category: "Agentic Systems & AI Architecture",
    status: "Built",
    contribution: "AI Systems Architect",
    coverImageReady: true,
    coverImage: "/images/projects/ai-os-platform/cover-ai-os.png",
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
    screenGalleryLabel: "Platform screens",
    mobileScreens: [
      { image: "/images/projects/ai-os-platform/dashboard.png", title: "Dashboard", caption: "Main system overview.", alt: "Dashboard" },
      { image: "/images/projects/ai-os-platform/providers.png", title: "Providers", caption: "LLM provider configurations.", alt: "Providers" },
      { image: "/images/projects/ai-os-platform/api-keys.png", title: "API Keys", caption: "Key management and rotation.", alt: "API keys" },
      { image: "/images/projects/ai-os-platform/accounts.png", title: "Accounts", caption: "User account management.", alt: "Accounts" },
      { image: "/images/projects/ai-os-platform/ai-os.png", title: "AI-OS Core", caption: "Core system settings.", alt: "AI-OS core" },
      { image: "/images/projects/ai-os-platform/chat.png", title: "Chats", caption: "Agent interactions.", alt: "Chats" },
      { image: "/images/projects/ai-os-platform/usage.png", title: "Usage", caption: "API consumption tracking.", alt: "Usage" },
      { image: "/images/projects/ai-os-platform/monitoring.png", title: "Monitoring", caption: "Real-time system monitoring.", alt: "Monitoring" },
      { image: "/images/projects/ai-os-platform/queue.png", title: "Queue", caption: "Request queue management.", alt: "Queue" },
      { image: "/images/projects/ai-os-platform/logs.png", title: "Logs", caption: "System activity logs.", alt: "Logs" },
      { image: "/images/projects/ai-os-platform/proxies.png", title: "Proxies", caption: "Network proxy configuration.", alt: "Proxies" },
      { image: "/images/projects/ai-os-platform/settings.png", title: "Settings", caption: "Platform configurations.", alt: "Settings" }
    ],
    projectContext: "Open-source high-performance agent routing and API management system.",
    tags: ["FastAPI", "Python", "Celery", "Redis", "Docker"],
    github: "https://github.com/muhammadhamad1104/AI-OS"
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
    },
    {
      title: "IELTS Preparation / Certification 1",
      provider: "Coursera",
      date: "2026",
      fileUrl: "/files/certificates/IELTS/Coursera EPSU1MC4W4FP.pdf",
      isAvailable: true
    },
    {
      title: "IELTS Preparation / Certification 2",
      provider: "Coursera",
      date: "2026",
      fileUrl: "/files/certificates/IELTS/Coursera FZXXPMEP07CV.pdf",
      isAvailable: true
    },
    {
      title: "IELTS Preparation / Certification 3",
      provider: "Coursera",
      date: "2026",
      fileUrl: "/files/certificates/IELTS/Coursera V88C3LL0Y1SW.pdf",
      isAvailable: true
    },
    {
      title: "IELTS Preparation / Certification 4",
      provider: "Coursera",
      date: "2026",
      fileUrl: "/files/certificates/IELTS/Coursera W5BKZQO2BWYH.pdf",
      isAvailable: true
    },
    {
      title: "Digital Forensic Specialist",
      provider: "Learning / In Progress",
      date: "2026",
      fileUrl: "",
      isAvailable: false
    },
    {
      title: "Generative AI Engineering Specialist",
      provider: "IBM / Coursera",
      date: "In Progress",
      fileUrl: "",
      isAvailable: false
    }
  ]
};
