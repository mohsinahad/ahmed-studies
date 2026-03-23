import { useEffect, useRef, useState } from 'react';

type State = 'solid' | 'liquid' | 'gas';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

const STATE_INFO: Record<State, { label: string; description: string; color: string }> = {
  solid: {
    label: 'Solid',
    description: 'Particles are tightly packed and vibrate in place. Fixed shape and volume.',
    color: '#34d399',
  },
  liquid: {
    label: 'Liquid',
    description: 'Particles flow past each other. Definite volume, but takes the shape of the container.',
    color: '#6ee7b7',
  },
  gas: {
    label: 'Gas',
    description: 'Particles move freely and fast in all directions. No fixed shape or volume.',
    color: '#a7f3d0',
  },
};

function createSolidParticles(W: number, H: number): Particle[] {
  const cols = 8;
  const rows = 8;
  const spacingX = 36;
  const spacingY = 36;
  const offsetX = (W - cols * spacingX) / 2 + spacingX / 2;
  const offsetY = (H - rows * spacingY) / 2 + spacingY / 2;
  const particles: Particle[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const bx = offsetX + c * spacingX;
      const by = offsetY + r * spacingY;
      particles.push({ x: bx, y: by, vx: 0, vy: 0, baseX: bx, baseY: by });
    }
  }
  return particles;
}

function createLiquidParticles(W: number, H: number): Particle[] {
  const particles: Particle[] = [];
  const lowerHalf = H / 2;
  for (let i = 0; i < 60; i++) {
    const x = 10 + Math.random() * (W - 20);
    const y = lowerHalf + Math.random() * (H - lowerHalf - 10);
    const speed = 0.8;
    const angle = Math.random() * Math.PI * 2;
    particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, baseX: x, baseY: y });
  }
  return particles;
}

function createGasParticles(W: number, H: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < 60; i++) {
    const x = 10 + Math.random() * (W - 20);
    const y = 10 + Math.random() * (H - 20);
    const speed = 2.5;
    const angle = Math.random() * Math.PI * 2;
    particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, baseX: x, baseY: y });
  }
  return particles;
}

export default function StatesSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<State>('solid');
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);
  const stateRef = useRef<State>('solid');

  useEffect(() => {
    stateRef.current = state;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = canvas.width;
    const H = canvas.height;

    if (state === 'solid') particlesRef.current = createSolidParticles(W, H);
    else if (state === 'liquid') particlesRef.current = createLiquidParticles(W, H);
    else particlesRef.current = createGasParticles(W, H);
  }, [state]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width;
    const H = canvas.height;
    const lowerHalf = H / 2;

    particlesRef.current = createSolidParticles(W, H);

    function tick() {
      const s = stateRef.current;
      const particles = particlesRef.current;
      const info = STATE_INFO[s];

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, W, H);

      if (s === 'solid') {
        particles.forEach((p) => {
          p.x = p.baseX + (Math.random() - 0.5) * 3;
          p.y = p.baseY + (Math.random() - 0.5) * 3;
        });
      } else if (s === 'liquid') {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 8 || p.x > W - 8) p.vx *= -1;
          if (p.y < lowerHalf || p.y > H - 8) p.vy *= -1;
          p.x = Math.max(8, Math.min(W - 8, p.x));
          p.y = Math.max(lowerHalf, Math.min(H - 8, p.y));
        });

        // Draw "liquid surface" line
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, lowerHalf);
        ctx.lineTo(W, lowerHalf);
        ctx.stroke();
      } else {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 8 || p.x > W - 8) p.vx *= -1;
          if (p.y < 8 || p.y > H - 8) p.vy *= -1;
          p.x = Math.max(8, Math.min(W - 8, p.x));
          p.y = Math.max(8, Math.min(H - 8, p.y));
        });
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = info.color;
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const info = STATE_INFO[state];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {(['solid', 'liquid', 'gas'] as State[]).map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            className={`px-5 py-2 rounded-lg font-semibold text-sm transition capitalize ${
              state === s
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        width={380}
        height={300}
        className="rounded-xl bg-slate-900"
      />

      <div className="text-center">
        <div className="text-emerald-400 font-bold text-lg capitalize">{info.label}</div>
        <p className="text-slate-400 text-sm mt-1 max-w-xs">{info.description}</p>
      </div>
    </div>
  );
}
