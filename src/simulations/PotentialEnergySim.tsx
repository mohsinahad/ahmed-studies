import { useEffect, useRef, useState } from 'react';

export default function PotentialEnergySim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mass, setMass] = useState(3);
  const [height, setHeight] = useState(5);
  const animRef = useRef<number>(0);
  const ballYRef = useRef(0);
  const velRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const [running, setRunning] = useState(false);
  const [, setCurrentH] = useState(5);

  const g = 9.8;
  const GROUND_Y = 200;
  const SCALE = 16; // px per meter

  function getGPE(h: number) { return mass * g * h; }
  function getKE(v: number) { return 0.5 * mass * v * v; }

  function draw(ballY: number, v: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const W = canvas.width;
    const groundPx = GROUND_Y;
    const startPx = groundPx - height * SCALE;
    const ballPx = ballY;
    const curH = Math.max(0, (groundPx - ballPx) / SCALE);

    // Ground
    ctx.fillStyle = '#1e3a1e';
    ctx.fillRect(0, groundPx, W, canvas.height - groundPx);
    ctx.fillStyle = '#4ade80';
    ctx.fillRect(0, groundPx, W, 3);

    // Height marker
    ctx.strokeStyle = '#334155';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(60, startPx);
    ctx.lineTo(60, groundPx);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#64748b';
    ctx.font = '11px monospace';
    ctx.fillText(`${height}m`, 10, startPx + (groundPx - startPx) / 2);

    // Energy bars
    const totalE = getGPE(height);
    const gpe = getGPE(curH);
    const ke = getKE(v);
    const maxBar = 160;
    const barX = W - 160;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(barX, 20, 140, maxBar + 10);

    // GPE bar (blue)
    const gpeH = totalE > 0 ? (gpe / totalE) * maxBar : 0;
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(barX + 10, 20 + maxBar - gpeH, 50, gpeH);
    ctx.fillStyle = '#93c5fd';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('GPE', barX + 35, 30 + maxBar);
    ctx.fillText(`${gpe.toFixed(0)}J`, barX + 35, 42 + maxBar);

    // KE bar (orange)
    const keH = totalE > 0 ? (ke / totalE) * maxBar : 0;
    ctx.fillStyle = '#f97316';
    ctx.fillRect(barX + 80, 20 + maxBar - keH, 50, keH);
    ctx.fillStyle = '#fdba74';
    ctx.fillText('KE', barX + 105, 30 + maxBar);
    ctx.fillText(`${ke.toFixed(0)}J`, barX + 105, 42 + maxBar);
    ctx.textAlign = 'left';

    // Ball
    const r = Math.max(10, Math.sqrt(mass) * 5);
    ctx.beginPath();
    ctx.arc(200, ballPx, r, 0, Math.PI * 2);
    ctx.fillStyle = '#fbbf24';
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText(`h = ${curH.toFixed(1)} m   v = ${v.toFixed(1)} m/s`, 10, 18);
  }

  function animate(ts: number) {
    if (!runningRef.current) return;
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = Math.min((ts - lastTimeRef.current) / 1000, 0.05);
    lastTimeRef.current = ts;

    velRef.current += g * dt;
    ballYRef.current += velRef.current * SCALE * dt;

    if (ballYRef.current >= GROUND_Y) {
      ballYRef.current = GROUND_Y;
      runningRef.current = false;
      setRunning(false);
    }

    const curH = Math.max(0, (GROUND_Y - ballYRef.current) / SCALE);
    setCurrentH(curH);
    draw(ballYRef.current, velRef.current);
    if (runningRef.current) animRef.current = requestAnimationFrame(animate);
  }

  function drop() {
    ballYRef.current = GROUND_Y - height * SCALE;
    velRef.current = 0;
    lastTimeRef.current = null;
    runningRef.current = true;
    setRunning(true);
    animRef.current = requestAnimationFrame(animate);
  }

  function reset() {
    cancelAnimationFrame(animRef.current);
    runningRef.current = false;
    setRunning(false);
    ballYRef.current = GROUND_Y - height * SCALE;
    velRef.current = 0;
    setCurrentH(height);
    draw(ballYRef.current, 0);
  }

  useEffect(() => { reset(); }, [mass, height]);
  useEffect(() => { ballYRef.current = GROUND_Y - height * SCALE; draw(ballYRef.current, 0); return () => cancelAnimationFrame(animRef.current); }, []);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} width={760} height={240}
        className="w-full rounded-xl bg-slate-900 border border-slate-700" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Mass: <span className="text-yellow-400 font-bold">{mass} kg</span>
          </label>
          <input type="range" min={1} max={10} value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full accent-yellow-400" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Height: <span className="text-blue-400 font-bold">{height} m</span>
          </label>
          <input type="range" min={1} max={10} value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full accent-blue-400" />
        </div>
      </div>
      <div className="flex gap-3">
        <button onClick={drop} disabled={running}
          className="px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 disabled:opacity-40 font-semibold text-sm transition">
          Drop!
        </button>
        <button onClick={reset}
          className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold text-sm transition">
          Reset
        </button>
      </div>
      <p className="text-xs text-slate-500">
        Watch GPE (blue) convert to KE (orange) as the ball falls. Total energy is conserved!
      </p>
    </div>
  );
}
