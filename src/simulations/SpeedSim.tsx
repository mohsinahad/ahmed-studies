import { useEffect, useRef, useState } from 'react';

export default function SpeedSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [speed, setSpeed] = useState(50); // px per second
  const animRef = useRef<number>(0);
  const posRef = useRef(60);
  const lastTimeRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const [running, setRunning] = useState(false);
  const [, setElapsed] = useState(0);
  const elapsedRef = useRef(0);

  const TRACK_Y = 120;
  const BALL_R = 20;
  const MAX_X = 700;

  function draw(x: number, el: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Track
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(40, TRACK_Y - 2, MAX_X, 4);

    // Distance markers
    ctx.fillStyle = '#475569';
    ctx.font = '11px monospace';
    for (let i = 0; i <= 600; i += 100) {
      const mx = 40 + i;
      ctx.fillRect(mx, TRACK_Y - 8, 2, 8);
      ctx.fillStyle = '#64748b';
      ctx.fillText(`${i}m`, mx - 10, TRACK_Y + 18);
      ctx.fillStyle = '#475569';
    }

    // Ball
    ctx.beginPath();
    ctx.arc(x, TRACK_Y - BALL_R - 2, BALL_R, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8';
    ctx.fill();
    ctx.strokeStyle = '#0ea5e9';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Speed label on ball
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${speed}`, x, TRACK_Y - BALL_R - 2);
    ctx.textAlign = 'left';

    // Stats
    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px monospace';
    const dist = Math.max(0, x - 40);
    ctx.fillText(`Distance: ${dist.toFixed(0)} m`, 10, 20);
    ctx.fillText(`Time:     ${el.toFixed(1)} s`, 10, 40);
    ctx.fillText(`Speed:    ${speed} m/s`, 10, 60);
  }

  function animate(ts: number) {
    if (!runningRef.current) return;
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = (ts - lastTimeRef.current) / 1000;
    lastTimeRef.current = ts;

    posRef.current += (speed / 100) * dt * 600; // scale to canvas
    elapsedRef.current += dt;

    if (posRef.current >= MAX_X + 40) {
      posRef.current = MAX_X + 40;
      runningRef.current = false;
      setRunning(false);
    }

    setElapsed(elapsedRef.current);
    draw(posRef.current, elapsedRef.current);

    if (runningRef.current) {
      animRef.current = requestAnimationFrame(animate);
    }
  }

  function start() {
    posRef.current = 60;
    elapsedRef.current = 0;
    lastTimeRef.current = null;
    runningRef.current = true;
    setRunning(true);
    setElapsed(0);
    animRef.current = requestAnimationFrame(animate);
  }

  function reset() {
    cancelAnimationFrame(animRef.current);
    runningRef.current = false;
    setRunning(false);
    posRef.current = 60;
    elapsedRef.current = 0;
    setElapsed(0);
    draw(60, 0);
  }

  useEffect(() => {
    draw(posRef.current, elapsedRef.current);
  }, [speed]);

  useEffect(() => {
    draw(60, 0);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="space-y-4">
      <canvas
        ref={canvasRef}
        width={760}
        height={160}
        className="w-full rounded-xl bg-slate-900 border border-slate-700"
      />
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex-1 min-w-48">
          <label className="block text-sm text-slate-400 mb-1">
            Speed: <span className="text-sky-400 font-bold">{speed} m/s</span>
          </label>
          <input
            type="range"
            min={10}
            max={200}
            value={speed}
            onChange={(e) => {
              setSpeed(Number(e.target.value));
              if (!running) draw(posRef.current, elapsedRef.current);
            }}
            className="w-full accent-sky-400"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>10 m/s (slow)</span>
            <span>200 m/s (fast)</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={start}
            disabled={running}
            className="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-40 font-semibold text-sm transition"
          >
            Launch
          </button>
          <button
            onClick={reset}
            className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold text-sm transition"
          >
            Reset
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-500">
        Drag the slider to change speed, then press Launch. Notice how distance = speed × time.
      </p>
    </div>
  );
}
