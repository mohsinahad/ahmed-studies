import { useState } from 'react';

type SentenceType = 'Simple' | 'Compound' | 'Complex' | 'Fragment';

interface SentenceItem {
  text: string;
  correct: SentenceType;
}

const items: SentenceItem[] = [
  { text: 'The bird sang.', correct: 'Simple' },
  { text: 'I wanted to go, but it was raining.', correct: 'Compound' },
  { text: 'Although she was tired, she finished her homework.', correct: 'Complex' },
  { text: 'Running through the rain.', correct: 'Fragment' },
  { text: 'The sun set, and the stars appeared.', correct: 'Compound' },
  { text: 'Because he studied hard, he passed the exam.', correct: 'Complex' },
];

const categories: SentenceType[] = ['Simple', 'Compound', 'Complex', 'Fragment'];

const categoryColors: Record<SentenceType, string> = {
  Simple: 'border-sky-500 bg-sky-500/10 text-sky-400',
  Compound: 'border-violet-500 bg-violet-500/10 text-violet-400',
  Complex: 'border-amber-500 bg-amber-500/10 text-amber-400',
  Fragment: 'border-red-500 bg-red-500/10 text-red-400',
};

const categoryDescriptions: Record<SentenceType, string> = {
  Simple: 'One independent clause',
  Compound: 'Two independent clauses + coordinating conjunction',
  Complex: 'Independent + dependent clause (subordinating conjunction)',
  Fragment: 'Incomplete sentence — missing subject or verb',
};

export default function SentenceTypeSorterSim() {
  const [selected, setSelected] = useState<number | null>(null);
  const [assignments, setAssignments] = useState<Record<number, SentenceType>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAssigned = Object.keys(assignments).length === items.length;

  function handleSentenceClick(idx: number) {
    if (submitted) return;
    setSelected(selected === idx ? null : idx);
  }

  function handleBinClick(type: SentenceType) {
    if (selected === null || submitted) return;
    setAssignments((prev) => ({ ...prev, [selected]: type }));
    setSelected(null);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setSelected(null);
    setAssignments({});
    setSubmitted(false);
  }

  const score = submitted
    ? items.filter((item, idx) => assignments[idx] === item.correct).length
    : 0;

  return (
    <div className="space-y-5">
      <p className="text-xs text-slate-400">
        Click a sentence to select it, then click the correct category bin. All 6 sentences must be sorted.
      </p>

      {/* Sentences */}
      <div className="space-y-2">
        {items.map((item, idx) => {
          const assigned = assignments[idx];
          const isSelected = selected === idx;
          const isCorrect = submitted && assigned === item.correct;
          const isWrong = submitted && assigned !== item.correct;

          return (
            <button
              key={idx}
              onClick={() => handleSentenceClick(idx)}
              disabled={submitted}
              className={`
                w-full text-left px-4 py-3 rounded-xl border text-sm transition
                ${isCorrect
                  ? 'bg-green-500/10 border-green-500 text-green-300'
                  : isWrong
                  ? 'bg-red-500/10 border-red-500 text-red-300'
                  : isSelected
                  ? 'bg-rose-500/20 border-rose-400 text-white'
                  : assigned
                  ? 'bg-slate-700 border-slate-500 text-slate-300'
                  : 'bg-slate-800 border-slate-700 text-white hover:border-slate-500 cursor-pointer'
                }
              `}
            >
              <div className="flex items-center justify-between gap-3">
                <span>"{item.text}"</span>
                {assigned && (
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${categoryColors[assigned]}`}>
                    {assigned}
                  </span>
                )}
              </div>
              {isWrong && submitted && (
                <p className="text-xs text-slate-400 mt-1">
                  Correct: <span className="text-green-400 font-medium">{item.correct}</span>
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* Category bins */}
      {!submitted && (
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleBinClick(cat)}
              disabled={selected === null}
              className={`
                px-4 py-3 rounded-xl border text-left transition
                ${selected !== null
                  ? `${categoryColors[cat]} cursor-pointer hover:opacity-80`
                  : 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                }
              `}
            >
              <div className="font-semibold text-sm">{cat}</div>
              <div className="text-xs mt-0.5 opacity-70">{categoryDescriptions[cat]}</div>
            </button>
          ))}
        </div>
      )}

      {allAssigned && !submitted && (
        <button
          onClick={handleSubmit}
          className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
        >
          Check Answers
        </button>
      )}

      {submitted && (
        <div className="space-y-3">
          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">Your score</p>
            <p className={`text-3xl font-bold mt-1 ${score === items.length ? 'text-green-400' : score >= 4 ? 'text-yellow-400' : 'text-red-400'}`}>
              {score}/{items.length}
            </p>
            {score === items.length && <p className="text-green-400 text-sm mt-1">Perfect! Well done!</p>}
          </div>
          <button
            onClick={handleReset}
            className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
