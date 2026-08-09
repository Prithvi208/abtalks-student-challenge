import { useState } from 'react';
import {
  Flame,
  Shield,
  LifeBuoy,
  Sparkles,
  Info,
  Clock,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { DayCell } from '@/components/ui/DayCell';
import type { Student, MomentumState } from '@/data/mockData';
import { challengeDays } from '@/data/mockData';

interface MomentumCardProps {
  student: Student;
  stateParam: string | null;
  onUseFreeze: () => void;
  onEnterRecovery: () => void;
}

const stateConfig: Record<
  MomentumState,
  { label: string; sub: string; icon: typeof Flame; accent: string }
> = {
  active: {
    label: 'day streak',
    sub: 'Keep your momentum going.',
    icon: Flame,
    accent: 'text-accent-500',
  },
  protected: {
    label: 'Streak protected',
    sub: 'Your Streak Freeze protected yesterday.',
    icon: Shield,
    accent: 'text-success-500',
  },
  recovery: {
    label: "You're in Recovery Mode",
    sub: 'Complete today\u2019s task to get back on track.',
    icon: LifeBuoy,
    accent: 'text-accent-400',
  },
};

export function MomentumCard({ student: s, stateParam, onUseFreeze, onEnterRecovery }: MomentumCardProps) {
  const [showFreezeInfo, setShowFreezeInfo] = useState(false);
  const [showFreezeConfirm, setShowFreezeConfirm] = useState(false);
  const [freezeApplied, setFreezeApplied] = useState(s.streakFreezeUsed);
  const [recoveryActive, setRecoveryActive] = useState(s.momentumState === 'recovery');

  const config = stateConfig[recoveryActive ? 'recovery' : freezeApplied ? 'protected' : s.momentumState];
  const Icon = config.icon;

  return (
    <>
      <Card glow className="overflow-hidden p-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        <div className="flex items-start justify-between">
          <div>
            <p className="flex items-center gap-2">
              <Icon className={`h-7 w-7 ${config.accent}`} />
              {!recoveryActive && !freezeApplied && (
                <>
                  <span className="text-3xl font-extrabold text-paper-50">{s.streak}</span>
                  <span className="text-sm font-medium text-paper-300">{config.label}</span>
                </>
              )}
              {(recoveryActive || freezeApplied) && (
                <span className="text-xl font-extrabold text-paper-50">{config.label}</span>
              )}
            </p>
            <p className="mt-1.5 text-sm text-paper-300">
              {recoveryActive
                ? 'You missed a day. That\u2019s okay. Your 60-day challenge isn\u2019t over.'
                : freezeApplied
                  ? 'Your streak was protected.'
                  : stateParam === 'missed'
                    ? 'Yesterday was missed. Your new streak starts today.'
                    : s.streak > 0
                      ? `1 more day to reach ${s.streak + 1}.`
                      : 'Your streak starts today.'}
            </p>
          </div>
          <Badge variant={recoveryActive ? 'accent' : 'success'}>
            <Sparkles className="h-3 w-3" /> {recoveryActive ? 'recovering' : 'alive'}
          </Badge>
        </div>

        {/* Streak freeze row */}
        {!recoveryActive && (
          <div className="mt-4 flex items-center justify-between rounded-xl border border-ink-700/60 bg-ink-800/40 px-3.5 py-2.5">
            <div className="flex items-center gap-2.5">
              <Shield className={`h-4.5 w-4.5 ${freezeApplied ? 'text-success-500' : 'text-paper-300'}`} />
              <div>
                <p className="text-sm font-semibold text-paper-100">
                  {freezeApplied ? 'Streak Freeze used' : `${s.streakFreezeAvailable} Streak Freeze available`}
                </p>
                <p className="text-[11px] text-paper-300/60">
                  {freezeApplied ? 'Your streak was protected.' : 'A limited safety net for busy days.'}
                </p>
              </div>
            </div>
            {!freezeApplied && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setShowFreezeInfo(true)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-paper-300 transition-colors hover:bg-ink-700 hover:text-paper-50"
                  aria-label="How Streak Freeze works"
                >
                  <Info className="h-4 w-4" />
                </button>
                {stateParam === 'missed' && (
                  <button
                    onClick={() => setShowFreezeConfirm(true)}
                    className="rounded-lg bg-accent-500/15 px-3 py-1.5 text-xs font-bold text-accent-400 transition-colors hover:bg-accent-500/25"
                  >
                    Protect My Streak
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Recovery CTA */}
        {recoveryActive && (
          <div className="mt-4 rounded-xl border border-accent-500/30 bg-accent-500/10 p-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="flex items-center gap-1.5 rounded-lg bg-danger-500/15 px-2.5 py-1 text-xs font-bold text-danger-400">
                <span className="h-2 w-2 rounded-full bg-danger-500" /> Yesterday — Day {s.currentDay - 1} missed
              </span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-success-400">
              <span className="h-2 w-2 rounded-full bg-success-500" /> Today — Day {s.currentDay} current
            </div>
            <ol className="mt-3 space-y-1.5 text-sm text-paper-200">
              <li className="flex items-center gap-2"><span className="font-mono text-accent-400">1.</span> Complete Day {s.currentDay - 1}</li>
              <li className="flex items-center gap-2"><span className="font-mono text-accent-400">2.</span> Complete Day {s.currentDay}</li>
              <li className="flex items-center gap-2"><span className="font-mono text-accent-400">3.</span> Get back on track</li>
            </ol>
            <Button
              size="sm"
              fullWidth
              className="mt-3"
              onClick={() => {
                setRecoveryActive(false);
                onEnterRecovery();
              }}
            >
              <LifeBuoy className="h-4 w-4" /> Enter Recovery Mode
            </Button>
          </div>
        )}

        <div
          className="mt-4 grid gap-1"
          style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
        >
          {challengeDays.slice(0, 14).map((d) => (
            <DayCell key={d.day} day={d.day} status={d.status} />
          ))}
        </div>
      </Card>

      {/* How it works modal */}
      <Modal open={showFreezeInfo} onClose={() => setShowFreezeInfo(false)}>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15">
            <Shield className="h-5.5 w-5.5 text-accent-500" />
          </div>
          <h3 className="text-lg font-bold text-paper-50">How Streak Freeze works</h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-paper-300">
          Use a Streak Freeze once when you miss a day. Your streak stays protected, but the missed day is still recorded.
        </p>
        <p className="mt-3 text-xs text-paper-300/60">
          It's a limited safety net for exams, assignments, or rough days — not something to rely on. You get one freeze per challenge.
        </p>
        <Button fullWidth className="mt-5" onClick={() => setShowFreezeInfo(false)}>
          Got it
        </Button>
      </Modal>

      {/* Confirm freeze modal */}
      <Modal open={showFreezeConfirm} onClose={() => setShowFreezeConfirm(false)}>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15">
            <Shield className="h-5.5 w-5.5 text-accent-500" />
          </div>
          <h3 className="text-lg font-bold text-paper-50">Use your Streak Freeze?</h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-paper-200">
          Your <span className="font-bold text-accent-400">{s.streak}-day streak</span> will remain intact. The missed day stays recorded, but your streak won't reset.
        </p>
        <div className="mt-5 flex gap-2.5">
          <Button variant="secondary" fullWidth onClick={() => setShowFreezeConfirm(false)}>
            Not Now
          </Button>
          <Button
            fullWidth
            onClick={() => {
              setFreezeApplied(true);
              setShowFreezeConfirm(false);
              onUseFreeze();
            }}
          >
            <Shield className="h-4 w-4" /> Use Freeze
          </Button>
        </div>
      </Modal>
    </>
  );
}
