import { cn } from "@/lib/utils";

export function TechTag({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-surface px-2 py-1 text-xs font-medium text-text-muted ring-1 ring-inset ring-border",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
