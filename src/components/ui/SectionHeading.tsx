export function SectionHeading({ 
  title, 
  subtitle,
  centered = false 
}: { 
  title: string; 
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}
        <span className="text-accent-cobalt">.</span>
      </h2>
      {subtitle && (
        <p className={`text-lg text-text-muted max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
