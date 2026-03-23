import { useState } from 'react';

interface Pair {
  bad: string;
  badNote: string;
  good: string;
  goodNote: string;
  lesson: string;
}

const pairs: Pair[] = [
  {
    bad: 'Write about animals',
    badNote: 'Too vague — which animal? what aspect? how long?',
    good: 'Write 3 fun facts about blue whales for a 12-year-old',
    goodNote: 'Specific topic, format, and audience',
    lesson: "Always say what, who it's for, and how long.",
  },
  {
    bad: 'Help me study',
    badNote: 'No subject, no method, no context',
    good: 'Make me 5 quiz questions on World War 2 for Year 8 revision',
    goodNote: 'Clear task, topic, level, and format',
    lesson: 'Include the topic, format, and purpose.',
  },
  {
    bad: 'Make it better',
    badNote: "Better HOW? The AI has no idea what 'it' refers to",
    good: 'Make this sentence clearer and shorter: [sentence]',
    goodNote: 'Specific action with the content to improve',
    lesson: 'Give the AI the actual content to work with.',
  },
  {
    bad: 'Explain maths',
    badNote: 'Which part of maths? What level? How much detail?',
    good: 'Explain how to solve a simple algebra equation, step by step, with an example',
    goodNote: 'Topic, method, and format all specified',
    lesson: "Be specific — maths is huge. Narrow it down.",
  },
];

export default function PromptCompareSim() {
  const [index, setIndex] = useState(0);

  const pair = pairs[index];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-bold text-base">Good vs Bad Prompts</h3>
        <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
          Example {index + 1} of {pairs.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Bad prompt */}
        <div className="rounded-xl border border-red-500/40 bg-red-500/5 p-4 space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">❌</span>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">Weak Prompt</span>
          </div>
          <div className="bg-slate-900/60 rounded-lg px-4 py-3 border border-red-500/20">
            <p className="text-white text-sm font-medium">"{pair.bad}"</p>
          </div>
          <p className="text-red-300/80 text-xs leading-relaxed">{pair.badNote}</p>
        </div>

        {/* Good prompt */}
        <div className="rounded-xl border border-green-500/40 bg-green-500/5 p-4 space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">✅</span>
            <span className="text-xs font-bold uppercase tracking-wider text-green-400">Strong Prompt</span>
          </div>
          <div className="bg-slate-900/60 rounded-lg px-4 py-3 border border-green-500/20">
            <p className="text-white text-sm font-medium">"{pair.good}"</p>
          </div>
          <p className="text-green-300/80 text-xs leading-relaxed">{pair.goodNote}</p>
        </div>
      </div>

      {/* Key lesson */}
      <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3 flex items-start gap-3">
        <span className="text-violet-400 font-bold text-sm shrink-0">Key lesson:</span>
        <p className="text-violet-200 text-sm">{pair.lesson}</p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          ← Previous
        </button>

        <div className="flex gap-1.5">
          {pairs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? 'bg-violet-400 w-4' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIndex((i) => Math.min(pairs.length - 1, i + 1))}
          disabled={index === pairs.length - 1}
          className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
