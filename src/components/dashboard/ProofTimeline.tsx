import { Github, Linkedin, ArrowRight, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { ProofEntry } from '@/data/mockData';

interface ProofTimelineProps {
  entries: ProofEntry[];
  onViewJourney: () => void;
  limit?: number;
}

export function ProofTimeline({ entries, onViewJourney, limit }: ProofTimelineProps) {
  const shown = limit ? entries.slice(0, limit) : entries;

  return (
    <Card className="p-5 animate-fade-up" style={{ animationDelay: '0.32s' }}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-paper-50">My Proof of Work</h3>
        <Badge variant="outline">{entries.length} builds</Badge>
      </div>

      <ol className="mt-4 relative space-y-0">
        {shown.map((entry, i) => (
          <li key={entry.day} className="relative flex gap-3.5 pb-4 last:pb-0">
            {/* timeline rail */}
            {i < shown.length - 1 && (
              <span className="absolute left-[11px] top-7 bottom-0 w-px bg-ink-700" />
            )}
            <span className={`relative z-10 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 ${
              i === 0 ? 'border-accent-500 bg-accent-500/20' : 'border-ink-600 bg-ink-850'
            }`}>
              {i === 0 && <span className="h-2 w-2 rounded-full bg-accent-500" />}
            </span>

            <div className="flex-1 rounded-xl border border-ink-700/60 bg-ink-800/40 p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-accent-400">DAY {entry.day}</span>
                <span className="flex items-center gap-1 text-[10px] text-paper-300/60">
                  <Clock className="h-3 w-3" /> {entry.date}
                </span>
              </div>
              <p className="mt-1 text-sm font-bold leading-tight text-paper-50">{entry.title}</p>
              <div className="mt-2 flex items-center gap-2">
                <span
                  className={`flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                    entry.github ? 'bg-success-500/15 text-success-400' : 'bg-ink-700/50 text-paper-300/40'
                  }`}
                >
                  <Github className="h-3 w-3" /> {entry.github ? 'GitHub' : 'no GitHub'}
                </span>
                <span
                  className={`flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${
                    entry.linkedin ? 'bg-success-500/15 text-success-400' : 'bg-ink-700/50 text-paper-300/40'
                  }`}
                >
                  <Linkedin className="h-3 w-3" /> {entry.linkedin ? 'LinkedIn' : 'no LinkedIn'}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <Button variant="secondary" fullWidth className="mt-3" onClick={onViewJourney}>
        View My Journey <ArrowRight className="h-4 w-4" />
      </Button>
    </Card>
  );
}
