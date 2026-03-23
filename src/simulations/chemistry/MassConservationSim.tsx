import { useState, useRef } from 'react';

export default function MassConservationSim() {
  const [massA, setMassA] = useState(20);
  const [massB, setMassB] = useState(15);
  const [reacted, setReacted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = massA + massB;

  function handleReact() {
    if (animating) return;
    setReacted(false);
    setAnimating(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setReacted(true);
      setAnimating(false);
    }, 800);
  }

  const maxMass = 100;
  const leftPct = (total / maxMass) * 100;
  const rightPct = reacted ? leftPct : 0;

  // Scale visual: tip the scale if unequal sides
  const tilt = reacted ? 0 : animating ? 0 : 0;

  return (
    <div className="space-y-6">
      {/* Sliders */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-slate-300 flex justify-between mb-1">
            <span>Reactant A</span>
            <span className="text-emerald-400 font-bold">{massA}g</span>
          </label>
          <input
            type="range"
            min={5}
            max={50}
            value={massA}
            onChange={(e) => { setMassA(Number(e.target.value)); setReacted(false); }}
            className="w-full accent-emerald-400"
          />
        </div>
        <div>
          <label className="text-sm text-slate-300 flex justify-between mb-1">
            <span>Reactant B</span>
            <span className="text-emerald-400 font-bold">{massB}g</span>
          </label>
          <input
            type="range"
            min={5}
            max={50}
            value={massB}
            onChange={(e) => { setMassB(Number(e.target.value)); setReacted(false); }}
            className="w-full accent-emerald-400"
          />
        </div>
      </div>

      {/* Balance scale */}
      <div className="bg-slate-900 rounded-2xl p-6">
        {/* Beam */}
        <div className="relative flex items-start justify-center" style={{ height: 160 }}>
          {/* Pivot */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full z-10" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-1 h-8 bg-slate-400" />

          {/* Beam line */}
          <div
            className="absolute top-4 left-[10%] right-[10%] h-1 bg-slate-400 rounded-full transition-transform duration-700"
            style={{ transform: `rotate(${tilt}deg)` }}
          />

          {/* Left pan (reactants) */}
          <div className="absolute top-0 left-[8%] flex flex-col items-center">
            <div className="text-xs text-slate-400 mb-1">Reactants</div>
            <div className="w-24 h-20 border-2 border-slate-600 rounded-b-xl flex flex-col-reverse overflow-hidden bg-slate-800">
              <div
                className="w-full bg-emerald-600 transition-all duration-500 flex items-end justify-center pb-1"
                style={{ height: `${leftPct}%` }}
              >
                {leftPct > 15 && (
                  <span className="text-xs text-white font-bold">{total}g</span>
                )}
              </div>
            </div>
            <div className="text-emerald-400 font-bold text-sm mt-1">{massA}g + {massB}g</div>
          </div>

          {/* Right pan (products) */}
          <div className="absolute top-0 right-[8%] flex flex-col items-center">
            <div className="text-xs text-slate-400 mb-1">Products</div>
            <div className="w-24 h-20 border-2 border-slate-600 rounded-b-xl flex flex-col-reverse overflow-hidden bg-slate-800">
              <div
                className="w-full bg-teal-600 transition-all duration-700 flex items-end justify-center pb-1"
                style={{ height: `${rightPct}%` }}
              >
                {rightPct > 15 && (
                  <span className="text-xs text-white font-bold">{total}g</span>
                )}
              </div>
            </div>
            <div className={`font-bold text-sm mt-1 transition-colors duration-500 ${reacted ? 'text-teal-400' : 'text-slate-600'}`}>
              {reacted ? `${total}g` : '?'}
            </div>
          </div>
        </div>

        {/* Mass labels */}
        <div className="flex justify-between text-sm mt-2 px-2">
          <div className="text-center">
            <div className="text-slate-400">Total Reactants</div>
            <div className="text-emerald-400 font-bold text-xl">{total}g</div>
          </div>
          <div className="flex items-center text-slate-500 text-2xl">=</div>
          <div className="text-center">
            <div className="text-slate-400">Total Products</div>
            <div className={`font-bold text-xl transition-colors duration-500 ${reacted ? 'text-teal-400' : 'text-slate-600'}`}>
              {reacted ? `${total}g` : '??g'}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleReact}
        disabled={animating}
        className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 font-bold text-white transition"
      >
        {animating ? 'Reacting...' : reacted ? 'React Again!' : 'React!'}
      </button>

      {reacted && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
          <div className="text-emerald-400 font-bold">Mass is conserved!</div>
          <div className="text-slate-400 text-sm mt-1">
            {total}g of reactants → {total}g of products. Atoms were rearranged, not created or destroyed.
          </div>
        </div>
      )}
    </div>
  );
}
