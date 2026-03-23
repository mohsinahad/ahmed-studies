import { useState } from 'react';

const substances: Record<number, string> = {
  0: 'Battery acid',
  1: 'Stomach acid',
  2: 'Lemon juice',
  3: 'Vinegar',
  4: 'Tomato',
  5: 'Coffee',
  6: 'Urine',
  7: 'Pure water',
  8: 'Baking soda',
  9: 'Toothpaste',
  10: 'Antacid',
  11: 'Ammonia',
  12: 'Soapy water',
  13: 'Bleach',
  14: 'Drain cleaner',
};

function getColor(ph: number): string {
  if (ph < 3) return '#ef4444';
  if (ph < 5) return '#f97316';
  if (ph < 7) return '#eab308';
  if (ph === 7) return '#22c55e';
  if (ph < 10) return '#3b82f6';
  if (ph < 13) return '#8b5cf6';
  return '#6d28d9';
}

function getCategory(ph: number): { label: string; color: string } {
  if (ph < 7) return { label: 'Acidic', color: 'text-red-400' };
  if (ph === 7) return { label: 'Neutral', color: 'text-emerald-400' };
  return { label: 'Basic (Alkaline)', color: 'text-blue-400' };
}

export default function PHSim() {
  const [ph, setPh] = useState(7);

  const category = getCategory(ph);
  const currentColor = getColor(ph);
  const substance = substances[Math.round(ph)];

  return (
    <div className="space-y-5">
      {/* pH value display */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-slate-400 text-xs uppercase tracking-widest">Current pH</div>
          <div className="font-bold text-5xl" style={{ color: currentColor }}>
            {ph.toFixed(1)}
          </div>
          <div className={`text-sm font-semibold ${category.color}`}>{category.label}</div>
        </div>
        <div className="text-right">
          <div
            className="w-16 h-16 rounded-full border-2 border-slate-600 flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: currentColor + '33', borderColor: currentColor, color: currentColor }}
          >
            {substance.split(' ')[0]}
          </div>
          <div className="text-xs text-slate-400 mt-1 max-w-20 text-right">{substance}</div>
        </div>
      </div>

      {/* Gradient bar */}
      <div className="relative">
        <div
          className="h-8 rounded-full w-full"
          style={{
            background: 'linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #6d28d9)',
          }}
        />
        {/* Neutral zone highlight */}
        <div
          className="absolute top-0 bottom-0 rounded-full border-2 border-emerald-400/60 pointer-events-none"
          style={{ left: `${(6.5 / 14) * 100}%`, width: `${(1 / 14) * 100}%` }}
        />
        {/* Slider thumb indicator */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none transition-all"
          style={{ left: `calc(${(ph / 14) * 100}% - 10px)`, backgroundColor: currentColor }}
        />
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={14}
        step={0.5}
        value={ph}
        onChange={(e) => setPh(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: currentColor }}
      />

      {/* Labels */}
      <div className="flex justify-between text-xs text-slate-500">
        <span>0 — Most acidic</span>
        <span>7 — Neutral</span>
        <span>14 — Most basic</span>
      </div>

      {/* Substance list */}
      <div className="bg-slate-900 rounded-xl p-4">
        <div className="text-xs text-slate-500 uppercase tracking-widest mb-3">pH Reference</div>
        <div className="grid grid-cols-2 gap-y-1 gap-x-4">
          {Object.entries(substances).map(([pVal, name]) => {
            const p = Number(pVal);
            const c = getColor(p);
            return (
              <div
                key={p}
                className={`flex items-center gap-2 text-xs py-0.5 rounded transition ${
                  Math.round(ph) === p ? 'bg-slate-700 px-1' : ''
                }`}
              >
                <span className="font-mono w-4 text-right" style={{ color: c }}>{p}</span>
                <span className="text-slate-400">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
