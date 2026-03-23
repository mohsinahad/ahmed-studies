import { useState } from 'react';

type BondType = 'ionic' | 'covalent';

export default function BondingSim() {
  const [bondType, setBondType] = useState<BondType>('ionic');
  const [animated, setAnimated] = useState(false);

  function handleAnimate() {
    setAnimated(false);
    setTimeout(() => setAnimated(true), 50);
  }

  return (
    <div className="space-y-5">
      {/* Toggle */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => { setBondType('ionic'); setAnimated(false); }}
          className={`px-5 py-2 rounded-lg font-semibold text-sm transition ${
            bondType === 'ionic'
              ? 'bg-amber-500 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Ionic Bond
        </button>
        <button
          onClick={() => { setBondType('covalent'); setAnimated(false); }}
          className={`px-5 py-2 rounded-lg font-semibold text-sm transition ${
            bondType === 'covalent'
              ? 'bg-emerald-500 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Covalent Bond
        </button>
      </div>

      {bondType === 'ionic' ? (
        <IonicBond animated={animated} />
      ) : (
        <CovalentBond animated={animated} />
      )}

      <button
        onClick={handleAnimate}
        className={`w-full py-2 rounded-xl font-semibold text-sm transition ${
          bondType === 'ionic'
            ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30'
            : 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30'
        }`}
      >
        Animate Bond Formation
      </button>
    </div>
  );
}

function IonicBond({ animated }: { animated: boolean }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <div className="text-center text-xs text-amber-400 font-bold uppercase tracking-widest mb-4">
        Electron TRANSFERRED
      </div>

      <div className="flex items-center justify-center gap-6">
        {/* Na atom */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-20 h-20 rounded-full border-2 border-slate-600 flex items-center justify-center bg-slate-800">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-300 font-bold">
              Na
            </div>
            {/* Outer electron */}
            <div
              className={`absolute w-4 h-4 rounded-full bg-amber-400 border border-amber-300 transition-all duration-700`}
              style={{
                top: animated ? '50%' : '4px',
                right: animated ? '50%' : '4px',
                transform: 'translate(50%, -50%)',
                opacity: animated ? 0 : 1,
              }}
            />
          </div>
          <div className={`text-sm font-bold transition-colors duration-500 ${animated ? 'text-amber-300' : 'text-slate-300'}`}>
            {animated ? 'Na⁺' : 'Na (11e⁻)'}
          </div>
          {animated && <div className="text-xs text-amber-400">Lost 1 electron → positive</div>}
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-1">
          <div
            className={`text-amber-400 text-2xl transition-all duration-500 ${animated ? 'opacity-100' : 'opacity-30'}`}
            style={{ transform: animated ? 'translateX(0)' : 'translateX(-10px)' }}
          >
            →
          </div>
          <div className="text-xs text-slate-500">e⁻</div>
        </div>

        {/* Cl atom */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-20 h-20 rounded-full border-2 border-slate-600 flex items-center justify-center bg-slate-800">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-300 font-bold">
              Cl
            </div>
            {/* Gained electron */}
            <div
              className={`absolute w-4 h-4 rounded-full bg-amber-400 border border-amber-300 transition-all duration-700 delay-300`}
              style={{
                top: '4px',
                right: '4px',
                opacity: animated ? 1 : 0,
              }}
            />
          </div>
          <div className={`text-sm font-bold transition-colors duration-500 ${animated ? 'text-blue-300' : 'text-slate-300'}`}>
            {animated ? 'Cl⁻' : 'Cl (17e⁻)'}
          </div>
          {animated && <div className="text-xs text-blue-400">Gained 1 electron → negative</div>}
        </div>
      </div>

      {animated && (
        <div className="mt-5 text-center">
          <div className="text-white font-bold text-lg">Na⁺ + Cl⁻ → NaCl</div>
          <div className="text-slate-400 text-sm">Opposite charges attract — ionic bond forms</div>
        </div>
      )}
    </div>
  );
}

function CovalentBond({ animated }: { animated: boolean }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <div className="text-center text-xs text-emerald-400 font-bold uppercase tracking-widest mb-4">
        Electrons SHARED
      </div>

      <div className="flex items-center justify-center gap-4">
        {/* H atom 1 */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16 rounded-full border-2 border-slate-600 flex items-center justify-center bg-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-300 font-bold text-sm">
              H
            </div>
            {/* Electron 1 */}
            <div
              className="absolute w-3 h-3 rounded-full bg-emerald-400 transition-all duration-600"
              style={{
                right: animated ? '-6px' : '4px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
          </div>
          <div className="text-slate-300 text-sm font-bold">H</div>
        </div>

        {/* Shared region */}
        <div className="flex flex-col items-center gap-2 w-12">
          {animated && (
            <div className="flex gap-1 justify-center">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-emerald-300 animate-pulse delay-75" />
            </div>
          )}
          <div className={`text-xs text-emerald-400 text-center transition-opacity duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
            shared pair
          </div>
        </div>

        {/* H atom 2 */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16 rounded-full border-2 border-slate-600 flex items-center justify-center bg-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-300 font-bold text-sm">
              H
            </div>
            {/* Electron 2 */}
            <div
              className="absolute w-3 h-3 rounded-full bg-emerald-300 transition-all duration-600"
              style={{
                left: animated ? '-6px' : '4px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />
          </div>
          <div className="text-slate-300 text-sm font-bold">H</div>
        </div>
      </div>

      {animated && (
        <div className="mt-5 text-center">
          <div className="text-white font-bold text-lg">H — H (H₂)</div>
          <div className="text-slate-400 text-sm">Both atoms share the electron pair — covalent bond forms</div>
          <div className="text-emerald-400 text-xs mt-2">Each H now "has" 2 electrons = full first shell ✓</div>
        </div>
      )}
    </div>
  );
}
