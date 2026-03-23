import { useEffect, useRef, useState } from 'react';

export default function AccelerationSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [accel, setAccel] = useState(20);
  const animRef = useRef<number>(0);
  const posRef = useRef(60);
  const velRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const [running, setRunning] = useState(false);
  const [, setVel] = useState(0);

  const TRACK_Y = 120;
  const MAX_X = 720;

  function draw(x: number, v: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(40, TRACK_Y - 2, MAX_X - 40, 4);

    // velocity arrow
    if (v > 0) {
      const arrowLen = Math.min(v * 1.5, 120);
      ctx.strokeStyle = '#4ade80';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, TRACK_Y - 24);
      ctx.lineTo(x + arrowLen, TRACK_Y - 24);
      ctx.stroke();
      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.moveTo(x + arrowLen, TRACK_Y - 24);
      ctx.lineTo(x + arrowLen - 8, TRACK_Y - 30);
      ctx.lineTo(x + arrowLen - 8, TRACK_Y - 18);
      ctx.fill();
    }

    // Ball
    ctx.beginPath();
    ctx.arc(x, TRACK_Y - 22, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#f472b6';
    ctx.fill();
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px monospace';
    ctx.fillText(`Velocity:     ${v.toFixed(1)} m/s`, 10, 20);
    ctx.fillText(`Acceleration: ${accel} m/s²`, 10, 40);
    ctx.fillStyle = '#4ade80';
    ctx.font = '11px sans-serif';
    ctx.fillText('← velocity', x + 5, TRACK_Y - 28);
  }

  function animate(ts: number) {
    if (!runningRef.current) return;
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = (ts - lastTimeRef.current) / 1000;
    lastTimeRef.current = ts;

    velRef.current += accel * dt;
    posRef.current += (velRef.current / 100) * dt * 300;

    if (posRef.current >= MAX_X) {
      posRef.current = MAX_X;
      runningRef.current = false;
      setRunning(false);
    }

    setVel(velRef.current);
    draw(posRef.current, velRef.current);

    if (runningRef.current) animRef.current = requestAnimationFrame(animate);
  }

  function start() {
    posRef.current = 60;
    velRef.current = 0;
    lastTimeRef.current = null;
    runningRef.current = true;
    setRunning(true);
    setVel(0);
    animRef.current = requestAnimationFrame(animate);
  }

  function reset() {
    cancelAnimationFrame(animRef.current);
    runningRef.current = false;
    setRunning(false);
    posRef.current = 60;
    velRef.current = 0;
    setVel(0);
    draw(60, 0);
  }

  useEffect(() => { draw(posRef.current, velRef.current); }, [accel]);
  useEffect(() => { draw(60, 0); return () => cancelAnimationFrame(animRef.current); }, []);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} width={760} height={160}
        className="w-full rounded-xl bg-slate-900 border border-slate-700" />
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex-1 min-w-48">
          <label className="block text-sm text-slate-400 mb-1">
            Acceleration: <span className="text-pink-400 font-bold">{accel} m/s²</span>
          </label>
          <input type="range" min={5} max={80} value={accel}
            onChange={(e) => { setAccel(Number(e.target.value)); if (!running) draw(posRef.current, velRef.current); }}
            className="w-full accent-pink-400" />
        </div>
        <div className="flex gap-3">
          <button onClick={start} disabled={running}
            className="px-5 py-2 rounded-lg bg-pink-500 hover:bg-pink-400 disabled:opacity-40 font-semibold text-sm transition">
            Launch
          </button>
          <button onClick={reset}
            className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold text-sm transition">
            Reset
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-500">
        Watch the green arrow (velocity) grow as the ball accelerates. Higher acceleration = faster growth.
      </p>
    </div>
  );
}
