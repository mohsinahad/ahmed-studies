import { useState, useRef, useEffect } from 'react';

// ── Number Line Explorer ───────────────────────────────────────────────
const TICKS = Array.from({ length: 21 }, (_, i) => i - 10);

function NumberLineExplorer() {
  const [value, setValue] = useState(0);
  const absValue = Math.abs(value);
  const zeroPercent = 50;
  const valuePercent = 50 + value * 5;
  const barLeft = Math.min(zeroPercent, valuePercent);
  const barWidth = absValue * 5;

  return (
    <div>
      <h3 className="text-white font-bold text-base mb-3">Number Line Explorer</h3>
      <div className="flex items-center gap-4 mb-5">
        <label className="text-slate-400 text-sm shrink-0">Pick a number:</label>
        <input
          type="range"
          min={-10}
          max={10}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="flex-1 accent-amber-400"
        />
        <span className="text-amber-400 font-bold text-lg w-10 text-center">{value}</span>
      </div>

      <div className="relative mb-2" style={{ height: '64px' }}>
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-600" />
        {value !== 0 && (
          <div
            className="absolute top-3 h-2 bg-amber-400/40 rounded"
            style={{ left: `${barLeft}%`, width: `${barWidth}%` }}
          />
        )}
        <div className="absolute inset-0 flex items-start">
          {TICKS.map((n) => {
            const percent = 50 + n * 5;
            const isZero = n === 0;
            const isSelected = n === value;
            return (
              <div
                key={n}
                className="absolute flex flex-col items-center"
                style={{ left: `${percent}%`, transform: 'translateX(-50%)' }}
              >
                <div className={`${isZero ? 'h-5 w-0.5' : 'h-3 w-px'} ${isSelected ? 'bg-amber-400' : isZero ? 'bg-slate-400' : 'bg-slate-600'}`} />
                <span className={`text-xs mt-1 leading-none ${isSelected ? 'text-amber-400 font-bold' : isZero ? 'text-slate-300 font-semibold' : 'text-slate-500'}`}>
                  {n}
                </span>
              </div>
            );
          })}
        </div>
        <div
          className="absolute top-1.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-300 shadow-lg shadow-amber-500/40 transition-all duration-150"
          style={{ left: `${valuePercent}%`, transform: 'translateX(-50%)' }}
        />
      </div>

      <div className="mt-5 bg-slate-800/60 border border-amber-500/30 rounded-xl p-5 text-center">
        <div className="text-4xl font-bold text-amber-400 mb-2">|{value}| = {absValue}</div>
        <p className="text-slate-400 text-sm">
          Distance from zero: <span className="text-amber-300 font-semibold">{absValue} step{absValue !== 1 ? 's' : ''}</span>
        </p>
        <p className="text-slate-500 text-xs mt-2">
          {value > 0 && 'Positive — absolute value equals the number itself.'}
          {value < 0 && 'Negative — absolute value strips the minus sign.'}
          {value === 0 && 'Zero — already at zero, absolute value is 0.'}
        </p>
      </div>
    </div>
  );
}

// ── Equation Solver ────────────────────────────────────────────────────
interface EquationExample {
  label: string;
  steps: { text: string; highlight?: boolean }[];
  solutions: string;
  note?: string;
}

const equations: EquationExample[] = [
  {
    label: '|x| = 9',
    steps: [
      { text: 'An absolute value equation |x| = n with n > 0 always has two solutions.' },
      { text: 'Case 1:  x = 9' },
      { text: 'Case 2:  x = −9' },
    ],
    solutions: 'x = 9  or  x = −9',
  },
  {
    label: '|2x − 3| = 7',
    steps: [
      { text: 'Step 1 — the absolute value is already isolated.' },
      { text: 'Case 1:  2x − 3 = 7  →  2x = 10  →  x = 5' },
      { text: 'Case 2:  2x − 3 = −7  →  2x = −4  →  x = −2' },
      { text: 'Check: |2(5)−3| = |7| = 7 ✓   |2(−2)−3| = |−7| = 7 ✓', highlight: true },
    ],
    solutions: 'x = 5  or  x = −2',
  },
  {
    label: '3|x + 1| − 6 = 9',
    steps: [
      { text: 'Step 1 — isolate the absolute value:' },
      { text: '  3|x + 1| = 15  →  |x + 1| = 5' },
      { text: 'Case 1:  x + 1 = 5  →  x = 4' },
      { text: 'Case 2:  x + 1 = −5  →  x = −6' },
    ],
    solutions: 'x = 4  or  x = −6',
  },
  {
    label: '|x + 4| = |2x − 1|',
    steps: [
      { text: 'Two absolute values equal — use two cases:' },
      { text: 'Case 1 (same sign):  x + 4 = 2x − 1  →  5 = x  →  x = 5' },
      { text: 'Case 2 (opposite):   x + 4 = −(2x − 1)  →  x + 4 = −2x + 1  →  3x = −3  →  x = −1' },
    ],
    solutions: 'x = 5  or  x = −1',
  },
  {
    label: '|5x + 2| = −3',
    steps: [
      { text: 'The right side is NEGATIVE.' },
      { text: 'Absolute value is always ≥ 0.' },
      { text: 'It can NEVER equal a negative number.', highlight: true },
    ],
    solutions: 'No solution',
    note: 'If the right side is negative → write No Solution immediately.',
  },
];

