import { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import TopicMap from '../components/TopicMap';
import LessonView from '../components/LessonView';
import { getTopicById } from '../data/curriculum';

interface Props {
  onBack: () => void;
}

export default function Physics({ onBack }: Props) {
  const { progress, markCompleted, resetProgress } = useProgress();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topic = activeTopic ? getTopicById(activeTopic) : null;

  if (topic) {
    return (
      <LessonView
        topic={topic}
        alreadyCompleted={progress.completedTopics.includes(topic.id)}
        onComplete={(score) => markCompleted(topic.id, score)}
        onBack={() => setActiveTopic(null)}
      />
    );
  }

  return (
    <TopicMap
      completedTopics={progress.completedTopics}
      scores={progress.scores}
      onSelect={setActiveTopic}
      onReset={resetProgress}
      onBackToHome={onBack}
    />
  );
}
