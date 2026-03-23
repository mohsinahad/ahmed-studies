import { useState } from 'react';

interface Card {
  emoji: string;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    emoji: '📱',
    title: 'Autocomplete',
    description: 'Your phone guesses the next word as you type. It learned from millions of messages.',
  },
  {
    emoji: '🎬',
    title: 'Recommendations',
    description: 'Netflix and YouTube study what you watch to suggest what you might enjoy next.',
  },
  {
    emoji: '🗣️',
    title: 'Voice Assistants',
    description: 'Siri and Google Assistant turn your voice into text, understand it, and reply. All using AI.',
  },
  {
    emoji: '📧',
    title: 'Spam Filters',
    description: 'Your email AI reads every incoming message and decides if it looks like spam.',
  },
  {
    emoji: '🔓',
    title: 'Face Recognition',
    description: 'Your phone scans your face and matches it against a saved pattern to unlock.',
  },
  {
    emoji: '🗺️',
    title: 'Navigation',
    description: "Google Maps predicts traffic by learning from millions of drivers' journeys.",
  },
];

export default function AIExamplesSim() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h3 className="text-white font-bold text-lg mb-1">AI in Daily Life</h3>
        <p className="text-slate-400 text-sm">Click any card to explore how AI is used in that area.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {cards.map((card, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              onClick={() => setSelected(isSelected ? null : i)}
              className={`
                p-4 rounded-xl border text-left transition-all duration-200
                ${isSelected
                  ? 'bg-violet-500/20 border-violet-400 shadow-lg shadow-violet-500/10'
                  : 'bg-slate-800/60 border-slate-700 hover:border-violet-600 hover:bg-slate-800'
                }
              `}
            >
              <div className="text-2xl mb-2">{card.emoji}</div>
              <div className={`font-semibold text-sm ${isSelected ? 'text-violet-300' : 'text-white'}`}>
                {card.title}
              </div>
            </button>
          );
        })}
      </div>

      <div
        className={`
          rounded-xl border p-4 min-h-[72px] transition-all duration-300
          ${selected !== null
            ? 'bg-violet-500/10 border-violet-500/40'
            : 'bg-slate-800/40 border-slate-700'
          }
        `}
      >
        {selected !== null ? (
          <div className="flex gap-3 items-start">
            <span className="text-2xl shrink-0">{cards[selected].emoji}</span>
            <div>
              <div className="text-violet-300 font-semibold text-sm mb-1">{cards[selected].title}</div>
              <p className="text-slate-200 text-sm leading-relaxed">{cards[selected].description}</p>
            </div>
          </div>
        ) : (
          <p className="text-slate-500 text-sm text-center py-3">Click a card to learn more.</p>
        )}
      </div>
    </div>
  );
}
