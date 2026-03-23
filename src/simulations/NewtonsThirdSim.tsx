import { useEffect, useRef, useState } from 'react';

export default function NewtonsThirdSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [scenario, setScenario] = useState(0);
  const posARef = useRef(340);
  const posBRef = useRef(420);
  const velARef = useRef(0);
  const velBRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const [running, setRunning] = useState(false);

  const scenarios = [
    { label: 'Skaters push off', massA: 50, massB: 80, color: ['#38bdf8', '#f472b6'] },
    { label: 'Rocket & exhaust', massA: 200, massB: 10, color: ['#fb923c', '#4ade80'] },
    { label: 'Equal masses', massA: 60, massB: 60, color: ['#a78bfa', '#fbbf24'] },
  ];

  const sc = scenarios[scenario];

  function draw(pA: number, pB: number, vA: number, vB: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const CY = 110;

    // Draw A
    const rA = Math.sqrt(sc.massA) * 2;
    ctx.beginPath();
    ctx.arc(pA, CY, rA, 0, Math.PI * 2);
    ctx.fillStyle = sc.color[0];
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold 12px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(`${sc.massA}kg`, pA, CY + 5);

    // Draw B
    const rB = Math.sqrt(sc.massB) * 2;
    ctx.beginPath();
    ctx.arc(pB, CY, rB, 0, Math.PI * 2);
    ctx.fillStyle = sc.color[1];
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillText(`${sc.massB}kg`, pB, CY + 5);
    ctx.textAlign = 'left';

    // Velocity arrows
    if (Math.abs(vA) > 0.5) {
      const lenA = Math.min(Math.abs(vA) * 2, 80) * Math.sign(vA);
      ctx.strokeStyle = sc.color[0];
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pA, CY - rA - 5);
      ctx.lineTo(pA + lenA, CY - rA - 5);
      ctx.stroke();
    }
    if (Math.abs(vB) > 0.5) {
      const lenB = Math.min(Math.abs(vB) * 2, 80) * Math.sign(vB);
      ctx.strokeStyle = sc.color[1];
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(pB, CY - rB - 5);
      ctx.lineTo(pB + lenB, CY - rB - 5);
      ctx.stroke();
    }

    // Labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText(`v₁: ${vA.toFixed(1)} m/s ←`, 10, 20);
    ctx.fillText(`v₂: ${vB.toFixed(1)} m/s →`, 10, 38);
    ctx.fillStyle = '#64748b';
    ctx.font = '11px sans-serif';
    ctx.fillText('Forces are equal & opposite', 10, 200);
  }

  function animate(ts: number) {
    if (!runningRef.current) return;
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = (ts - lastTimeRef.current) / 1000;
    lastTimeRef.current = ts;

    // Impulse over first 0.3s then coast
    const elapsed = ts / 1000;
    if (elapsed < 0.3) {
      const F = 500;
      velARef.current -= (F / sc.massA) * dt;
      velBRef.current += (F / sc.massB) * dt;
    }

    posARef.current += velARef.current * dt * 40;
    posBRef.current += velBRef.current * dt * 40;

    if (posARef.current < -50 || posBRef.current > 820) {
      runningRef.current = false;
      setRunning(false);
    }

    draw(posARef.current, posBRef.current, velARef.current, velBRef.current);
    if (runningRef.current) animRef.current = requestAnimationFrame(animate);
  }

  function start() {
    posARef.current = 340;
    posBRef.current = 420;
    velARef.current = 0;
    velBRef.current = 0;
    lastTimeRef.current = null;
    runningRef.current = true;
    setRunning(true);
    animRef.current = requestAnimationFrame(animate);
  }

  function reset() {
    cancelAnimationFrame(animRef.current);
    runningRef.current = false;
    setRunning(false);
    posARef.current = 340;
    posBRef.current = 420;
    velARef.current = 0;
    velBRef.current = 0;
    draw(340, 420, 0, 0);
  }

  useEffect(() => { reset(); }, [scenario]);
  useEffect(() => { draw(340, 420, 0, 0); return () => cancelAnimationFrame(animRef.current); }, []);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} width={760} height={220}
        className="w-full rounded-xl bg-slate-900 border border-slate-700" />
      <div className="flex flex-wrap gap-2">
        {scenarios.map((s, i) => (
          <button key={s.label} onClick={() => setScenario(i)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${scenario === i ? 'bg-indigo-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'}`}>
            {s.label}
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <button onClick={start} disabled={running}
          className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 disabled:opacity-40 font-semibold text-sm transition">
          Push!
        </button>
        <button onClick={reset}
          className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold text-sm transition">
          Reset
        </button>
      </div>
      <p className="text-xs text-slate-500">
        Same force on both objects — but smaller mass = more acceleration. Both move apart equally and oppositely.
      </p>
    </div>
  );
}
