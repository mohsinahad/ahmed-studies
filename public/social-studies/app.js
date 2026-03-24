// ── State ────────────────────────────────────────────────────────────────────

let completed = JSON.parse(localStorage.getItem('ss-completed') || '{}');

let state = {
  screen: 'home',
  grade: null,
  subject: null,
  lessonIndex: 0,
  questionIndex: 0,
  score: 0,
  answered: false,
  selectedAnswer: null,
  answers: [],   // { correct: bool, userAnswer, correctAnswer }
  showReview: false
};

function setState(patch) {
  Object.assign(state, patch);
  render();
}

function saveCompleted(key) {
  completed[key] = true;
  localStorage.setItem('ss-completed', JSON.stringify(completed));
}

// ── Router helpers ────────────────────────────────────────────────────────────

function goHome()     { setState({ screen: 'home', grade: null, subject: null }); }
function goSubjects() { setState({ screen: 'subjects' }); }
function goLessons(subject) {
  setState({ screen: 'lessons', subject });
}
function goLesson(i) {
  setState({ screen: 'lesson', lessonIndex: i });
}
function goQuiz() {
  setState({
    screen: 'quiz',
    questionIndex: 0,
    score: 0,
    answered: false,
    selectedAnswer: null,
    answers: []
  });
}
function goResults() {
  const key = `${state.grade}-${state.subject}-${state.lessonIndex}`;
  saveCompleted(key);
  setState({ screen: 'results', showReview: false });
}
function goReview() { setState({ showReview: true }); render(); }

// ── Data accessors ────────────────────────────────────────────────────────────

function currentLessons() {
  return CURRICULUM[state.grade][state.subject].lessons;
}
function currentLesson() {
  return currentLessons()[state.lessonIndex];
}
function currentQuestion() {
  return currentLesson().quiz[state.questionIndex];
}
function isCompleted(lessonIndex) {
  return !!completed[`${state.grade}-${state.subject}-${lessonIndex}`];
}

// ── SVG icons ─────────────────────────────────────────────────────────────────

function iconScroll() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
}
function iconGlobe() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`;
}
function iconChart() {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
}
function iconCheck() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
}
function iconArrow() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;
}
function iconBack() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`;
}

// ── Render functions ──────────────────────────────────────────────────────────

function renderHome() {
  return `
    <div class="app-header">
      <h1>Social Studies</h1>
      <p>World History · Geography · Economics</p>
    </div>
    <div class="section-head">
      <h2>Choose your grade</h2>
      <p>Content is tailored to your grade level</p>
    </div>
    <div class="grade-grid">
      ${[6,7,8].map(g => `
        <button class="grade-card" data-action="grade" data-grade="${g}">
          <div class="num">${g}</div>
          <div class="lbl">Grade ${g}</div>
        </button>
      `).join('')}
    </div>
  `;
}

function renderSubjects() {
  const subjects = [
    { key: 'history',   icon: iconScroll(), label: 'World History',  desc: 'Ancient civilizations to modern times' },
    { key: 'geography', icon: iconGlobe(),  label: 'Geography',      desc: 'Maps, landforms, and peoples of Earth' },
    { key: 'economics', icon: iconChart(),  label: 'Economics',      desc: 'Markets, trade, money, and systems'   },
  ];
  return `
    <button class="back-btn" data-action="home">${iconBack()} Home</button>
    <div class="breadcrumb">Grade <b>${state.grade}</b></div>
    <div class="section-head">
      <h2>Choose a subject</h2>
      <p>Pick any subject to start learning</p>
    </div>
    <div class="subject-grid">
      ${subjects.map(s => `
        <button class="subject-card ${s.key}" data-action="subject" data-subject="${s.key}">
          <div class="s-icon">${s.icon}</div>
          <h3>${s.label}</h3>
          <p>${s.desc}</p>
        </button>
      `).join('')}
    </div>
  `;
}

function renderLessons() {
  const lessons = currentLessons();
  const subjectLabel = CURRICULUM[state.grade][state.subject].label;
  return `
    <button class="back-btn" data-action="subjects">${iconBack()} Subjects</button>
    <div class="breadcrumb">Grade <b>${state.grade}</b> · <b>${subjectLabel}</b></div>
    <div class="section-head">
      <h2>${subjectLabel}</h2>
      <p>${lessons.length} lessons</p>
    </div>
    <div class="lesson-list">
      ${lessons.map((l, i) => {
        const done = isCompleted(i);
        return `
          <button class="lesson-item" data-action="lesson" data-index="${i}">
            <div class="lesson-num ${state.subject}-num">${i + 1}</div>
            <div class="lesson-info">
              <h3>${l.title}</h3>
              <p>${l.subtitle}</p>
            </div>
            ${done ? `<span class="lesson-badge">${iconCheck()} Done</span>` : ''}
            <span class="lesson-arrow">${iconArrow()}</span>
          </button>
        `;
      }).join('')}
    </div>
  `;
}

