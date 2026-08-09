import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'outline';
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-ink-800 text-paper-200 border border-ink-700',
    accent: 'bg-accent-500/15 text-accent-400 border border-accent-500/30',
    success: 'bg-success-500/15 text-success-400 border border-success-500/30',
    outline: 'bg-transparent text-paper-300 border border-paper-300/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
