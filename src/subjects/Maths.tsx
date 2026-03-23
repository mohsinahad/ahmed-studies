import { useState } from 'react';
import { useMathsProgress } from '../hooks/useMathsProgress';
import MathsTopicMap from '../components/MathsTopicMap';
import MathsLessonView from '../components/MathsLessonView';
import { getMathsTopicById } from '../data/mathsCurriculum';

interface Props {
  onBack: () => void;
}

export default function Maths({ onBack }: Props) {
  const { progress, markCompleted, resetProgress } = useMathsProgress();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topic = activeTopic ? getMathsTopicById(activeTopic) : null;

  if (topic) {
    return (
      <MathsLessonView
        topic={topic}
        alreadyCompleted={progress.completedTopics.includes(topic.id)}
        onComplete={(score) => markCompleted(topic.id, score)}
        onBack={() => setActiveTopic(null)}
      />
    );
  }

  return (
    <MathsTopicMap
      completedTopics={progress.completedTopics}
      scores={progress.scores}
      onSelect={setActiveTopic}
      onReset={resetProgress}
      onBackToHome={onBack}
    />
  );
}
