import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AssistantModal } from "@/components/ui/AssistantModal";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Muhammad Hamad",
  description: "Portfolio of Muhammad Hamad, a Generative AI Engineer and Full-Stack Developer building agentic workflows and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="min-h-screen bg-background text-text-primary selection:bg-accent-primary/30">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-surface focus:text-text-primary">
          Skip to main content
        </a>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <AssistantModal />
      </body>
    </html>
  );
}
