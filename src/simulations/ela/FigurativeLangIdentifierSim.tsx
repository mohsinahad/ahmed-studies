import { useState } from 'react';

interface QuoteItem {
  quote: string;
  device: string;
  explanation: string;
  options: string[];
}

const quotes: QuoteItem[] = [
  {
    quote: 'The world is a stage.',
    device: 'Metaphor',
    explanation: 'Says the world IS a stage without using "like" or "as".',
    options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
  },
  {
    quote: 'The thunder roared like a lion.',
    device: 'Simile',
    explanation: "Uses 'like' to compare thunder to a lion.",
    options: ['Metaphor', 'Simile', 'Onomatopoeia', 'Alliteration'],
  },
  {
    quote: 'The leaves whispered secrets to the wind.',
    device: 'Personification',
    explanation: 'Leaves cannot whisper — this gives them a human action.',
    options: ['Simile', 'Hyperbole', 'Personification', 'Metaphor'],
  },
  {
    quote: "I've told you a billion times!",
    device: 'Hyperbole',
    explanation: 'An impossible exaggeration for effect.',
    options: ['Metaphor', 'Personification', 'Idiom', 'Hyperbole'],
  },
  {
    quote: 'Sally sells seashells by the seashore.',
    device: 'Alliteration',
    explanation: "Repetition of the 's' sound at the start of words.",
    options: ['Onomatopoeia', 'Alliteration', 'Simile', 'Hyperbole'],
  },
  {
    quote: 'The bees buzzed past.',
    device: 'Onomatopoeia',
    explanation: 'Buzz sounds like the noise bees make.',
    options: ['Alliteration', 'Metaphor', 'Personification', 'Onomatopoeia'],
  },
];

export default function FigurativeLangIdentifierSim() {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = quotes[idx];
  const isCorrect = chosen === current.device;

  function handleChoice(option: string) {
    if (chosen !== null) return;
    setChosen(option);
    if (option === current.device) setScore((s) => s + 1);
  }

  function handleNext() {
    if (idx + 1 >= quotes.length) {
      setDone(true);
    } else {
      setIdx(idx + 1);
      setChosen(null);
    }
  }

  function handleRestart() {
    setIdx(0);
    setChosen(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="text-center space-y-4 py-6">
        <div className="text-5xl font-bold text-rose-400">{score}/{quotes.length}</div>
        <p className="text-white font-semibold text-lg">
          {score === quotes.length ? 'Perfect score!' : score >= 4 ? 'Great work!' : 'Keep practising!'}
        </p>
        <p className="text-slate-400 text-sm">You identified {score} out of {quotes.length} literary devices correctly.</p>
        <button
          onClick={handleRestart}
          className="px-6 py-2 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Quote {idx + 1} of {quotes.length}</span>
        <span className="text-rose-400 font-semibold">Score: {score}/{idx}</span>
      </div>

      {/* Quote card */}
      <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/30 rounded-2xl p-6 text-center">
        <p className="text-xs text-rose-400 uppercase tracking-widest mb-3">Identify the literary device</p>
        <p className="text-white text-xl font-medium italic leading-relaxed">"{current.quote}"</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {current.options.map((option) => {
          let style = 'bg-slate-800 border-slate-600 text-white hover:border-rose-400 cursor-pointer';
          if (chosen !== null) {
            if (option === current.device) {
              style = 'bg-green-500/20 border-green-500 text-green-400 cursor-default';
            } else if (option === chosen) {
              style = 'bg-red-500/20 border-red-500 text-red-400 cursor-default';
            } else {
              style = 'bg-slate-800 border-slate-700 text-slate-500 cursor-default';
            }
          }
          return (
            <button
              key={option}
              onClick={() => handleChoice(option)}
              disabled={chosen !== null}
              className={`px-4 py-3 rounded-xl border text-sm font-medium transition ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {chosen !== null && (
        <div className={`rounded-xl p-4 border ${isCorrect ? 'bg-green-500/10 border-green-500/40' : 'bg-red-500/10 border-red-500/40'}`}>
          <p className={`font-semibold text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {isCorrect ? 'Correct!' : `Not quite — it\'s ${current.device}.`}
          </p>
          <p className="text-slate-300 text-sm mt-1">{current.explanation}</p>
        </div>
      )}

      {chosen !== null && (
        <button
          onClick={handleNext}
          className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
        >
          {idx + 1 < quotes.length ? 'Next Quote →' : 'See Final Score →'}
        </button>
      )}
    </div>
  );
}
