import { useState } from 'react';
import type { Topic } from '../data/curriculum';
import Quiz from './Quiz';

type Tab = 'lesson' | 'quiz';

interface Props {
  topic: Topic;
  alreadyCompleted: boolean;
  onComplete: (score: number) => void;
  onBack: () => void;
}

function renderLine(line: string, i: number) {
  if (line.startsWith('**') && line.endsWith('**')) {
    return <h3 key={i} className="text-white font-bold text-base mt-5 mb-1">{line.replace(/\*\*/g, '')}</h3>;
  }
  if (line.startsWith('- ')) {
    return <li key={i} className="text-slate-300 ml-4 list-disc">{parseBold(line.slice(2))}</li>;
  }
  if (line.trim() === '') return <div key={i} className="h-2" />;
  if (line.startsWith('**Fun Fact**')) {
    return null;
  }
  if (line.startsWith('**Halal Note**')) {
    return null;
  }
  return <p key={i} className="text-slate-300 leading-relaxed">{parseBold(line)}</p>;
}

function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') ? <strong key={i} className="text-white">{part.replace(/\*\*/g, '')}</strong> : part
  );
}

function parseContent(text: string) {
  const sections = { main: [] as string[], funFact: '', halalNote: '' };
  const lines = text.split('\n');
  let inFunFact = false;
  let inHalal = false;

  for (const line of lines) {
    if (line.startsWith('**Fun Fact**')) { inFunFact = true; inHalal = false; continue; }
    if (line.startsWith('**Halal Note**')) { inHalal = true; inFunFact = false; continue; }
    if (inFunFact) { sections.funFact += (sections.funFact ? ' ' : '') + line; continue; }
    if (inHalal) { sections.halalNote += (sections.halalNote ? ' ' : '') + line; continue; }
    sections.main.push(line);
  }

  return sections;
}

export default function FinanceLessonView({ topic, alreadyCompleted, onComplete, onBack }: Props) {
  const [tab, setTab] = useState<Tab>('lesson');
  const [showDetail, setShowDetail] = useState(false);
  const [quizDone, setQuizDone] = useState(alreadyCompleted);

  const { main, funFact, halalNote } = parseContent(topic.detailedExplanation);

  function handleQuizComplete(score: number) {
    setQuizDone(true);
    onComplete(score);
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="border-b border-slate-800 px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} className="text-slate-400 hover:text-white transition text-sm flex items-center gap-1">
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

      <div className="flex border-b border-slate-800 px-6">
        {(['lesson', 'quiz'] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-5 py-3 text-sm font-medium border-b-2 transition capitalize ${tab === t ? 'border-green-500 text-green-400' : 'border-transparent text-slate-500 hover:text-slate-300'}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto p-6">
        {tab === 'lesson' && (
          <div className="space-y-6">
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-green-400 mb-3">Quick Summary</div>
              <p className="text-white text-xl leading-relaxed font-medium">{topic.shortExplanation}</p>
            </div>

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
                  {main.map((line, i) => renderLine(line, i))}

                  {funFact && (
                    <div className="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                      <div className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-2">Fun Fact</div>
                      <p className="text-yellow-100 text-sm leading-relaxed">{funFact}</p>
                    </div>
                  )}

                  {halalNote && (
                    <div className={`mt-4 rounded-xl p-4 ${
                      halalNote.toLowerCase().includes('haram') && !halalNote.toLowerCase().includes('not haram')
                        ? 'bg-red-500/10 border border-red-500/20'
                        : 'bg-emerald-500/10 border border-emerald-500/20'
                    }`}>
                      <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                        halalNote.toLowerCase().includes('haram') && !halalNote.toLowerCase().includes('not haram')
                          ? 'text-red-400'
                          : 'text-emerald-400'
                      }`}>Halal / Islamic Finance Note</div>
                      <p className="text-slate-300 text-sm leading-relaxed">{parseBold(halalNote)}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button onClick={() => setTab('quiz')}
              className="w-full py-3 rounded-xl bg-green-500/20 border border-green-500/40 text-green-400 font-semibold hover:bg-green-500/30 transition">
              Take the Quiz →
            </button>
          </div>
        )}

        {tab === 'quiz' && (
          <div>
            <div className="mb-5">
              <h2 className="text-white font-bold text-lg">Test your knowledge</h2>
              <p className="text-slate-400 text-sm">{topic.questions.length} questions · Hints available</p>
            </div>
            <Quiz topic={topic} onComplete={handleQuizComplete} subjectId="finance" />
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
