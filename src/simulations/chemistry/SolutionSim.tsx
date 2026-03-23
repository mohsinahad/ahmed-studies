import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularSpeed: number;
}

const MAX_PARTICLES = 50;
const SATURATED_THRESHOLD = 40;
const BEAKER_LEFT = 40;
const BEAKER_BOTTOM = 260;
const BEAKER_WIDTH = 220;
const BEAKER_HEIGHT = 200;

function randomParticle(): Particle {
  return {
    x: BEAKER_LEFT + 20 + Math.random() * (BEAKER_WIDTH - 40),
    y: BEAKER_BOTTOM - 20 - Math.random() * (BEAKER_HEIGHT - 40),
    vx: 0,
    vy: 0,
    angle: Math.random() * Math.PI * 2,
    angularSpeed: (Math.random() - 0.5) * 0.1,
  };
}

export default function SolutionSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const stirRef = useRef(false);
  const frameRef = useRef<number>(0);
  const [count, setCount] = useState(0);
  const [stirring, setStirring] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const W = canvas.width;

    function draw() {
      ctx.clearRect(0, 0, W, 300);

      // Background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, W, 300);

      // Beaker water fill
      ctx.fillStyle = 'rgba(14, 165, 233, 0.18)';
      ctx.fillRect(BEAKER_LEFT, BEAKER_BOTTOM - BEAKER_HEIGHT, BEAKER_WIDTH, BEAKER_HEIGHT);

      // Beaker outline
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(BEAKER_LEFT, BEAKER_BOTTOM - BEAKER_HEIGHT - 10);
      ctx.lineTo(BEAKER_LEFT, BEAKER_BOTTOM);
      ctx.lineTo(BEAKER_LEFT + BEAKER_WIDTH, BEAKER_BOTTOM);
      ctx.lineTo(BEAKER_LEFT + BEAKER_WIDTH, BEAKER_BOTTOM - BEAKER_HEIGHT - 10);
      ctx.stroke();

      // Beaker spout
      ctx.beginPath();
      ctx.moveTo(BEAKER_LEFT - 6, BEAKER_BOTTOM - BEAKER_HEIGHT - 10);
      ctx.lineTo(BEAKER_LEFT + BEAKER_WIDTH + 6, BEAKER_BOTTOM - BEAKER_HEIGHT - 10);
      ctx.stroke();

      // Update and draw particles
      const isStirring = stirRef.current;
      particlesRef.current.forEach((p) => {
        if (isStirring) {
          p.angle += p.angularSpeed * 3;
          const cx = BEAKER_LEFT + BEAKER_WIDTH / 2;
          const cy = BEAKER_BOTTOM - BEAKER_HEIGHT / 2;
          const dx = p.x - cx;
          const dy = p.y - cy;
          const r = Math.sqrt(dx * dx + dy * dy);
          if (r > 5) {
            p.vx = -dy / r * 2;
            p.vy = dx / r * 2;
          }
          p.x += p.vx;
          p.y += p.vy;

          // Keep in beaker
          p.x = Math.max(BEAKER_LEFT + 8, Math.min(BEAKER_LEFT + BEAKER_WIDTH - 8, p.x));
          p.y = Math.max(BEAKER_BOTTOM - BEAKER_HEIGHT + 8, Math.min(BEAKER_BOTTOM - 8, p.y));
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#34d399';
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Label
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('H₂O (solvent)', BEAKER_LEFT + BEAKER_WIDTH / 2, BEAKER_BOTTOM + 18);

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  function addSolute() {
    if (particlesRef.current.length >= MAX_PARTICLES) return;
    particlesRef.current = [...particlesRef.current, randomParticle()];
    setCount(particlesRef.current.length);
  }

  function removeSolute() {
    if (particlesRef.current.length === 0) return;
    particlesRef.current = particlesRef.current.slice(0, -1);
    setCount(particlesRef.current.length);
  }

  function toggleStir() {
    const next = !stirring;
    setStirring(next);
    stirRef.current = next;
    if (!next) {
      particlesRef.current.forEach((p) => { p.vx = 0; p.vy = 0; });
    }
  }

  const saturated = count >= SATURATED_THRESHOLD;
  const concentration = count > 0 ? (count * 0.2 / 1).toFixed(2) : '0.00';

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="rounded-xl bg-slate-900"
      />

      <div className="w-full max-w-sm space-y-3">
        {/* Status */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-400">Solute particles: <span className="text-emerald-400 font-bold">{count}</span></div>
            <div className="text-sm text-slate-400">Concentration: <span className="text-white font-bold">{concentration} g/L</span></div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            saturated
              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
              : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
          }`}>
            {saturated ? 'Saturated' : 'Unsaturated'}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={addSolute}
            disabled={count >= MAX_PARTICLES}
            className="flex-1 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-medium hover:bg-emerald-500/30 disabled:opacity-40 transition"
          >
            + Add Solute
          </button>
          <button
            onClick={removeSolute}
            disabled={count === 0}
            className="flex-1 py-2 rounded-lg bg-slate-700 border border-slate-600 text-slate-300 text-sm font-medium hover:bg-slate-600 disabled:opacity-40 transition"
          >
            - Remove
          </button>
          <button
            onClick={toggleStir}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              stirring
                ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                : 'bg-slate-700 border border-slate-600 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {stirring ? 'Stirring...' : 'Stir'}
          </button>
        </div>

        {saturated && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-xs text-red-300">
            Saturated — no more solute can dissolve at this temperature. Excess solute would remain undissolved.
          </div>
        )}
      </div>
    </div>
  );
}
