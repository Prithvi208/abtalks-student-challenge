import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  animate?: boolean;
  label?: string;
}

export function ProgressBar({ value, max = 100, className, animate = true, label }: ProgressBarProps) {
  const [width, setWidth] = useState(animate ? 0 : (value / max) * 100);

  useEffect(() => {
    if (!animate) {
      setWidth((value / max) * 100);
      return;
    }
    const t = setTimeout(() => setWidth((value / max) * 100), 120);
    return () => clearTimeout(t);
  }, [value, max, animate]);

  return (
    <div className={cn('relative h-2.5 w-full overflow-hidden rounded-full bg-ink-700/70', className)}>
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent-500 to-accent-400 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
      {label && (
        <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-paper-100">
          {label}
        </span>
      )}
    </div>
  );
}
