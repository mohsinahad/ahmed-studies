import { useState } from 'react';
import type { Topic, Question } from '../data/curriculum';

interface Props {
  topic: Topic;
  onComplete: (score: number) => void;
}

export default function Quiz({ topic, onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string>('');
  const [numInput, setNumInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const q: Question = topic.questions[current];

  function checkAnswer() {
    let isCorrect = false;

    if (q.type === 'multiple-choice') {
      isCorrect = selected === q.answer;
    } else {
      const val = parseFloat(numInput);
      const ans = typeof q.answer === 'number' ? q.answer : parseFloat(String(q.answer));
      const tol = q.tolerance ?? 0.1;
      isCorrect = !isNaN(val) && Math.abs(val - ans) <= tol;
    }

    setCorrect(isCorrect);
    setShowResult(true);
  }

  function next() {
    const newAnswers = [...answers, correct ?? false];
    setAnswers(newAnswers);

    if (current + 1 >= topic.questions.length) {
      const score = Math.round((newAnswers.filter(Boolean).length / newAnswers.length) * 100);
      setDone(true);
      onComplete(score);
      return;
    }

    setCurrent(current + 1);
    setSelected('');
    setNumInput('');
    setShowHint(false);
    setShowResult(false);
    setCorrect(null);
  }

  if (done) {
    const score = Math.round((answers.filter(Boolean).length / answers.length) * 100);
    return (
      <div className="text-center py-8">
        <div className={`text-6xl font-bold mb-3 ${score === 100 ? 'text-green-400' : score >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
          {score}%
        </div>
        <p className="text-slate-400 text-lg">
          {answers.filter(Boolean).length} out of {answers.length} correct
        </p>
        {score < 100 && (
          <p className="text-slate-500 text-sm mt-2">Try the topic again to improve your score!</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center gap-3">
        {topic.questions.map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full ${i < current ? 'bg-green-500' : i === current ? 'bg-sky-500' : 'bg-slate-700'}`} />
        ))}
        <span className="text-xs text-slate-400 shrink-0">{current + 1}/{topic.questions.length}</span>
      </div>

      {/* Question */}
      <div className="bg-slate-800 rounded-xl p-5">
        <p className="text-white text-lg leading-relaxed">{q.text}</p>
      </div>

      {/* Answer input */}
      {q.type === 'multiple-choice' ? (
        <div className="grid gap-3">
          {q.options!.map((opt) => (
            <button
              key={opt}
              onClick={() => !showResult && setSelected(opt)}
              className={`
                w-full text-left px-4 py-3 rounded-xl border transition
                ${showResult
                  ? opt === q.answer
                    ? 'bg-green-500/20 border-green-500 text-green-300'
                    : opt === selected && !correct
                    ? 'bg-red-500/20 border-red-500 text-red-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                  : selected === opt
                  ? 'bg-sky-500/20 border-sky-500 text-sky-200'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-700'
                }
              `}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={numInput}
            onChange={(e) => !showResult && setNumInput(e.target.value)}
            placeholder="Enter your answer..."
            className={`
              flex-1 bg-slate-800 border rounded-xl px-4 py-3 text-white text-lg outline-none transition
              ${showResult
                ? correct ? 'border-green-500' : 'border-red-500'
                : 'border-slate-600 focus:border-sky-500'
              }
            `}
          />
          {q.unit && <span className="text-slate-400 font-mono">{q.unit}</span>}
        </div>
      )}

      {/* Hint */}
      {showHint && !showResult && (
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-4 py-3 text-yellow-300 text-sm">
          Hint: {q.hint}
        </div>
      )}

      {/* Result explanation */}
      {showResult && (
        <div className={`rounded-xl px-4 py-3 text-sm ${correct ? 'bg-green-500/10 border border-green-500/30 text-green-300' : 'bg-red-500/10 border border-red-500/30 text-red-300'}`}>
          <span className="font-bold">{correct ? 'Correct! ' : 'Not quite. '}</span>
          {q.explanation}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {!showResult && !showHint && (
          <button
            onClick={() => setShowHint(true)}
            className="px-4 py-2 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 text-sm transition"
          >
            Need a hint?
          </button>
        )}
        {!showResult ? (
          <button
            onClick={checkAnswer}
            disabled={q.type === 'multiple-choice' ? !selected : !numInput}
            className="ml-auto px-6 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-40 font-semibold text-sm transition"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={next}
            className="ml-auto px-6 py-2 rounded-lg bg-green-500 hover:bg-green-400 font-semibold text-sm transition"
          >
            {current + 1 >= topic.questions.length ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}
