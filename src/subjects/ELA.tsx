import { useState } from 'react';
import { useELAProgress } from '../hooks/useELAProgress';
import ELATopicMap from '../components/ELATopicMap';
import ELALessonView from '../components/ELALessonView';
import { getELATopicById } from '../data/elaCurriculum';

interface Props {
  onBack: () => void;
}

export default function ELA({ onBack }: Props) {
  const { progress, markCompleted, resetProgress } = useELAProgress();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topic = activeTopic ? getELATopicById(activeTopic) : null;

  if (topic) {
    return (
      <ELALessonView
        topic={topic}
        alreadyCompleted={progress.completedTopics.includes(topic.id)}
        onComplete={(score) => markCompleted(topic.id, score)}
        onBack={() => setActiveTopic(null)}
      />
    );
  }

  return (
    <ELATopicMap
      completedTopics={progress.completedTopics}
      scores={progress.scores}
      onSelect={setActiveTopic}
      onReset={resetProgress}
      onBackToHome={onBack}
    />
  );
}
