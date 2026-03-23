import { useState } from 'react';

interface Round {
  sequence: string[];
  options: string[];
  answer: string;
  explanation: string;
}

const rounds: Round[] = [
  {
    sequence: ['🔴', '🔵', '🔴', '🔵', '❓'],
    options: ['🔴', '🔵', '🟢'],
    answer: '🔵',
    explanation: 'Alternating red and blue — AI finds patterns like this in data!',
  },
  {
    sequence: ['⭐', '⭐', '🌙', '⭐', '⭐', '❓'],
    options: ['⭐', '🌙', '☀️'],
    answer: '🌙',
    explanation: 'Every third item is a moon — patterns can repeat at intervals.',
  },
  {
    sequence: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '❓'],
    options: ['4️⃣', '5️⃣', '6️⃣'],
    answer: '5️⃣',
    explanation: 'Counting up by 1 — AI spots numeric patterns in data too!',
  },
];

type Status = 'waiting' | 'correct' | 'wrong';

export default function PatternGameSim() {
  const [roundIndex, setRoundIndex] = useState(0);
  const [status, setStatus] = useState<Status>('waiting');
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [chosen, setChosen] = useState<string | null>(null);

  const round = rounds[roundIndex];

  function handleChoice(option: string) {
    if (status !== 'waiting') return;
    setChosen(option);
    if (option === round.answer) {
      setStatus('correct');
      setScore((s) => s + 1);
    } else {
      setStatus('wrong');
    }
  }

  function nextRound() {
    if (roundIndex + 1 >= rounds.length) {
      setFinished(true);
    } else {
      setRoundIndex((i) => i + 1);
      setStatus('waiting');
      setChosen(null);
    }
  }

  function tryAgain() {
    setStatus('waiting');
    setChosen(null);
  }

  if (finished) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="text-5xl">🧠</div>
        <h3 className="text-white font-bold text-xl">You think like AI!</h3>
        <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
          This is exactly how AI finds patterns in training data. You scored{' '}
          <span className="text-violet-400 font-bold">{score} of {rounds.length}</span>.
        </p>
        <button
          onClick={() => { setRoundIndex(0); setStatus('waiting'); setChosen(null); setScore(0); setFinished(false); }}
          className="mt-2 px-6 py-2 rounded-xl bg-violet-500/20 border border-violet-500/40 text-violet-300 font-semibold hover:bg-violet-500/30 transition text-sm"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-bold text-base">Pattern Recognition Game</h3>
        <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
          Round {roundIndex + 1} of {rounds.length}
        </span>
      </div>

      <p className="text-slate-400 text-sm">What comes next? Pick the missing item to complete the pattern.</p>

      {/* Sequence */}
      <div className="flex items-center justify-center gap-3 bg-slate-800/60 rounded-xl p-5 border border-slate-700">
        {round.sequence.map((item, i) => (
          <div
            key={i}
            className={`
              w-12 h-12 flex items-center justify-center text-2xl rounded-lg
              ${item === '❓' ? 'bg-violet-500/20 border-2 border-violet-400 border-dashed text-violet-400' : 'bg-slate-700'}
            `}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Options */}
      <div className="flex gap-3 justify-center">
        {round.options.map((opt) => {
          const isChosen = chosen === opt;
          const isCorrect = opt === round.answer;
          let cls = 'w-16 h-16 text-3xl rounded-xl border-2 transition font-semibold ';
          if (status === 'waiting') {
            cls += 'bg-slate-800 border-slate-600 hover:border-violet-400 hover:bg-violet-500/10 cursor-pointer';
          } else if (isChosen && status === 'correct') {
            cls += 'bg-green-500/20 border-green-400';
          } else if (isChosen && status === 'wrong') {
            cls += 'bg-red-500/20 border-red-400';
          } else if (!isChosen && status === 'wrong' && isCorrect) {
            cls += 'bg-green-500/10 border-green-500/50';
          } else {
            cls += 'bg-slate-800 border-slate-700 opacity-50';
          }

          return (
            <button key={opt} onClick={() => handleChoice(opt)} className={cls}>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {status !== 'waiting' && (
        <div
          className={`rounded-xl border p-4 space-y-3 ${
            status === 'correct'
              ? 'bg-green-500/10 border-green-500/40'
              : 'bg-red-500/10 border-red-500/40'
          }`}
        >
          <div className={`font-semibold text-sm ${status === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
            {status === 'correct' ? '✓ Correct!' : `✗ Not quite — the answer is ${round.answer}`}
          </div>
          <p className="text-slate-300 text-sm">{round.explanation}</p>
          {status === 'correct' ? (
            <button
              onClick={nextRound}
              className="px-5 py-2 rounded-lg bg-violet-500/20 border border-violet-500/40 text-violet-300 font-semibold hover:bg-violet-500/30 transition text-sm"
            >
              {roundIndex + 1 >= rounds.length ? 'See Results' : 'Next Round →'}
            </button>
          ) : (
            <button
              onClick={tryAgain}
              className="px-5 py-2 rounded-lg bg-slate-700 border border-slate-600 text-slate-300 font-semibold hover:bg-slate-600 transition text-sm"
            >
              Try Again
            </button>
          )}
        </div>
      )}

      <div className="text-xs text-slate-500 text-right">Score: {score}/{rounds.length}</div>
    </div>
  );
}
