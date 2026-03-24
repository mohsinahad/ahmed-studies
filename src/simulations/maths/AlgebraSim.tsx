import { useState } from 'react';

interface Equation {
  display: string;
  steps: { action: string; left: string; right: string }[];
  answer: string;
}

const equations: Equation[] = [
  {
    display: 'x + 5 = 12',
    steps: [
      { action: 'Start', left: 'x + 5', right: '12' },
      { action: 'Subtract 5 from both sides', left: 'x + 5 − 5', right: '12 − 5' },
      { action: 'Simplify', left: 'x', right: '7' },
    ],
    answer: 'x = 7',
  },
  {
    display: '3x = 21',
    steps: [
      { action: 'Start', left: '3x', right: '21' },
      { action: 'Divide both sides by 3', left: '3x ÷ 3', right: '21 ÷ 3' },
      { action: 'Simplify', left: 'x', right: '7' },
    ],
    answer: 'x = 7',
  },
  {
    display: '2x + 4 = 14',
    steps: [
      { action: 'Start', left: '2x + 4', right: '14' },
      { action: 'Subtract 4 from both sides', left: '2x + 4 − 4', right: '14 − 4' },
      { action: 'Simplify', left: '2x', right: '10' },
      { action: 'Divide both sides by 2', left: '2x ÷ 2', right: '10 ÷ 2' },
      { action: 'Simplify', left: 'x', right: '5' },
    ],
    answer: 'x = 5',
  },
  {
    display: 'x/3 = 4',
    steps: [
      { action: 'Start', left: 'x ÷ 3', right: '4' },
      { action: 'Multiply both sides by 3', left: '(x ÷ 3) × 3', right: '4 × 3' },
      { action: 'Simplify', left: 'x', right: '12' },
    ],
    answer: 'x = 12',
  },
  {
    display: '5x − 3 = 22',
    steps: [
      { action: 'Start', left: '5x − 3', right: '22' },
      { action: 'Add 3 to both sides', left: '5x − 3 + 3', right: '22 + 3' },
      { action: 'Simplify', left: '5x', right: '25' },
      { action: 'Divide both sides by 5', left: '5x ÷ 5', right: '25 ÷ 5' },
      { action: 'Simplify', left: 'x', right: '5' },
    ],
    answer: 'x = 5',
  },
];

export default function AlgebraSim() {
  const [eqIndex, setEqIndex] = useState(0);
  const [step, setStep] = useState(0);

  const eq = equations[eqIndex];
  const current = eq.steps[step];
  const isLast = step === eq.steps.length - 1;

  function selectEq(i: number) {
    setEqIndex(i);
    setStep(0);
  }

  return (
    <div className="space-y-6">
      {/* Equation picker */}
      <div>
        <p className="text-slate-400 text-xs mb-2 uppercase tracking-wide font-semibold">Choose an equation</p>
        <div className="flex flex-wrap gap-2">
          {equations.map((e, i) => (
            <button
              key={i}
              onClick={() => selectEq(i)}
              className={`px-4 py-2 rounded-lg font-mono text-sm font-semibold transition ${
                eqIndex === i
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-amber-500'
              }`}
            >
              {e.display}
            </button>
          ))}
        </div>
      </div>

      {/* Balance scale */}
      <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 text-center">Balance Scale — both sides must stay equal</p>

        {/* Scale visual */}
        <div className="flex items-end justify-center gap-0 mb-2">
          {/* Left pan */}
          <div className="flex flex-col items-center">
            <div className={`w-36 min-h-16 rounded-xl border-2 flex items-center justify-center px-3 py-4 transition-all ${
              isLast ? 'border-amber-500 bg-amber-500/10' : 'border-slate-600 bg-slate-800'
            }`}>
              <span className="font-mono text-white text-lg text-center leading-tight">{current.left}</span>
            </div>
            <div className="w-1 h-8 bg-slate-600" />
          </div>

          {/* Fulcrum */}
          <div className="flex flex-col items-center mb-0 z-10">
            <div className="w-48 h-1 bg-slate-500 rounded" />
            <div className="w-3 h-10 bg-slate-500 rounded-b" />
            <div className="w-8 h-2 bg-slate-400 rounded" />
          </div>

          {/* Right pan */}
          <div className="flex flex-col items-center">
            <div className={`w-36 min-h-16 rounded-xl border-2 flex items-center justify-center px-3 py-4 transition-all ${
              isLast ? 'border-amber-500 bg-amber-500/10' : 'border-slate-600 bg-slate-800'
            }`}>
              <span className="font-mono text-white text-lg text-center leading-tight">{current.right}</span>
            </div>
            <div className="w-1 h-8 bg-slate-600" />
          </div>
        </div>

        {/* Step label */}
        <div className="text-center mt-2">
          <span className={`text-sm font-semibold ${isLast ? 'text-amber-400' : 'text-slate-400'}`}>
            {current.action}
          </span>
        </div>

        {/* Golden rule */}
        <p className="text-center text-xs text-slate-600 mt-3">
          Golden rule: whatever you do to one side, do the same to the other
        </p>
      </div>

      {/* Step progress dots */}
      <div className="flex items-center justify-center gap-2">
        {eq.steps.map((_, i) => (
          <div key={i} className={`h-2 rounded-full transition-all ${
            i === step ? 'w-6 bg-amber-500' : i < step ? 'w-2 bg-amber-700' : 'w-2 bg-slate-700'
          }`} />
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          disabled={step === 0}
          className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 disabled:opacity-30 text-sm font-semibold transition"
        >
          ← Previous
        </button>
        {!isLast ? (
          <button
            onClick={() => setStep(s => s + 1)}
            className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-sm font-semibold transition"
          >
            Next Step →
          </button>
        ) : (
          <div className="px-5 py-2 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400 text-sm font-bold">
            ✓ {eq.answer}
          </div>
        )}
      </div>
    </div>
  );
}
