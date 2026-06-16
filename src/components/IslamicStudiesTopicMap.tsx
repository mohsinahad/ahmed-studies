import { islamicStudiesCurriculum } from '../data/islamicStudiesCurriculum';

interface Props {
  completedTopics: string[];
  scores: Record<string, number>;
  onSelect: (topicId: string) => void;
  onReset: () => void;
  onBackToHome: () => void;
  onOpenTimeline: () => void;
}

export default function IslamicStudiesTopicMap({ completedTopics, scores, onSelect, onReset, onBackToHome, onOpenTimeline }: Props) {
  const total = islamicStudiesCurriculum.length;
  const done = completedTopics.length;

  const unitGroups = islamicStudiesCurriculum.reduce<Record<number, typeof islamicStudiesCurriculum>>((acc, topic) => {
    if (!acc[topic.unit]) acc[topic.unit] = [];
    acc[topic.unit].push(topic);
    return acc;
  }, {});

  const unitLabels: Record<number, string> = {
    1: 'Unit 1 — Pillars of Faith',
    2: 'Unit 2 — Worship & Practice',
    3: 'Unit 3 — Quran & Sunnah',
  };

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
            <h1 className="text-3xl font-bold text-white">Quran & Islamic Studies</h1>
            <p className="text-slate-400 text-sm mt-1">All Ages · Faith, Worship & Knowledge</p>
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
            <span>{total > 0 ? Math.round((done / total) * 100) : 0}%</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${total > 0 ? (done / total) * 100 : 0}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Featured: Seerah Timeline */}
        <button
          onClick={onOpenTimeline}
          className="w-full text-left rounded-xl border border-emerald-700/50 bg-gradient-to-br from-emerald-900/40 to-slate-900 hover:from-emerald-900/60 hover:border-emerald-600 transition px-5 py-4 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center text-2xl shrink-0">
              🕋
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-lg">Life of Prophet Muhammad ﷺ</span>
                <span className="text-[10px] uppercase tracking-wide font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 rounded px-1.5 py-0.5">
                  Timeline
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-0.5">
                An interactive visual Seerah — from his birth (570 CE) to his passing (632 CE),
                with dates, his age, and a map of each event.
              </p>
            </div>
            <span className="text-emerald-400 text-xl shrink-0">→</span>
          </div>
        </button>

        {Object.entries(unitGroups).map(([unitStr, topics]) => {
          const unit = Number(unitStr);
          return (
            <div key={unit}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
                {unitLabels[unit] ?? `Unit ${unit}`}
              </h2>
              <div className="space-y-3">
                {topics.map((topic) => {
                  const completed = completedTopics.includes(topic.id);
                  const score = scores[topic.id];

                  return (
                    <button
                      key={topic.id}
                      onClick={() => onSelect(topic.id)}
                      className={`
                        w-full text-left px-5 py-4 rounded-xl border transition
                        ${completed
                          ? 'bg-slate-800 border-emerald-800/60'
                          : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 hover:border-emerald-700/50 cursor-pointer'
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0
                          ${completed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-500/10 text-emerald-500'}
                        `}>
                          {completed ? '✓' : '☾'}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">{topic.title}</span>
                            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{topic.grade}</span>
                          </div>
                          <p className="text-sm text-slate-400 mt-0.5 line-clamp-2">{topic.shortExplanation}</p>
                        </div>

                        {completed && score !== undefined && (
                          <div className={`
                            text-sm font-bold px-3 py-1 rounded-lg shrink-0
                            ${score === 100 ? 'bg-emerald-500/20 text-emerald-400' : score >= 60 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}
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
        })}
      </div>
    </div>
  );
}
