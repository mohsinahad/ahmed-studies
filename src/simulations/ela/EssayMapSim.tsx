import { useState } from 'react';

interface Section {
  number: number;
  title: string;
  label: string;
  items: { heading: string; detail: string }[];
  isIntroOrConclusion: boolean;
}

const sections: Section[] = [
  {
    number: 1,
    title: 'Introduction',
    label: 'intro',
    isIntroOrConclusion: true,
    items: [
      { heading: 'Hook', detail: 'Grab the reader\'s attention with a question, surprising fact, or anecdote.' },
      { heading: 'Context', detail: '2–3 sentences giving background on the topic.' },
      { heading: 'Thesis', detail: 'ONE sentence stating your argument and 3 main points.' },
      { heading: 'Example thesis', detail: '"Social media negatively affects teenagers by reducing face-to-face interaction, increasing anxiety, and disrupting sleep."' },
    ],
  },
  {
    number: 2,
    title: 'Body Paragraph 1',
    label: 'body1',
    isIntroOrConclusion: false,
    items: [
      { heading: 'Topic Sentence', detail: 'State the FIRST point from your thesis.' },
      { heading: 'Evidence', detail: 'Quote, statistic, or example that supports it.' },
      { heading: 'Analysis', detail: 'Explain HOW the evidence supports your point.' },
      { heading: 'Transition', detail: 'Link to the next paragraph.' },
    ],
  },
  {
    number: 3,
    title: 'Body Paragraph 2',
    label: 'body2',
    isIntroOrConclusion: false,
    items: [
      { heading: 'Topic Sentence', detail: 'State the SECOND point from your thesis.' },
      { heading: 'Evidence', detail: 'Quote, statistic, or example that supports it.' },
      { heading: 'Analysis', detail: 'Explain HOW the evidence supports your point.' },
      { heading: 'Transition', detail: 'Link to the next paragraph.' },
    ],
  },
  {
    number: 4,
    title: 'Body Paragraph 3',
    label: 'body3',
    isIntroOrConclusion: false,
    items: [
      { heading: 'Topic Sentence', detail: 'State the THIRD point from your thesis.' },
      { heading: 'Evidence', detail: 'Quote, statistic, or example that supports it.' },
      { heading: 'Analysis', detail: 'Explain HOW the evidence supports your point.' },
      { heading: 'Transition', detail: 'Link to the conclusion.' },
    ],
  },
  {
    number: 5,
    title: 'Conclusion',
    label: 'conclusion',
    isIntroOrConclusion: true,
    items: [
      { heading: 'Restate Thesis', detail: 'Rephrase your thesis in new words.' },
      { heading: 'Summary', detail: 'Briefly recap your 3 main points.' },
      { heading: 'Closing Thought', detail: 'End with a wider implication, call to action, or memorable final sentence.' },
      { heading: 'Important', detail: 'Never introduce new evidence here.' },
    ],
  },
];

export default function EssayMapSim() {
  const [open, setOpen] = useState<number | null>(null);

  function handleToggle(num: number) {
    setOpen(open === num ? null : num);
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-xs text-slate-400">Click each section to see what goes inside.</p>
      </div>

      <div className="space-y-3">
        {sections.map((section) => {
          const isOpen = open === section.number;
          const isHighlighted = section.isIntroOrConclusion;

          return (
            <div key={section.number}>
              <button
                onClick={() => handleToggle(section.number)}
                className={`
                  w-full text-left px-5 py-4 rounded-xl border transition
                  ${isOpen
                    ? isHighlighted
                      ? 'bg-rose-500/15 border-rose-500 text-white'
                      : 'bg-pink-500/10 border-pink-500/60 text-white'
                    : isHighlighted
                    ? 'bg-rose-500/10 border-rose-500/40 text-white hover:border-rose-500/70'
                    : 'bg-slate-800 border-slate-700 text-white hover:border-pink-400/50'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`
                      w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                      ${isHighlighted ? 'bg-rose-500/30 text-rose-300' : 'bg-pink-500/20 text-pink-400'}
                    `}>
                      {section.number}
                    </span>
                    <span className="font-semibold">{section.title}</span>
                  </div>
                  <span className={`text-slate-400 text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                </div>
              </button>

              {isOpen && (
                <div className={`mt-1 rounded-xl border p-5 space-y-4 ${isHighlighted ? 'bg-rose-500/5 border-rose-500/20' : 'bg-pink-500/5 border-pink-500/20'}`}>
                  {section.items.map((item) => (
                    <div key={item.heading} className="flex gap-3">
                      <div className={`shrink-0 mt-0.5 w-2 h-2 rounded-full ${isHighlighted ? 'bg-rose-400' : 'bg-pink-400'} mt-1.5`} />
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-wide ${isHighlighted ? 'text-rose-400' : 'text-pink-400'}`}>
                          {item.heading}
                        </span>
                        <p className="text-slate-300 text-sm mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => handleToggle(section.number)}
                    className="text-xs text-slate-500 hover:text-slate-300 transition"
                  >
                    Collapse ▲
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
