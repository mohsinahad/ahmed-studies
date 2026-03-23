import { useState, useEffect } from 'react';

interface Progress {
  completedTopics: string[];
  scores: Record<string, number>;
}

const STORAGE_KEY = 'chem-progress';

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedTopics: [], scores: {} };
}

function saveProgress(p: Progress): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function useChemProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  function markCompleted(topicId: string, score: number) {
    setProgress((prev) => ({
      completedTopics: prev.completedTopics.includes(topicId)
        ? prev.completedTopics
        : [...prev.completedTopics, topicId],
      scores: { ...prev.scores, [topicId]: Math.max(prev.scores[topicId] ?? 0, score) },
    }));
  }

  function resetProgress() {
    setProgress({ completedTopics: [], scores: {} });
  }

  return { progress, markCompleted, resetProgress };
}