function EquationExplorer() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <h3 className="text-white font-bold text-base mb-1">Absolute Value Equations</h3>
      <p className="text-slate-400 text-xs mb-4">
        Strategy: isolate the bars → check if right side is negative (no solution) → split into two cases → solve each → check.
      </p>

      <div className="grid grid-cols-1 gap-2 mb-4">
        {equations.map((eq, i) => (
          <button
            key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            className={`text-left px-4 py-3 rounded-xl border text-sm font-mono transition ${
              selected === i
                ? 'bg-amber-500/20 border-amber-400/60 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-amber-500/40'
            }`}
          >
            {eq.label}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="bg-slate-800/60 border border-amber-500/30 rounded-xl p-5 space-y-2">
          {equations[selected].steps.map((step, i) => (
            <p key={i} className={`text-sm font-mono ${step.highlight ? 'text-green-400' : 'text-slate-300'}`}>
              {step.text}
            </p>
          ))}
          <div className="mt-3 pt-3 border-t border-amber-500/20">
            <p className="text-amber-400 font-bold text-base">{equations[selected].solutions}</p>
          </div>
          {equations[selected].note && (
            <p className="text-slate-500 text-xs italic mt-1">{equations[selected].note}</p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Inequality Explorer ────────────────────────────────────────────────
interface InequalityExample {
  label: string;
  type: 'and' | 'or' | 'special';
  steps: string[];
  solution: string;
  lo: number;
  hi: number;
  inclusive: boolean;
  direction?: 'between' | 'outside' | 'none';
}

const inequalities: InequalityExample[] = [
  {
    label: '|x| < 4',
    type: 'and',
    steps: [
      '|x| < 4  →  AND rule (less-than)',
      '−4 < x < 4',
    ],
    solution: '−4 < x < 4',
    lo: -4, hi: 4, inclusive: false, direction: 'between',
  },
  {
    label: '|2x − 1| ≤ 5',
    type: 'and',
    steps: [
      'AND rule: −5 ≤ 2x − 1 ≤ 5',
      'Add 1:    −4 ≤ 2x ≤ 6',
      'Divide:   −2 ≤ x ≤ 3',
    ],
    solution: '−2 ≤ x ≤ 3',
    lo: -2, hi: 3, inclusive: true, direction: 'between',
  },
  {
    label: '|x| > 3',
    type: 'or',
    steps: [
      '|x| > 3  →  OR rule (greater-than)',
      'x < −3  or  x > 3',
    ],
    solution: 'x < −3  or  x > 3',
    lo: -3, hi: 3, inclusive: false, direction: 'outside',
  },
  {
    label: '|3x + 2| ≥ 8',
    type: 'or',
    steps: [
      'OR rule: 3x+2 ≥ 8  or  3x+2 ≤ −8',
      'Case 1: 3x ≥ 6  →  x ≥ 2',
      'Case 2: 3x ≤ −10  →  x ≤ −10/3 ≈ −3.33',
    ],
    solution: 'x ≤ −10/3  or  x ≥ 2',
    lo: -10 / 3, hi: 2, inclusive: true, direction: 'outside',
  },
  {
    label: '|x + 3| ≤ 0',
    type: 'special',
    steps: [
      '|x+3| is always ≥ 0.',
      'For ≤ 0, it must equal exactly 0.',
      'x + 3 = 0  →  x = −3 only.',
    ],
    solution: 'x = −3  (single point)',
    lo: -3, hi: -3, inclusive: true, direction: 'none',
  },
];

function InequalityExplorer() {
  const [selected, setSelected] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || selected === null) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ineq = inequalities[selected];
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const mid = H / 2;
    const xMin = -6, xMax = 6;
    const toX = (v: number) => ((v - xMin) / (xMax - xMin)) * W;

    // axis
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, mid);
    ctx.lineTo(W, mid);
    ctx.stroke();

    // ticks
    for (let n = xMin; n <= xMax; n++) {
      const px = toX(n);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(px, mid - 5);
      ctx.lineTo(px, mid + 5);
      ctx.stroke();
      ctx.fillStyle = n === 0 ? '#94a3b8' : '#64748b';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(String(n), px, mid + 16);
    }

    const loX = toX(ineq.lo);
    const hiX = toX(ineq.hi);

    if (ineq.direction === 'between') {
      ctx.fillStyle = 'rgba(251,191,36,0.25)';
      ctx.fillRect(loX, mid - 6, hiX - loX, 12);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(loX, mid);
      ctx.lineTo(hiX, mid);
      ctx.stroke();
    } else if (ineq.direction === 'outside') {
      ctx.fillStyle = 'rgba(251,191,36,0.25)';
      ctx.fillRect(0, mid - 6, loX, 12);
      ctx.fillRect(hiX, mid - 6, W - hiX, 12);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(loX, mid);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(hiX, mid);
      ctx.lineTo(W, mid);
      ctx.stroke();
    }

    // endpoint circles
    for (const [px, show] of [[loX, ineq.direction !== 'none'], [hiX, ineq.direction !== 'none' && ineq.lo !== ineq.hi]] as [number, boolean][]) {
      if (!show) continue;
      ctx.beginPath();
      ctx.arc(px, mid, 5, 0, Math.PI * 2);
      if (ineq.inclusive) {
        ctx.fillStyle = '#fbbf24';
        ctx.fill();
      } else {
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#1e293b';
        ctx.fill();
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    // single point
    if (ineq.direction === 'none') {
      const px = toX(ineq.lo);
      ctx.beginPath();
      ctx.arc(px, mid, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24';
      ctx.fill();
    }
  }, [selected]);

  return (
    <div>
      <h3 className="text-white font-bold text-base mb-1">Absolute Value Inequalities</h3>
      <div className="flex gap-4 mb-4">
        <div className="bg-slate-800/60 border border-blue-500/30 rounded-lg px-3 py-2 text-xs text-blue-300 flex-1">
          <span className="font-bold">Less-than (&lt; or ≤)</span><br />
          "AND" → between two values<br />
          −c &lt; expr &lt; c
        </div>
        <div className="bg-slate-800/60 border border-rose-500/30 rounded-lg px-3 py-2 text-xs text-rose-300 flex-1">
          <span className="font-bold">Greater-than (&gt; or ≥)</span><br />
          "OR" → outside two values<br />
          expr &lt; −c  or  expr &gt; c
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 mb-4">
        {inequalities.map((ineq, i) => (
          <button
            key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            className={`text-left px-4 py-3 rounded-xl border text-sm font-mono transition ${
              selected === i
                ? 'bg-amber-500/20 border-amber-400/60 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-amber-500/40'
            }`}
          >
            {ineq.label}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className="bg-slate-800/60 border border-amber-500/30 rounded-xl p-5 space-y-3">
          <div className="space-y-1">
            {inequalities[selected].steps.map((s, i) => (
              <p key={i} className="text-sm font-mono text-slate-300">{s}</p>
            ))}
          </div>
          <p className="text-amber-400 font-bold">{inequalities[selected].solution}</p>
          <p className="text-slate-400 text-xs mb-1">Number line graph:</p>
          <canvas ref={canvasRef} width={400} height={50} className="w-full rounded bg-slate-900/60" />
          <p className="text-slate-500 text-xs">
            {inequalities[selected].inclusive ? 'Filled circles = endpoints included (≤ or ≥)' : 'Open circles = endpoints excluded (< or >)'}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Graph Explorer ─────────────────────────────────────────────────────
function GraphExplorer() {
  const [a, setA] = useState(1);
  const [h, setH] = useState(0);
  const [k, setK] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const xMin = -8, xMax = 8, yMin = -8, yMax = 8;
    const toCanvasX = (x: number) => ((x - xMin) / (xMax - xMin)) * W;
    const toCanvasY = (y: number) => H - ((y - yMin) / (yMax - yMin)) * H;

    // grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 0.5;
    for (let n = xMin; n <= xMax; n++) {
      ctx.beginPath();
      ctx.moveTo(toCanvasX(n), 0);
      ctx.lineTo(toCanvasX(n), H);
      ctx.stroke();
    }
    for (let n = yMin; n <= yMax; n++) {
      ctx.beginPath();
      ctx.moveTo(0, toCanvasY(n));
      ctx.lineTo(W, toCanvasY(n));
      ctx.stroke();
    }

    // axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(toCanvasX(0), 0);
    ctx.lineTo(toCanvasX(0), H);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, toCanvasY(0));
    ctx.lineTo(W, toCanvasY(0));
    ctx.stroke();

    // axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '9px monospace';
    for (let n = xMin; n <= xMax; n += 2) {
      if (n === 0) continue;
      ctx.textAlign = 'center';
      ctx.fillText(String(n), toCanvasX(n), toCanvasY(0) + 12);
    }
    for (let n = yMin; n <= yMax; n += 2) {
      if (n === 0) continue;
      ctx.textAlign = 'right';
      ctx.fillText(String(n), toCanvasX(0) - 3, toCanvasY(n) + 3);
    }

    // parent function y = |x| in dim blue
    ctx.strokeStyle = 'rgba(99,102,241,0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    let first = true;
    for (let px = 0; px <= W; px++) {
      const x = xMin + (px / W) * (xMax - xMin);
      const y = Math.abs(x);
      if (y < yMin || y > yMax) { first = true; continue; }
      const cy = toCanvasY(y);
      if (first) { ctx.moveTo(px, cy); first = false; } else { ctx.lineTo(px, cy); }
    }
    ctx.stroke();

    // transformed function
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    first = true;
    for (let px = 0; px <= W; px++) {
      const x = xMin + (px / W) * (xMax - xMin);
      const y = a * Math.abs(x - h) + k;
      if (y < yMin - 0.5 || y > yMax + 0.5) { first = true; continue; }
      const cy = toCanvasY(Math.max(yMin, Math.min(yMax, y)));
      if (first) { ctx.moveTo(px, cy); first = false; } else { ctx.lineTo(px, cy); }
    }
    ctx.stroke();

    // vertex dot
    const vx = toCanvasX(h);
    const vy = toCanvasY(k);
    if (vy >= 0 && vy <= H) {
      ctx.beginPath();
      ctx.arc(vx, vy, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#f87171';
      ctx.fill();
    }
  }, [a, h, k]);

  const vertex = `(${h}, ${k})`;
  const range = a > 0 ? `y ≥ ${k}` : a < 0 ? `y ≤ ${k}` : `y = ${k}`;
  const equation = `y = ${a === 1 ? '' : a === -1 ? '-' : a}|x${h > 0 ? ` − ${h}` : h < 0 ? ` + ${Math.abs(h)}` : ''}|${k > 0 ? ` + ${k}` : k < 0 ? ` − ${Math.abs(k)}` : ''}`;

  return (
    <div>
      <h3 className="text-white font-bold text-base mb-1">Graph: y = a|x − h| + k</h3>
      <p className="text-slate-400 text-xs mb-4">Adjust the sliders to transform the V-shape. Blue = parent y = |x|, Amber = transformed.</p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {([['a (steepness)', a, setA, -3, 3, 0.5] as const, ['h (left/right)', h, setH, -5, 5, 1] as const, ['k (up/down)', k, setK, -5, 5, 1] as const]).map(([label, val, setter, min, max, step]) => (
          <div key={label} className="bg-slate-800/60 rounded-lg p-3">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>{label}</span>
              <span className="text-amber-400 font-bold">{Number(val).toFixed(1)}</span>
            </div>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={val}
              onChange={(e) => (setter as (v: number) => void)(Number(e.target.value))}
              className="w-full accent-amber-400"
            />
          </div>
        ))}
      </div>

      <canvas ref={canvasRef} width={400} height={300} className="w-full rounded-xl bg-slate-900/80 mb-4" />

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-slate-800/60 border border-amber-500/20 rounded-lg p-3">
          <p className="text-slate-400 text-xs mb-1">Equation</p>
          <p className="text-amber-300 font-mono font-bold">{equation}</p>
        </div>
        <div className="bg-slate-800/60 border border-amber-500/20 rounded-lg p-3">
          <p className="text-slate-400 text-xs mb-1">Vertex</p>
          <p className="text-red-400 font-mono font-bold">{vertex}</p>
        </div>
        <div className="bg-slate-800/60 border border-amber-500/20 rounded-lg p-3">
          <p className="text-slate-400 text-xs mb-1">Opens</p>
          <p className="text-slate-200 font-semibold">
            {a > 0 ? 'Upward (a > 0)' : a < 0 ? 'Downward (a < 0)' : 'Horizontal line'}
          </p>
        </div>
        <div className="bg-slate-800/60 border border-amber-500/20 rounded-lg p-3">
          <p className="text-slate-400 text-xs mb-1">Range</p>
          <p className="text-slate-200 font-mono font-semibold">{range}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────
type Tab = 'number-line' | 'equations' | 'inequalities' | 'graphing';

const TABS: { id: Tab; label: string }[] = [
  { id: 'number-line', label: 'Number Line' },
  { id: 'equations', label: 'Equations' },
  { id: 'inequalities', label: 'Inequalities' },
  { id: 'graphing', label: 'Graphing' },
];

export default function AbsoluteValueSim() {
  const [tab, setTab] = useState<Tab>('number-line');

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              tab === t.id
                ? 'bg-amber-500/25 border border-amber-400/60 text-amber-300'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-amber-300 hover:border-amber-500/40'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'number-line' && <NumberLineExplorer />}
      {tab === 'equations' && <EquationExplorer />}
      {tab === 'inequalities' && <InequalityExplorer />}
      {tab === 'graphing' && <GraphExplorer />}
    </div>
  );
}
