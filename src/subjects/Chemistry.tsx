import { useState } from 'react';
import { useChemProgress } from '../hooks/useChemProgress';
import ChemTopicMap from '../components/ChemTopicMap';
import ChemLessonView from '../components/ChemLessonView';
import { getChemTopicById } from '../data/chemistryCurriculum';

interface Props {
  onBack: () => void;
}

export default function Chemistry({ onBack }: Props) {
  const { progress, markCompleted, resetProgress } = useChemProgress();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topic = activeTopic ? getChemTopicById(activeTopic) : null;

  if (topic) {
    return (
      <ChemLessonView
        topic={topic}
        alreadyCompleted={progress.completedTopics.includes(topic.id)}
        onComplete={(score) => markCompleted(topic.id, score)}
        onBack={() => setActiveTopic(null)}
      />
    );
  }

  return (
    <ChemTopicMap
      completedTopics={progress.completedTopics}
      scores={progress.scores}
      onSelect={setActiveTopic}
      onReset={resetProgress}
      onBackToHome={onBack}
    />
  );
}
