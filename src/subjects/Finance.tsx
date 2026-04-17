import { useState } from 'react';
import { useFinanceProgress } from '../hooks/useFinanceProgress';
import FinanceTopicMap from '../components/FinanceTopicMap';
import FinanceLessonView from '../components/FinanceLessonView';
import { getFinanceTopicById } from '../data/financeCurriculum';

interface Props {
  onBack: () => void;
}

export default function Finance({ onBack }: Props) {
  const { progress, markCompleted, resetProgress } = useFinanceProgress();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const topic = activeTopic ? getFinanceTopicById(activeTopic) : null;

  if (topic) {
    return (
      <FinanceLessonView
        topic={topic}
        alreadyCompleted={progress.completedTopics.includes(topic.id)}
        onComplete={(score) => markCompleted(topic.id, score)}
        onBack={() => setActiveTopic(null)}
      />
    );
  }

  return (
    <FinanceTopicMap
      completedTopics={progress.completedTopics}
      scores={progress.scores}
      onSelect={setActiveTopic}
      onReset={resetProgress}
      onBackToHome={onBack}
    />
  );
}
