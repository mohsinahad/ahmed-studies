import { useEffect, useRef, useState } from 'react';
import {
  seerahTimeline,
  seerahLocations,
  categoryStyles,
} from '../data/seerahTimeline';

interface Props {
  onBack: () => void;
}

// Stylised schematic map of the Hejaz and surrounding region. The shapes are
// not a precise projection — they give a sense of relative position so the
// reader can follow where each event took place.
function SeerahMap({ activeLocationId }: { activeLocationId: string }) {
  const active = seerahLocations[activeLocationId];

  return (
    <svg
      viewBox="0 0 360 480"
      className="w-full h-auto"
      role="img"
      aria-label={`Map highlighting ${active?.label ?? 'the region'}`}
    >
      <defs>
        <linearGradient id="seaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0e3a4f" />
          <stop offset="100%" stopColor="#0b2a3a" />
        </linearGradient>
        <linearGradient id="landGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3320" />
          <stop offset="100%" stopColor="#2a2415" />
        </linearGradient>
      </defs>

      {/* Sea backdrop */}
      <rect x="0" y="0" width="360" height="480" fill="url(#seaGrad)" />

      {/* Northern land — the Levant (Jerusalem, Syria) */}
      <path
        d="M 96 0 L 250 0 L 268 70 L 210 120 L 150 132 L 118 90 Z"
        fill="url(#landGrad)"
        stroke="#4b4226"
        strokeWidth="1.5"
      />

      {/* Arabian peninsula (the Hejaz down the west coast) */}
      <path
        d="M 150 132 L 210 120 L 268 70 L 300 150 L 322 270 L 300 380 L 250 440
           L 210 452 L 178 420 L 156 340 L 146 250 L 150 132 Z"
        fill="url(#landGrad)"
        stroke="#4b4226"
        strokeWidth="1.5"
      />

      {/* Africa side — Abyssinia, across the Red Sea */}
      <path
        d="M 0 150 L 96 132 L 118 230 L 108 330 L 130 440 L 60 480 L 0 480 Z"
        fill="url(#landGrad)"
        stroke="#4b4226"
        strokeWidth="1.5"
      />

      {/* Red Sea label */}
      <text
        x="92"
        y="300"
        fill="#5fa8c4"
        fontSize="11"
        fontStyle="italic"
        transform="rotate(-66 92 300)"
        opacity="0.8"
      >
        Red Sea
      </text>

      {/* Location pins */}
      {Object.values(seerahLocations).map((loc) => {
        const isActive = loc.id === activeLocationId;
        return (
          <g key={loc.id}>
            {isActive && (
              <circle
                cx={loc.x}
                cy={loc.y}
                r="11"
                fill="#34d399"
                opacity="0.25"
                className="seerah-pulse"
              />
            )}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={isActive ? 5 : 3}
              fill={isActive ? '#34d399' : '#94a3b8'}
              stroke={isActive ? '#ecfdf5' : '#1e293b'}
              strokeWidth={isActive ? 1.5 : 1}
            />
            <text
              x={loc.x + (loc.x > 300 ? -8 : 9)}
              y={loc.y + 4}
              fill={isActive ? '#ecfdf5' : '#64748b'}
              fontSize={isActive ? 12 : 10}
              fontWeight={isActive ? 700 : 400}
              textAnchor={loc.x > 300 ? 'end' : 'start'}
            >
              {loc.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function SeerahTimeline({ onBack }: Props) {
  const [activeId, setActiveId] = useState<string>(seerahTimeline[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  // Update the highlighted map location based on which event is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.getAttribute('data-event-id');
          if (id) setActiveId(id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    Object.values(itemRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeEvent = seerahTimeline.find((e) => e.id === activeId) ?? seerahTimeline[0];
  const activeLocationId = activeEvent.locationId;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="text-xs text-slate-500 hover:text-slate-300 mb-2 flex items-center gap-1 transition"
          >
            ← Islamic Studies
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            The Life of Prophet Muhammad ﷺ
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            A visual timeline (Seerah) · 570 CE – 632 CE · scroll to follow the journey
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 lg:grid lg:grid-cols-[1fr_320px] lg:gap-8 lg:items-start">
        {/* Timeline */}
        <div className="relative">
          {/* central spine */}
          <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-slate-700 to-slate-800" />

          <ol className="space-y-4">
            {seerahTimeline.map((event) => {
              const style = categoryStyles[event.category];
              const isActive = event.id === activeId;
              const isExpanded = expandedId === event.id;

              return (
                <li
                  key={event.id}
                  ref={(el) => {
                    itemRefs.current[event.id] = el;
                  }}
                  data-event-id={event.id}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* node */}
                  <div
                    className={`absolute left-2 sm:left-[10px] top-3 w-9 h-9 rounded-full flex items-center justify-center text-base
                      border-2 transition-all duration-300
                      ${
                        isActive
                          ? `bg-slate-800 border-emerald-400 ring-4 ${style.ring}`
                          : 'bg-slate-900 border-slate-700'
                      }`}
                  >
                    <span>{event.icon}</span>
                  </div>

                  <button
                    onClick={() =>
                      setExpandedId((cur) => (cur === event.id ? null : event.id))
                    }
                    aria-expanded={isExpanded}
                    className={`w-full text-left rounded-xl border px-4 py-3 transition
                      ${
                        isActive
                          ? 'bg-slate-800/80 border-emerald-800/60'
                          : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/70 hover:border-slate-700'
                      }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-emerald-300">
                        {event.ce}
                      </span>
                      {event.ah && (
                        <span className="text-xs text-slate-400">· {event.ah}</span>
                      )}
                      <span className="text-xs font-medium text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded px-1.5 py-0.5">
                        {event.age}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-wide font-semibold border rounded px-1.5 py-0.5 ${style.chip}`}
                      >
                        {style.label}
                      </span>
                    </div>

                    <h3 className="text-white font-bold leading-snug">{event.title}</h3>

                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {event.place}
                    </p>

                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {event.summary}
                    </p>

                    <div
                      className={`grid transition-all duration-300 ${
                        isExpanded
                          ? 'grid-rows-[1fr] opacity-100 mt-3'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-slate-400 leading-relaxed border-t border-slate-700/60 pt-3">
                          {event.detail}
                        </p>
                      </div>
                    </div>

                    <span className="inline-block mt-2 text-xs text-emerald-400/80">
                      {isExpanded ? 'Show less ▲' : 'Read more ▼'}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Sticky map */}
        <aside className="hidden lg:block sticky top-28">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              Where it happened
            </h2>
            <SeerahMap activeLocationId={activeLocationId} />
            <div className="mt-3 rounded-lg bg-slate-800/60 border border-slate-700/60 px-3 py-2">
              <p className="text-xs text-slate-400">Currently viewing</p>
              <p className="text-sm font-semibold text-white">{activeEvent.title}</p>
              <p className="text-xs text-emerald-300 mt-0.5">
                {seerahLocations[activeLocationId]?.label} · {activeEvent.ce}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <p className="max-w-5xl mx-auto px-6 pb-10 text-xs text-slate-600 leading-relaxed">
        Note: Early dates follow widely cited traditional accounts and are approximate
        (classical sources sometimes differ by a year or two). The Islamic (Hijri / AH)
        calendar begins at the Hijra in 622 CE, so earlier events are dated in CE only.
        May Allah’s peace and blessings be upon him ﷺ.
      </p>
    </div>
  );
}
