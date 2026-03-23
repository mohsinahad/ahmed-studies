import { useEffect, useRef, useState } from 'react';

export default function NewtonsFirstSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [friction, setFriction] = useState(0);
  const animRef = useRef<number>(0);
  const posRef = useRef(80);
  const velRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const [running, setRunning] = useState(false);
  const [currentVel, setCurrentVel] = useState(0);

  const TRACK_Y = 130;
  const BALL_R = 18;
  const surfaces = ['Ice (no friction)', 'Wood floor', 'Carpet', 'Sand'];

  function getFrictionCoeff() {
    return friction * 0.15;
  }

  function draw(x: number, v: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Surface color
    const colors = ['#1e3a5f', '#3d2b1f', '#2d3a1e', '#4a3728'];
    ctx.fillStyle = colors[friction];
    ctx.fillRect(40, TRACK_Y, 700, 20);

    // Surface label
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText(surfaces[friction], 45, TRACK_Y + 15);

    // Track line
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, TRACK_Y);
    ctx.lineTo(740, TRACK_Y);
    ctx.stroke();

    // Ball
    ctx.beginPath();
    ctx.arc(x, TRACK_Y - BALL_R, BALL_R, 0, Math.PI * 2);
    ctx.fillStyle = '#a78bfa';
    ctx.fill();
    ctx.strokeStyle = '#7c3aed';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Velocity arrow
    if (v > 1) {
      const len = Math.min(v * 2, 100);
      ctx.strokeStyle = '#4ade80';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x + BALL_R, TRACK_Y - BALL_R);
      ctx.lineTo(x + BALL_R + len, TRACK_Y - BALL_R);
      ctx.stroke();
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.moveTo(x + BALL_R + len, TRACK_Y - BALL_R);
      ctx.lineTo(x + BALL_R + len - 7, TRACK_Y - BALL_R - 5);
      ctx.lineTo(x + BALL_R + len - 7, TRACK_Y - BALL_R + 5);
      ctx.fill();
    }

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px monospace';
    ctx.fillText(`Velocity: ${v.toFixed(1)} m/s`, 10, 20);
    ctx.fillText(`Friction: ${getFrictionCoeff().toFixed(2)}`, 10, 40);
  }

  function animate(ts: number) {
    if (!runningRef.current) return;
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = (ts - lastTimeRef.current) / 1000;
    lastTimeRef.current = ts;

    const mu = getFrictionCoeff();
    const decel = mu * 9.8;
    velRef.current = Math.max(0, velRef.current - decel * dt);
    posRef.current += velRef.current * dt * 4;

    if (velRef.current <= 0 || posRef.current >= 720) {
      runningRef.current = false;
      setRunning(false);
    }

    setCurrentVel(velRef.current);
    draw(posRef.current, velRef.current);
    if (runningRef.current) animRef.current = requestAnimationFrame(animate);
  }

  function launch() {
    posRef.current = 80;
    velRef.current = 40;
    lastTimeRef.current = null;
    runningRef.current = true;
    setRunning(true);
    setCurrentVel(40);
    animRef.current = requestAnimationFrame(animate);
  }

  function reset() {
    cancelAnimationFrame(animRef.current);
    runningRef.current = false;
    setRunning(false);
    posRef.current = 80;
    velRef.current = 0;
    setCurrentVel(0);
    draw(80, 0);
  }

  useEffect(() => { draw(posRef.current, currentVel); }, [friction]);
  useEffect(() => { draw(80, 0); return () => cancelAnimationFrame(animRef.current); }, []);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} width={760} height={170}
        className="w-full rounded-xl bg-slate-900 border border-slate-700" />
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex-1 min-w-48">
          <label className="block text-sm text-slate-400 mb-2">Surface type:</label>
          <div className="grid grid-cols-2 gap-2">
            {surfaces.map((s, i) => (
              <button key={s} onClick={() => { setFriction(i); if (!running) draw(posRef.current, currentVel); }}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${friction === i ? 'bg-violet-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'}`}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={launch} disabled={running}
            className="px-5 py-2 rounded-lg bg-violet-500 hover:bg-violet-400 disabled:opacity-40 font-semibold text-sm transition">
            Launch
          </button>
          <button onClick={reset}
            className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold text-sm transition">
            Reset
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-500">
        On ice (no friction), the ball keeps going. More friction = ball stops sooner. This shows inertia!
      </p>
    </div>
  );
}
