import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function SectionContainer({ 
  id, 
  children, 
  className,
  containerClassName,
  ...props 
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-[72px] md:py-[96px] lg:py-[120px]", className)} {...props}>
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