function renderLesson() {
  const lesson = currentLesson();
  const subjectLabel = CURRICULUM[state.grade][state.subject].label;
  return `
    <button class="back-btn" data-action="lessons">${iconBack()} ${subjectLabel}</button>
    <div class="breadcrumb">Grade <b>${state.grade}</b> · <b>${subjectLabel}</b></div>
    <div class="lesson-illus">${lesson.illustration}</div>
    <div class="lesson-body">
      <h2>${lesson.title}</h2>
      <div class="lesson-subtitle">${lesson.subtitle}</div>
      ${lesson.content.map(p => `<p>${p}</p>`).join('')}
      <div class="fact-box"><strong>Did you know?</strong>${lesson.fact}</div>
    </div>
    <div class="btn-row">
      <button class="btn btn-primary" data-action="quiz">Take the Quiz &rarr;</button>
    </div>
  `;
}

function renderQuiz() {
  const lesson = currentLesson();
  const q = currentQuestion();
  const total = lesson.quiz.length;
  const qi = state.questionIndex;

  const dots = lesson.quiz.map((_, i) => {
    let cls = '';
    if (i < qi) cls = state.answers[i]?.correct ? 'correct' : 'wrong';
    else if (i === qi) cls = 'active';
    return `<div class="qp-dot ${cls}"></div>`;
  }).join('');

  let questionHtml = '';
  if (q.type === 'mc') {
    const letters = ['A', 'B', 'C', 'D'];
    questionHtml = `
      <div class="mc-options">
        ${q.options.map((opt, i) => {
          let cls = '';
          if (state.answered) {
            if (i === q.answer) cls = 'correct';
            else if (i === state.selectedAnswer && i !== q.answer) cls = 'wrong';
          }
          return `<button class="mc-opt ${cls}" data-action="mc-answer" data-index="${i}" ${state.answered ? 'disabled' : ''}>
            <span class="opt-letter">${letters[i]}</span>${opt}
          </button>`;
        }).join('')}
      </div>
    `;
  } else if (q.type === 'tf') {
    const userAns = state.selectedAnswer; // true/false string or null
    questionHtml = `
      <div class="tf-options">
        ${[true, false].map(val => {
          let cls = '';
          if (state.answered) {
            if (val === q.answer) cls = 'correct';
            else if (userAns === val && val !== q.answer) cls = 'wrong';
          }
          return `<button class="tf-opt ${cls}" data-action="tf-answer" data-value="${val}" ${state.answered ? 'disabled' : ''}>
            ${val ? 'True' : 'False'}
          </button>`;
        }).join('')}
      </div>
    `;
  } else if (q.type === 'fb') {
    questionHtml = `
      <div class="fb-form">
        <input class="fb-input ${state.answered ? (state.answers[qi]?.correct ? 'correct' : 'wrong') : ''}"
          type="text" id="fb-input" placeholder="Type your answer..."
          value="${state.answered ? (document.getElementById('fb-input')?.value || '') : ''}"
          ${state.answered ? 'disabled' : ''} />
        ${!state.answered ? `<button class="btn btn-primary" data-action="fb-submit">Check</button>` : ''}
      </div>
      <div class="fb-hint">Hint: ${q.hint}</div>
    `;
  }

  const feedbackHtml = state.answered ? `
    <div class="feedback ${state.answers[qi]?.correct ? 'correct' : 'wrong'}">
      ${state.answers[qi]?.correct
        ? `<strong>Correct!</strong> ${q.explanation}`
        : `<strong>Not quite.</strong> The answer is <em>${Array.isArray(q.answer) ? q.options[q.answer] : (q.answer === true ? 'True' : q.answer === false ? 'False' : q.answer)}</em>. ${q.explanation}`}
    </div>
  ` : '';

  const nextLabel = qi + 1 < total ? 'Next Question &rarr;' : 'See Results &rarr;';

  return `
    <button class="back-btn" data-action="lesson">${iconBack()} Back to Lesson</button>
    <div class="quiz-header">
      <span class="quiz-label">Quiz · ${currentLesson().title}</span>
      <span class="quiz-counter">Question ${qi + 1} of ${total}</span>
    </div>
    <div class="quiz-progress">${dots}</div>
    <div class="question-card">
      <span class="q-type-badge">${q.type === 'mc' ? 'Multiple Choice' : q.type === 'tf' ? 'True / False' : 'Fill in the Blank'}</span>
      <div class="q-text">${q.q}</div>
      ${questionHtml}
      ${feedbackHtml}
      ${state.answered ? `<div class="btn-row"><button class="btn btn-primary" data-action="next">${nextLabel}</button></div>` : ''}
    </div>
  `;
}

