import { Flame, Rocket, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { getProjectsShipped } from '@/data/mockData';
import type { Student } from '@/data/mockData';

interface MomentumSummaryProps {
  student: Student;
}

export function MomentumSummary({ student: s }: MomentumSummaryProps) {
  const projectsShipped = getProjectsShipped(s);
  const metrics = [
    { icon: Flame, label: 'Current streak', value: `${s.streak} days`, accent: 'text-accent-500' },
    { icon: Rocket, label: 'Projects shipped', value: `${projectsShipped}`, accent: 'text-success-500' },
    { icon: TrendingUp, label: 'Challenge progress', value: `${s.completion}%`, accent: 'text-accent-400' },
  ];

  const message =
    s.completion >= 50
      ? 'You\u2019re past the halfway mark. The finish line is closer than it feels.'
      : s.completion > 0
        ? `You\u2019ve already built ${projectsShipped} project${projectsShipped === 1 ? '' : 's'} in ${s.currentDay} day${s.currentDay === 1 ? '' : 's'}. That\u2019s more than most people build in a month.`
        : 'Every streak starts with Day 1. Take the first step tonight.';

  return (
    <Card className="p-5 animate-fade-up" style={{ animationDelay: '0.28s' }}>
      <h3 className="text-sm font-bold text-paper-50">Your Momentum</h3>
      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="rounded-xl border border-ink-700/60 bg-ink-800/40 p-3 text-center">
              <Icon className={`mx-auto h-5 w-5 ${m.accent}`} />
              <p className="mt-1.5 text-base font-extrabold text-paper-50">{m.value}</p>
              <p className="text-[10px] font-medium leading-tight text-paper-300/70">{m.label}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-3.5 rounded-xl bg-accent-500/10 px-3.5 py-2.5 text-center text-xs font-medium leading-relaxed text-accent-400">
        {message}
      </p>
    </Card>
  );
}
