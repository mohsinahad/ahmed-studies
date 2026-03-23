import { useEffect, useRef, useState } from 'react';

export default function WavesSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frequency, setFrequency] = useState(2);
  const [amplitude, setAmplitude] = useState(40);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  const wavelength = 300 / frequency;
  const _speed = frequency * wavelength; void _speed;

  function draw(t: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const CY = 110;
    const W = canvas.width;

    // Center line
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, CY);
    ctx.lineTo(W, CY);
    ctx.stroke();

    // Wave
    ctx.beginPath();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    for (let x = 0; x <= W; x++) {
      const k = (2 * Math.PI) / wavelength;
      const omega = 2 * Math.PI * frequency;
      const y = CY + amplitude * Math.sin(k * x - omega * t);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Amplitude arrows
    ctx.strokeStyle = '#f472b6';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(80, CY);
    ctx.lineTo(80, CY - amplitude);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#f472b6';
    ctx.font = '11px monospace';
    ctx.fillText(`A=${amplitude}px`, 85, CY - amplitude / 2);

    // Wavelength arrow
    const wlPx = wavelength;
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.5;
    const waveX = 200;
    ctx.beginPath();
    ctx.moveTo(waveX, CY + amplitude + 15);
    ctx.lineTo(waveX + wlPx, CY + amplitude + 15);
    ctx.stroke();
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(`λ=${wlPx.toFixed(0)}px`, waveX + wlPx / 2 - 20, CY + amplitude + 28);

    // Stats
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText(`Frequency: ${frequency} Hz`, 10, 20);
    ctx.fillText(`Amplitude: ${amplitude}`, 10, 38);
    ctx.fillText(`Wavelength: ${wlPx.toFixed(0)}px  (freq↑ = λ↓)`, 10, 220);
  }

  function animate(ts: number) {
    if (startTimeRef.current === null) startTimeRef.current = ts;
    const t = (ts - startTimeRef.current) / 1000;
    draw(t);
    animRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    startTimeRef.current = null;
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [frequency, amplitude]);

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} width={760} height={240}
        className="w-full rounded-xl bg-slate-900 border border-slate-700" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Frequency: <span className="text-sky-400 font-bold">{frequency} Hz</span>
          </label>
          <input type="range" min={1} max={6} step={0.5} value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full accent-sky-400" />
          <div className="text-xs text-slate-500 mt-1">Higher = more waves per second</div>
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            Amplitude: <span className="text-pink-400 font-bold">{amplitude}</span>
          </label>
          <input type="range" min={10} max={80} value={amplitude}
            onChange={(e) => setAmplitude(Number(e.target.value))}
            className="w-full accent-pink-400" />
          <div className="text-xs text-slate-500 mt-1">Higher = more energy (louder sound)</div>
        </div>
      </div>
      <p className="text-xs text-slate-500">
        Pink arrows = amplitude. Yellow line = wavelength. Notice: higher frequency → shorter wavelength.
      </p>
    </div>
  );
}
