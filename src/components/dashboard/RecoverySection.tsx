import { LifeBuoy, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import type { Student } from '@/data/mockData';

interface RecoverySectionProps {
  student: Student;
  active: boolean;
  onCompleteOne: () => void;
}

export function RecoverySection({ student: s, active, onCompleteOne }: RecoverySectionProps) {
  if (!active) return null;
  const progress = s.recoveryProgress;
  const total = s.recoveryTotal;

  return (
    <Card glow className="overflow-hidden p-5 animate-scale-in" style={{ borderColor: 'rgba(255,138,0,0.3)' }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15">
            <LifeBuoy className="h-5 w-5 text-accent-500" />
          </div>
          <div>
            <h3 className="text-base font-bold text-paper-50">Recovery Mode</h3>
            <p className="flex items-center gap-1.5 text-xs text-paper-300">
              <Clock className="h-3.5 w-3.5" /> 48 hours to get back on track
            </p>
          </div>
        </div>
        <Badge variant="accent">active</Badge>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-paper-200">Recovery progress</span>
          <span className="font-mono font-bold text-accent-500">{progress} / {total} days complete</span>
        </div>
        <ProgressBar value={progress} max={total} className="mt-2.5" />
      </div>

      <ol className="mt-4 space-y-2">
        {[s.currentDay - 1, s.currentDay].map((day, i) => {
          const done = i < progress;
          return (
            <li
              key={day}
              className={`flex items-center gap-3 rounded-xl border p-3 transition-colors ${
                done ? 'border-success-500/30 bg-success-500/10' : 'border-ink-700/60 bg-ink-800/40'
              }`}
            >
              {done ? (
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-500" />
              ) : (
                <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent-500 font-mono text-[10px] font-bold text-accent-500">
                  {i + 1}
                </span>
              )}
              <span className={`flex-1 text-sm font-medium ${done ? 'text-paper-100 line-through decoration-paper-300/40' : 'text-paper-100'}`}>
                Complete Day {day}
              </span>
              {!done && (
                <button
                  onClick={onCompleteOne}
                  className="rounded-lg bg-accent-500/15 px-2.5 py-1 text-xs font-bold text-accent-400 transition-colors hover:bg-accent-500/25"
                >
                  Mark done
                </button>
              )}
            </li>
          );
        })}
      </ol>

      <p className="mt-4 rounded-xl bg-ink-800/60 p-3 text-center text-xs text-paper-300">
        {progress >= total
          ? "You're back on track. Your streak continues from here."
          : 'You\u2019ve got this. Two focused builds and your momentum is back.'}
      </p>

      {progress < total && (
        <Button to={`/day/${s.currentDay - 1}`} size="md" fullWidth className="mt-3">
          Continue Recovery <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </Card>
  );
}
