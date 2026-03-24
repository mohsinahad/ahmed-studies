import { useState } from 'react';

interface Mineral {
  name: string;
  formula: string;
  emoji: string;
  colour: string;
  hardness: string;
  lustre: string;
  uses: string;
  funFact: string;
  cardColour: string;
}

const MINERALS: Mineral[] = [
  {
    name: 'Quartz',
    formula: 'SiO\u2082',
    emoji: '\uD83D\uDC8E',
    colour: 'White/clear/purple (amethyst)',
    hardness: '7',
    lustre: 'Vitreous (glassy)',
    uses: 'Glass making, electronics, jewellery',
    funFact:
      'Quartz is the second most abundant mineral in Earth\'s crust. The word "crystal" comes from the Greek word for quartz ice.',
    cardColour: 'border-violet-500/40 bg-violet-500/10',
  },
  {
    name: 'Feldspar',
    formula: 'KAlSi\u2083O\u2088',
    emoji: '\uD83E\uDEA8',
    colour: 'Pink/white/grey',
    hardness: '6\u20136.5',
    lustre: 'Vitreous to pearly',
    uses: 'Ceramics, glass, porcelain',
    funFact:
      'Feldspar is the MOST abundant mineral in Earth\'s crust, making up about 60% of all rocks.',
    cardColour: 'border-pink-500/40 bg-pink-500/10',
  },
  {
    name: 'Calcite',
    formula: 'CaCO\u2083',
    emoji: '\uD83D\uDD36',
    colour: 'White/colourless',
    hardness: '3',
    lustre: 'Vitreous to resinous',
    uses: 'Cement, chalk, limestone buildings',
    funFact:
      'Calcite makes up limestone and marble. The Taj Mahal and many ancient monuments are built from calcite-rich marble.',
    cardColour: 'border-orange-400/40 bg-orange-400/10',
  },
  {
    name: 'Pyrite',
    formula: 'FeS\u2082',
    emoji: '\u2728',
    colour: 'Brassy yellow',
    hardness: '6\u20136.5',
    lustre: 'Metallic',
    uses: "Jewellery (novelty), historic compass making",
    funFact:
      'Pyrite is called "Fool\'s Gold" because its shiny yellow colour tricked many miners into thinking they had found real gold.',
    cardColour: 'border-yellow-500/40 bg-yellow-500/10',
  },
  {
    name: 'Halite',
    formula: 'NaCl',
    emoji: '\uD83E\uDDC2',
    colour: 'Colourless/white/pink',
    hardness: '2.5',
    lustre: 'Vitreous',
    uses: 'Table salt, food preservation, de-icing roads',
    funFact:
      'Halite is the mineral form of common table salt. Ancient civilisations used it as currency \u2014 the word "salary" comes from the Latin word for salt.',
    cardColour: 'border-slate-400/40 bg-slate-400/10',
  },
  {
    name: 'Magnetite',
    formula: 'Fe\u2083O\u2084',
    emoji: '\uD83D\uDD2E',
    colour: 'Black',
    hardness: '5.5\u20136.5',
    lustre: 'Metallic',
    uses: 'Iron ore, magnets, early compasses',
    funFact:
      'Magnetite is naturally magnetic \u2014 it was used as the world\'s first compass by ancient Chinese navigators.',
    cardColour: 'border-indigo-500/40 bg-indigo-500/10',
  },
  {
    name: 'Diamond',
    formula: 'C',
    emoji: '\uD83D\uDCA0',
    colour: 'Colourless/various',
    hardness: '10 (hardest natural substance)',
    lustre: 'Adamantine (brilliant)',
    uses: 'Jewellery, cutting tools, industrial drilling',
    funFact:
      'Diamond and graphite (pencil lead) are both made entirely of carbon \u2014 the difference is how the atoms are arranged.',
    cardColour: 'border-cyan-400/40 bg-cyan-400/10',
  },
  {
    name: 'Malachite',
    formula: 'Cu\u2082CO\u2083(OH)\u2082',
    emoji: '\uD83D\uDFE2',
    colour: 'Vivid green',
    hardness: '3.5\u20134',
    lustre: 'Silky to vitreous',
    uses: 'Gemstones, historic green pigment in paint, decorative objects',
    funFact:
      'Ancient Egyptians used crushed malachite as green eye shadow and as a pigment in their famous tomb paintings.',
    cardColour: 'border-emerald-500/40 bg-emerald-500/10',
  },
];

export default function MineralsSim() {
  const [selected, setSelected] = useState<Mineral | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-white font-bold text-lg mb-1">Mineral Explorer</h2>
        <p className="text-slate-400 text-sm">
          Click any mineral card to explore its properties, uses, and facts.
        </p>
      </div>

      {/* Grid of mineral cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {MINERALS.map((mineral) => (
          <button
            key={mineral.name}
            onClick={() => setSelected(selected?.name === mineral.name ? null : mineral)}
            className={`border rounded-xl p-3 text-left transition hover:scale-105 active:scale-95 ${mineral.cardColour} ${
              selected?.name === mineral.name
                ? 'ring-2 ring-emerald-400'
                : 'hover:border-emerald-500/50'
            }`}
          >
            <div className="text-3xl mb-2">{mineral.emoji}</div>
            <div className="text-white font-semibold text-sm">{mineral.name}</div>
            <div className="text-slate-400 text-xs font-mono mt-0.5">{mineral.formula}</div>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="border border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{selected.emoji}</span>
            <div>
              <h3 className="text-white font-bold text-xl">{selected.name}</h3>
              <span className="text-emerald-400 font-mono text-sm">{selected.formula}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-800/60 rounded-xl p-3">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Colour</div>
              <div className="text-white text-sm">{selected.colour}</div>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-3">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                Hardness (Mohs)
              </div>
              <div className="text-white text-sm">{selected.hardness}</div>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-3">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Lustre</div>
              <div className="text-white text-sm">{selected.lustre}</div>
            </div>
            <div className="bg-slate-800/60 rounded-xl p-3">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">Uses</div>
              <div className="text-white text-sm">{selected.uses}</div>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <div className="text-xs uppercase tracking-widest text-amber-400 mb-1">Fun Fact</div>
            <p className="text-amber-100 text-sm leading-relaxed">{selected.funFact}</p>
          </div>
        </div>
      )}

      {/* Mohs scale reference */}
      <div className="border border-slate-700 rounded-xl p-4 bg-slate-800/40">
        <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">
          Mohs Hardness Scale Reference
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {[
            ['1', 'Talc'],
            ['2', 'Gypsum'],
            ['3', 'Calcite'],
            ['4', 'Fluorite'],
            ['5', 'Apatite'],
            ['6', 'Feldspar'],
            ['7', 'Quartz'],
            ['8', 'Topaz'],
            ['9', 'Corundum'],
            ['10', 'Diamond'],
          ].map(([num, name]) => (
            <div
              key={num}
              className="flex items-center gap-1 bg-slate-700/60 rounded-lg px-2 py-1"
            >
              <span className="text-emerald-400 font-bold text-xs">{num}</span>
              <span className="text-slate-300 text-xs">{name}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-xs">
          Mohs Scale: 1 (Talc) \u2192 10 (Diamond). A mineral can scratch anything with a lower
          hardness number.
        </p>
      </div>
    </div>
  );
}
