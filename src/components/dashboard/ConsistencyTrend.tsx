import { useMemo, useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export interface TrendPoint {
  day: number;
  focusMinutes: number;
  commits: number;
}

type FilterId = '7' | '30' | 'all';

const ALL_DATA: TrendPoint[] = [
  { day: 1, focusMinutes: 45, commits: 2 },
  { day: 2, focusMinutes: 60, commits: 3 },
  { day: 3, focusMinutes: 50, commits: 2 },
  { day: 4, focusMinutes: 75, commits: 4 },
  { day: 5, focusMinutes: 65, commits: 3 },
  { day: 6, focusMinutes: 80, commits: 4 },
  { day: 7, focusMinutes: 70, commits: 3 },
];

function dataForFilter(filter: FilterId): TrendPoint[] {
  const count = filter === '7' ? 7 : filter === '30' ? 30 : ALL_DATA.length;
  return ALL_DATA.slice(0, Math.min(count, ALL_DATA.length));
}

const FOCUS_COLOR = '#FF8A00';
const COMMITS_COLOR = '#34D399';

export function ConsistencyTrend() {
  const [filter, setFilter] = useState<FilterId>('7');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [drawProgress, setDrawProgress] = useState(0);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const data = useMemo(() => dataForFilter(filter), [filter]);

  // Re-trigger the line draw animation whenever the filter or data changes.
  useEffect(() => {
    setHoverIndex(null);
    setDrawProgress(0);
    const id = requestAnimationFrame(() => setDrawProgress(1));
    return () => cancelAnimationFrame(id);
  }, [filter]);

  const W = 320;
  const H = 168;
  const padL = 34;
  const padR = 12;
  const padT = 12;
  const padB = 26;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const maxFocus = Math.max(...data.map((d) => d.focusMinutes), 60);
  const maxCommits = Math.max(...data.map((d) => d.commits), 4);

  const xFor = (i: number) => {
    if (data.length <= 1) return padL + plotW / 2;
    return padL + (plotW * i) / (data.length - 1);
  };
  const yFocus = (v: number) => padT + plotH - (plotH * v) / maxFocus;
  const yCommits = (v: number) => padT + plotH - (plotH * v) / maxCommits;

  const focusPath = useMemo(
    () => smoothPath(data.map((d, i) => [xFor(i), yFocus(d.focusMinutes)])),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, maxFocus],
  );
  const commitsPath = useMemo(
    () => smoothPath(data.map((d, i) => [xFor(i), yCommits(d.commits)])),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, maxCommits],
  );

  // Y ticks for the focus axis (left). Use rounded steps.
  const focusTicks = useMemo(() => {
    const step = maxFocus <= 90 ? 30 : 60;
    const ticks: number[] = [];
    for (let v = 0; v <= maxFocus; v += step) ticks.push(v);
    if (ticks[ticks.length - 1] < maxFocus) ticks.push(Math.ceil(maxFocus / step) * step);
    return Array.from(new Set(ticks));
  }, [maxFocus]);

  // Determine nearest data point from a clientX within the SVG.
  function nearestPoint(clientX: number): number | null {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    // Map clientX into viewBox coordinate space (0..W)
    const vbX = ((clientX - rect.left) / rect.width) * W;
    let best = 0;
    let bestDist = Infinity;
    data.forEach((_, i) => {
      const dist = Math.abs(xFor(i) - vbX);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }

  const filters: { id: FilterId; label: string }[] = [
    { id: '7', label: '7 DAYS' },
    { id: '30', label: '30 DAYS' },
    { id: 'all', label: 'ALL' },
  ];

  const totalLen = 1000; // generous upper bound for dashoffset animation
  const dashOffset = totalLen * (1 - drawProgress);

  return (
    <Card className="mt-4 p-5 animate-fade-up" style={{ animationDelay: '0.18s' }}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-paper-50">Consistency Trend</h3>
          <p className="mt-0.5 text-xs text-paper-300/70">Your daily focus and shipping activity over time.</p>
        </div>
      </div>

      {/* Time filters */}
      <div className="mt-3 flex items-center gap-1.5">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              'rounded-lg px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors',
              filter === f.id
                ? 'bg-accent-500/15 text-accent-400'
                : 'bg-ink-800/60 text-paper-300/60 hover:text-paper-200',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center gap-4">
        <LegendItem color={FOCUS_COLOR} label="Focus Minutes" />
        <LegendItem color={COMMITS_COLOR} label="Commits" />
      </div>

      {/* Chart */}
      <div
        className="relative mt-2 w-full overflow-hidden"
        onMouseLeave={() => setHoverIndex(null)}
        onMouseMove={(e) => {
          const idx = nearestPoint(e.clientX);
          if (idx !== null) setHoverIndex(idx);
        }}
        onTouchStart={(e) => {
          const t = e.touches[0];
          if (t) {
            const idx = nearestPoint(t.clientX);
            if (idx !== null) setHoverIndex(idx);
          }
        }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          if (t) {
            const idx = nearestPoint(t.clientX);
            if (idx !== null) setHoverIndex(idx);
          }
        }}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          className="block select-none"
          style={{ touchAction: 'pan-y' }}
        >
          {/* Grid lines (horizontal, tied to focus ticks) */}
          {focusTicks.map((v) => {
            const y = yFocus(v);
            return (
              <g key={v}>
                <line
                  x1={padL}
                  x2={W - padR}
                  y1={y}
                  y2={y}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth={1}
                />
                <text
                  x={padL - 6}
                  y={y + 3}
                  textAnchor="end"
                  fontSize={8}
                  fontFamily="ui-monospace, monospace"
                  fill="rgba(212,218,232,0.5)"
                >
                  {v}
                </text>
              </g>
            );
          })}

          {/* X axis labels — show a few, not all, to stay readable */}
          {data.map((d, i) => {
            const showEvery = data.length > 14 ? Math.ceil(data.length / 6) : data.length > 7 ? 2 : 1;
            const shouldShow = i % showEvery === 0 || i === data.length - 1;
            if (!shouldShow) return null;
            return (
              <text
                key={d.day}
                x={xFor(i)}
                y={H - 8}
                textAnchor="middle"
                fontSize={8}
                fontFamily="ui-monospace, monospace"
                fill="rgba(212,218,232,0.5)"
              >
                D{d.day}
              </text>
            );
          })}

          {/* Commit line */}
          <path
            d={commitsPath}
            fill="none"
            stroke={COMMITS_COLOR}
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={totalLen}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 700ms ease-out' }}
          />
          {/* Focus line */}
          <path
            d={focusPath}
            fill="none"
            stroke={FOCUS_COLOR}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={totalLen}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 700ms ease-out' }}
          />

          {/* Data points */}
          {data.map((d, i) => (
            <g key={d.day} opacity={drawProgress} style={{ transition: 'opacity 400ms ease-out 300ms' }}>
              <circle cx={xFor(i)} cy={yFocus(d.focusMinutes)} r={hoverIndex === i ? 3.5 : 2.25} fill={FOCUS_COLOR} />
              <circle cx={xFor(i)} cy={yCommits(d.commits)} r={hoverIndex === i ? 3.5 : 2.25} fill={COMMITS_COLOR} />
            </g>
          ))}

          {/* Hover guide line */}
          {hoverIndex !== null && (
            <line
              x1={xFor(hoverIndex)}
              x2={xFor(hoverIndex)}
              y1={padT}
              y2={padT + plotH}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth={1}
              strokeDasharray="2 3"
            />
          )}
        </svg>

        {/* Tooltip */}
        {hoverIndex !== null && (
          <Tooltip
            point={data[hoverIndex]}
            x={xFor(hoverIndex)}
            svgWidth={W}
          />
        )}
      </div>
    </Card>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-[11px] font-medium text-paper-300/70">{label}</span>
    </div>
  );
}

