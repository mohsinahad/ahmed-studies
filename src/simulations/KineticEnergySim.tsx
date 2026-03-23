import { useEffect, useRef, useState } from 'react';

export default function KineticEnergySim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mass, setMass] = useState(2);
  const [speed, setSpeed] = useState(3);
  const animRef = useRef<number>(0);
  const posRef = useRef(60);
  const lastTimeRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const [running, setRunning] = useState(false);

  const ke = 0.5 * mass * speed * speed;

  function draw(x: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const CY = 120;
    const r = Math.sqrt(mass) * 8;

    // Track
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(40, CY, 700, 4);

    // KE bar
    const maxKE = 0.5 * 20 * 10 * 10;
    const barW = Math.min((ke / maxKE) * 680, 680);
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(40, 20, 680, 16);
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(40, 20, barW, 16);
    ctx.fillStyle = '#f1f5f9';
    ctx.font = '11px monospace';
    ctx.fillText(`KE = ½ × ${mass} × ${speed}² = ${ke.toFixed(1)} J`, 45, 33);

    // Ball
    ctx.beginPath();
    ctx.arc(x, CY - r, r, 0, Math.PI * 2);
    ctx.fillStyle = '#fbbf24';
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Speed arrow
    const arrowLen = Math.min(speed * 12, 100);
    ctx.strokeStyle = '#4ade80';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + r, CY - r);
    ctx.lineTo(x + r + arrowLen, CY - r);
    ctx.stroke();
    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.moveTo(x + r + arrowLen, CY - r);
    ctx.lineTo(x + r + arrowLen - 7, CY - r - 5);
    ctx.lineTo(x + r + arrowLen - 7, CY - r + 5);
    ctx.fill();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText(`mass=${mass}kg  speed=${speed}m/s`, 10, 165);
  }

  function animate(ts: number) {
    if (!runningRef.current) return;
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = (ts - lastTimeRef.current) / 1000;
    lastTimeRef.current = ts;

    posRef.current += speed * dt * 30;
    if (posRef.current >= 740) {
      runningRef.current = false;
      setRunning(false);
    }
    draw(posRef.current);
    if (runningRef.current) animRef.current = requestAnimationFrame(animate);
  }

  function start() {
    posRef.current = 60;
    lastTimeRef.current = null;
    runningRef.current = true;
    setRunning(true);
    animRef.current = requestAnimationFrame(animate);
  }

  function reset() {
    cancelAnimationFrame(animRef.current);
    runningRef.current = false;
    setRunning(false);
    posRef.current = 60;
    draw(60);
  }

  useEffect(() => { draw(posRef.current); }, [mass, speed]);
  useEffect(() => { draw(60); return () => cancelAnimationFrame(animRef.current); }, []);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} width={760} height={180}
        className="w-full rounded-xl bg-slate-900 border border-slate-700" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Mass: <span className="text-yellow-400 font-bold">{mass} kg</span>
          </label>
          <input type="range" min={1} max={20} value={mass}
            onChange={(e) => { setMass(Number(e.target.value)); if (!running) draw(posRef.current); }}
            className="w-full accent-yellow-400" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Speed: <span className="text-green-400 font-bold">{speed} m/s</span>
          </label>
          <input type="range" min={1} max={10} value={speed}
            onChange={(e) => { setSpeed(Number(e.target.value)); if (!running) draw(posRef.current); }}
            className="w-full accent-green-400" />
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={start} disabled={running}
          className="px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 disabled:opacity-40 font-semibold text-sm text-slate-900 transition">
          Launch
        </button>
        <button onClick={reset}
          className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold text-sm transition">
          Reset
        </button>
      </div>
      <p className="text-xs text-slate-500">
        The yellow bar shows kinetic energy. Double the speed — KE goes up 4×. Double the mass — KE only doubles.
      </p>
    </div>
  );
}
