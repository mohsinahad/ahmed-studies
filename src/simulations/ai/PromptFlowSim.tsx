import { useState, useEffect } from 'react';

interface Example {
  prompt: string;
  response: string;
}

const examples: Example[] = [
  {
    prompt: 'Write a fun fact about sharks.',
    response:
      'Sharks have been around for over 450 million years — that\'s older than trees! They survived 5 mass extinctions.',
  },
  {
    prompt: 'Give me 3 ideas for a school project on space.',
    response:
      '1. Build a solar system model. 2. Present on black holes. 3. Create a poster about Mars missions.',
  },
  {
    prompt: 'Explain gravity in one sentence for a kid.',
    response:
      'Gravity is the invisible force that pulls everything toward the ground and keeps planets orbiting the sun.',
  },
  {
    prompt: "What's a good breakfast before an exam?",
    response:
      'Eat something with protein and slow carbs like eggs on toast or oats — they give steady energy without a sugar crash.',
  },
];

type FlowState = 'idle' | 'input' | 'ai' | 'output';

export default function PromptFlowSim() {
  const [selected, setSelected] = useState(0);
  const [flowState, setFlowState] = useState<FlowState>('output');

  function runFlow(index: number) {
    setSelected(index);
    setFlowState('idle');
    setTimeout(() => setFlowState('input'), 50);
    setTimeout(() => setFlowState('ai'), 500);
    setTimeout(() => setFlowState('output'), 1100);
  }

  useEffect(() => {
    setFlowState('output');
  }, []);

  const showInput = flowState === 'input' || flowState === 'ai' || flowState === 'output';
  const showAI = flowState === 'ai' || flowState === 'output';
  const showOutput = flowState === 'output';

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h3 className="text-white font-bold text-lg mb-1">Prompt → AI → Response</h3>
        <p className="text-slate-400 text-sm">Click an example prompt to see the flow in action.</p>
      </div>

      {/* Prompt selector buttons */}
      <div className="grid grid-cols-2 gap-2">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => runFlow(i)}
            className={`
              text-left px-3 py-2.5 rounded-xl border text-xs transition-all duration-150
              ${selected === i && flowState !== 'idle'
                ? 'bg-violet-500/20 border-violet-400 text-violet-200'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-violet-600 hover:bg-slate-700'
              }
            `}
          >
            {ex.prompt}
          </button>
        ))}
      </div>

      {/* Flow diagram */}
      <div className="flex items-stretch gap-2 md:gap-3">
        {/* Input box */}
        <div
          className={`flex-1 rounded-xl border p-3 transition-all duration-300 ${
            showInput
              ? 'bg-violet-500/10 border-violet-500/50 opacity-100'
              : 'bg-slate-800/40 border-slate-700 opacity-30'
          }`}
        >
          <div className="text-xs font-bold text-violet-400 mb-2 uppercase tracking-wider">Input</div>
          <p className="text-slate-200 text-xs leading-relaxed min-h-[48px]">
            {showInput ? examples[selected].prompt : '...'}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div
            className={`text-lg transition-all duration-300 ${
              showAI ? 'text-violet-400' : 'text-slate-700'
            }`}
          >
            →
          </div>
        </div>

        {/* AI box */}
        <div
          className={`w-20 shrink-0 rounded-xl border p-3 flex flex-col items-center justify-center transition-all duration-300 ${
            showAI
              ? 'bg-purple-500/20 border-purple-400/60 opacity-100'
              : 'bg-slate-800/40 border-slate-700 opacity-30'
          }`}
        >
          <div className={`text-2xl mb-1 ${showAI && !showOutput ? 'animate-pulse' : ''}`}>🤖</div>
          <div className="text-xs font-bold text-purple-300 uppercase tracking-wider text-center">AI</div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div
            className={`text-lg transition-all duration-300 ${
              showOutput ? 'text-violet-400' : 'text-slate-700'
            }`}
          >
            →
          </div>
        </div>

        {/* Output box */}
        <div
          className={`flex-1 rounded-xl border p-3 transition-all duration-300 ${
            showOutput
              ? 'bg-emerald-500/10 border-emerald-500/40 opacity-100'
              : 'bg-slate-800/40 border-slate-700 opacity-30'
          }`}
        >
          <div className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wider">Output</div>
          <p className="text-slate-200 text-xs leading-relaxed min-h-[48px]">
            {showOutput ? examples[selected].response : '...'}
          </p>
        </div>
      </div>

      {/* Labels */}
      <div className="flex items-center text-xs text-slate-500">
        <div className="flex-1 text-center">Input (your prompt)</div>
        <div className="w-5" />
        <div className="w-20 text-center shrink-0">AI</div>
        <div className="w-5" />
        <div className="flex-1 text-center">Output (AI's response)</div>
      </div>
    </div>
  );
}
