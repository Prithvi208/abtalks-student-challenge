import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Code2, Brain, Shield, Smartphone, Palette, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TRACKS } from '@/data/mockData';
import type { TrackId } from '@/data/mockData';
import { saveTrack } from '@/lib/storage';

const trackIcons = {
  code: Code2,
  brain: Brain,
  shield: Shield,
  smartphone: Smartphone,
  palette: Palette,
};

export function OnboardingPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<TrackId | null>(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('abtalks_track');
    if (saved) setSelected(saved as TrackId);
    const savedName = localStorage.getItem('abtalks_name');
    if (savedName) setName(savedName);
  }, []);

  function start() {
    if (!selected) return;
    saveTrack(selected);
    if (name.trim()) localStorage.setItem('abtalks_name', name.trim());
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen bg-ink-950">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-radial-glow" />

      <header className="relative z-10 mx-auto flex max-w-2xl items-center justify-between px-5 py-5">
        <Logo />
        <Button to="/" variant="ghost" size="sm">
          Back
        </Button>
      </header>

      <main className="relative z-10 mx-auto max-w-2xl px-5 pt-6">
        <div className="animate-fade-up">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent-500" />
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-500">
              Welcome to the challenge
            </span>
          </div>
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-paper-50">
            Pick your track to start your 60 days.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-paper-300">
            Choose what you want to build proof of work in. You can switch tracks anytime — this just sets your first challenge.
          </p>
        </div>

        {/* Name input */}
        <Card className="mt-5 p-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
          <label className="text-sm font-bold text-paper-50">Your name</label>
          <p className="mt-1 text-xs text-paper-300/70">So we can greet you on the dashboard.</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Hetal"
            maxLength={24}
            className="mt-3 w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-paper-50 placeholder:text-paper-300/40 focus:border-accent-500/60 focus:outline-none"
          />
        </Card>

        {/* Track selection */}
        <div className="mt-4 space-y-2.5">
          {TRACKS.map((track, i) => {
            const Icon = trackIcons[track.icon];
            const isSelected = selected === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelected(track.id)}
                className="animate-fade-up w-full text-left"
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
              >
                <Card
                  hover
                  className={`flex items-center gap-4 p-4 transition-all ${
                    isSelected ? 'border-accent-500/60 bg-accent-500/10 shadow-glow' : ''
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isSelected ? 'bg-accent-500 text-ink-950' : 'bg-ink-800 text-accent-500'
                    }`}
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-bold text-paper-50">{track.label}</p>
                    <p className="text-xs text-paper-300">{track.description}</p>
                  </div>
                  {isSelected ? (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-ink-950">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </div>
                  ) : (
                    <ArrowRight className="h-5 w-5 text-paper-300/40" />
                  )}
                </Card>
              </button>
            );
          })}
        </div>

        <div className="mt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button onClick={start} size="lg" fullWidth disabled={!selected} className={!selected ? 'opacity-50' : ''}>
            <Flame className="h-4.5 w-4.5" /> Start My 60-Day Challenge
          </Button>
          <p className="mt-3 text-center text-xs text-paper-300/50">
            Your track is saved locally. No account needed for this prototype.
          </p>
        </div>
      </main>
    </div>
  );
}
