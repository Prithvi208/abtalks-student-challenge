import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, Clock, Flame, Rocket, FileCheck2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { student, getProofTimeline, getProjectsShipped } from '@/data/mockData';

export function JourneyPage() {
  const entries = getProofTimeline(student);
  const projectsShipped = getProjectsShipped(student);
  const proofsSubmitted = entries.reduce((acc, e) => acc + (e.github ? 1 : 0) + (e.linkedin ? 1 : 0), 0);

  const stats = [
    { icon: Flame, label: 'Days', value: `${student.currentDay}` },
    { icon: Rocket, label: 'Projects', value: `${projectsShipped}` },
    { icon: FileCheck2, label: 'Proofs Submitted', value: `${proofsSubmitted}` },
  ];

  return (
    <div className="min-h-screen bg-ink-950 pb-20">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-radial-glow" />

      <header className="sticky top-0 z-40 border-b border-ink-700/40 bg-ink-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-3.5">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-paper-200 transition-colors hover:text-paper-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <span className="text-sm font-bold text-paper-50">My Journey</span>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-2xl px-5 pt-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2.5 animate-fade-up">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.label} className="p-4 text-center">
                <Icon className="mx-auto h-5 w-5 text-accent-500" />
                <p className="mt-2 text-2xl font-extrabold text-paper-50">{s.value}</p>
                <p className="text-[10px] font-medium leading-tight text-paper-300/70">{s.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Full timeline */}
        <Card className="mt-5 p-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
          <h2 className="text-sm font-bold text-paper-50">Proof of Work Timeline</h2>
          <ol className="mt-4 relative space-y-0">
            {entries.map((entry, i) => (
              <li key={entry.day} className="relative flex gap-3.5 pb-4 last:pb-0">
                {i < entries.length - 1 && (
                  <span className="absolute left-[11px] top-7 bottom-0 w-px bg-ink-700" />
                )}
                <span className="relative z-10 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-accent-500/50 bg-accent-500/10">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                </span>
                <div className="flex-1 rounded-xl border border-ink-700/60 bg-ink-800/40 p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-accent-400">DAY {entry.day}</span>
                    <span className="flex items-center gap-1 text-[10px] text-paper-300/60">
                      <Clock className="h-3 w-3" /> {entry.date}
                    </span>
                  </div>
                  <p className="mt-1.5 text-base font-bold leading-tight text-paper-50">{entry.title}</p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span
                      className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                        entry.github ? 'bg-success-500/15 text-success-400' : 'bg-ink-700/50 text-paper-300/40'
                      }`}
                    >
                      <Github className="h-3 w-3" /> {entry.github ? 'GitHub submitted' : 'no GitHub'}
                    </span>
                    <span
                      className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                        entry.linkedin ? 'bg-success-500/15 text-success-400' : 'bg-ink-700/50 text-paper-300/40'
                      }`}
                    >
                      <Linkedin className="h-3 w-3" /> {entry.linkedin ? 'LinkedIn shared' : 'no LinkedIn'}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Card>

        <Button to="/dashboard" variant="secondary" fullWidth className="mt-5">
          Back to Dashboard
        </Button>
      </main>
    </div>
  );
}
