import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  to?: string;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent-500 text-ink-950 font-bold hover:bg-accent-400 active:bg-accent-600 shadow-pop transition-all duration-200 active:scale-[0.98]',
  secondary:
    'bg-ink-800 text-paper-50 border border-ink-700 hover:bg-ink-700 active:bg-ink-850 transition-all duration-200 active:scale-[0.98]',
  outline:
    'bg-transparent text-paper-50 border border-paper-300/30 hover:border-accent-500/60 hover:text-accent-400 transition-all duration-200 active:scale-[0.98]',
  ghost: 'bg-transparent text-paper-200 hover:text-paper-50 hover:bg-ink-800/60 transition-colors duration-200',
};

const sizes: Record<Size, string> = {
  sm: 'text-sm px-3.5 py-2 rounded-lg gap-1.5',
  md: 'text-[15px] px-5 py-3 rounded-xl gap-2',
  lg: 'text-base px-6 py-3.5 rounded-xl gap-2',
};

export function Button({
  variant = 'primary',
  size = 'md',
  to,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold tap-highlight-none select-none',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
