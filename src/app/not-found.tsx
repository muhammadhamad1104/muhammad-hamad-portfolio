import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col pt-16 md:pt-20 min-h-[80vh]">
        <SectionContainer className="pt-2 md:pt-4 pb-12 md:pb-16 flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-text-primary mb-4 tracking-tighter">
            404<span className="text-accent-primary">.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <ButtonLink href="/" variant="primary" size="lg">
            Back to Home
          </ButtonLink>
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
