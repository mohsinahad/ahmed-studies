import { useState } from 'react';

interface Round {
  sentences: string[];
}

const rounds: Round[] = [
  {
    sentences: [
      'Exercise is one of the best things you can do for your health.',
      'Regular physical activity strengthens your heart and improves circulation.',
      'For example, just 30 minutes of walking a day can reduce the risk of heart disease by 35%.',
      'Exercise also releases endorphins, which improve mood and reduce stress.',
      'In short, making exercise a daily habit is one of the simplest investments you can make in your wellbeing.',
    ],
  },
  {
    sentences: [
      'Reading regularly improves vocabulary and writing skills.',
      'When you read, you encounter new words in context, making them easier to remember.',
      'Research shows that students who read for pleasure score higher in language tests.',
      'Additionally, reading fiction builds empathy by allowing you to experience other perspectives.',
      'Clearly, making time to read is one of the most valuable habits a student can develop.',
    ],
  },
];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function ParagraphBuilderSim() {
  const [roundIdx, setRoundIdx] = useState(0);
  const [shuffled, setShuffled] = useState<string[]>(() => shuffleArray(rounds[0].sentences));
  const [built, setBuilt] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const round = rounds[roundIdx];

  function handleClickSentence(sentence: string) {
    if (checked) return;
    setShuffled((prev) => prev.filter((s) => s !== sentence));
    setBuilt((prev) => [...prev, sentence]);
  }

  function handleRemove(idx: number) {
    if (checked) return;
    const sentence = built[idx];
    setBuilt((prev) => prev.filter((_, i) => i !== idx));
    setShuffled((prev) => [...prev, sentence]);
  }

  function handleCheck() {
    setChecked(true);
  }

  function handleReset() {
    setShuffled(shuffleArray(round.sentences));
    setBuilt([]);
    setChecked(false);
  }

  function handleNextRound() {
    const next = roundIdx + 1;
    if (next >= rounds.length) {
      setAllDone(true);
    } else {
      setRoundIdx(next);
      setShuffled(shuffleArray(rounds[next].sentences));
      setBuilt([]);
      setChecked(false);
    }
  }

  const isCorrect = checked && built.every((s, i) => s === round.sentences[i]);

  if (allDone) {
    return (
      <div className="text-center space-y-4 py-6">
        <div className="text-5xl">🎉</div>
        <p className="text-white font-semibold text-xl">All rounds complete!</p>
        <p className="text-slate-400 text-sm">You successfully ordered both paragraphs. Well done!</p>
        <button
          onClick={() => { setRoundIdx(0); setShuffled(shuffleArray(rounds[0].sentences)); setBuilt([]); setChecked(false); setAllDone(false); }}
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
        <span>Round {roundIdx + 1} of {rounds.length}</span>
        <span className="text-rose-400 font-semibold">
          {checked ? (isCorrect ? 'Correct order!' : 'Some errors') : `${built.length}/${round.sentences.length} placed`}
        </span>
      </div>

      {/* Available sentences */}
      <div>
        <p className="text-xs text-slate-400 mb-2">Click sentences in the correct paragraph order:</p>
        <div className="space-y-2 min-h-10">
          {shuffled.map((sentence) => (
            <button
              key={sentence}
              onClick={() => handleClickSentence(sentence)}
              disabled={checked}
              className="w-full text-left px-4 py-3 bg-slate-800 border border-slate-600 hover:border-rose-400 hover:bg-slate-700 text-white text-sm rounded-xl transition cursor-pointer"
            >
              {sentence}
            </button>
          ))}
          {shuffled.length === 0 && !checked && (
            <p className="text-slate-500 text-sm italic text-center py-2">All sentences placed below</p>
          )}
        </div>
      </div>

      {/* Built paragraph */}
      {built.length > 0 && (
        <div>
          <p className="text-xs text-slate-400 mb-2">Your paragraph (click to remove):</p>
          <div className="space-y-2">
            {built.map((sentence, idx) => {
              const correct = round.sentences[idx] === sentence;
              let style = 'bg-rose-500/10 border-rose-500/40 text-white';
              if (checked) {
                style = correct
                  ? 'bg-green-500/10 border-green-500 text-green-300'
                  : 'bg-red-500/10 border-red-500 text-red-300';
              }
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3 px-4 py-3 rounded-xl border text-sm transition ${style}`}
                >
                  <span className={`shrink-0 font-bold text-xs mt-0.5 ${checked ? (correct ? 'text-green-400' : 'text-red-400') : 'text-rose-400'}`}>
                    {idx + 1}.
                  </span>
                  <span className="flex-1">{sentence}</span>
                  {!checked && (
                    <button
                      onClick={() => handleRemove(idx)}
                      className="shrink-0 text-slate-500 hover:text-red-400 text-xs transition"
                    >
                      ✕
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Actions */}
      {built.length === round.sentences.length && !checked && (
        <button
          onClick={handleCheck}
          className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
        >
          Check Order
        </button>
      )}

      {checked && (
        <div className="space-y-3">
          <div className={`rounded-xl p-4 border text-sm ${isCorrect ? 'bg-green-500/10 border-green-500/40 text-green-300' : 'bg-red-500/10 border-red-500/40 text-red-300'}`}>
            {isCorrect
              ? 'Perfect order! Topic sentence first, body sentences with evidence, concluding sentence last.'
              : 'Some sentences are out of order. Red = wrong position. Try again!'}
          </div>
          {isCorrect ? (
            <button
              onClick={handleNextRound}
              className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
            >
              {roundIdx + 1 < rounds.length ? 'Next Round →' : 'Finish!'}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition"
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
