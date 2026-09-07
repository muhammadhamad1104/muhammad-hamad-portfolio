"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, User, Bot, ExternalLink, Trash2 } from "lucide-react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { ButtonLink } from "./Button";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  actions?: { label: string; href: string }[];
};

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi, I’m HamadBot — Hamad’s Portfolio Guide. I can help you explore AI systems, web projects, experience, education, skills, and contact details. What would you like to know?",
};

const generateId = (): string => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `msg-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export function AssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => launcherRef.current?.focus(), 10);
  };

  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);

  const suggestedQuestions = [
    "View résumé",
    "Explore projects",
    "Skills",
    "Certificates",
    "Contact Hamad"
  ];

  const matchLocalIntent = (text: string) => {
    const query = text.toLowerCase().trim();
    
    if (query === "view résumé" || query === "show me the résumé" || query === "resume" || query === "cv" || query === "view resume" || query === "show me the resume") {
      return {
        reply: "You can view and download Hamad's latest résumé on the Résumé page.",
        actions: [{ label: "View Résumé", href: "/resume" }]
      };
    }
    if (query === "explore projects" || query === "show projects" || query === "projects" || query === "work" || query === "explore my work") {
      return {
        reply: "Hamad's featured projects include Bulao (Voice-first Urdu-native prototype), AI-Powered CV Generator, Agentic Website Converter (FYP), AI University FAQ Chatbot, and AI-OS. You can view all of them in the Work section.",
        actions: [
          { label: "Explore My Work", href: "/#work" },
          { label: "GitHub", href: "https://github.com/muhammadhamad1104" }
        ]
      };
    }
    if (query === "skills" || query === "what are hamad’s skills?" || query === "what are hamad's skills?" || query === "tech stack" || query === "skills") {
      return {
        reply: "Hamad's core skills include Generative AI, Agentic Systems, Python, React, JavaScript, FastAPI, and NLP/LLM API integrations. You can find his full capabilities listed in the About section.",
        actions: [
          { label: "View Skills", href: "/#about" }
        ]
      };
    }
    if (query === "certificates" || query === "show certificates") {
      return {
        reply: "Hamad holds multiple certificates, including Model Context Protocol (Anthropic), Google AI Essentials, and Python for Everybody. You can view them in the Learning & Recognition section.",
        actions: [
          { label: "View Certificates", href: "/#experience" }
        ]
      };
    }
    if (query === "contact hamad" || query === "how can i contact hamad?" || query === "contact" || query === "email" || query === "whatsapp" || query === "phone") {
      return {
        reply: "You can reach out to Hamad via email at muhammadhamad1104@gmail.com, WhatsApp, or connect on LinkedIn.",
        actions: [
          { label: "Email me", href: "mailto:muhammadhamad1104@gmail.com" },
          { label: "WhatsApp", href: "https://wa.me/923021104820" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadhamad1104/" }
        ]
      };
    }
    if (query === "github") {
      return {
        reply: "Explore Hamad's repositories, contributions, and open-source code on GitHub.",
        actions: [
          { label: "GitHub", href: "https://github.com/muhammadhamad1104" }
        ]
      };
    }
    if (query === "linkedin") {
      return {
        reply: "Connect with Muhammad Hamad on LinkedIn to see his professional network and updates.",
        actions: [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadhamad1104/" }
        ]
      };
    }
    return null;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = { id: generateId(), role: "user", content: text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setLastQuery(text);
    setIsTyping(true);

    // 1. Resolve straightforward intents locally (without Groq API hit)
    const localMatch = matchLocalIntent(text);
    if (localMatch) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: generateId(),
          role: "assistant",
          content: localMatch.reply,
          actions: localMatch.actions
        }]);
        setIsTyping(false);
      }, 400); // Natural delay
      return;
    }

    // 2. Query secure API server endpoint for open-ended questions
    try {
      const response = await fetch("/api/hamadbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(prev => [...prev, {
          id: generateId(),
          role: "assistant",
          content: data.reply,
          actions: data.actions
        }]);
      } else {
        if (response.status === 429) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || "rate-limit");
        }
        throw new Error("server-error");
      }
    } catch (error) {
      const err = error as Error;
      let errorMsg = "HamadBot’s AI replies are temporarily unavailable. You can still explore Hamad’s projects, résumé, and contact details.";
      
      if (err.message && (err.message.includes("rate-limit") || err.message.includes("lot of questions"))) {
        errorMsg = "HamadBot is receiving a lot of questions right now. You can still explore the projects, résumé, or contact Hamad directly.";
      }
      
      setMessages(prev => [...prev, {
        id: generateId(),
        role: "assistant",
        content: errorMsg,
        actions: [
          { label: "Retry", href: "#retry" },
          { label: "View Résumé", href: "/resume" },
          { label: "Explore My Work", href: "/#work" }
        ]
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  const clearChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <>
      <button
        ref={launcherRef}
        onClick={() => setIsOpen(true)}
        title="Ask HamadBot"
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 p-4 bg-accent-sage text-background rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-accent-sage/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background border-2 border-accent-primary flex items-center justify-center group ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Open portfolio assistant HamadBot"
      >
        <Bot size={28} className="shrink-0" />
        <span className="absolute top-1 right-1 w-3 h-3 bg-accent-sage rounded-full border-2 border-accent-sage animate-pulse" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-background/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-0 left-0 right-0 w-full md:left-auto md:right-8 md:bottom-8 md:w-[400px] h-[85dvh] md:h-[min(600px,calc(100dvh-80px))] z-50 flex flex-col bg-surface border border-border shadow-2xl rounded-t-3xl md:rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-background-secondary border-b border-border p-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-sage text-background flex items-center justify-center shrink-0 relative">
                    <Bot size={20} />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-accent-sage rounded-full border-2 border-background-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-base leading-tight">HamadBot</h3>
                    <p className="text-text-muted text-xs">Portfolio Guide</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={clearChat}
                    className="p-2 text-text-muted hover:text-text-primary hover:bg-surface-hover rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                    aria-label="Clear chat"
                    title="Clear chat"
                  >
                    <Trash2 size={18} className="shrink-0" />
                  </button>
                  <button 
                    onClick={handleClose}
                    className="p-2 text-text-primary bg-surface border border-border hover:text-accent-primary hover:border-accent-primary hover:bg-surface-hover rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                    aria-label="Close assistant"
                    title="Close"
                  >
                    <X size={20} className="shrink-0" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-background/50">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.role === 'user' ? 'bg-surface-hover text-text-muted' : 'bg-accent-sage text-background'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={18} />}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className={`p-3 rounded-2xl ${msg.role === 'user' ? 'bg-surface border border-border text-text-primary rounded-tr-sm' : 'bg-background-secondary border border-border text-text-primary rounded-tl-sm'}`}>
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                      </div>
                      
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {msg.actions.map((action, i) => {
                            const isExternal = action.href.startsWith('http') || action.href.startsWith('mailto');
                            return (
                              <ButtonLink 
                                key={i} 
                                href={action.href} 
                                variant="outline" 
                                size="sm" 
                                className="text-xs h-8 px-3 rounded-full bg-surface border-border hover:border-accent-sage hover:text-accent-sage"
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                onClick={(e) => {
                                  if (action.href === "#retry") {
                                    e.preventDefault();
                                    handleSend(lastQuery);
                                  }
                                }}
                              >
                                {action.label}
                                {isExternal && <ExternalLink size={12} className="ml-1 shrink-0" />}
                              </ButtonLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 bg-accent-sage text-background">
                      <Bot size={18} />
                    </div>
                    <div className="p-4 rounded-2xl bg-background-secondary border border-border rounded-tl-sm flex items-center gap-1.5 h-11">
                      <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"></span>
                    </div>
                  </div>
                )}
                
                {/* Suggested Questions */}
                {messages.length < 3 && !isTyping && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs text-text-muted mb-3 font-medium uppercase tracking-wider">Suggested Questions</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(q)}
                          className="text-xs bg-surface border border-border hover:border-accent-primary hover:text-accent-primary text-text-muted px-3 py-1.5 rounded-full transition-colors text-left"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-background-secondary border-t border-border shrink-0">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask HamadBot..."
                    className="w-full bg-surface border border-border text-text-primary text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-focus-ring transition-shadow"
                  />
                  <button
                    onClick={() => handleSend(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    className="absolute right-2 p-2 bg-accent-primary text-background rounded-full disabled:opacity-50 disabled:bg-surface disabled:text-text-muted hover:bg-accent-primary-hover transition-colors"
                    aria-label="Send message"
                  >
                    <Send size={16} className="shrink-0" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
