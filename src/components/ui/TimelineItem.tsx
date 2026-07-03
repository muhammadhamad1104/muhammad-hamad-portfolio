import * as motion from "motion/react-client";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  index: number;
}

export function TimelineItem({ role, company, period, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-5 md:gap-8 md:items-baseline">
        <div className="md:col-span-1 md:text-right hidden md:block text-text-muted font-medium text-sm">
          {period}
        </div>
        
        {/* Timeline Line and Dot */}
        <div className="absolute left-0 top-1.5 md:left-auto md:-ml-[1.75rem] md:col-start-2 w-3 h-3 rounded-full bg-accent-sage border-[3px] border-background ring-2 ring-accent-sage/30 z-10" />
        
        <div className="md:col-span-4 pb-10 border-l border-border md:border-l-0 absolute left-1 top-3 bottom-0 md:hidden" />
        
        <div className="md:col-span-4 pb-10 md:pb-12 md:pl-8 md:border-l border-border relative">
          <div className="text-text-muted font-medium text-sm mb-2 md:hidden">
            {period}
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-1">{role}</h3>
          <p className="text-accent-sage">{company}</p>
        </div>
      </div>
    </motion.div>
  );
}
