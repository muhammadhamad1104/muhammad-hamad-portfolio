import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

export const buttonVariants = ({
  variant = "primary",
  size = "md",
}: {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap leading-none rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-accent-primary text-background hover:bg-accent-primary-hover shadow-sm",
    secondary: "bg-surface text-text-primary hover:bg-surface-hover",
    outline: "border border-border bg-transparent hover:bg-surface text-text-primary",
    ghost: "hover:bg-surface text-text-primary hover:text-white",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-6 py-2 text-base",
    lg: "h-12 px-8 text-lg",
  };

  return cn(baseStyles, variants[variant], sizes[size]);
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, href, target, rel, ...props }, ref) => {
    // Determine if it's an external link
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
    
    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={cn(buttonVariants({ variant, size }), className)}
          {...props}
        />
      );
    }
    
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";
