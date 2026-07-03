import * as motion from "motion/react-client";
import { MonitorSmartphone, Code2, Cpu, Database } from "lucide-react";

interface CapabilityCardProps {
  capability: {
    title: string;
    description: string;
  };
  index: number;
}

export function CapabilityCard({ capability, index }: CapabilityCardProps) {
  const icons = {
    "Mobile Development": <MonitorSmartphone className="text-accent-primary w-6 h-6 shrink-0" strokeWidth={1.5} />,
    "Web Development": <Code2 className="text-accent-sage w-6 h-6 shrink-0" strokeWidth={1.5} />,
    "AI & Backend Integration": <Cpu className="text-accent-steel w-6 h-6 shrink-0" strokeWidth={1.5} />,
    "CS Foundations": <Database className="text-accent-primary w-6 h-6 shrink-0" strokeWidth={1.5} />,
  };

  const icon = icons[capability.title as keyof typeof icons] || <Code2 className="text-accent-primary w-6 h-6 shrink-0" strokeWidth={1.5} />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="pt-6 border-t border-border group"
    >
      <div className="mb-4 text-text-muted group-hover:text-text-primary transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-3">{capability.title}</h3>
      <p className="text-text-muted leading-relaxed">
        {capability.description}
      </p>
    </motion.div>
  );
}
