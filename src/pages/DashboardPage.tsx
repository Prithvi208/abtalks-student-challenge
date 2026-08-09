import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Bell,
  Flame,
  ArrowRight,
  Clock,
  Trophy,
  Rocket,
  Code2,
  Play,
} from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { JourneyTimeline } from '@/components/dashboard/JourneyTimeline';
import { MomentumCard } from '@/components/dashboard/MomentumCard';
import { RecoverySection } from '@/components/dashboard/RecoverySection';
import { MomentumSummary } from '@/components/dashboard/MomentumSummary';
import { ProofTimeline } from '@/components/dashboard/ProofTimeline';
import { ConsistencyTrend } from '@/components/dashboard/ConsistencyTrend';
import {
  firstDayStudent,
  missedDayStudent,
  emptyStudent,
  protectedStudent,

  getProjectsShipped,
  getProofTimeline,
  getTodayChallenge,
  getGamePlan,
} from '@/data/mockData';
import type { Achievement, Student } from '@/data/mockData';
import { getOnboardedStudent } from '@/lib/storage';

const achievementIcons = {
  flame: Flame,
  rocket: Rocket,
  code: Code2,
  trophy: Trophy,
};

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

function studentForState(stateParam: string | null): Student {
  if (stateParam === 'first') return firstDayStudent;
  if (stateParam === 'missed') return missedDayStudent;
  if (stateParam === 'empty') return emptyStudent;
  if (stateParam === 'protected') return protectedStudent;
  return getOnboardedStudent();
}

