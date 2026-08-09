import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { DayCell } from '@/components/ui/DayCell';
import { stats, howItWorks, whyAbtalks, challengeDays } from '@/data/mockData';
import { CommunityIntel } from '@/components/landing/CommunityIntel';

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-radial-glow" />

      <header className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Logo />
        <nav className="flex items-center gap-1.5">
          <a
            href="#how"
            className="hidden rounded-lg px-3.5 py-2 text-sm font-semibold text-paper-200 transition-colors hover:text-paper-50 sm:block"
          >
            How it works
          </a>
          <Link
            to="/dashboard"
            className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-bold text-ink-950 transition-all hover:bg-accent-400 active:scale-95"
          >
            Start
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="stagger">
            <Badge variant="accent" className="mb-5">
              <Flame className="h-3 w-3" /> 60-day coding challenge
            </Badge>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-paper-50 sm:text-5xl lg:text-6xl">
              60 Days. One Streak. <br />
              <span className="text-accent-500">Build Something Every Day.</span>
            </h1>
            <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-paper-300 sm:text-lg">
              Stop collecting tutorials. Start building proof of work.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper-300">
              {[
                'Choose a coding track',
                'Build something every day',
                'Push your work to GitHub',
                'Share your progress on LinkedIn',
                'Build a visible 60-day streak',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/onboarding" size="lg">
                Start My 60-Day Challenge
              </Button>
              <Button to="/dashboard" variant="outline" size="lg">
                See How It Works
              </Button>
            </div>

            <p className="mt-4 text-xs text-paper-300/60">
              Free to start. No account needed to preview the experience.
            </p>
          </div>

          {/* Streak visual */}
          <div className="animate-scale-in">
            <Card glow className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-paper-300/70">
                    Hetal's streak
                  </p>
                  <p className="mt-1 flex items-baseline gap-2">
                    <Flame className="h-6 w-6 text-accent-500" />
                    <span className="text-3xl font-extrabold text-paper-50">11</span>
                    <span className="text-sm font-medium text-paper-300">day streak</span>
                  </p>
                </div>
                <Badge variant="success">Day 12 / 60</Badge>
              </div>

              <div className="mt-5 grid grid-cols-10 gap-1.5">
                {challengeDays.slice(0, 40).map((d) => (
                  <DayCell key={d.day} day={d.day} status={d.status} />
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-paper-300/70">
                <span>18% complete</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-accent-500" /> done
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm border border-accent-500" /> today
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-ink-800" /> next
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-12">
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {stats.map((s) => (
            <Card key={s.label} className="p-4 text-center sm:p-6">
              <p className="text-2xl font-extrabold text-accent-500 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-medium leading-tight text-paper-300/80 sm:text-sm">
                {s.label}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-3 text-center text-[11px] text-paper-300/50">
          Illustrative numbers from our early community — not verified real-world stats.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative z-10 mx-auto max-w-6xl px-5 py-16 scroll-mt-20">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-3">How it works</Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-paper-50 sm:text-4xl">
            Three steps. Every day.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {howItWorks.map((item) => (
            <Card key={item.step} hover className="p-6">
              <span className="font-mono text-3xl font-bold text-accent-500/40">{item.step}</span>
              <h3 className="mt-3 text-lg font-bold text-paper-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-16">
        <div className="mb-10 text-center">
          <Badge variant="outline" className="mb-3">Why ABTalks</Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-paper-50 sm:text-4xl">
            Built for students who ship.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyAbtalks.map((item) => (
            <Card key={item.title} hover className="p-5">
              <h3 className="text-base font-bold text-paper-50">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-paper-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* COMMUNITY INTEL */}
      <CommunityIntel />

      {/* FINAL CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20">
        <Card glow className="relative overflow-hidden p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-80" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-paper-50 sm:text-4xl">
              Your next 60 days can change your portfolio.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-paper-300">
              One streak. Sixty builds. A portfolio that speaks before you do.
            </p>
            <div className="mt-7 flex justify-center">
              <Button to="/onboarding" size="lg">
                Take the Challenge
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <footer className="relative z-10 border-t border-ink-700/40 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-paper-300/50 sm:flex-row">
          <Logo />
          <p>ABTalks — a 60-day coding challenge for Indian college students.</p>
        </div>
      </footer>
    </div>
  );
}
