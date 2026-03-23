import { useState } from 'react';

interface Expression {
  label: string;
  steps: string[];
  answer: number;
}

const expressions: Expression[] = [
  {
    label: '|−8| + |3|',
    steps: ['Step 1: |−8| = 8 and |3| = 3', 'Step 2: 8 + 3', 'Step 3: = 11'],
    answer: 11,
  },
  {
    label: '|−6| × |2|',
    steps: ['Step 1: |−6| = 6 and |2| = 2', 'Step 2: 6 × 2', 'Step 3: = 12'],
    answer: 12,
  },
  {
    label: '|10| − |−4|',
    steps: ['Step 1: |10| = 10 and |−4| = 4', 'Step 2: 10 − 4', 'Step 3: = 6'],
    answer: 6,
  },
  {
    label: '|−5| + |−5|',
    steps: ['Step 1: |−5| = 5 and |−5| = 5', 'Step 2: 5 + 5', 'Step 3: = 10'],
    answer: 10,
  },
];

const TICKS = Array.from({ length: 21 }, (_, i) => i - 10);

export default function AbsoluteValueSim() {
  const [value, setValue] = useState(0);
  const [selectedExpr, setSelectedExpr] = useState<number | null>(null);

  const absValue = Math.abs(value);

  // For the number line bar: positions as percentages
  // The number line spans from -10 to 10, so total width = 20 units
  // Each unit = 100/20 = 5% of the container
  // Zero is at 50% of the container
  const zeroPercent = 50;
  const valuePercent = 50 + value * 5;
  const barLeft = Math.min(zeroPercent, valuePercent);
  const barWidth = Math.abs(value) * 5;

  return (
    <div className="space-y-8">
      {/* Part 1: Number Line Explorer */}
      <div>
        <h3 className="text-white font-bold text-base mb-4">Number Line Explorer</h3>

        {/* Input */}
        <div className="flex items-center gap-4 mb-6">
          <label className="text-slate-400 text-sm shrink-0">Enter a number (−10 to 10):</label>
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

        {/* Number line */}
        <div className="relative mb-2" style={{ height: '64px' }}>
          {/* Base line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-slate-600" />

          {/* Amber bar from 0 to value */}
          {value !== 0 && (
            <div
              className="absolute top-3 h-2 bg-amber-400/50 rounded"
              style={{
                left: `${barLeft}%`,
                width: `${barWidth}%`,
              }}
            />
          )}

          {/* Tick marks */}
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
                  <div
                    className={`
                      ${isZero ? 'h-5 w-0.5' : 'h-3 w-px'}
                      ${isSelected ? 'bg-amber-400' : isZero ? 'bg-slate-400' : 'bg-slate-600'}
                    `}
                  />
                  <span
                    className={`
                      text-xs mt-1 leading-none
                      ${isSelected ? 'text-amber-400 font-bold' : isZero ? 'text-slate-300 font-semibold' : 'text-slate-500'}
                    `}
                  >
                    {n}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Dot at selected value */}
          <div
            className="absolute top-1.5 w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-300 shadow-lg shadow-amber-500/40 transition-all duration-150"
            style={{ left: `${valuePercent}%`, transform: 'translateX(-50%)' }}
          />
        </div>

        {/* Result display */}
        <div className="mt-6 bg-slate-800/60 border border-amber-500/30 rounded-xl p-5 text-center">
          <div className="text-4xl font-bold text-amber-400 mb-2">
            |{value}| = {absValue}
          </div>
          <p className="text-slate-400 text-sm">
            Distance from zero: <span className="text-amber-300 font-semibold">{absValue} step{absValue !== 1 ? 's' : ''}</span>
          </p>
        </div>
      </div>

      {/* Part 2: Expression Evaluator */}
      <div>
        <h3 className="text-white font-bold text-base mb-4">Expression Evaluator</h3>
        <p className="text-slate-400 text-sm mb-4">Click an expression to see the step-by-step working.</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {expressions.map((expr, i) => (
            <button
              key={i}
              onClick={() => setSelectedExpr(selectedExpr === i ? null : i)}
              className={`
                px-4 py-3 rounded-xl border text-sm font-semibold transition
                ${selectedExpr === i
                  ? 'bg-amber-500/20 border-amber-400/60 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-amber-500/40 hover:text-amber-300'
                }
              `}
            >
              {expr.label}
            </button>
          ))}
        </div>

        {selectedExpr !== null && (
          <div className="bg-slate-800/60 border border-amber-500/30 rounded-xl p-5 space-y-2">
            {expressions[selectedExpr].steps.map((step, i) => {
              const isLast = i === expressions[selectedExpr].steps.length - 1;
              return (
                <p
                  key={i}
                  className={`text-sm ${isLast ? 'text-amber-400 font-bold text-base' : 'text-slate-300'}`}
                >
                  {step}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
