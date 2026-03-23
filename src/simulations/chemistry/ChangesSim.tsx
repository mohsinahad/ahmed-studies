import { useState } from 'react';

const chemicalSigns = [
  { sign: 'Colour change', example: 'Iron turns orange-brown when it rusts' },
  { sign: 'Gas produced', example: 'Vinegar + baking soda fizzes and bubbles' },
  { sign: 'Heat or light given off', example: 'Wood burning releases light and heat' },
  { sign: 'Precipitate forms', example: 'A solid forms when two clear liquids mix' },
];

const morePhysical = [
  { example: 'Glass breaking', note: 'Still glass, just in pieces' },
  { example: 'Water freezing', note: 'Still H₂O, just solid' },
  { example: 'Clay being shaped', note: 'Same material, different form' },
];

const moreChemical = [
  { example: 'Cooking an egg', note: 'Proteins change permanently' },
  { example: 'Fireworks exploding', note: 'New gases and light produced' },
  { example: 'Milk souring', note: 'Bacteria produce lactic acid' },
];

export default function ChangesSim() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-6">
      {/* Main comparison */}
      <div className="grid grid-cols-2 gap-4">
        {/* Physical */}
        <div className="bg-slate-800 border border-slate-600 rounded-xl p-4">
          <h3 className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-3">Physical Change</h3>

          <div className="flex flex-col items-center gap-2 py-4">
            <div className="flex items-center gap-3 text-2xl">
              <span title="Ice">🧊</span>
              <span className="text-slate-500 text-base">→</span>
              <span title="Water">💧</span>
            </div>
            <div className="text-xs text-slate-400 text-center">Ice melting into water</div>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">✓</span>
              <span>Same substance, different state</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">✓</span>
              <span>Usually reversible</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-sky-400 mt-0.5">✓</span>
              <span>No new substance formed</span>
            </div>
          </div>

          {showMore && (
            <div className="mt-3 space-y-2 border-t border-slate-700 pt-3">
              {morePhysical.map((item) => (
                <div key={item.example} className="text-xs">
                  <div className="text-white font-medium">{item.example}</div>
                  <div className="text-slate-500">{item.note}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chemical */}
        <div className="bg-slate-800 border border-emerald-800 rounded-xl p-4">
          <h3 className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-3">Chemical Change</h3>

          <div className="flex flex-col items-center gap-2 py-4">
            <div className="flex items-center gap-2 text-2xl">
              <span title="Iron">🔩</span>
              <span className="text-slate-500 text-base">+</span>
              <span title="Oxygen">💨</span>
              <span className="text-slate-500 text-base">→</span>
              <span title="Rust">🟫</span>
            </div>
            <div className="text-xs text-slate-400 text-center">Fe + O₂ → Rust (iron oxide)</div>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>New substance formed</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>Often irreversible</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>Different properties</span>
            </div>
          </div>

          {showMore && (
            <div className="mt-3 space-y-2 border-t border-slate-700 pt-3">
              {moreChemical.map((item) => (
                <div key={item.example} className="text-xs">
                  <div className="text-white font-medium">{item.example}</div>
                  <div className="text-slate-500">{item.note}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Signs of chemical change */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
        <h3 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-3">
          Signs of a Chemical Change
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {chemicalSigns.map((item) => (
            <div key={item.sign} className="flex items-start gap-2">
              <span className="text-amber-400 text-base mt-0.5">⚡</span>
              <div>
                <div className="text-white text-sm font-medium">{item.sign}</div>
                <div className="text-slate-400 text-xs">{item.example}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="w-full py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium transition"
      >
        {showMore ? 'Show Less' : 'Show More Examples'}
      </button>
    </div>
  );
}
