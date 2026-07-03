import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ButtonLink } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, Download, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé | Muhammad Hamad",
  description: "View and download the professional résumé of Muhammad Hamad, containing experience, education, and skills.",
};

export default function ResumePage() {
  const { isAvailable, fileUrl } = portfolioData.resume;

  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col pt-16 md:pt-20 min-h-[80vh]">
        <SectionContainer className="pt-0">
          <ButtonLink href="/" variant="ghost" size="sm" className="mb-8 pl-0 hover:bg-transparent text-text-muted hover:text-text-primary gap-2">
            <ArrowLeft size={16} className="shrink-0" /> Back to Home
          </ButtonLink>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Résumé
              </h1>
              <p className="text-lg text-text-muted">
                My professional experience, education, and technical skills.
              </p>
            </div>
            {isAvailable && (
              <ButtonLink href={fileUrl} download variant="primary" className="gap-2 shrink-0">
                <Download size={18} className="shrink-0" /> Download PDF
              </ButtonLink>
            )}
          </div>
          
          <div className="w-full bg-surface border border-border rounded-2xl overflow-hidden shadow-xl">
            {isAvailable ? (
              <div className="w-full h-[70vh] md:h-[85vh] bg-background-secondary p-2 sm:p-6">
                <object 
                  data={fileUrl} 
                  type="application/pdf" 
                  className="w-full h-full rounded-xl shadow-sm border border-border bg-background"
                >
                  <div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <p className="text-text-muted mb-4">Your browser does not support inline PDF viewing.</p>
                    <ButtonLink href={fileUrl} download variant="outline">
                      Download Résumé PDF
                    </ButtonLink>
                  </div>
                </object>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-12 md:p-24 min-h-[50vh]">
                <div className="w-20 h-20 rounded-full bg-surface-hover flex items-center justify-center mb-6 text-accent-sage">
                  <FileText size={32} className="shrink-0" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-3">Résumé document will be added shortly</h2>
                <p className="text-text-muted max-w-md mx-auto mb-8 leading-relaxed">
                  The latest version of my résumé is currently being prepared. Please check back soon or feel free to connect with me directly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <ButtonLink href="/#contact" variant="primary">
                    Contact me
                  </ButtonLink>
                  <ButtonLink href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
                    Visit LinkedIn
                  </ButtonLink>
                </div>
              </div>
            )}
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
