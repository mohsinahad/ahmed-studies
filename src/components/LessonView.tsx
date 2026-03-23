import { useState } from 'react';
import type { Topic } from '../data/curriculum';
import Quiz from './Quiz';
import {
  SpeedSim, AccelerationSim, NewtonsFirstSim, NewtonsSecondSim,
  NewtonsThirdSim, KineticEnergySim, PotentialEnergySim, WavesSim,
} from '../simulations';

const simMap: Record<string, React.ComponentType> = {
  speed: SpeedSim,
  acceleration: AccelerationSim,
  'newtons-first': NewtonsFirstSim,
  'newtons-second': NewtonsSecondSim,
  'newtons-third': NewtonsThirdSim,
  'kinetic-energy': KineticEnergySim,
  'potential-energy': PotentialEnergySim,
  waves: WavesSim,
};

type Tab = 'lesson' | 'simulation' | 'quiz';

interface Props {
  topic: Topic;
  alreadyCompleted: boolean;
  onComplete: (score: number) => void;
  onBack: () => void;
}

function renderMarkdown(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <h3 key={i} className="text-white font-bold text-base mt-4 mb-1">{line.replace(/\*\*/g, '')}</h3>;
    }
    if (line.startsWith('- ')) {
      return <li key={i} className="text-slate-300 ml-4 list-disc">{parseBold(line.slice(2))}</li>;
    }
    if (line.trim() === '') return <div key={i} className="h-2" />;
    return <p key={i} className="text-slate-300 leading-relaxed">{parseBold(line)}</p>;
  });
}

function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') ? <strong key={i} className="text-white">{part.replace(/\*\*/g, '')}</strong> : part
  );
}

export default function LessonView({ topic, alreadyCompleted, onComplete, onBack }: Props) {
  const [tab, setTab] = useState<Tab>('lesson');
  const [showDetail, setShowDetail] = useState(false);
  const [quizDone, setQuizDone] = useState(alreadyCompleted);

  const Sim = simMap[topic.simulationId];

  function handleQuizComplete(score: number) {
    setQuizDone(true);
    onComplete(score);
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'lesson', label: 'Lesson' },
    { id: 'simulation', label: 'Simulation' },
    { id: 'quiz', label: 'Quiz' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top bar */}
      <div className="border-b border-slate-800 px-6 py-4 flex items-center gap-4">
        <button onClick={onBack}
          className="text-slate-400 hover:text-white transition text-sm flex items-center gap-1">
          ← Back
        </button>
        <div className="flex-1">
          <h1 className="text-white font-bold text-xl">{topic.title}</h1>
          <span className="text-xs text-slate-500">{topic.grade} grade</span>
        </div>
        {quizDone && (
          <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
            Completed
          </span>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 px-6">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-5 py-3 text-sm font-medium border-b-2 transition ${tab === t.id ? 'border-sky-500 text-sky-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto p-6">
        {/* LESSON TAB */}
        {tab === 'lesson' && (
          <div className="space-y-6">
            {/* Short explanation */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3">Quick Summary</div>
              <p className="text-white text-xl leading-relaxed font-medium">{topic.shortExplanation}</p>
            </div>

            {/* Detailed explanation toggle */}
            <div>
              <button
                onClick={() => setShowDetail(!showDetail)}
                className="w-full flex items-center justify-between px-5 py-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-slate-600 transition"
              >
                <span className="font-semibold text-white">Detailed Explanation</span>
                <span className={`text-slate-400 transition-transform ${showDetail ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {showDetail && (
                <div className="mt-2 bg-slate-800/40 border border-slate-700 rounded-xl p-6 space-y-1">
                  {renderMarkdown(topic.detailedExplanation)}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <button onClick={() => setTab('simulation')}
                className="flex-1 py-3 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-400 font-semibold hover:bg-sky-500/30 transition">
                Try the Simulation →
              </button>
              <button onClick={() => setTab('quiz')}
                className="flex-1 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-semibold hover:bg-slate-700 transition">
                Take the Quiz →
              </button>
            </div>
          </div>
        )}

        {/* SIMULATION TAB */}
        {tab === 'simulation' && (
          <div className="space-y-4">
            <p className="text-slate-400 text-sm">Interact with the simulation below. Change the sliders and observe how physics works in real time.</p>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
              {Sim ? <Sim /> : <p className="text-slate-500 text-center py-10">Simulation coming soon</p>}
            </div>
            <button onClick={() => setTab('quiz')}
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 font-semibold transition">
              Ready? Take the Quiz →
            </button>
          </div>
        )}

        {/* QUIZ TAB */}
        {tab === 'quiz' && (
          <div>
            <div className="mb-5">
              <h2 className="text-white font-bold text-lg">Test your knowledge</h2>
              <p className="text-slate-400 text-sm">{topic.questions.length} questions · Hints available</p>
            </div>
            <Quiz topic={topic} onComplete={handleQuizComplete} />
            {quizDone && (
              <button onClick={onBack}
                className="mt-6 w-full py-3 rounded-xl bg-green-500 hover:bg-green-400 font-semibold transition">
                Back to Topic Map
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
