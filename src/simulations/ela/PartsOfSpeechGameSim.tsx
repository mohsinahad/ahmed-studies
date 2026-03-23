import { useState } from 'react';

interface WordData {
  word: string;
  pos: string;
}

interface SentenceData {
  words: WordData[];
  display: string;
}

const sentences: SentenceData[] = [
  {
    display: 'The brown dog runs quickly.',
    words: [
      { word: 'The', pos: 'Adjective' },
      { word: 'brown', pos: 'Adjective' },
      { word: 'dog', pos: 'Noun' },
      { word: 'runs', pos: 'Verb' },
      { word: 'quickly', pos: 'Adverb' },
    ],
  },
  {
    display: 'She jumped over the fence.',
    words: [
      { word: 'She', pos: 'Pronoun' },
      { word: 'jumped', pos: 'Verb' },
      { word: 'over', pos: 'Preposition' },
      { word: 'the', pos: 'Adjective' },
      { word: 'fence', pos: 'Noun' },
    ],
  },
  {
    display: 'Wow! He sings beautifully and plays guitar.',
    words: [
      { word: 'Wow', pos: 'Interjection' },
      { word: 'He', pos: 'Pronoun' },
      { word: 'sings', pos: 'Verb' },
      { word: 'beautifully', pos: 'Adverb' },
      { word: 'and', pos: 'Conjunction' },
      { word: 'plays', pos: 'Verb' },
      { word: 'guitar', pos: 'Noun' },
    ],
  },
];

const posOptions = ['Noun', 'Verb', 'Adjective', 'Adverb', 'Pronoun', 'Preposition', 'Conjunction', 'Interjection'];

type WordState = 'idle' | 'correct' | 'wrong';

export default function PartsOfSpeechGameSim() {
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [selectedWord, setSelectedWord] = useState<number | null>(null);
  const [wordStates, setWordStates] = useState<WordState[]>(
    Array(sentences[0].words.length).fill('idle')
  );
  const [wrongAnswers, setWrongAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [finished, setFinished] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const sentence = sentences[sentenceIdx];
  const allAnswered = wordStates.every((s) => s !== 'idle');

  function handleWordClick(idx: number) {
    if (wordStates[idx] !== 'idle') return;
    setSelectedWord(idx);
  }

  function handlePosSelect(pos: string) {
    if (selectedWord === null) return;
    const correct = sentence.words[selectedWord].pos;
    const isCorrect = pos === correct;
    const newStates = [...wordStates];
    newStates[selectedWord] = isCorrect ? 'correct' : 'wrong';
    setWordStates(newStates);
    if (!isCorrect) {
      setWrongAnswers((prev) => ({ ...prev, [selectedWord]: correct }));
    }
    setScore((s) => s + (isCorrect ? 1 : 0));
    setTotalAnswered((t) => t + 1);
    setSelectedWord(null);
  }

  function handleNext() {
    const next = sentenceIdx + 1;
    if (next >= sentences.length) {
      setAllDone(true);
    } else {
      setSentenceIdx(next);
      setWordStates(Array(sentences[next].words.length).fill('idle'));
      setSelectedWord(null);
      setWrongAnswers({});
      setFinished(false);
    }
  }

  function handleFinishSentence() {
    setFinished(true);
  }

  function handleRestart() {
    setSentenceIdx(0);
    setWordStates(Array(sentences[0].words.length).fill('idle'));
    setSelectedWord(null);
    setWrongAnswers({});
    setScore(0);
    setTotalAnswered(0);
    setFinished(false);
    setAllDone(false);
  }

  if (allDone) {
    return (
      <div className="text-center space-y-4 py-6">
        <div className="text-4xl font-bold text-rose-400">{score}/{totalAnswered}</div>
        <p className="text-white font-semibold text-lg">Challenge complete!</p>
        <p className="text-slate-400 text-sm">You identified {score} out of {totalAnswered} parts of speech correctly.</p>
        <button
          onClick={handleRestart}
          className="px-6 py-2 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          Sentence {sentenceIdx + 1} of {sentences.length}
        </span>
        <span className="text-xs text-rose-400 font-semibold">Score: {score}/{totalAnswered}</span>
      </div>

      <div className="bg-slate-800 rounded-xl p-4">
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Click a word to identify its part of speech</p>
        <div className="flex flex-wrap gap-2">
          {sentence.words.map((w, idx) => {
            const state = wordStates[idx];
            const isSelected = selectedWord === idx;
            return (
              <button
                key={idx}
                onClick={() => handleWordClick(idx)}
                disabled={state !== 'idle'}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition border
                  ${state === 'correct'
                    ? 'bg-green-500/20 border-green-500 text-green-400 cursor-default'
                    : state === 'wrong'
                    ? 'bg-red-500/20 border-red-500 text-red-400 cursor-default'
                    : isSelected
                    ? 'bg-rose-500/30 border-rose-400 text-rose-300'
                    : 'bg-slate-700 border-slate-600 text-white hover:border-rose-400 cursor-pointer'
                  }
                `}
              >
                {w.word}
                {state === 'correct' && ' ✓'}
                {state === 'wrong' && ` ✗`}
              </button>
            );
          })}
        </div>

        {/* Show correct answers for wrong */}
        {Object.keys(wrongAnswers).length > 0 && (
          <div className="mt-3 space-y-1">
            {Object.entries(wrongAnswers).map(([idx, correct]) => (
              <p key={idx} className="text-xs text-slate-400">
                <span className="text-red-400 font-medium">"{sentence.words[Number(idx)].word}"</span> is a <span className="text-green-400 font-medium">{correct}</span>
              </p>
            ))}
          </div>
        )}
      </div>

      {selectedWord !== null && (
        <div className="bg-slate-900 border border-rose-500/30 rounded-xl p-4">
          <p className="text-sm text-slate-400 mb-3">
            What part of speech is <span className="text-rose-400 font-bold">"{sentence.words[selectedWord].word}"</span>?
          </p>
          <div className="grid grid-cols-2 gap-2">
            {posOptions.map((pos) => (
              <button
                key={pos}
                onClick={() => handlePosSelect(pos)}
                className="px-3 py-2 bg-slate-800 hover:bg-rose-500/20 border border-slate-600 hover:border-rose-400 text-white text-sm rounded-lg transition"
              >
                {pos}
              </button>
            ))}
          </div>
        </div>
      )}

      {allAnswered && !finished && (
        <button
          onClick={handleFinishSentence}
          className="w-full py-2.5 bg-rose-500/20 border border-rose-500/40 text-rose-400 rounded-xl font-semibold hover:bg-rose-500/30 transition"
        >
          See Results →
        </button>
      )}

      {finished && (
        <div className="space-y-3">
          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <p className="text-slate-400 text-sm">Sentence score</p>
            <p className="text-2xl font-bold text-white mt-1">
              {wordStates.filter((s) => s === 'correct').length}/{sentence.words.length}
            </p>
          </div>
          <button
            onClick={handleNext}
            className="w-full py-2.5 bg-rose-500 hover:bg-rose-400 text-white rounded-xl font-semibold transition"
          >
            {sentenceIdx + 1 < sentences.length ? 'Next Sentence →' : 'See Final Score →'}
          </button>
        </div>
      )}
    </div>
  );
}
