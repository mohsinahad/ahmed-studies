import { getLast30Days, getTodayStats } from '../lib/analytics';
import { curriculum } from '../data/curriculum';
import { mathsCurriculum } from '../data/mathsCurriculum';
import { chemistryCurriculum } from '../data/chemistryCurriculum';
import { aiCurriculum } from '../data/aiCurriculum';
import { elaCurriculum } from '../data/elaCurriculum';
import { financeCurriculum } from '../data/financeCurriculum';
import type { Topic } from '../data/curriculum';

interface Props {
  onBack: () => void;
}

interface SubjectMeta {
  label: string;
  color: string;
  storageKey: string;
  topics: Topic[];
}

const SUBJECTS: Record<string, SubjectMeta> = {
  physics:   { label: 'Physics',       color: '#38bdf8', storageKey: 'physics-app-progress', topics: curriculum },
  maths:     { label: 'Maths',         color: '#a78bfa', storageKey: 'maths-progress',       topics: mathsCurriculum },
  chemistry: { label: 'Chemistry',     color: '#34d399', storageKey: 'chem-progress',        topics: chemistryCurriculum },
  ai:        { label: 'AI & Prompting',color: '#c084fc', storageKey: 'ai-progress',          topics: aiCurriculum },
  ela:       { label: 'English (ELA)', color: '#fb7185', storageKey: 'ela-progress',         topics: elaCurriculum },
  finance:   { label: 'Finance',       color: '#4ade80', storageKey: 'finance-progress',     topics: financeCurriculum },
};

interface ProgressStore {
  completedTopics: string[];
  scores: Record<string, number>;
}

function loadSubjectProgress(storageKey: string): ProgressStore {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedTopics: [], scores: {} };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function pct(a: number, b: number): number {
  if (b === 0) return 0;
  return Math.round((a / b) * 100);
}

