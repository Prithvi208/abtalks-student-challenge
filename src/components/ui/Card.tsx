import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

export function Card({ hover, glow, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-ink-700/60 bg-ink-850/80 backdrop-blur-sm',
        hover && 'transition-all duration-300 hover:border-ink-600 hover:bg-ink-800/80 hover:-translate-y-0.5 hover:shadow-card',
        glow && 'shadow-glow',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
