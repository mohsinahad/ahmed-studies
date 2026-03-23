import { useState } from 'react';

interface Paragraph {
  text: string;
  mainIdea: string;
  mainIdeaOptions: string[];
  supportingDetail: string;
  supportingDetailOptions: string[];
}

const paragraphs: Paragraph[] = [
  {
    text: 'Dogs make excellent pets for many reasons. They are loyal companions who greet you happily every day. Studies show that petting a dog can lower stress and anxiety. Dogs also encourage their owners to exercise through daily walks.',
    mainIdea: 'Dogs make excellent pets for many reasons.',
    mainIdeaOptions: [
      'Dogs make excellent pets for many reasons.',
      'Dogs need daily walks.',
      'Animals can help reduce stress.',
    ],
    supportingDetail: 'Studies show that petting a dog can lower stress and anxiety.',
    supportingDetailOptions: [
      'Dogs make excellent pets for many reasons.',
      'Studies show that petting a dog can lower stress and anxiety.',
      'They are loyal companions.',
    ],
  },
  {
    text: 'The Amazon rainforest is vital to our planet. It produces about 20% of the world\'s oxygen, earning it the nickname "the lungs of the Earth". Thousands of plant and animal species found nowhere else on Earth live there. It also regulates global weather patterns and rainfall.',
    mainIdea: 'The Amazon rainforest is vital to our planet.',
    mainIdeaOptions: [
      'The Amazon produces a lot of oxygen.',
      'The Amazon rainforest is vital to our planet.',
      'Rainforests are found in South America.',
    ],
    supportingDetail: 'Thousands of plant and animal species found nowhere else on Earth live there.',
    supportingDetailOptions: [
      'The Amazon rainforest is vital to our planet.',
      'Thousands of plant and animal species found nowhere else on Earth live there.',
      'It also regulates global weather patterns and rainfall.',
    ],
  },
  {
    text: 'Exercise has powerful effects on mental health. Regular physical activity releases endorphins, chemicals in the brain that boost mood. People who exercise regularly report lower rates of anxiety and depression. Even a 20-minute walk can lift your spirits on a difficult day.',
    mainIdea: 'Exercise has powerful effects on mental health.',
    mainIdeaOptions: [
      'Walking is good for you.',
      'Endorphins improve your mood.',
      'Exercise has powerful effects on mental health.',
    ],
    supportingDetail: 'Even a 20-minute walk can lift your spirits on a difficult day.',
    supportingDetailOptions: [
      'Exercise has powerful effects on mental health.',
      'Regular physical activity releases endorphins.',
      'Even a 20-minute walk can lift your spirits on a difficult day.',
    ],
  },
];

type Step = 'main-idea' | 'supporting-detail' | 'done';

