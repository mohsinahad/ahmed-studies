import { useState } from 'react';
import { useIslamicStudiesProgress } from '../hooks/useIslamicStudiesProgress';
import IslamicStudiesTopicMap from '../components/IslamicStudiesTopicMap';
import IslamicStudiesLessonView from '../components/IslamicStudiesLessonView';
import SeerahTimeline from '../components/SeerahTimeline';
import { getIslamicStudiesTopicById } from '../data/islamicStudiesCurriculum';

interface Props {
  onBack: () => void;
}

export default function IslamicStudies({ onBack }: Props) {
  const { progress, markCompleted, resetProgress } = useIslamicStudiesProgress();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [showTimeline, setShowTimeline] = useState(false);

  if (showTimeline) {
    return <SeerahTimeline onBack={() => setShowTimeline(false)} />;
  }

  const topic = activeTopic ? getIslamicStudiesTopicById(activeTopic) : null;

  if (topic) {
    return (
      <IslamicStudiesLessonView
        topic={topic}
        alreadyCompleted={progress.completedTopics.includes(topic.id)}
        onComplete={(score) => markCompleted(topic.id, score)}
        onBack={() => setActiveTopic(null)}
      />
    );
  }

  return (
    <IslamicStudiesTopicMap
      completedTopics={progress.completedTopics}
      scores={progress.scores}
      onSelect={setActiveTopic}
      onReset={resetProgress}
      onBackToHome={onBack}
      onOpenTimeline={() => setShowTimeline(true)}
    />
  );
}
