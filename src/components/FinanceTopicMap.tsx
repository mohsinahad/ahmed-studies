import { financeCurriculum } from '../data/financeCurriculum';

interface Props {
  completedTopics: string[];
  scores: Record<string, number>;
  onSelect: (topicId: string) => void;
  onReset: () => void;
  onBackToHome: () => void;
}

export default function FinanceTopicMap({ completedTopics, scores, onSelect, onReset, onBackToHome }: Props) {
  const total = financeCurriculum.length;
  const done = completedTopics.length;

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <button
              onClick={onBackToHome}
              className="text-xs text-slate-500 hover:text-slate-300 mb-2 flex items-center gap-1 transition"
            >
              ← All Subjects
            </button>
            <h1 className="text-3xl font-bold text-white">Finance for Kids</h1>
            <p className="text-slate-400 text-sm mt-1">Grades 6–8 · Stocks, Bonds, ETFs & Investing</p>
          </div>
          <button
            onClick={onReset}
            className="text-xs text-slate-500 hover:text-slate-300 px-3 py-1.5 border border-slate-700 rounded-lg transition"
          >
            Reset Progress
          </button>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>{done} of {total} topics completed</span>
            <span>{Math.round((done / total) * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${(done / total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-green-400 mb-3">
          Unit 1 — Investing Basics
        </h2>
        {financeCurriculum.map((topic) => {
          const completed = completedTopics.includes(topic.id);
          const score = scores[topic.id];

          return (
            <button
              key={topic.id}
              onClick={() => onSelect(topic.id)}
              className={`
                w-full text-left px-5 py-4 rounded-xl border transition
                ${completed
                  ? 'bg-slate-800 border-slate-600'
                  : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 hover:border-slate-500 cursor-pointer'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0
                  ${completed ? 'bg-green-500/20 text-green-400' : 'bg-green-500/10 text-green-400'}
                `}>
                  {completed ? '✓' : '▶'}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{topic.title}</span>
                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{topic.grade}</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-0.5 line-clamp-1">{topic.shortExplanation}</p>
                </div>

                {completed && score !== undefined && (
                  <div className={`
                    text-sm font-bold px-3 py-1 rounded-lg shrink-0
                    ${score === 100 ? 'bg-green-500/20 text-green-400' : score >= 60 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}
                  `}>
                    {score}%
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