export default function MainIdeaBuilderSim() {
  const [paraIdx, setParaIdx] = useState(0);
  const [step, setStep] = useState<Step>('main-idea');
  const [mainIdeaChoice, setMainIdeaChoice] = useState<string | null>(null);
  const [detailChoice, setDetailChoice] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [allDone, setAllDone] = useState(false);

  const para = paragraphs[paraIdx];

  function handleMainIdeaChoice(choice: string) {
    if (mainIdeaChoice !== null) return;
    setMainIdeaChoice(choice);
    if (choice === para.mainIdea) setScore((s) => s + 1);
  }

  function handleDetailChoice(choice: string) {
    if (detailChoice !== null) return;
    setDetailChoice(choice);
    if (choice === para.supportingDetail) setScore((s) => s + 1);
  }

  function handleNextStep() {
    if (step === 'main-idea') {
      setStep('supporting-detail');
    } else {
      if (paraIdx + 1 >= paragraphs.length) {
        setAllDone(true);
      } else {
        setParaIdx(paraIdx + 1);
        setStep('main-idea');
        setMainIdeaChoice(null);
        setDetailChoice(null);
      }
    }
  }

  function handleRestart() {
    setParaIdx(0);
    setStep('main-idea');
    setMainIdeaChoice(null);
    setDetailChoice(null);
    setScore(0);
    setAllDone(false);
  }

  if (allDone) {
    return (
      <div className="text-center space-y-4 py-6">
        <div className="text-5xl font-bold text-rose-400">{score}/{paragraphs.length * 2}</div>
        <p className="text-white font-semibold text-lg">
          {score === paragraphs.length * 2 ? 'Perfect!' : score >= paragraphs.length ? 'Good work!' : 'Keep practising!'}
        </p>
        <p className="text-slate-400 text-sm">You identified {score} out of {paragraphs.length * 2} main ideas and supporting details correctly.</p>
        <button
          onClick={handleRestart}
          className="px-6 py-2 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Paragraph {paraIdx + 1} of {paragraphs.length}</span>
        <span className="text-rose-400 font-semibold">Score: {score}/{paraIdx * 2 + (step === 'supporting-detail' ? 1 : 0)}</span>
      </div>

      {/* Paragraph */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <p className="text-xs text-rose-400 uppercase tracking-widest mb-2">Read this paragraph</p>
        <p className="text-slate-200 text-sm leading-relaxed">{para.text}</p>
      </div>

      {/* Step 1: Main idea */}
      <div className={`space-y-3 ${step === 'supporting-detail' && mainIdeaChoice !== null ? 'opacity-60' : ''}`}>
        <p className="text-sm font-semibold text-white">
          {step === 'supporting-detail' ? '✓ Step 1: ' : 'Step 1: '}
          What is the MAIN IDEA of this paragraph?
        </p>
        <div className="space-y-2">
          {para.mainIdeaOptions.map((opt) => {
            let style = 'bg-slate-800 border-slate-600 text-white hover:border-rose-400 cursor-pointer';
            if (mainIdeaChoice !== null) {
              if (opt === para.mainIdea) {
                style = 'bg-green-500/20 border-green-500 text-green-300 cursor-default';
              } else if (opt === mainIdeaChoice) {
                style = 'bg-red-500/20 border-red-500 text-red-300 cursor-default';
              } else {
                style = 'bg-slate-800 border-slate-700 text-slate-500 cursor-default';
              }
            }
            return (
              <button
                key={opt}
                onClick={() => handleMainIdeaChoice(opt)}
                disabled={mainIdeaChoice !== null}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition ${style}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {mainIdeaChoice !== null && step === 'main-idea' && (
          <div className={`rounded-lg px-4 py-2 text-sm border ${mainIdeaChoice === para.mainIdea ? 'bg-green-500/10 border-green-500/30 text-green-300' : 'bg-red-500/10 border-red-500/30 text-red-300'}`}>
            {mainIdeaChoice === para.mainIdea
              ? 'Correct! That is the main idea — it covers the whole paragraph.'
              : `Not quite. The main idea is: "${para.mainIdea}"`}
          </div>
        )}
      </div>

      {mainIdeaChoice !== null && step === 'main-idea' && (
        <button
          onClick={handleNextStep}
          className="w-full py-2.5 bg-rose-500/20 border border-rose-500/40 text-rose-400 rounded-xl font-semibold hover:bg-rose-500/30 transition"
        >
          Next: Find a Supporting Detail →
        </button>
      )}

      {/* Step 2: Supporting detail */}
      {step === 'supporting-detail' && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Step 2: Which sentence is a SUPPORTING DETAIL (not the main idea)?</p>
          <div className="space-y-2">
            {para.supportingDetailOptions.map((opt) => {
              let style = 'bg-slate-800 border-slate-600 text-white hover:border-rose-400 cursor-pointer';
              if (detailChoice !== null) {
                if (opt === para.supportingDetail) {
                  style = 'bg-green-500/20 border-green-500 text-green-300 cursor-default';
                } else if (opt === detailChoice) {
                  style = 'bg-red-500/20 border-red-500 text-red-300 cursor-default';
                } else {
                  style = 'bg-slate-800 border-slate-700 text-slate-500 cursor-default';
                }
              }
              return (
                <button
                  key={opt}
                  onClick={() => handleDetailChoice(opt)}
                  disabled={detailChoice !== null}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {detailChoice !== null && (
            <>
              <div className={`rounded-lg px-4 py-2 text-sm border ${detailChoice === para.supportingDetail ? 'bg-green-500/10 border-green-500/30 text-green-300' : 'bg-red-500/10 border-red-500/30 text-red-300'}`}>
                {detailChoice === para.supportingDetail
                  ? 'Correct! That sentence supports the main idea with a specific detail.'
                  : `Not quite. A good supporting detail is: "${para.supportingDetail}"`}
              </div>
              <button
                onClick={handleNextStep}
                className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
              >
                {paraIdx + 1 < paragraphs.length ? 'Next Paragraph →' : 'See Final Score →'}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
