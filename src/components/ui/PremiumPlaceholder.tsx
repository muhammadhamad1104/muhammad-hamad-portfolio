import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";

interface PremiumPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  iconSize?: number;
}

export function PremiumPlaceholder({ 
  className, 
  text = "Project visual coming soon", 
  iconSize = 32,
  ...props 
}: PremiumPlaceholderProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center w-full h-full bg-surface border border-border/50 rounded-lg overflow-hidden relative group",
        className
      )}
      {...props}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-sage/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative orbital accent */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-accent-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-accent-sage/10 blur-3xl rounded-full" />
      
      <div className="relative z-10 flex flex-col items-center gap-3 text-text-muted">
        <ImageIcon size={iconSize} className="opacity-50" strokeWidth={1.5} />
        <span className="text-sm font-medium tracking-wide">{text}</span>
      </div>
    </div>
  );
}
