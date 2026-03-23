import { useState } from 'react';
import { useAIProgress } from '../hooks/useAIProgress';
import AITopicMap from '../components/AITopicMap';
import AILessonView from '../components/AILessonView';
import { getAITopicById } from '../data/aiCurriculum';

interface Props {
  onBack: () => void;
}

export default function AI({ onBack }: Props) {
  const { progress, markCompleted, resetProgress } = useAIProgress();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topic = activeTopic ? getAITopicById(activeTopic) : null;

  if (topic) {
    return (
      <AILessonView
        topic={topic}
        alreadyCompleted={progress.completedTopics.includes(topic.id)}
        onComplete={(score) => markCompleted(topic.id, score)}
        onBack={() => setActiveTopic(null)}
      />
    );
  }

  return (
    <AITopicMap
      completedTopics={progress.completedTopics}
      scores={progress.scores}
      onSelect={setActiveTopic}
      onReset={resetProgress}
      onBackToHome={onBack}
    />
  );
}