function renderResults() {
  const total = currentLesson().quiz.length;
  const pct = Math.round((state.score / total) * 100);
  let ringCls = pct >= 75 ? 'great' : pct >= 50 ? 'ok' : 'low';
  let msg = pct === 100 ? 'Perfect score!' : pct >= 75 ? 'Great work!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';
  let sub = pct === 100
    ? 'You aced every question.'
    : pct >= 75
    ? 'You have a strong grasp of this lesson.'
    : pct >= 50
    ? 'Re-read the lesson and try again.'
    : 'Go back and review the lesson carefully.';

  let reviewHtml = '';
  if (state.showReview) {
    const lesson = currentLesson();
    reviewHtml = `
      <div class="review-list">
        ${state.answers.map((a, i) => {
          const q = lesson.quiz[i];
          let displayAnswer = '';
          if (q.type === 'mc') displayAnswer = q.options[q.answer];
          else if (q.type === 'tf') displayAnswer = q.answer ? 'True' : 'False';
          else displayAnswer = q.answer;
          return `
            <div class="review-item ${a.correct ? 'correct' : 'wrong'}">
              <div class="review-q">${i + 1}. ${q.q}</div>
              <div class="review-ans">
                ${a.correct
                  ? `<span class="ca">Your answer: ${a.userAnswer} ✓</span>`
                  : `<span class="wa">Your answer: ${a.userAnswer || '(blank)'}</span> &nbsp; <span class="ca">Correct: ${displayAnswer}</span>`}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  return `
    <div class="results-card">
      <div class="score-ring ${ringCls}">
        <div class="score-num">${state.score}</div>
        <div class="score-of">of ${total}</div>
      </div>
      <div class="results-title">${msg}</div>
      <div class="results-subtitle">${sub}</div>
      <div class="results-btns">
        <button class="btn btn-secondary" data-action="review">Review Answers</button>
        <button class="btn btn-secondary" data-action="retry">Try Again</button>
        <button class="btn btn-primary"   data-action="lessons">More Lessons</button>
      </div>
    </div>
    ${reviewHtml}
  `;
}

// ── Event handling ─────────────────────────────────────────────────────────────

function attachHandlers() {
  document.querySelectorAll('[data-action]').forEach(el => {
    el.addEventListener('click', handleAction);
  });

  // FB submit on Enter
  const fbInput = document.getElementById('fb-input');
  if (fbInput && !state.answered) {
    fbInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') submitFB();
    });
    fbInput.focus();
  }
}

function handleAction(e) {
  const el = e.currentTarget;
  const action = el.dataset.action;

  if (action === 'home')     goHome();
  else if (action === 'subjects') goSubjects();
  else if (action === 'lessons')  goLessons(state.subject);
  else if (action === 'lesson')   goLesson(el.dataset.index !== undefined ? parseInt(el.dataset.index) : state.lessonIndex);
  else if (action === 'quiz')     goQuiz();
  else if (action === 'grade') {
    state.grade = parseInt(el.dataset.grade);
    goSubjects();
  }
  else if (action === 'subject') {
    goLessons(el.dataset.subject);
  }
  else if (action === 'mc-answer') {
    if (state.answered) return;
    const chosen = parseInt(el.dataset.index);
    const q = currentQuestion();
    const correct = chosen === q.answer;
    state.answers[state.questionIndex] = {
      correct,
      userAnswer: q.options[chosen],
      correctAnswer: q.options[q.answer]
    };
    setState({
      answered: true,
      selectedAnswer: chosen,
      score: correct ? state.score + 1 : state.score
    });
  }
  else if (action === 'tf-answer') {
    if (state.answered) return;
    const val = el.dataset.value === 'true';
    const q = currentQuestion();
    const correct = val === q.answer;
    state.answers[state.questionIndex] = {
      correct,
      userAnswer: val ? 'True' : 'False',
      correctAnswer: q.answer ? 'True' : 'False'
    };
    setState({
      answered: true,
      selectedAnswer: val,
      score: correct ? state.score + 1 : state.score
    });
  }
  else if (action === 'fb-submit') {
    submitFB();
  }
  else if (action === 'next') {
    const next = state.questionIndex + 1;
    if (next < currentLesson().quiz.length) {
      setState({ questionIndex: next, answered: false, selectedAnswer: null });
    } else {
      goResults();
    }
  }
  else if (action === 'retry') {
    goQuiz();
  }
  else if (action === 'review') {
    goReview();
  }
}


function submitFB() {
  const input = document.getElementById('fb-input');
  if (!input) return;
  const raw = input.value.trim().toLowerCase();
  const q = currentQuestion();
  const accepted = Array.isArray(q.answer)
    ? q.answer.map(a => a.toLowerCase())
    : [q.answer.toLowerCase()];
  const correct = accepted.some(a => raw === a || raw.includes(a) || a.includes(raw));
  state.answers[state.questionIndex] = {
    correct,
    userAnswer: input.value.trim() || '(no answer)',
    correctAnswer: Array.isArray(q.answer) ? q.answer[0] : q.answer
  };
  setState({
    answered: true,
    score: correct ? state.score + 1 : state.score
  });
}

// ── Bootstrap ──────────────────────────────────────────────────────────────────

function render() {
  const app = document.getElementById('app');
  switch (state.screen) {
    case 'home':     app.innerHTML = renderHome();     break;
    case 'subjects': app.innerHTML = renderSubjects(); break;
    case 'lessons':  app.innerHTML = renderLessons();  break;
    case 'lesson':   app.innerHTML = renderLesson();   break;
    case 'quiz':     app.innerHTML = renderQuiz();     break;
    case 'results':  app.innerHTML = renderResults();  break;
  }
  attachHandlers();
}

render();
