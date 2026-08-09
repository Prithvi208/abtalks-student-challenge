import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export interface ParticipantExperience {
  day: number;
  name: string;
  category: string;
  quote: string;
  keywords: string[];
}

const EXPERIENCES: ParticipantExperience[] = [
  {
    day: 52,
    name: 'Arjun',
    category: 'Consistency',
    quote:
      "I learned that consistency didn't mean building something massive every single day. Some days were small bug fixes or refactoring, but showing up every day changed my mindset.",
    keywords: ['consistency', 'consistent', 'showing up', 'every day', 'mindset', 'small', 'habit'],
  },
  {
    day: 34,
    name: 'Riya',
    category: 'Exams & College',
    quote:
      "During end-sem exams I couldn't spend hours coding, so I focused on making smaller 20-minute daily commits instead of skipping completely. That kept my momentum alive without burning out.",
    keywords: ['college', 'exams', 'exam', 'sem', 'momentum', 'skip', 'missing', 'busy', 'time', 'burnout'],
  },
  {
    day: 18,
    name: 'Kabir',
    category: 'Missing Days',
    quote:
      "I missed three days in week two and thought the streak was over. But the freeze let me recover. The real lesson was that one missed day doesn't erase the seventeen before it.",
    keywords: ['miss', 'missed', 'missing', 'day', 'freeze', 'recover', 'streak', 'skip', 'break'],
  },
];

const QUICK_QUESTIONS = [
  'How do you stay consistent?',
  'What if I miss a day?',
  'Is it hard with college?',
  'What happens by Day 60?',
];

function scoreExperience(q: string, exp: ParticipantExperience): number {
  const lower = q.toLowerCase();
  let score = 0;
  for (const kw of exp.keywords) {
    if (lower.includes(kw)) score += 2;
  }
  if (lower.includes(exp.category.toLowerCase().split(' ')[0])) score += 1;
  return score;
}

export function CommunityIntel() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState('');

  const results = useMemo(() => {
    const q = submitted.trim();
    if (!q) return EXPERIENCES;
    const scored = EXPERIENCES.map((exp) => ({ exp, score: scoreExperience(q, exp) }));
    const matched = scored
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.exp);
    return matched.length > 0 ? matched : [];
  }, [submitted]);

  function submit(q: string) {
    const trimmed = q.trim();
    setQuery(trimmed);
    setSubmitted(trimmed);
  }

  const hasQuery = submitted.trim().length > 0;
  const noMatch = hasQuery && results.length === 0;

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-16">
      <div className="mb-10 text-center">
        <Badge variant="outline" className="mb-3">Community Intel</Badge>
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-paper-50 sm:text-4xl">
          The ABTalks Experience
        </h2>
        <p className="mx-auto mt-3 max-w-md text-balance text-sm leading-relaxed text-paper-300">
          Wondering what your challenge actually feels like? Ask someone who's done it.
        </p>
      </div>

      <Card className="p-5 sm:p-7">
        {/* Ask input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(query);
          }}
          className="flex flex-col gap-2.5 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-paper-300/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask someone who has done it..."
              className="w-full rounded-xl border border-ink-700 bg-ink-900/80 py-3 pl-10 pr-3 text-sm text-paper-50 placeholder:text-paper-300/40 focus:border-accent-500/60 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-bold text-ink-950 shadow-pop transition-all duration-200 hover:bg-accent-400 active:scale-[0.98]"
          >
            Ask
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Quick questions */}
        <div className="mt-4 flex flex-wrap gap-2">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => {
                setQuery(q);
                submit(q);
              }}
              className="rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1.5 text-xs font-medium text-paper-300/80 transition-colors hover:border-accent-500/40 hover:text-paper-50"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-paper-300/60">
            {noMatch ? '0 results' : `${results.length} result${results.length === 1 ? '' : 's'}`}
          </p>
          {hasQuery && !noMatch && (
            <button
              onClick={() => {
                setQuery('');
                setSubmitted('');
              }}
              className="text-xs font-medium text-paper-300/60 transition-colors hover:text-paper-50"
            >
              Clear
            </button>
          )}
        </div>

        {/* Experiences */}
        <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-paper-300/50">
          Sample participant experiences:
        </p>

        {noMatch ? (
          <div className="mt-3 rounded-xl border border-dashed border-ink-700 bg-ink-900/40 p-8 text-center">
            <p className="text-sm font-semibold text-paper-200">No matching experiences yet</p>
            <p className="mt-1 text-xs text-paper-300/60">
              Try a different question or pick one of the suggestions above.
            </p>
          </div>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((exp) => (
              <ExperienceCard key={`${exp.name}-${exp.day}`} exp={exp} />
            ))}
          </div>
        )}
      </Card>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: ParticipantExperience }) {
  return (
    <div className="rounded-xl border border-ink-700/70 bg-ink-900/50 p-4 transition-colors hover:border-ink-600">
      <div className="flex items-center justify-between">
        <Badge variant="accent">Day {exp.day}</Badge>
        <span className="text-[11px] font-medium text-paper-300/50">{exp.category}</span>
      </div>
      <p className="mt-3 text-sm font-bold text-paper-50">{exp.name}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-paper-300/90">"{exp.quote}"</p>
    </div>
  );
}
