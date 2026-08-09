import { cn } from '@/lib/utils';
import type { DayStatus } from '@/data/mockData';

interface DayCellProps {
  day: number;
  status: DayStatus;
  size?: 'sm' | 'md';
  showNumber?: boolean;
  selected?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

const statusStyles: Record<DayStatus, string> = {
  completed: 'bg-accent-500 text-ink-950 border-accent-500 shadow-[0_0_12px_-2px_rgba(255,138,0,0.5)]',
  current:
    'bg-ink-850 text-accent-400 border-2 border-accent-500 ring-2 ring-accent-500/30 animate-pulse',
  upcoming: 'bg-ink-800/60 text-paper-300/40 border border-ink-700/50',
  missed: 'bg-ink-900/80 text-danger-500/70 border border-danger-500/30',
};

export function DayCell({ day, status, size = 'sm', showNumber = true, selected, onClick, interactive }: DayCellProps) {
  const base = cn(
    'flex items-center justify-center rounded-md font-mono font-semibold transition-all',
    size === 'sm' ? 'aspect-square text-[10px]' : 'aspect-square text-xs',
    statusStyles[status],
    interactive && 'cursor-pointer hover:scale-110 hover:z-10',
    selected && 'ring-2 ring-accent-400 ring-offset-1 ring-offset-ink-850 scale-110 z-10',
  );

  if (!interactive) {
    return (
      <div className={base} title={`Day ${day} — ${status}`}>
        {showNumber ? day : ''}
      </div>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base} title={`Day ${day} — ${status}`} aria-pressed={selected}>
      {showNumber ? day : ''}
    </button>
  );
}
