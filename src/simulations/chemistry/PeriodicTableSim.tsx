import { useState } from 'react';

type Category = 'alkali-metal' | 'alkaline-earth' | 'nonmetal' | 'noble-gas' | 'metalloid' | 'other-metal';

interface ElementData {
  symbol: string;
  name: string;
  z: number;
  period: number;
  group: number;
  category: Category;
  shells: number[];
}

const elementData: ElementData[] = [
  { symbol: 'H',  name: 'Hydrogen',   z: 1,  period: 1, group: 1,  category: 'nonmetal',       shells: [1] },
  { symbol: 'He', name: 'Helium',     z: 2,  period: 1, group: 18, category: 'noble-gas',       shells: [2] },
  { symbol: 'Li', name: 'Lithium',    z: 3,  period: 2, group: 1,  category: 'alkali-metal',    shells: [2, 1] },
  { symbol: 'Be', name: 'Beryllium',  z: 4,  period: 2, group: 2,  category: 'alkaline-earth',  shells: [2, 2] },
  { symbol: 'B',  name: 'Boron',      z: 5,  period: 2, group: 13, category: 'metalloid',       shells: [2, 3] },
  { symbol: 'C',  name: 'Carbon',     z: 6,  period: 2, group: 14, category: 'nonmetal',        shells: [2, 4] },
  { symbol: 'N',  name: 'Nitrogen',   z: 7,  period: 2, group: 15, category: 'nonmetal',        shells: [2, 5] },
  { symbol: 'O',  name: 'Oxygen',     z: 8,  period: 2, group: 16, category: 'nonmetal',        shells: [2, 6] },
  { symbol: 'F',  name: 'Fluorine',   z: 9,  period: 2, group: 17, category: 'nonmetal',        shells: [2, 7] },
  { symbol: 'Ne', name: 'Neon',       z: 10, period: 2, group: 18, category: 'noble-gas',       shells: [2, 8] },
  { symbol: 'Na', name: 'Sodium',     z: 11, period: 3, group: 1,  category: 'alkali-metal',    shells: [2, 8, 1] },
  { symbol: 'Mg', name: 'Magnesium',  z: 12, period: 3, group: 2,  category: 'alkaline-earth',  shells: [2, 8, 2] },
  { symbol: 'Al', name: 'Aluminium',  z: 13, period: 3, group: 13, category: 'other-metal',     shells: [2, 8, 3] },
  { symbol: 'Si', name: 'Silicon',    z: 14, period: 3, group: 14, category: 'metalloid',       shells: [2, 8, 4] },
  { symbol: 'P',  name: 'Phosphorus', z: 15, period: 3, group: 15, category: 'nonmetal',        shells: [2, 8, 5] },
  { symbol: 'S',  name: 'Sulfur',     z: 16, period: 3, group: 16, category: 'nonmetal',        shells: [2, 8, 6] },
  { symbol: 'Cl', name: 'Chlorine',   z: 17, period: 3, group: 17, category: 'nonmetal',        shells: [2, 8, 7] },
  { symbol: 'Ar', name: 'Argon',      z: 18, period: 3, group: 18, category: 'noble-gas',       shells: [2, 8, 8] },
  { symbol: 'K',  name: 'Potassium',  z: 19, period: 4, group: 1,  category: 'alkali-metal',    shells: [2, 8, 8, 1] },
  { symbol: 'Ca', name: 'Calcium',    z: 20, period: 4, group: 2,  category: 'alkaline-earth',  shells: [2, 8, 8, 2] },
];

const categoryColors: Record<Category, { bg: string; text: string; label: string }> = {
  'alkali-metal':   { bg: 'bg-amber-500/20',  text: 'text-amber-300',  label: 'Alkali Metal' },
  'alkaline-earth': { bg: 'bg-yellow-500/20', text: 'text-yellow-300', label: 'Alkaline Earth' },
  'nonmetal':       { bg: 'bg-blue-500/20',   text: 'text-blue-300',   label: 'Nonmetal' },
  'noble-gas':      { bg: 'bg-purple-500/20', text: 'text-purple-300', label: 'Noble Gas' },
  'metalloid':      { bg: 'bg-teal-500/20',   text: 'text-teal-300',   label: 'Metalloid' },
  'other-metal':    { bg: 'bg-orange-500/20', text: 'text-orange-300', label: 'Metal' },
};

// Sparse grid: period 1-4, groups 1-18
const GROUPS_SHOWN = [1, 2, 13, 14, 15, 16, 17, 18];

export default function PeriodicTableSim() {
  const [selected, setSelected] = useState<ElementData | null>(null);

  return (
    <div className="space-y-4">
      {/* Grid */}
      <div className="overflow-x-auto">
        <div className="inline-grid gap-1" style={{ gridTemplateColumns: `repeat(${GROUPS_SHOWN.length}, minmax(44px, 1fr))` }}>
          {/* Header row */}
          {GROUPS_SHOWN.map((g) => (
            <div key={g} className="text-center text-xs text-slate-600 pb-1">{g}</div>
          ))}

          {/* Periods 1-4 */}
          {[1, 2, 3, 4].map((period) =>
            GROUPS_SHOWN.map((group) => {
              const el = elementData.find((e) => e.period === period && e.group === group);
              if (!el) {
                return <div key={`${period}-${group}`} className="h-12" />;
              }
              const colors = categoryColors[el.category];
              const isSelected = selected?.z === el.z;
              return (
                <button
                  key={el.z}
                  onClick={() => setSelected(isSelected ? null : el)}
                  className={`
                    h-12 rounded-lg border transition-all text-center
                    ${colors.bg} ${colors.text}
                    ${isSelected
                      ? 'border-emerald-400 ring-2 ring-emerald-400/50 scale-105'
                      : 'border-slate-700 hover:border-slate-500'
                    }
                  `}
                >
                  <div className="text-xs opacity-60 leading-none mt-1">{el.z}</div>
                  <div className="font-bold text-sm leading-none">{el.symbol}</div>
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2">
        {(Object.entries(categoryColors) as [Category, { bg: string; text: string; label: string }][]).map(([, c]) => (
          <div key={c.label} className={`flex items-center gap-1 px-2 py-1 rounded-md ${c.bg}`}>
            <div className={`text-xs ${c.text}`}>{c.label}</div>
          </div>
        ))}
      </div>

      {/* Detail panel */}
      {selected ? (
        <div className="bg-slate-800 border border-emerald-500/40 rounded-xl p-4">
          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0 ${categoryColors[selected.category].bg}`}>
              <div className="text-xs text-slate-400">{selected.z}</div>
              <div className={`text-2xl font-bold ${categoryColors[selected.category].text}`}>{selected.symbol}</div>
            </div>
            <div className="flex-1">
              <div className="text-white font-bold text-lg">{selected.name}</div>
              <div className="text-slate-400 text-sm">{categoryColors[selected.category].label}</div>
              <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <div><span className="text-slate-500">Period:</span> <span className="text-white">{selected.period}</span></div>
                <div><span className="text-slate-500">Group:</span> <span className="text-white">{selected.group}</span></div>
                <div className="col-span-2">
                  <span className="text-slate-500">Electrons per shell:</span>{' '}
                  <span className="text-emerald-400 font-mono">{selected.shells.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-slate-500 text-sm py-4">
          Click an element to see its details
        </div>
      )}
    </div>
  );
}
