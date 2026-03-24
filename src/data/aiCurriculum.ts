import type { Topic } from './curriculum';

export const aiCurriculum: Topic[] = [
  // ── UNIT 1: UNDERSTANDING AI ──────────────────────────────────────────
  {
    id: 'what-is-ai',
    unit: 1,
    title: 'What is AI?',
    grade: '6th',
    shortExplanation:
      'AI stands for Artificial Intelligence. It is software that can do tasks that normally require human thinking — like recognising faces, understanding speech, or recommending videos.',
    detailedExplanation: `**What is Artificial Intelligence?**

**AI (Artificial Intelligence)** is software that can perform tasks that normally require human thinking and judgement.

**Examples of AI in daily life:**
- **Autocomplete on phones** — your phone guesses the next word as you type
- **Netflix and YouTube recommendations** — they study what you watch and suggest similar content
- **Voice assistants** — Siri and Google Assistant understand your spoken words and reply
- **Spam filters** — your email reads incoming messages and decides if they look like junk
- **Face unlock** — your phone scans your face and matches it against a saved pattern
- **Google Maps** — predicts traffic by learning from millions of drivers' journeys

**How is AI different from normal software?**

Normal software follows fixed rules written by a programmer. It always does exactly what it is told — no more, no less. A calculator will always add 2 + 2 = 4 because it was told to.

AI learns from data. Instead of being given rules, it is shown thousands or millions of examples and figures out the patterns itself. This means it can improve over time and handle situations its programmers never specifically planned for.

**Breaking down the name:**
- **"Artificial"** means man-made — created by humans, not natural
- **"Intelligence"** means the ability to learn, understand, and solve problems`,
    simulationId: 'ai-examples',
    questions: [
      {
        id: 'what-is-ai-q1',
        type: 'multiple-choice',
        text: 'Which of these is an example of AI?',
        options: [
          'A calculator adding numbers',
          'Netflix recommending a show you might like',
          'A light switch turning on',
          'A clock showing the time',
        ],
        answer: 'Netflix recommending a show you might like',
        hint: 'Which one learns from your behaviour to make decisions?',
        explanation: 'Netflix uses AI to study what you watch and suggest similar shows.',
      },
      {
        id: 'what-is-ai-q2',
        type: 'multiple-choice',
        text: 'What does "Artificial" in Artificial Intelligence mean?',
        options: ['Very smart', 'Man-made', 'Natural', 'Fast'],
        answer: 'Man-made',
        hint: 'Think about the opposite of "natural".',
        explanation: '"Artificial" means made by humans, not natural.',
      },
      {
        id: 'what-is-ai-q3',
        type: 'multiple-choice',
        text: 'How is AI different from a normal calculator?',
        options: [
          'AI is faster',
          'AI learns from data and improves; a calculator just follows fixed rules',
          'A calculator is smarter',
          'They are exactly the same',
        ],
        answer: 'AI learns from data and improves; a calculator just follows fixed rules',
        hint: 'Think about which one can get better over time.',
        explanation:
          'AI improves by learning from examples. A calculator always does exactly what it is programmed to do — nothing more.',
      },
      {
        id: 'what-is-ai-q4',
        type: 'multiple-choice',
        text: 'Which of these is NOT an example of AI?',
        options: [
          'Voice assistant answering a question',
          'Spam filter blocking junk email',
          'A basic alarm clock ringing at 7am',
          'Face recognition unlocking a phone',
        ],
        answer: 'A basic alarm clock ringing at 7am',
        hint: 'Which one does not learn or make decisions — it just counts time?',
        explanation:
          'A simple alarm clock just counts time and rings — it does not learn or make decisions. That is not AI.',
      },
    ],
  },
  {
    id: 'how-ai-learns',
    unit: 1,
    title: 'How AI Learns',
    grade: '6th',
    shortExplanation:
      'AI learns by looking at thousands of examples, finding patterns, and using those patterns to make predictions. The more examples it sees, the better it gets.',
    detailedExplanation: `**How does AI learn?**

**Training data** is the collection of examples an AI learns from. Just as a student learns from textbooks and practice problems, AI learns from data.

**Pattern recognition** is the core of how AI works. AI looks through huge amounts of data and spots what things have in common — repeated similarities called patterns.

**The dog recognition analogy:**

Imagine teaching a child to recognise a dog. You show them many pictures: golden retrievers, poodles, huskies, chihuahuas. You also show them pictures that are NOT dogs — cats, birds, cars. Over time, the child learns what features make something a dog.

AI does exactly the same thing — but with millions of examples instead of a few.

**What is an AI "model"?**

After training, the AI has learned the patterns. This trained AI is called a **model**. The model can now take new, unseen examples and make predictions based on what it learned.

**Garbage in, garbage out:**

If the training data is bad or limited, the AI model will be bad too. An AI trained only on pictures of golden retrievers might fail to recognise a chihuahua as a dog. Quality and variety of training data matters enormously.

**Important:** AI does not "think" like humans. It finds statistical patterns — it spots that certain features appear together frequently — it does not truly understand the world.`,
    simulationId: 'pattern-game',
    questions: [
      {
        id: 'how-ai-learns-q1',
        type: 'multiple-choice',
        text: 'What do we call the examples used to teach an AI?',
        options: ['Instructions', 'Training data', 'Commands', 'Rules'],
        answer: 'Training data',
        hint: 'Think about what you call the data used during the training process.',
        explanation: 'Training data is the collection of examples an AI learns from.',
      },
      {
        id: 'how-ai-learns-q2',
        type: 'multiple-choice',
        text: 'An AI trained only on pictures of cats will struggle to recognise dogs. Why?',
        options: [
          'It ran out of battery',
          'It did not see enough examples of dogs during training',
          'Dogs are too complex',
          'AI cannot see images',
        ],
        answer: 'It did not see enough examples of dogs during training',
        hint: 'AI can only recognise what it has been shown.',
        explanation:
          'AI can only recognise what it has learned from. If dogs were not in the training data, it will not know what a dog looks like.',
      },
      {
        id: 'how-ai-learns-q3',
        type: 'multiple-choice',
        text: 'What is a pattern in the context of AI?',
        options: [
          'A decorative design',
          'A repeated rule or similarity found in data',
          'A type of robot',
          'A programming language',
        ],
        answer: 'A repeated rule or similarity found in data',
        hint: 'Think about what AI is actually looking for when it studies examples.',
        explanation: 'AI finds patterns — repeated similarities — in data to make predictions.',
      },
      {
        id: 'how-ai-learns-q4',
        type: 'multiple-choice',
        text: 'What is an AI "model"?',
        options: [
          'A 3D printed robot',
          'The AI after it has been trained on data',
          'The training data itself',
          'The screen that shows AI results',
        ],
        answer: 'The AI after it has been trained on data',
        hint: 'What do you call the finished result after training is complete?',
        explanation:
          'A model is what you get after training — it has learned the patterns and can now make predictions.',
      },
    ],
  },

  // ── UNIT 2: PROMPTING ──────────────────────────────────────────
  {
    id: 'what-is-a-prompt',
    unit: 2,
    title: 'What is a Prompt?',
    grade: '7th',
    shortExplanation:
      'A prompt is what you type to an AI to tell it what you want. The AI reads your prompt and generates a response. Think of it as giving instructions to a very smart assistant.',
    detailedExplanation: `**What is a prompt?**

A **prompt** is your input — the message or instruction you type to give an AI. The AI reads your prompt and generates a **response** (its output).

**The flow:** Input (your prompt) → AI → Output (the response)

**Examples of simple prompts:**
- "Write a poem about the sea"
- "Explain gravity simply"
- "Give me 5 ideas for a birthday party"
- "Summarise this paragraph in 3 bullet points"

**The AI can only work with what you give it:**

AI responds based ONLY on what you tell it in the prompt, plus what it learned during training. It cannot read your mind or know your situation unless you explain it.

**More information = more useful response:**

The more detail and context you put in your prompt, the better the AI can tailor its response to exactly what you need.

**Context matters:**

Useful context to include in a prompt:
- **Who you are** — "I am a Year 7 student..."
- **What you need** — "...I need help understanding..."
- **What format you want** — "...Please give me a bullet-point list..."`,
    simulationId: 'prompt-flow',
    questions: [
      {
        id: 'what-is-a-prompt-q1',
        type: 'multiple-choice',
        text: 'What is a prompt?',
        options: [
          'The AI response',
          'What you type to tell the AI what you want',
          'The AI training data',
          'The speed of the AI',
        ],
        answer: 'What you type to tell the AI what you want',
        hint: 'A prompt is your input to the AI.',
        explanation: 'A prompt is your input — the message or instruction you give to the AI.',
      },
      {
        id: 'what-is-a-prompt-q2',
        type: 'multiple-choice',
        text: 'You ask an AI "Tell me about space." It gives a very long, unfocused answer. What was the problem?',
        options: [
          'The AI was broken',
          'The prompt was too vague — it needed more detail',
          'Space is too complex for AI',
          'You needed to pay for a better AI',
        ],
        answer: 'The prompt was too vague — it needed more detail',
        hint: 'Think about how specific your question was.',
        explanation:
          'Vague prompts get vague answers. "Tell me about black holes in simple terms for a 12-year-old" would get a much better response.',
      },
      {
        id: 'what-is-a-prompt-q3',
        type: 'multiple-choice',
        text: 'What does AI base its response on?',
        options: [
          'What it thinks you secretly want',
          'Guessing randomly',
          'Only the information in your prompt and its training',
          'Your previous conversations always',
        ],
        answer: 'Only the information in your prompt and its training',
        hint: 'AI cannot see anything you have not told it.',
        explanation:
          'AI cannot read your mind. It can only work with what you write in the prompt and what it learned during training.',
      },
      {
        id: 'what-is-a-prompt-q4',
        type: 'multiple-choice',
        text: 'Which of these is a prompt?',
        options: [
          'The loading screen of an app',
          'Typing "Summarise this paragraph in 3 bullet points" into an AI chatbot',
          'The AI response that appears on screen',
          'The internet connection',
        ],
        answer: 'Typing "Summarise this paragraph in 3 bullet points" into an AI chatbot',
        hint: 'A prompt is the instruction you give — not the result.',
        explanation:
          'A prompt is the instruction or question you give to the AI — like "Summarise this paragraph in 3 bullet points".',
      },
    ],
  },
  {
    id: 'good-vs-bad-prompts',
    unit: 2,
    title: 'Good vs Bad Prompts',
    grade: '7th',
    shortExplanation:
      'A good prompt is clear, specific, and gives the AI enough context. A bad prompt is vague, too short, or missing important details. Better prompts = better answers.',
    detailedExplanation: `**What makes a prompt weak?**

- Too vague — "Write something about animals" could mean anything
- No context — the AI does not know who you are or why you need the answer
- No format specified — should it be a list? A paragraph? Short or long?

**What makes a prompt strong?**

Compare these:
- **BAD:** "Write something about animals"
- **GOOD:** "Write a fun 3-sentence fact about elephants for a 12-year-old"

The good prompt specifies the topic (elephants), the format (3 sentences), the style (fun), and the audience (12-year-old).

**The 4 key ingredients of a strong prompt:**

**1. Task** — What do you want the AI to do?
(Write, explain, summarise, list, translate...)

**2. Context** — Why do you need it? Who is it for?
(I am a Year 7 student / This is for a school project / I am revising for an exam...)

**3. Format** — How should the answer look?
(Bullet points / Short paragraph / Step by step / Under 100 words...)

**4. Constraints** — Any limits?
(Keep it simple / Avoid technical terms / Use examples...)

You do not need all 4 in every prompt — but more detail generally means a better result.`,
    simulationId: 'prompt-compare',
    questions: [
      {
        id: 'good-vs-bad-prompts-q1',
        type: 'multiple-choice',
        text: 'Which is the BETTER prompt?',
        options: [
          'Write about history',
          'Write a short paragraph about the causes of World War 1 for a Year 8 student',
        ],
        answer: 'Write a short paragraph about the causes of World War 1 for a Year 8 student',
        hint: 'Which one gives the AI more to work with?',
        explanation:
          'The second prompt specifies the topic (WW1 causes), format (short paragraph), and audience (Year 8) — giving the AI exactly what it needs.',
      },
      {
        id: 'good-vs-bad-prompts-q2',
        type: 'multiple-choice',
        text: 'What is missing from this prompt: "Help me with my essay"?',
        options: [
          'Nothing — it is a perfect prompt',
          'The topic, what kind of help, and what stage the essay is at',
          'The word please',
          'The name of the student',
        ],
        answer: 'The topic, what kind of help, and what stage the essay is at',
        hint: 'What does the AI not know from this prompt?',
        explanation:
          'The AI does not know what your essay is about, whether you need ideas, structure, grammar help, or something else. More context = better help.',
      },
      {
        id: 'good-vs-bad-prompts-q3',
        type: 'multiple-choice',
        text: 'Which part of a prompt tells the AI WHO it is for or WHY you need it?',
        options: ['Task', 'Context', 'Format', 'Constraint'],
        answer: 'Context',
        hint: 'Think about what gives the AI background information about your situation.',
        explanation:
          'Context explains the situation — for example "I am a 13-year-old student" or "This is for a school project." It helps the AI tailor its response.',
      },
      {
        id: 'good-vs-bad-prompts-q4',
        type: 'multiple-choice',
        text: 'Ahmed types: "Explain photosynthesis simply, in 3 bullet points, for a Year 7 student." What has he done well?',
        options: [
          'Nothing — the prompt is too long',
          'He has given a task, a format, and context about the audience',
          'He should have asked in a different language',
          'The prompt has too many constraints',
        ],
        answer: 'He has given a task, a format, and context about the audience',
        hint: 'Count how many of the 4 key ingredients he included.',
        explanation:
          'Great prompt! Task (explain photosynthesis), format (3 bullet points), and context (Year 7 student) — the AI has everything it needs.',
      },
    ],
  },
];

export function getAITopicById(id: string): Topic | undefined {
  return aiCurriculum.find((t) => t.id === id);
}

export function isAITopicUnlocked(_topicIndex: number, _completedIds: string[]): boolean {
  return true;
}
