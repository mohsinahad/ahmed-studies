import { useEffect, useRef, useState } from 'react';

export default function NewtonsSecondSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mass, setMass] = useState(5);
  const [force, setForce] = useState(20);
  const animRef = useRef<number>(0);
  const posRef = useRef(60);
  const velRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const [running, setRunning] = useState(false);

  const accel = force / mass;
  const TRACK_Y = 130;

  function draw(x: number, v: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(40, TRACK_Y - 2, 700, 4);

    // Force arrow (red)
    const fLen = Math.min(force * 2.5, 120);
    ctx.strokeStyle = '#f87171';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x - mass * 2.5 - 10, TRACK_Y - 20);
    ctx.lineTo(x - mass * 2.5 - 10 + fLen, TRACK_Y - 20);
    ctx.stroke();
    ctx.fillStyle = '#f87171';
    ctx.beginPath();
    const ax = x - mass * 2.5 - 10 + fLen;
    ctx.moveTo(ax, TRACK_Y - 20);
    ctx.lineTo(ax - 8, TRACK_Y - 26);
    ctx.lineTo(ax - 8, TRACK_Y - 14);
    ctx.fill();
    ctx.font = '11px sans-serif';
    ctx.fillText(`F=${force}N`, x - mass * 2.5 - 5, TRACK_Y - 26);

    // Box (scaled by mass)
    const boxW = Math.min(mass * 5, 80);
    const boxH = Math.min(mass * 4, 60);
    ctx.fillStyle = '#fb923c';
    ctx.fillRect(x - boxW, TRACK_Y - boxH, boxW, boxH);
    ctx.strokeStyle = '#f97316';
    ctx.lineWidth = 2;
    ctx.strokeRect(x - boxW, TRACK_Y - boxH, boxW, boxH);
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.min(12 + mass, 16)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(`${mass}kg`, x - boxW / 2, TRACK_Y - boxH / 2 + 5);
    ctx.textAlign = 'left';

    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px monospace';
    ctx.fillText(`a = F/m = ${force}/${mass} = ${accel.toFixed(1)} m/s²`, 10, 20);
    ctx.fillText(`Velocity: ${v.toFixed(1)} m/s`, 10, 40);
  }

  function animate(ts: number) {
    if (!runningRef.current) return;
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = (ts - lastTimeRef.current) / 1000;
    lastTimeRef.current = ts;

    velRef.current += accel * dt;
    posRef.current += velRef.current * dt * 3;

    if (posRef.current >= 740) {
      runningRef.current = false;
      setRunning(false);
    }

    draw(posRef.current, velRef.current);
    if (runningRef.current) animRef.current = requestAnimationFrame(animate);
  }

  function start() {
    posRef.current = 60;
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
    posRef.current = 60;
    velRef.current = 0;
    draw(60, 0);
  }

  useEffect(() => { draw(posRef.current, velRef.current); }, [mass, force]);
  useEffect(() => { draw(60, 0); return () => cancelAnimationFrame(animRef.current); }, []);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} width={760} height={170}
        className="w-full rounded-xl bg-slate-900 border border-slate-700" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Mass: <span className="text-orange-400 font-bold">{mass} kg</span>
          </label>
          <input type="range" min={1} max={20} value={mass}
            onChange={(e) => { setMass(Number(e.target.value)); if (!running) draw(posRef.current, velRef.current); }}
            className="w-full accent-orange-400" />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Force: <span className="text-red-400 font-bold">{force} N</span>
          </label>
          <input type="range" min={5} max={100} value={force}
            onChange={(e) => { setForce(Number(e.target.value)); if (!running) draw(posRef.current, velRef.current); }}
            className="w-full accent-red-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-slate-800 rounded-lg px-4 py-2 font-mono text-sm">
          a = {force}/{mass} = <span className="text-yellow-400 font-bold">{accel.toFixed(1)} m/s²</span>
        </div>
        <button onClick={start} disabled={running}
          className="px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 disabled:opacity-40 font-semibold text-sm transition">
          Push!
        </button>
        <button onClick={reset}
          className="px-5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold text-sm transition">
          Reset
        </button>
      </div>
      <p className="text-xs text-slate-500">
        Increase force → faster. Increase mass → slower. The red arrow shows the applied force.
      </p>
    </div>
  );
}
