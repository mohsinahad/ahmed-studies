import { useEffect, useRef, useState } from 'react';

interface Element {
  symbol: string;
  name: string;
  z: number;
  neutrons: number;
}

const elements: Element[] = [
  { symbol: 'H',  name: 'Hydrogen',   z: 1,  neutrons: 0  },
  { symbol: 'He', name: 'Helium',     z: 2,  neutrons: 2  },
  { symbol: 'Li', name: 'Lithium',    z: 3,  neutrons: 4  },
  { symbol: 'Be', name: 'Beryllium',  z: 4,  neutrons: 5  },
  { symbol: 'B',  name: 'Boron',      z: 5,  neutrons: 6  },
  { symbol: 'C',  name: 'Carbon',     z: 6,  neutrons: 6  },
  { symbol: 'N',  name: 'Nitrogen',   z: 7,  neutrons: 7  },
  { symbol: 'O',  name: 'Oxygen',     z: 8,  neutrons: 8  },
  { symbol: 'F',  name: 'Fluorine',   z: 9,  neutrons: 10 },
  { symbol: 'Ne', name: 'Neon',       z: 10, neutrons: 10 },
  { symbol: 'Na', name: 'Sodium',     z: 11, neutrons: 12 },
  { symbol: 'Mg', name: 'Magnesium',  z: 12, neutrons: 12 },
  { symbol: 'Al', name: 'Aluminium',  z: 13, neutrons: 14 },
  { symbol: 'Si', name: 'Silicon',    z: 14, neutrons: 14 },
  { symbol: 'P',  name: 'Phosphorus', z: 15, neutrons: 16 },
  { symbol: 'S',  name: 'Sulfur',     z: 16, neutrons: 16 },
  { symbol: 'Cl', name: 'Chlorine',   z: 17, neutrons: 18 },
  { symbol: 'Ar', name: 'Argon',      z: 18, neutrons: 22 },
  { symbol: 'K',  name: 'Potassium',  z: 19, neutrons: 20 },
  { symbol: 'Ca', name: 'Calcium',    z: 20, neutrons: 20 },
];

function getShells(z: number): [number, number, number] {
  const s1 = Math.min(z, 2);
  const s2 = Math.min(z - s1, 8);
  const s3 = Math.max(0, z - s1 - s2);
  return [s1, s2, s3];
}

export default function AtomSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elementIndex, setElementIndex] = useState(0);
  const frameRef = useRef<number>(0);
  const angleRef = useRef(0);

  const el = elements[elementIndex];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;

    const [s1, s2, s3] = getShells(el.z);
    const shellRadii = [60, 110, 160];
    const shellCounts = [s1, s2, s3];

    function draw(angle: number) {
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, W, H);

      // Draw shells
      shellRadii.forEach((r, i) => {
        if (shellCounts[i] === 0) return;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nucleus
      const nucleusR = Math.max(18, 8 + el.z * 0.8);
      const grad = ctx.createRadialGradient(cx - 4, cy - 4, 2, cx, cy, nucleusR);
      grad.addColorStop(0, '#fb923c');
      grad.addColorStop(1, '#dc2626');
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusR, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Proton count in nucleus
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${nucleusR > 20 ? 14 : 11}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${el.z}p`, cx, cy);

      // Draw electrons
      shellRadii.forEach((r, si) => {
        const count = shellCounts[si];
        if (count === 0) return;
        for (let i = 0; i < count; i++) {
          const a = angle * (0.5 + si * 0.3) + (Math.PI * 2 * i) / count;
          const ex = cx + r * Math.cos(a);
          const ey = cy + r * Math.sin(a);

          // Glow
          const eGrad = ctx.createRadialGradient(ex, ey, 0, ex, ey, 8);
          eGrad.addColorStop(0, 'rgba(52, 211, 153, 0.6)');
          eGrad.addColorStop(1, 'rgba(52, 211, 153, 0)');
          ctx.beginPath();
          ctx.arc(ex, ey, 8, 0, Math.PI * 2);
          ctx.fillStyle = eGrad;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(ex, ey, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#34d399';
          ctx.fill();
        }
      });
    }

    function animate() {
      angleRef.current += 0.02;
      draw(angleRef.current);
      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [el]);

  const [s1, s2, s3] = getShells(el.z);
  const massNumber = el.z + el.neutrons;

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={380}
        height={380}
        className="rounded-xl bg-slate-900"
      />

      <div className="w-full max-w-sm space-y-3">
        <label className="flex items-center justify-between text-sm text-slate-300">
          <span>Element: <span className="text-emerald-400 font-bold">{el.name} ({el.symbol})</span></span>
          <span className="text-slate-500">{elementIndex + 1} / 20</span>
        </label>
        <input
          type="range"
          min={0}
          max={19}
          value={elementIndex}
          onChange={(e) => setElementIndex(Number(e.target.value))}
          className="w-full accent-emerald-400"
        />

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-slate-800 rounded-lg p-3">
            <div className="text-slate-400 text-xs">Atomic Number</div>
            <div className="text-emerald-400 font-bold text-lg">{el.z}</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-3">
            <div className="text-slate-400 text-xs">Mass Number</div>
            <div className="text-emerald-400 font-bold text-lg">{massNumber}</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-3 col-span-2">
            <div className="text-slate-400 text-xs mb-1">Electron Configuration</div>
            <div className="text-white font-mono">
              Shell 1: {s1} &nbsp; Shell 2: {s2} &nbsp; {s3 > 0 && `Shell 3: ${s3}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
