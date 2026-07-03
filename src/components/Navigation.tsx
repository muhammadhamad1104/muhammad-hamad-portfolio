"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./ui/Icons";
import { ButtonLink } from "./ui/Button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/#work" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold text-text-primary tracking-tighter hover:text-accent-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded"
        >
          MH<span className="text-accent-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <a href="https://github.com/Muhammad-Hamad" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <Github size={20} className="shrink-0" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-hamad" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <Linkedin size={20} className="shrink-0" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <ButtonLink href="/#contact" size="sm">Let&apos;s connect</ButtonLink>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} className="shrink-0" /> : <Menu size={24} className="shrink-0" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-xl animate-in slide-in-from-top-2">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-lg font-medium text-text-muted hover:text-text-primary block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <a href="https://github.com/Muhammad-Hamad" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-hover rounded-full text-text-primary">
                <Github size={20} className="shrink-0" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-hamad" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-hover rounded-full text-text-primary">
                <Linkedin size={20} className="shrink-0" />
              </a>
              <ButtonLink href="/#contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Let&apos;s connect</ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
