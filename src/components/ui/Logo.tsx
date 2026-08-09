import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

export function Logo({ to = '/', compact = false }: { to?: string; compact?: boolean }) {
  return (
    <Link to={to} className="flex items-center gap-2 tap-highlight-none">
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 shadow-pop">
        <Flame className="h-4.5 w-4.5 text-ink-950" strokeWidth={2.5} />
      </div>
      {!compact && (
        <span className="text-lg font-extrabold tracking-tight text-paper-50">
          AB<span className="text-accent-500">Talks</span>
        </span>
      )}
    </Link>
  );
}
