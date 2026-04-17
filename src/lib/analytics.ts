const STORAGE_KEY = 'ahmed-analytics';

interface SubjectStats {
  attempts: number;
  correct: number;
}

interface DayStats {
  date: string;
  attempts: number;
  correct: number;
  subjects: Record<string, SubjectStats>;
}

type AnalyticsData = DayStats[];

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function load(): AnalyticsData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as AnalyticsData;
  } catch {}
  return [];
}

function save(data: AnalyticsData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getOrCreateToday(data: AnalyticsData): { data: AnalyticsData; idx: number } {
  const date = today();
  const idx = data.findIndex((d) => d.date === date);
  if (idx !== -1) return { data, idx };
  const updated = [...data, { date, attempts: 0, correct: 0, subjects: {} }];
  return { data: updated, idx: updated.length - 1 };
}

export function trackQuestionAttempt(subjectId: string, correct: boolean): void {
  let data = load();
  const { data: updated, idx } = getOrCreateToday(data);
  data = updated;
  const day = { ...data[idx] };
  day.attempts += 1;
  day.correct += correct ? 1 : 0;
  const sub = day.subjects[subjectId] ?? { attempts: 0, correct: 0 };
  day.subjects = {
    ...day.subjects,
    [subjectId]: { attempts: sub.attempts + 1, correct: sub.correct + (correct ? 1 : 0) },
  };
  data = [...data];
  data[idx] = day;
  save(data);
}

export function getAnalyticsData(): AnalyticsData {
  return load();
}

export function getTodayStats(): DayStats {
  const data = load();
  const date = today();
  return data.find((d) => d.date === date) ?? { date, attempts: 0, correct: 0, subjects: {} };
}

export function getLast30Days(): DayStats[] {
  const data = load();
  const result: DayStats[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const date = d.toISOString().slice(0, 10);
    result.push(data.find((s) => s.date === date) ?? { date, attempts: 0, correct: 0, subjects: {} });
  }
  return result;
}