export function DashboardPage() {
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [params] = useSearchParams();
  const stateParam = params.get('state');
  const baseStudent = studentForState(stateParam);

  // Local state for momentum features (connected, not isolated)
  const [s, setS] = useState<Student>(baseStudent);
  const [recoveryActive, setRecoveryActive] = useState(baseStudent.momentumState === 'recovery');

  const today = useMemo(() => getTodayChallenge(s), [s]);
  const proofEntries = useMemo(() => getProofTimeline(s), [s]);
  const gamePlan = useMemo(() => getGamePlan(today), [today]);
  const totalMinutes = useMemo(
    () => gamePlan.reduce((sum, g) => sum + g.minutes, 0),
    [gamePlan],
  );
  const completionPct = s.completion;
  const projectsShipped = useMemo(() => getProjectsShipped(s), [s]);

  return (
    <div className="min-h-screen bg-ink-950 pb-16">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-radial-glow" />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-ink-700/40 bg-ink-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-3.5">
          <Logo />
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <button
                onClick={() => setNotifOpen((v) => !v)}
                className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-paper-200 transition-colors hover:text-paper-50 active:scale-95"
                aria-label="Notifications"
              >
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-12 z-50 w-64 animate-scale-in rounded-xl border border-ink-700 bg-ink-850 p-3 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-wider text-paper-300/60">
                    Notifications
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="rounded-lg bg-ink-800 p-2.5 text-sm text-paper-200">
                      <span className="font-semibold text-accent-400">Day {s.currentDay} is live.</span> {today?.title ?? 'Your next build'} tonight.
                    </div>
                    <div className="rounded-lg bg-ink-800 p-2.5 text-sm text-paper-200">
                      You're in the top 18% this week. Keep going.
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 text-xs font-bold text-ink-950">
              {s.avatarInitials || 'AB'}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-2xl px-5 pt-6">
        {/* Greeting */}
        <div className="animate-fade-up">
          {s.name ? (
            <>
              <p className="text-sm text-paper-300">{greeting()}, {s.name} 👋</p>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-paper-50">
                Ready to build Day {s.currentDay}?
              </h1>
            </>
          ) : (
            <>
              <p className="text-sm text-paper-300">Welcome to ABTalks 👋</p>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-paper-50">
                Let's set up your challenge.
              </h1>
            </>
          )}
        </div>

        {/* Momentum / Streak / Freeze / Recovery — state-aware main card */}
        {s.currentDay > 0 && (
          <div className="mt-5">
            <MomentumCard
              student={s}
              stateParam={stateParam}
              onUseFreeze={() =>
                setS((prev) => ({ ...prev, streakFreezeAvailable: 0, streakFreezeUsed: true, momentumState: 'protected' }))
              }
              onEnterRecovery={() => {
                setRecoveryActive(true);
                setS((prev) => ({ ...prev, momentumState: 'recovery' }));
              }}
            />
          </div>
        )}

        {/* Recovery Mode section */}
        {recoveryActive && (
          <div className="mt-4">
            <RecoverySection
              student={s}
              active={recoveryActive}
              onCompleteOne={() =>
                setS((prev) => {
                  const next = { ...prev, recoveryProgress: Math.min(prev.recoveryProgress + 1, prev.recoveryTotal) };
                  if (next.recoveryProgress >= next.recoveryTotal) {
                    next.momentumState = 'active';
                    next.streak = 1;
                  }
                  return next;
                })
              }
            />
          </div>
        )}

        {/* Today's task */}
        <Card hover className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between">
            <Badge variant="accent">DAY {s.currentDay}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-paper-300">
              <Clock className="h-3.5 w-3.5" /> {today?.estimatedTime ?? '~45 min'}
            </span>
          </div>
          <h2 className="mt-3 text-xl font-bold leading-snug text-paper-50">{today?.title ?? 'Start your first build'}</h2>
          <p className="mt-2 text-sm leading-relaxed text-paper-300">{today?.description ?? 'Your first challenge will appear here once you start.'}</p>
          {s.currentDay > 0 ? (
            <Button to={`/day/${s.currentDay}`} size="md" fullWidth className="mt-4">
              Continue Day {s.currentDay} <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button to="/day/1" size="md" fullWidth className="mt-4">
              Start Day 1 <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </Card>

        {/* Progress */}
        {s.currentDay > 0 && (
          <Card className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-paper-200">Day {s.currentDay} of 60</span>
              <span className="font-mono font-bold text-accent-500">{completionPct}% complete</span>
            </div>
            <ProgressBar value={completionPct} className="mt-3" label={`${completionPct}%`} />
          </Card>
        )}

        {/* Consistency Trend */}
        {s.currentDay > 0 && <ConsistencyTrend />}

        {/* Journey Timeline — interactive 60-day grid + day details */}
        {s.currentDay > 0 && <JourneyTimeline student={s} />}

        {/* Momentum summary */}
        {s.currentDay > 0 && <MomentumSummary student={s} />}

        {/* Standing + achievements */}
        {s.currentDay > 0 && (
          <Card className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            {s.standing ? (
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15">
                  <Trophy className="h-5 w-5 text-accent-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-paper-300/60">Current standing</p>
                  <p className="text-base font-bold text-paper-50">{s.standing}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15">
                  <Trophy className="h-5 w-5 text-accent-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-paper-300/60">Current standing</p>
                  <p className="text-base font-bold text-paper-50">Play your first day to get ranked.</p>
                </div>
              </div>
            )}

            {s.achievements.length > 0 ? (
              <div className="mt-4 grid grid-cols-3 gap-2">
                {s.achievements.map((a: Achievement) => {
                  const Icon = achievementIcons[a.icon];
                  return (
                    <div
                      key={a.label}
                      className="rounded-xl border border-ink-700 bg-ink-800/60 p-3 text-center"
                    >
                      <Icon className="mx-auto h-5 w-5 text-accent-500" />
                      <p className="mt-1.5 text-[11px] font-semibold leading-tight text-paper-200">{a.label}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="mt-4 rounded-xl border border-dashed border-ink-700 p-3 text-center text-xs text-paper-300/60">
                No achievements yet. Complete a few days to start collecting them.
              </p>
            )}
          </Card>
        )}

        {/* Proof of Work timeline */}
        {s.currentDay > 0 && (
          <ProofTimeline
            entries={proofEntries}
            onViewJourney={() => navigate('/journey')}
            limit={4}
          />
        )}

        {/* Tonight's Game Plan */}
        {gamePlan.length > 0 && (
          <Card glow className="mt-4 overflow-hidden p-5 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold text-paper-50">
                  <span className="text-accent-500">Tonight's</span> Game Plan
                </h3>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-paper-300">
                  <Clock className="h-3.5 w-3.5" /> ~{totalMinutes} min total
                </p>
              </div>
              <Badge variant="outline">late night build</Badge>
            </div>

            <ol className="mt-4 space-y-2">
              {gamePlan.map((step, i) => (
                <li
                  key={step.label}
                  className="flex items-center gap-3 rounded-xl border border-ink-700/60 bg-ink-800/40 p-3"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-ink-700 font-mono text-xs font-bold text-accent-400">
                    {i + 1}
                  </span>
                  <span className="flex-1 text-sm font-medium text-paper-100">{step.label}</span>
                  <span className="font-mono text-xs text-paper-300/70">{step.minutes} min</span>
                </li>
              ))}
            </ol>

            <Button
              onClick={() => navigate(s.currentDay ? `/day/${s.currentDay}` : '/day/1')}
              size="lg"
              fullWidth
              className="mt-4"
            >
              <Play className="h-4 w-4" /> {s.currentDay ? `Start Day ${s.currentDay}` : 'Start Day 1'}
            </Button>
          </Card>
        )}

      </main>
    </div>
  );
}
