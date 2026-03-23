import { useState } from 'react';

interface Excerpt {
  text: string;
  pov: string;
  explanation: string;
  options: string[];
}

const excerpts: Excerpt[] = [
  {
    text: 'I ran down the stairs, heart pounding, hoping I wasn\'t too late.',
    pov: 'First Person',
    explanation: 'The narrator uses "I" and shares their feelings directly.',
    options: ['First Person', 'Second Person', 'Third-Person Limited', 'Third-Person Omniscient'],
  },
  {
    text: 'You hear a knock at the door. You hesitate before opening it.',
    pov: 'Second Person',
    explanation: '"You" addresses the reader directly — choose-your-own-adventure style.',
    options: ['First Person', 'Second Person', 'Third-Person Limited', 'Third-Person Omniscient'],
  },
  {
    text: 'James felt nervous, but he would never admit it to anyone.',
    pov: 'Third-Person Limited',
    explanation: 'The narrator follows James and knows HIS thoughts only.',
    options: ['First Person', 'Second Person', 'Third-Person Limited', 'Third-Person Omniscient'],
  },
  {
    text: 'While Emma panicked in the hall, Michael sat calmly upstairs, already knowing the outcome.',
    pov: 'Third-Person Omniscient',
    explanation: 'The narrator knows what BOTH characters are thinking and feeling.',
    options: ['First Person', 'Second Person', 'Third-Person Limited', 'Third-Person Omniscient'],
  },
  {
    text: 'She told everyone she was happy. But deep down, she knew nothing would ever be the same.',
    pov: 'Third-Person Limited',
    explanation: 'The narrator follows her inner thoughts, but uses "she" not "I".',
    options: ['First Person', 'Second Person', 'Third-Person Limited', 'Third-Person Omniscient'],
  },
];

export default function POVIdentifierSim() {
  const [idx, setIdx] = useState(0);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = excerpts[idx];
  const isCorrect = chosen === current.pov;

  function handleChoice(option: string) {
    if (chosen !== null) return;
    setChosen(option);
    if (option === current.pov) setScore((s) => s + 1);
  }

  function handleNext() {
    if (idx + 1 >= excerpts.length) {
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
        <div className="text-5xl font-bold text-rose-400">{score}/{excerpts.length}</div>
        <p className="text-white font-semibold text-lg">
          {score === excerpts.length ? 'Perfect!' : score >= 3 ? 'Great work!' : 'Keep practising!'}
        </p>
        <p className="text-slate-400 text-sm">You identified {score} out of {excerpts.length} points of view correctly.</p>
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
        <span>Excerpt {idx + 1} of {excerpts.length}</span>
        <span className="text-rose-400 font-semibold">Score: {score}/{idx}</span>
      </div>

      {/* Excerpt card */}
      <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-2xl p-6">
        <p className="text-xs text-pink-400 uppercase tracking-widest mb-3">What point of view is this?</p>
        <p className="text-white text-base leading-relaxed italic">"{current.text}"</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-2">
        {current.options.map((option) => {
          let style = 'bg-slate-800 border-slate-600 text-white hover:border-rose-400 cursor-pointer';
          if (chosen !== null) {
            if (option === current.pov) {
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
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition ${style}`}
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
            {isCorrect ? 'Correct!' : `Not quite — this is ${current.pov}.`}
          </p>
          <p className="text-slate-300 text-sm mt-1">{current.explanation}</p>
        </div>
      )}

      {chosen !== null && (
        <button
          onClick={handleNext}
          className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
        >
          {idx + 1 < excerpts.length ? 'Next Excerpt →' : 'See Final Score →'}
        </button>
      )}
    </div>
  );
}
