"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Download } from "lucide-react";
import { ButtonLink } from "./Button";
import * as motion from "motion/react-client";

interface CertificateFile {
  name?: string;
  url: string;
}

interface Certificate {
  title: string;
  provider: string;
  date: string;
  fileUrl?: string;
  fileUrls?: (string | CertificateFile)[];
  isAvailable: boolean;
}

export function CertificateModal({ 
  certificate, 
  isOpen, 
  onClose 
}: { 
  certificate: Certificate | null; 
  isOpen: boolean; 
  onClose: () => void 
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  // Reset index when opening modal
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const currentFile = certificate.fileUrls ? certificate.fileUrls[currentIndex] : null;
  const currentFileName = currentFile && typeof currentFile === 'object' ? currentFile.name : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
        aria-hidden="true"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-background-secondary">
          <div>
            <h3 id="modal-title" className="text-xl font-bold text-text-primary pr-8">{certificate.title}</h3>
            {currentFileName && (
              <p className="text-accent-primary font-medium text-sm mt-1">{currentFileName}</p>
            )}
            <p className="text-text-muted text-sm mt-1">{certificate.provider} · {certificate.date}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
            aria-label="Close modal"
          >
            <X size={20} className="shrink-0" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-surface p-4 sm:p-6 flex flex-col items-center justify-center min-h-[50vh] relative">
          {certificate.isAvailable ? (
            (() => {
              const fileObjOrStr = certificate.fileUrls 
                ? certificate.fileUrls[currentIndex] 
                : certificate.fileUrl;
              
              if (!fileObjOrStr) return null;
              
              const currentFileUrl = typeof fileObjOrStr === 'string' ? fileObjOrStr : fileObjOrStr.url;
              const isPdf = currentFileUrl.toLowerCase().endsWith('.pdf');
              
              return (
                <>
                  {isPdf ? (
                    <object 
                      data={currentFileUrl} 
                      type="application/pdf" 
                      className="w-full h-full min-h-[60vh] rounded-xl border border-border"
                    >
                      <div className="flex flex-col items-center justify-center h-full min-h-[40vh] text-center p-6 border border-border border-dashed rounded-xl">
                        <p className="text-text-muted mb-4">Your browser does not support inline PDF viewing.</p>
                        <ButtonLink href={currentFileUrl} download variant="primary">
                          Download Certificate PDF
                        </ButtonLink>
                      </div>
                    </object>
                  ) : (
                    <div className="w-full h-full min-h-[50vh] flex items-center justify-center rounded-xl bg-background border border-border overflow-hidden p-4">
                      <img 
                        src={currentFileUrl} 
                        alt={`${certificate.title} Certificate`} 
                        className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-sm"
                      />
                    </div>
                  )}
                  
                  {/* Carousel Controls */}
                  {certificate.fileUrls && certificate.fileUrls.length > 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 right-2 sm:right-4 flex justify-between pointer-events-none">
                      <button
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + certificate.fileUrls!.length) % certificate.fileUrls!.length)}
                        className="w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent-primary pointer-events-auto"
                        aria-label="Previous certificate"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                      </button>
                      <button
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % certificate.fileUrls!.length)}
                        className="w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-text-muted hover:text-text-primary hover:border-accent-primary pointer-events-auto"
                        aria-label="Next certificate"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      </button>
                    </div>
                  )}
                  
                  {/* Pagination Dots */}
                  {certificate.fileUrls && certificate.fileUrls.length > 1 && (
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                      {certificate.fileUrls.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`pointer-events-auto transition-all duration-300 rounded-full ${
                            idx === currentIndex 
                              ? "w-6 h-2 bg-accent-primary" 
                              : "w-2 h-2 bg-border hover:bg-text-muted"
                          }`}
                          aria-label={`Go to certificate ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              );
            })()
          ) : (
            <div className="flex flex-col items-center text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-surface-hover flex items-center justify-center mb-6 text-accent-sage">
                <ExternalLink size={24} className="shrink-0" />
              </div>
              <h4 className="text-xl font-medium text-text-primary mb-2">Certificate preview will be added</h4>
              <p className="text-text-muted">
                The high-resolution copy of this certificate is currently being processed and will be available for viewing soon.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {certificate.isAvailable && (
          <div className="flex items-center justify-between p-4 border-t border-border bg-background-secondary">
            <div className="text-sm text-text-muted">
              {certificate.fileUrls && certificate.fileUrls.length > 1 && (
                <span>Part {currentIndex + 1} of {certificate.fileUrls.length}</span>
              )}
            </div>
            <ButtonLink 
              href={certificate.fileUrls ? (typeof certificate.fileUrls[currentIndex] === 'string' ? (certificate.fileUrls[currentIndex] as string) : (certificate.fileUrls[currentIndex] as CertificateFile).url) : certificate.fileUrl!} 
              download 
              variant="outline" 
              size="sm" 
              className="gap-2"
            >
              <Download size={16} className="shrink-0" /> Download {(certificate.fileUrls ? (typeof certificate.fileUrls[currentIndex] === 'string' ? (certificate.fileUrls[currentIndex] as string) : (certificate.fileUrls[currentIndex] as CertificateFile).url) : certificate.fileUrl!).toLowerCase().endsWith('.pdf') ? 'PDF' : 'Image'}
            </ButtonLink>
          </div>
        )}
      </motion.div>
    </div>
  );
}
