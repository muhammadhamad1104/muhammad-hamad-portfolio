import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "accent" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-surface text-text-primary border-border",
    success: "bg-accent-sage/10 text-accent-sage border-accent-sage/20",
    accent: "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
    outline: "bg-transparent text-text-primary border-border"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