export default function AnalyticsDashboard({ onBack }: Props) {
  const days = getLast30Days();
  const todayStats = getTodayStats();

  const totalAttempts30 = days.reduce((s, d) => s + d.attempts, 0);
  const totalCorrect30 = days.reduce((s, d) => s + d.correct, 0);
  const activeDays = days.filter((d) => d.attempts > 0).length;

  // Aggregate per-subject question totals from analytics (last 30 days)
  const subjectAnalytics: Record<string, { attempts: number; correct: number }> = {};
  for (const day of days) {
    for (const [subId, sub] of Object.entries(day.subjects)) {
      if (!subjectAnalytics[subId]) subjectAnalytics[subId] = { attempts: 0, correct: 0 };
      subjectAnalytics[subId].attempts += sub.attempts;
      subjectAnalytics[subId].correct += sub.correct;
    }
  }

  // Build per-subject progress stats
  const subjectRows = Object.entries(SUBJECTS).map(([subId, meta]) => {
    const progress = loadSubjectProgress(meta.storageKey);
    const totalTopics = meta.topics.length;
    const completedTopics = progress.completedTopics.length;
    const totalQuestions = meta.topics.reduce((s, t) => s + t.questions.length, 0);
    const analytics = subjectAnalytics[subId] ?? { attempts: 0, correct: 0 };
    return { subId, meta, totalTopics, completedTopics, totalQuestions, analytics };
  });

  const maxAttempts = Math.max(...days.map((d) => d.attempts), 1);
  const chartDays = days.slice(-14);

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <button onClick={onBack} className="text-xs text-slate-500 hover:text-slate-300 mb-2 flex items-center gap-1 transition">
            ← Back to Subjects
          </button>
          <h1 className="text-3xl font-bold text-white">Ahmed's Progress</h1>
          <p className="text-slate-400 text-sm mt-1">Last 30 days · All subjects</p>
        </div>

        {/* Today's stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Today — Attempted</div>
            <div className="text-4xl font-bold text-white">{todayStats.attempts}</div>
            <div className="text-xs text-slate-500 mt-1">questions</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Today — Correct</div>
            <div className="text-4xl font-bold text-green-400">{todayStats.correct}</div>
            <div className="text-xs text-slate-500 mt-1">{pct(todayStats.correct, todayStats.attempts)}% accuracy</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Active Days</div>
            <div className="text-4xl font-bold text-sky-400">{activeDays}</div>
            <div className="text-xs text-slate-500 mt-1">of last 30 days</div>
          </div>
        </div>

        {/* Bar chart — last 14 days */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
          <div className="text-sm font-semibold text-white mb-1">Daily Questions — Last 14 Days</div>
          <div className="text-xs text-slate-500 mb-5">Gray = attempted &nbsp;·&nbsp; Green = correct</div>

          <div className="flex items-end gap-1.5 h-40">
            {chartDays.map((day) => {
              const attemptH = (day.attempts / maxAttempts) * 100;
              const correctH = (day.correct / maxAttempts) * 100;
              return (
                <div key={day.date} className="flex-1 flex flex-col items-center gap-0.5 group relative">
                  <div className="relative w-full" style={{ height: '128px' }}>
                    <div className="absolute bottom-0 left-0 right-0 rounded-t bg-slate-700 transition-all" style={{ height: `${attemptH}%` }} />
                    <div className="absolute bottom-0 left-0 right-0 rounded-t bg-green-500 transition-all" style={{ height: `${correctH}%` }} />
                  </div>

                  {day.attempts > 0 && (
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-10 hidden group-hover:block bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-xs whitespace-nowrap text-center shadow-xl">
                      <div className="text-white font-semibold">{formatDate(day.date)}</div>
                      <div className="text-green-400">{day.correct}/{day.attempts} correct</div>
                      <div className="text-slate-400">{pct(day.correct, day.attempts)}% accuracy</div>
                    </div>
                  )}

                  <div className="text-[10px] text-slate-600 mt-1 rotate-45 origin-left translate-x-1">
                    {formatDate(day.date).split(' ')[1]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 30-day summary */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
          <div className="text-sm font-semibold text-white mb-4">30-Day Summary</div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">{totalAttempts30}</div>
              <div className="text-xs text-slate-500 mt-0.5">Questions Attempted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{totalCorrect30}</div>
              <div className="text-xs text-slate-500 mt-0.5">Correct</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">{pct(totalCorrect30, totalAttempts30)}%</div>
              <div className="text-xs text-slate-500 mt-0.5">Accuracy</div>
            </div>
          </div>
        </div>

        {/* Per-subject breakdown */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-sm font-semibold text-white mb-1">Progress by Subject</div>
          <div className="text-xs text-slate-500 mb-5">Topics completed · Questions attempted (last 30 days) · Accuracy</div>

          <div className="space-y-5">
            {subjectRows.map(({ subId, meta, totalTopics, completedTopics, totalQuestions, analytics }) => {
              const topicPct = pct(completedTopics, totalTopics);
              const attemptPct = pct(analytics.attempts, totalQuestions);
              const accuracyPct = pct(analytics.correct, analytics.attempts);

              return (
                <div key={subId}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">{meta.label}</span>
                    <span className="text-xs text-slate-500">
                      {analytics.attempts > 0
                        ? <>{analytics.correct}/{analytics.attempts} correct &nbsp;<span style={{ color: meta.color }}>{accuracyPct}%</span></>
                        : <span className="text-slate-600">no activity</span>
                      }
                    </span>
                  </div>

                  {/* Topics completed bar */}
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[11px] text-slate-500 w-28 shrink-0">Topics completed</span>
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${topicPct}%`, backgroundColor: meta.color }} />
                    </div>
                    <span className="text-[11px] text-slate-400 w-14 text-right shrink-0">{completedTopics}/{totalTopics}</span>
                  </div>

                  {/* Questions attempted bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-slate-500 w-28 shrink-0">Qs attempted</span>
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all opacity-60" style={{ width: `${attemptPct}%`, backgroundColor: meta.color }} />
                    </div>
                    <span className="text-[11px] text-slate-400 w-14 text-right shrink-0">{analytics.attempts}/{totalQuestions}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {totalAttempts30 === 0 && (
          <div className="mt-6 text-center py-8 text-slate-600">
            <p className="text-slate-500">No quiz activity recorded in the last 30 days.</p>
            <p className="text-slate-600 text-sm mt-1">Stats appear here as Ahmed answers questions.</p>
          </div>
        )}
      </div>
    </div>
  );
}