function Tooltip({ point, x, svgWidth }: { point: TrendPoint; x: number; svgWidth: number }) {
  const leftPct = (x / svgWidth) * 100;
  const flip = leftPct > 72;
  return (
    <div
      className={cn(
        'pointer-events-none absolute top-0 z-10 min-w-[112px] animate-scale-in rounded-lg border border-ink-700 bg-ink-900/95 p-2 shadow-card backdrop-blur-sm',
        flip ? 'right-0' : 'left-0',
      )}
      style={{
        // Position horizontally near the hovered point, clamped to container.
        left: flip ? undefined : `calc(${leftPct}% + 6px)`,
        right: flip ? `calc(${100 - leftPct}% + 6px)` : undefined,
        top: '6px',
      }}
    >
      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-paper-300/60">Day {point.day}</p>
      <div className="mt-1 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: FOCUS_COLOR }} />
        <span className="text-xs text-paper-100">{point.focusMinutes} min</span>
      </div>
      <div className="mt-0.5 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COMMITS_COLOR }} />
        <span className="text-xs text-paper-100">{point.commits} commits</span>
      </div>
    </div>
  );
}

// Build a smooth (cardinal-spline-ish) SVG path from points.
function smoothPath(points: number[][]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0][0]} ${points[0][1]}`;
  const tension = 0.18;
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const cp1x = p1[0] + (p2[0] - p0[0]) * tension;
    const cp1y = p1[1] + (p2[1] - p0[1]) * tension;
    const cp2x = p2[0] - (p3[0] - p1[0]) * tension;
    const cp2y = p2[1] - (p3[1] - p1[1]) * tension;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2[0]} ${p2[1]}`;
  }
  return d;
}
