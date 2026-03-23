import { useState } from 'react';

interface ElementCard {
  name: string;
  icon: string;
  definition: string;
  example: string;
  keyQuestion: string;
}

const elements: ElementCard[] = [
  {
    name: 'Character',
    icon: '👤',
    definition: 'The people or beings in the story.',
    example:
      'In a typical hero story, the protagonist wants something, and the antagonist stands in the way.',
    keyQuestion: 'What does this character want, and what stops them?',
  },
  {
    name: 'Setting',
    icon: '🌍',
    definition: 'Where and when the story takes place.',
    example:
      'A story set in medieval England creates a very different mood than one set in modern New York.',
    keyQuestion: 'How does the setting affect the mood and events?',
  },
  {
    name: 'Plot',
    icon: '📈',
    definition: 'The sequence of events. Follows: Exposition → Rising Action → Climax → Falling Action → Resolution.',
    example:
      'Most adventure stories build tension through rising action before the climax battle or decision.',
    keyQuestion: 'What is the turning point (climax)?',
  },
  {
    name: 'Conflict',
    icon: '⚡',
    definition: 'The central problem. Types: vs Person, vs Nature, vs Self, vs Society.',
    example:
      'A character torn between loyalty to a friend and doing the right thing faces Person vs Self conflict.',
    keyQuestion: 'What type of conflict is this, and how is it resolved?',
  },
  {
    name: 'Theme',
    icon: '💡',
    definition: 'The central message or lesson.',
    example:
      'A story about a selfish character who learns to share has the theme: generosity leads to happiness.',
    keyQuestion: 'What does the author want you to learn or think about?',
  },
];

export default function StoryElementsExplorerSim() {
  const [selected, setSelected] = useState<number | null>(null);

  function handleSelect(idx: number) {
    setSelected(selected === idx ? null : idx);
  }

  return (
    <div className="space-y-4">
      <p className="text-xs text-slate-400">Click each story element card to explore its definition, example, and key analysis question.</p>

      <div className="grid grid-cols-1 gap-3">
        {elements.map((el, idx) => {
          const isSelected = selected === idx;
          return (
            <div key={el.name}>
              <button
                onClick={() => handleSelect(idx)}
                className={`
                  w-full text-left px-5 py-4 rounded-xl border transition
                  ${isSelected
                    ? 'bg-rose-500/10 border-rose-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-white hover:border-rose-400 hover:bg-slate-700'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{el.icon}</span>
                    <span className="font-semibold text-base">{el.name}</span>
                  </div>
                  <span className={`text-slate-400 transition-transform text-sm ${isSelected ? 'rotate-180' : ''}`}>▼</span>
                </div>
              </button>

              {isSelected && (
                <div className="mt-1 bg-slate-900 border border-rose-500/30 rounded-xl p-5 space-y-4">
                  <div>
                    <p className="text-xs text-rose-400 uppercase tracking-widest font-bold mb-1">Definition</p>
                    <p className="text-slate-200 text-sm leading-relaxed">{el.definition}</p>
                  </div>
                  <div>
                    <p className="text-xs text-pink-400 uppercase tracking-widest font-bold mb-1">Example</p>
                    <p className="text-slate-300 text-sm leading-relaxed italic">{el.example}</p>
                  </div>
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg px-4 py-3">
                    <p className="text-xs text-rose-300 uppercase tracking-widest font-bold mb-1">Key Analysis Question</p>
                    <p className="text-white text-sm font-medium">{el.keyQuestion}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
