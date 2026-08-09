import { useState } from 'react';
import {
  Calendar,
  Clock,
  Target,
  CheckCircle2,
  XCircle,
  CalendarClock,
  Github,
  Linkedin,
  Tag,
  Lightbulb,
  CircleDot,
  Hammer,
  Timer,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { DayCell } from '@/components/ui/DayCell';
import { cn } from '@/lib/utils';
import { challengeDays, dayDetails } from '@/data/mockData';
import type { ChallengeDay, DayDetail, Student } from '@/data/mockData';

interface JourneyTimelineProps {
  student: Student;
}

function getDayDetail(day: number): DayDetail | null {
  return dayDetails[day] ?? null;
}

export function JourneyTimeline({ student }: JourneyTimelineProps) {
  const [selectedDay, setSelectedDay] = useState<number>(student.currentDay || 1);

  const cd = challengeDays.find((d) => d.day === selectedDay) ?? challengeDays[0];
  const detail = getDayDetail(selectedDay);
  const isCompleted = cd.status === 'completed';
  const isMissed = cd.status === 'missed';
  const isUpcoming = cd.status === 'upcoming' || cd.status === 'current';

  return (
    <Card className="mt-4 p-4 sm:p-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-paper-200">Journey Timeline</h3>
        <span className="text-xs text-paper-300/60">{student.completedDays.length} done · tap a day</span>
      </div>

      {/* 60-day grid — clickable, scrollable on mobile to prevent overflow */}
      <div className="mt-3 grid grid-cols-10 gap-1 sm:gap-1.5">
        {challengeDays.map((d) => (
          <DayCell
            key={d.day}
            day={d.day}
            status={d.status}
            interactive
            selected={selectedDay === d.day}
            onClick={() => setSelectedDay(d.day)}
          />
        ))}
      </div>

      {/* Day Details Panel */}
      <div className="mt-4 border-t border-ink-700/50 pt-4">
        <DayDetailsPanel
          day={selectedDay}
          detail={detail}
          challengeDay={cd}
          isCompleted={isCompleted}
          isMissed={isMissed}
          isUpcoming={isUpcoming}
        />
      </div>
    </Card>
  );
}

function DayDetailsPanel({
  day,
  detail,
  challengeDay,
  isCompleted,
  isMissed,
  isUpcoming,
}: {
  day: number;
  detail: DayDetail | null;
  challengeDay: ChallengeDay;
  isCompleted: boolean;
  isMissed: boolean;
  isUpcoming: boolean;
}) {
  return (
    <div key={day} className="animate-fade-in">
      {/* Header row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <Badge variant="accent">DAY {day}</Badge>
          {detail && (
            <span className="flex items-center gap-1.5 text-xs text-paper-300/60">
              <Calendar className="h-3.5 w-3.5" /> {detail.date}
            </span>
          )}
        </div>
        <StatusBadge status={challengeDay.status} />
      </div>

      {/* Missed day state */}
      {isMissed && (
        <div className="mt-4 rounded-xl border border-danger-500/30 bg-danger-500/5 p-4">
          <div className="flex items-start gap-3">
            <XCircle className="h-5 w-5 flex-shrink-0 text-danger-500" />
            <div>
              <p className="text-sm font-bold text-paper-100">Missed Day</p>
              <p className="mt-0.5 text-sm text-paper-300">No proof submitted.</p>
            </div>
          </div>
          <p className="mt-3 rounded-lg bg-ink-800/50 px-3 py-2.5 text-xs leading-relaxed text-paper-300/80">
            That's okay — your progress is still here. Pick up where you left off.
          </p>
        </div>
      )}

      {/* Upcoming day state — no fake data */}
      {isUpcoming && (
        <div className="mt-4 rounded-xl border border-ink-700 bg-ink-800/40 p-4">
          <div className="flex items-start gap-3">
            <CalendarClock className="h-5 w-5 flex-shrink-0 text-paper-300/50" />
            <div>
              <p className="text-sm font-bold text-paper-100">Upcoming</p>
              <p className="mt-0.5 text-sm text-paper-300">No activity recorded yet.</p>
            </div>
          </div>
        </div>
      )}

      {/* Completed day detail */}
      {detail && isCompleted && (
        <div className="mt-4 space-y-4">
          {/* Mission */}
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-paper-300/50">
              <Target className="h-3 w-3" /> Mission
            </p>
            <p className="mt-1 text-sm font-bold text-paper-50">{detail.mission}</p>
          </div>

          {/* Task */}
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-paper-300/50">
              <Hammer className="h-3 w-3" /> Task
            </p>
            <p className="mt-1 text-sm leading-relaxed text-paper-200">{detail.task}</p>
          </div>

          {/* Time spent — single compact card */}
          <div className="rounded-xl border border-ink-700 bg-ink-800/40 p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-medium text-paper-300/50">
              <Timer className="h-3 w-3" /> Time spent
            </p>
            <p className="mt-1 text-sm font-bold text-accent-400">{detail.actualTime} min</p>
          </div>

          {/* What you built */}
          {detail.workCompleted.length > 0 && (
            <div>
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-paper-300/50">
                <CheckCircle2 className="h-3 w-3 text-success-500" /> What you built
              </p>
              <ul className="mt-2 space-y-1.5">
                {detail.workCompleted.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm text-paper-200">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology tags */}
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-paper-300/50">
              <Tag className="h-3 w-3" /> Technologies
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {detail.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-ink-700 bg-ink-800/60 px-2 py-0.5 font-mono text-[11px] text-paper-300/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Proof — GitHub + LinkedIn, stacks on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ProofBox
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value={`${detail.githubCommits} commit${detail.githubCommits === 1 ? '' : 's'}`}
            />
            <ProofBox
              icon={<Linkedin className="h-4 w-4 text-[#0A66C2]" />}
              label="LinkedIn"
              value={`${detail.linkedinPosts} post${detail.linkedinPosts === 1 ? '' : 's'}`}
            />
          </div>

          {/* What you learned */}
          <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-3.5">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent-400">
              <Lightbulb className="h-3 w-3" /> What you learned
            </p>
            <p className="mt-1.5 text-sm italic leading-relaxed text-paper-100">"{detail.learning}"</p>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    completed: { label: 'Completed', cls: 'bg-success-500/15 text-success-400 border-success-500/30' },
    current: { label: 'In Progress', cls: 'bg-accent-500/15 text-accent-400 border-accent-500/30' },
    missed: { label: 'Missed', cls: 'bg-danger-500/15 text-danger-400 border-danger-500/30' },
    upcoming: { label: 'Upcoming', cls: 'bg-ink-800 text-paper-300/60 border-ink-700' },
  };
  const s = map[status] ?? map.upcoming;
  return (
    <span className={cn('flex-shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-semibold', s.cls)}>
      {s.label}
    </span>
  );
}

function ProofBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-ink-700 bg-ink-800/40 p-3">
      <p className="flex items-center gap-1.5 text-[11px] font-medium text-paper-300/50">
        {icon} {label}
      </p>
      <p className="text-sm font-bold text-paper-50">{value}</p>
    </div>
  );
}
