"use client";

import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import * as motion from "motion/react-client";
import { CertificateModal } from "./CertificateModal";

interface CertificateCardProps {
  certificate: {
    title: string;
    provider: string;
    date: string;
    fileUrl: string;
    isAvailable: boolean;
  };
  index: number;
}

export function CertificateCard({ certificate, index }: CertificateCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        onClick={() => setIsModalOpen(true)}
        className="w-full flex items-center justify-between p-4 sm:p-5 rounded-xl bg-surface border border-border hover:border-accent-sage/50 hover:bg-surface-hover transition-all group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
      >
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center text-accent-sage group-hover:scale-110 transition-transform">
            <Award size={20} className="shrink-0" />
          </div>
          <div>
            <p className="text-text-primary text-base sm:text-lg font-medium leading-snug mb-1 group-hover:text-accent-sage transition-colors">
              {certificate.title}
            </p>
            <p className="text-text-muted text-sm">
              {certificate.provider} · {certificate.date}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={18} className="shrink-0" />
        </div>
      </motion.button>
      
      <CertificateModal 
        certificate={certificate} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
