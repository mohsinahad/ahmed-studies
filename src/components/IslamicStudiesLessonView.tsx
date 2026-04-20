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

interface ParsedLine {
  type: 'header' | 'bullet' | 'blank' | 'kalima-header' | 'arabic' | 'trans' | 'meaning' | 'separator' | 'text';
  content: string;
}

function parseLine(line: string): ParsedLine {
  if (line.startsWith('KALIMA::')) return { type: 'kalima-header', content: line.slice(8).trim() };
  if (line.startsWith('ARABIC::')) return { type: 'arabic', content: line.slice(8).trim() };
  if (line.startsWith('TRANS::')) return { type: 'trans', content: line.slice(7).trim() };
  if (line.startsWith('MEANING::')) return { type: 'meaning', content: line.slice(9).trim() };
  if (line.startsWith('**') && line.endsWith('**')) return { type: 'header', content: line.replace(/\*\*/g, '') };
  if (line.startsWith('- ')) return { type: 'bullet', content: line.slice(2) };
  if (line.trim() === '' || line === '──────────────────────────────────────────') return { type: 'blank', content: '' };
  return { type: 'text', content: line };
}

function parseBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') ? <strong key={i} className="text-white">{part.replace(/\*\*/g, '')}</strong> : part
  );
}

function renderParsedLine(pl: ParsedLine, i: number) {
  switch (pl.type) {
    case 'blank':
      return <div key={i} className="h-3" />;
    case 'header':
      return <h3 key={i} className="text-white font-bold text-base mt-5 mb-2">{pl.content}</h3>;
    case 'bullet':
      return <li key={i} className="text-slate-300 ml-4 list-disc leading-relaxed">{parseBold(pl.content)}</li>;
    case 'kalima-header':
      return (
        <div key={i} className="mt-6 mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            {pl.content}
          </span>
        </div>
      );
    case 'arabic':
      return (
        <div key={i} className="my-4 bg-slate-900/70 border border-emerald-500/30 rounded-2xl p-6 text-center">
          <p
            dir="rtl"
            lang="ar"
            className="text-2xl leading-loose text-emerald-100 font-arabic"
            style={{ fontFamily: '"Amiri", "Scheherazade New", "Noto Naskh Arabic", serif', lineHeight: '2.2' }}
          >
            {pl.content}
          </p>
        </div>
      );
    case 'trans':
      return (
        <p key={i} className="text-center text-sm italic text-amber-300/80 mb-1 px-4">
          {pl.content}
        </p>
      );
    case 'meaning':
      return (
        <div key={i} className="bg-slate-800/50 border-l-2 border-emerald-500/50 rounded-r-lg px-4 py-3 mb-4">
          <p className="text-xs text-emerald-400 font-semibold mb-1 uppercase tracking-wide">Meaning</p>
          <p className="text-slate-200 text-sm leading-relaxed italic">{pl.content}</p>
        </div>
      );
    case 'text':
    default:
      return <p key={i} className="text-slate-300 leading-relaxed">{parseBold(pl.content)}</p>;
  }
}

export default function IslamicStudiesLessonView({ topic, onComplete, onBack }: Props) {
  const [tab, setTab] = useState<Tab>('lesson');

  const lines = topic.detailedExplanation.split('\n');
  const parsed = lines.map(parseLine);

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <button
          onClick={onBack}
          className="text-xs text-slate-500 hover:text-slate-300 mb-4 flex items-center gap-1 transition"
        >
          ← Back to Topics
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-white">{topic.title}</h1>
            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded">{topic.grade}</span>
          </div>
          <p className="text-slate-400 text-sm">{topic.shortExplanation}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(['lesson', 'quiz'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                tab === t
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
              }`}
            >
              {t === 'lesson' ? 'Lesson' : `Quiz (${topic.questions.length} questions)`}
            </button>
          ))}
        </div>

        {tab === 'lesson' && (
          <div className="space-y-0">
            {parsed.map((pl, i) => renderParsedLine(pl, i))}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={() => setTab('quiz')}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition"
              >
                Take the Quiz →
              </button>
            </div>
          </div>
        )}

        {tab === 'quiz' && (
          <Quiz
            topic={topic}
            onComplete={onComplete}
            subjectId="islamic-studies"
          />
        )}
      </div>
    </div>
  );
}
