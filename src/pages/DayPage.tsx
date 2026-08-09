import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Circle,
  Github,
  Linkedin,
  ExternalLink,
  PartyPopper,
  Flame,
  ListChecks,
  Target,
  BookOpen,
  Send,
  Loader2,
  Check,
  Hammer,
  Sparkles,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getChallenge, student } from '@/data/mockData';

type VerifyState = 'idle' | 'verifying' | 'verified';

export function DayPage() {
  const { id } = useParams();
  const dayNum = Number(id) || 1;
  const day = getChallenge(dayNum);

  const [checklist, setChecklist] = useState<boolean[]>(
    day ? day.checklist.map(() => false) : [],
  );
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [githubState, setGithubState] = useState<VerifyState>('idle');
  const [linkedinState, setLinkedinState] = useState<VerifyState>('idle');
  const [submitted, setSubmitted] = useState(false);

  const allChecked = checklist.every(Boolean);
  const proofReady = githubState === 'verified' || linkedinState === 'verified';

  function toggle(i: number) {
    setChecklist((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  function verify(setter: (s: VerifyState) => void, value: string) {
    if (!value.trim()) return;
    setter('verifying');
    setTimeout(() => setter('verified'), 1100);
  }

  if (!day) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-5 text-center">
        <p className="text-lg font-bold text-paper-50">Day {dayNum} not found</p>
        <p className="mt-2 text-sm text-paper-300">This day isn't part of the 60-day challenge yet.</p>
        <Button to="/dashboard" className="mt-6">Back to Dashboard</Button>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ink-950 px-5 text-center">
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
        <div className="relative animate-pop">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-accent-500/15">
            <PartyPopper className="h-10 w-10 text-accent-500" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-paper-50">
            Day {dayNum} complete!
          </h1>
          <p className="mt-3 flex items-center justify-center gap-2 text-paper-300">
            <Flame className="h-5 w-5 text-accent-500" />
            Your {student.streak + 1}-day streak is alive.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button to="/dashboard" size="lg">
              Back to Dashboard
            </Button>
            <Button
              to={`/day/${Math.min(dayNum + 1, 60)}`}
              variant="outline"
              size="lg"
            >
              Start Day {Math.min(dayNum + 1, 60)}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-950 pb-20">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-radial-glow" />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-ink-700/40 bg-ink-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-3.5">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-paper-200 transition-colors hover:text-paper-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <Badge variant="accent" className="font-mono">
            DAY {dayNum} / 60
          </Badge>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-2xl px-5 pt-6">
        {/* Task */}
        <div className="animate-fade-up">
          <h1 className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-paper-50 sm:text-3xl">
            {day.title}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-paper-300">{day.description}</p>
          <div className="mt-4 flex items-center gap-2">
            <Badge variant="outline">
              <Clock className="h-3 w-3" /> {day.estimatedTime}
            </Badge>
          </div>
        </div>

        {/* What you're building */}
        <Card className="mt-5 p-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
          <h2 className="flex items-center gap-2 text-base font-bold text-paper-50">
            <Hammer className="h-4.5 w-4.5 text-accent-500" /> What you're building
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-paper-200">{day.whatToBuild}</p>
          <h3 className="mt-4 flex items-center gap-2 text-sm font-bold text-paper-50">
            <ListChecks className="h-4 w-4 text-accent-500" /> Checklist
          </h3>
          <ul className="mt-3 space-y-2.5">
            {day.checklist.map((item, i) => (
              <li key={item}>
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-ink-800/60 active:scale-[0.99]"
                >
                  {checklist[i] ? (
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-500" />
                  ) : (
                    <Circle className="h-5 w-5 flex-shrink-0 text-paper-300/40" />
                  )}
                  <span
                    className={`text-sm transition-colors ${
                      checklist[i] ? 'font-semibold text-paper-50 line-through decoration-paper-300/40' : 'text-paper-200'
                    }`}
                  >
                    {item}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Card>

        {/* Suggested steps */}
        <Card className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.08s' }}>
          <h2 className="flex items-center gap-2 text-base font-bold text-paper-50">
            <Sparkles className="h-4.5 w-4.5 text-accent-500" /> Suggested steps
          </h2>
          <ol className="mt-4 space-y-2.5">
            {day.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-ink-700 font-mono text-xs font-bold text-accent-400">
                  {i + 1}
                </span>
                <span className="text-sm text-paper-200">{step}</span>
              </li>
            ))}
          </ol>
        </Card>

        {/* Success criteria */}
        <Card className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="flex items-center gap-2 text-base font-bold text-paper-50">
            <Target className="h-4.5 w-4.5 text-accent-500" /> Success criteria
          </h2>
          <ul className="mt-4 space-y-2">
            {day.successCriteria.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-paper-200">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success-500" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Resources */}
        {day.resources.length > 0 && (
          <Card className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <h2 className="flex items-center gap-2 text-base font-bold text-paper-50">
              <BookOpen className="h-4.5 w-4.5 text-accent-500" /> Helpful resources
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {day.resources.map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-800/60 px-3.5 py-2.5 text-sm font-medium text-paper-100 transition-all hover:border-accent-500/50 hover:text-accent-400 active:scale-95"
                >
                  {r.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </Card>
        )}

        {/* Proof of Work */}
        <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg font-extrabold tracking-tight text-paper-50">Show your work</h2>
          <p className="mt-1.5 text-sm text-paper-300">
            Your streak counts when you submit proof of what you built.
          </p>
        </div>

        {/* GitHub */}
        <Card className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          <label className="flex items-center gap-2 text-sm font-bold text-paper-50">
            <Github className="h-4.5 w-4.5" /> GitHub submission
          </label>
          <p className="mt-1 text-xs text-paper-300/70">Paste your GitHub repository or commit URL.</p>
          <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
            <input
              type="url"
              inputMode="url"
              placeholder="https://github.com/you/your-repo"
              value={githubUrl}
              onChange={(e) => {
                setGithubUrl(e.target.value);
                setGithubState('idle');
              }}
              className="flex-1 rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-paper-50 placeholder:text-paper-300/40 focus:border-accent-500/60 focus:outline-none"
            />
            <button
              onClick={() => verify(setGithubState, githubUrl)}
              disabled={!githubUrl.trim() || githubState === 'verifying'}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-sm font-semibold text-paper-100 transition-all hover:border-accent-500/50 active:scale-95 disabled:opacity-40"
            >
              {githubState === 'verifying' ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Verifying</>
              ) : githubState === 'verified' ? (
                <><Check className="h-4 w-4 text-success-500" /> Verified</>
              ) : (
                <><Github className="h-4 w-4" /> Verify GitHub</>
              )}
            </button>
          </div>
        </Card>

        {/* LinkedIn */}
        <Card className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <label className="flex items-center gap-2 text-sm font-bold text-paper-50">
            <Linkedin className="h-4.5 w-4.5 text-[#0A66C2]" /> LinkedIn submission
          </label>
          <p className="mt-1 text-xs text-paper-300/70">Paste your LinkedIn post URL.</p>
          <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
            <input
              type="url"
              inputMode="url"
              placeholder="https://linkedin.com/posts/you_abtalks"
              value={linkedinUrl}
              onChange={(e) => {
                setLinkedinUrl(e.target.value);
                setLinkedinState('idle');
              }}
              className="flex-1 rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-paper-50 placeholder:text-paper-300/40 focus:border-accent-500/60 focus:outline-none"
            />
            <button
              onClick={() => verify(setLinkedinState, linkedinUrl)}
              disabled={!linkedinUrl.trim() || linkedinState === 'verifying'}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-700 bg-ink-800 px-4 py-3 text-sm font-semibold text-paper-100 transition-all hover:border-accent-500/50 active:scale-95 disabled:opacity-40"
            >
              {linkedinState === 'verifying' ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Verifying</>
              ) : linkedinState === 'verified' ? (
                <><Check className="h-4 w-4 text-success-500" /> Verified</>
              ) : (
                <><Linkedin className="h-4 w-4" /> Verify LinkedIn</>
              )}
            </button>
          </div>
        </Card>

        {/* Submit */}
        <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.35s' }}>
          {!allChecked && (
            <p className="mb-3 rounded-xl border border-ink-700/60 bg-ink-850/60 px-4 py-3 text-center text-xs text-paper-300/80">
              Finish your checklist ({checklist.filter(Boolean).length}/{checklist.length}) and verify at least one proof to submit.
            </p>
          )}
          {allChecked && !proofReady && (
            <p className="mb-3 rounded-xl border border-ink-700/60 bg-ink-850/60 px-4 py-3 text-center text-xs text-paper-300/80">
              Checklist done. Verify your GitHub or LinkedIn proof to finish.
            </p>
          )}
          <Button
            onClick={() => setSubmitted(true)}
            size="lg"
            fullWidth
            disabled={!allChecked || !proofReady}
            className={!allChecked || !proofReady ? 'opacity-50' : ''}
          >
            <Send className="h-4 w-4" /> Submit Day {dayNum}
          </Button>
        </div>
      </main>
    </div>
  );
}
