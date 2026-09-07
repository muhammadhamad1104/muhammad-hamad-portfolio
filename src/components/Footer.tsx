export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          © 2026 Muhammad Hamad. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/muhammadhamad1104" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muhammadhamad1104/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary text-sm transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
