"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Download } from "lucide-react";
import { ButtonLink } from "./Button";
import * as motion from "motion/react-client";

interface Certificate {
  title: string;
  provider: string;
  date: string;
  fileUrl: string;
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
        <div className="flex-1 overflow-auto bg-surface p-4 sm:p-6 flex flex-col items-center justify-center min-h-[50vh]">
          {certificate.isAvailable ? (
            certificate.fileUrl.toLowerCase().endsWith('.pdf') ? (
              <object 
                data={certificate.fileUrl} 
                type="application/pdf" 
                className="w-full h-full min-h-[60vh] rounded-xl border border-border"
              >
                <div className="flex flex-col items-center justify-center h-full min-h-[40vh] text-center p-6 border border-border border-dashed rounded-xl">
                  <p className="text-text-muted mb-4">Your browser does not support inline PDF viewing.</p>
                  <ButtonLink href={certificate.fileUrl} download variant="primary">
                    Download Certificate PDF
                  </ButtonLink>
                </div>
              </object>
            ) : (
              <div className="w-full h-full min-h-[50vh] flex items-center justify-center rounded-xl bg-background border border-border overflow-hidden p-4">
                <img 
                  src={certificate.fileUrl} 
                  alt={`${certificate.title} Certificate`} 
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-sm"
                />
              </div>
            )
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
          <div className="flex items-center justify-end p-4 border-t border-border bg-background-secondary">
            <ButtonLink href={certificate.fileUrl} download variant="outline" size="sm" className="gap-2">
              <Download size={16} className="shrink-0" /> Download {certificate.fileUrl.toLowerCase().endsWith('.pdf') ? 'PDF' : 'Image'}
            </ButtonLink>
          </div>
        )}
      </motion.div>
    </div>
  );
}
