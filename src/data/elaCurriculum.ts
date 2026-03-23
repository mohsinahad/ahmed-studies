import type { Topic, Question } from './curriculum';

export const elaCurriculum: Topic[] = [
  // ── UNIT 1: GRAMMAR ──────────────────────────────────────────
  {
    id: 'parts-of-speech',
    unit: 1,
    title: 'Parts of Speech',
    grade: '6th',
    shortExplanation:
      'Every word in a sentence plays a role. Nouns name things, verbs show action, adjectives describe nouns, adverbs describe verbs, and pronouns replace nouns.',
    detailedExplanation: `**Parts of Speech**

Every word in the English language belongs to a category called a part of speech. There are 8 parts of speech:

**Noun** — names a person, place, thing, or idea. Examples: dog, London, happiness.

**Verb** — shows action or state of being. Examples: run, think, is.

**Adjective** — describes a noun. Examples: tall, red, exciting.

**Adverb** — describes a verb, adjective, or other adverb. Examples: quickly, very, often.

**Pronoun** — replaces a noun. Examples: he, she, they, it.

**Preposition** — shows relationship between words. Examples: in, on, under, between.

**Conjunction** — connects words or clauses. Examples: and, but, because, although.

**Interjection** — expresses emotion. Examples: Wow!, Oh!, Hey!

A single sentence can contain many parts of speech working together.`,
    simulationId: 'parts-of-speech-game',
    questions: [
      {
        id: 'parts-of-speech-q1',
        type: 'multiple-choice',
        text: 'What part of speech is the word "beautiful"?',
        options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        answer: 'Adjective',
        hint: 'Does it describe a noun?',
        explanation: '"Beautiful" describes a noun, making it an adjective.',
      },
      {
        id: 'parts-of-speech-q2',
        type: 'multiple-choice',
        text: 'In the sentence "She runs quickly", what part of speech is "quickly"?',
        options: ['Adjective', 'Verb', 'Noun', 'Adverb'],
        answer: 'Adverb',
        hint: 'What word does "quickly" describe?',
        explanation: '"Quickly" describes how she runs — it modifies a verb, so it is an adverb.',
      },
      {
        id: 'parts-of-speech-q3',
        type: 'multiple-choice',
        text: 'Which word is a conjunction in "I wanted to go, but it was raining"?',
        options: ['wanted', 'go', 'but', 'raining'],
        answer: 'but',
        hint: 'Which word connects two clauses?',
        explanation: '"But" connects two clauses — it is a coordinating conjunction.',
      },
      {
        id: 'parts-of-speech-q4',
        type: 'multiple-choice',
        text: 'What part of speech is "London" in "I visited London"?',
        options: ['Verb', 'Proper Noun', 'Adjective', 'Pronoun'],
        answer: 'Proper Noun',
        hint: 'Is it the name of a specific place?',
        explanation: '"London" is the name of a specific place — a proper noun.',
      },
    ] satisfies Question[],
  },
  {
    id: 'sentence-structure',
    unit: 1,
    title: 'Sentence Structure',
    grade: '6th',
    shortExplanation:
      'A sentence must have a subject and a verb. Simple sentences have one idea. Compound sentences join two ideas with a conjunction. Complex sentences use a dependent clause.',
    detailedExplanation: `**Sentence Structure**

There are four sentence types:

**Simple sentence** — one independent clause. Example: The dog barked.

**Compound sentence** — two independent clauses joined by a coordinating conjunction (for, and, nor, but, or, yet, so — FANBOYS). Example: The dog barked, and the cat ran away.

**Complex sentence** — one independent clause + one dependent clause joined by a subordinating conjunction (because, although, when, since, if). Example: Although it was raining, we went outside.

**Compound-complex sentence** — two independent clauses + at least one dependent clause. Example: Although it was raining, we went outside, and we got soaked.

Every sentence needs: 1) a subject (who/what), 2) a predicate (what they do/are).

Fragments are incomplete sentences missing a subject or verb. Run-on sentences join clauses without proper punctuation.`,
    simulationId: 'sentence-type-sorter',
    questions: [
      {
        id: 'sentence-structure-q1',
        type: 'multiple-choice',
        text: 'Which is a compound sentence?',
        options: [
          'The cat slept.',
          'Because she was tired, she slept.',
          'She was tired, so she slept.',
          'Sleeping all day.',
        ],
        answer: 'She was tired, so she slept.',
        hint: 'Look for two independent clauses joined by a coordinating conjunction.',
        explanation: 'Two independent clauses joined by "so" (a coordinating conjunction) makes it a compound sentence.',
      },
      {
        id: 'sentence-structure-q2',
        type: 'multiple-choice',
        text: 'What is missing from this sentence fragment: "Running through the park."?',
        options: ['A verb', 'A subject', 'An adjective', 'A conjunction'],
        answer: 'A subject',
        hint: 'We know someone is running, but who?',
        explanation: 'We know someone is running, but not WHO — the subject is missing.',
      },
      {
        id: 'sentence-structure-q3',
        type: 'multiple-choice',
        text: 'Which conjunction makes a complex sentence?',
        options: ['and', 'but', 'although', 'or'],
        answer: 'although',
        hint: 'Which word is a subordinating conjunction?',
        explanation: '"Although" is a subordinating conjunction that introduces a dependent clause, creating a complex sentence.',
      },
      {
        id: 'sentence-structure-q4',
        type: 'multiple-choice',
        text: 'Identify the subject in: "The tall girl kicked the ball."',
        options: ['tall', 'kicked', 'ball', 'The tall girl'],
        answer: 'The tall girl',
        hint: 'Who is performing the action?',
        explanation: 'The subject is who or what the sentence is about — "The tall girl" is performing the action.',
      },
    ] satisfies Question[],
  },

  // ── UNIT 2: LITERARY DEVICES ──────────────────────────────────────────
  {
    id: 'figurative-language',
    unit: 2,
    title: 'Figurative Language',
    grade: '7th',
    shortExplanation:
      'Figurative language uses words in imaginative ways to create vivid images and deeper meaning. Similes compare using "like" or "as". Metaphors say something IS something else. Personification gives human qualities to non-human things.',
    detailedExplanation: `**Figurative Language**

Figurative language goes beyond the literal meaning of words to create vivid images and deeper meaning.

**Simile** — comparison using "like" or "as". Example: Her smile was like sunshine.

**Metaphor** — says one thing IS another. Example: Life is a rollercoaster.

**Personification** — giving human traits to non-human things. Example: The wind whispered through the trees.

**Hyperbole** — extreme exaggeration for effect. Example: I've told you a million times!

**Alliteration** — repetition of the same starting consonant sound. Example: Peter Piper picked peppers.

**Onomatopoeia** — words that sound like what they describe. Example: buzz, crash, sizzle.

**Idiom** — a phrase with a meaning different from the literal words. Example: "It's raining cats and dogs" means heavy rain.

Why writers use figurative language: to make writing more vivid, emotional, and memorable.`,
    simulationId: 'figurative-lang-identifier',
    questions: [
      {
        id: 'figurative-language-q1',
        type: 'multiple-choice',
        text: '"The classroom was a zoo." This is an example of:',
        options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
        answer: 'Metaphor',
        hint: 'Is "like" or "as" used in the comparison?',
        explanation: 'It says the classroom IS a zoo (without using "like" or "as"), making it a metaphor.',
      },
      {
        id: 'figurative-language-q2',
        type: 'multiple-choice',
        text: '"The stars danced in the night sky." This is an example of:',
        options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
        answer: 'Personification',
        hint: 'Are stars being given a human action?',
        explanation: 'Stars cannot actually dance — giving them a human action is personification.',
      },
      {
        id: 'figurative-language-q3',
        type: 'multiple-choice',
        text: '"He was as fast as lightning." This is an example of:',
        options: ['Metaphor', 'Hyperbole', 'Simile', 'Idiom'],
        answer: 'Simile',
        hint: 'Look for "like" or "as" in the comparison.',
        explanation: 'The comparison uses "as...as", which is the simile structure.',
      },
      {
        id: 'figurative-language-q4',
        type: 'multiple-choice',
        text: '"I am so hungry I could eat a horse." This is an example of:',
        options: ['Simile', 'Personification', 'Metaphor', 'Hyperbole'],
        answer: 'Hyperbole',
        hint: 'Is this literally possible?',
        explanation: 'Nobody can actually eat a horse — this extreme exaggeration for effect is hyperbole.',
      },
    ] satisfies Question[],
  },
  {
    id: 'story-elements',
    unit: 2,
    title: 'Story Elements',
    grade: '7th',
    shortExplanation:
      'Every story has key building blocks — characters, setting, plot, conflict, and theme. Understanding these helps you analyse any story deeply.',
    detailedExplanation: `**Story Elements**

Every story has key building blocks:

**Character** — the people (or animals/creatures) in the story. Protagonist = main character. Antagonist = the one who opposes them. Characters can be flat (simple) or round (complex and realistic).

**Setting** — where and when the story takes place. Setting creates mood and context.

**Plot** — the sequence of events. The plot follows a structure: Exposition (introduction) → Rising Action → Climax (turning point) → Falling Action → Resolution.

**Conflict** — the central problem or struggle. Types: Person vs Person, Person vs Nature, Person vs Self, Person vs Society.

**Theme** — the central message or lesson of the story. Not the same as the topic. Topic: loyalty. Theme: True loyalty means standing by someone even when it is difficult.

**Point of View** — who is telling the story (first person: "I", third person: "he/she/they").`,
    simulationId: 'story-elements-explorer',
    questions: [
      {
        id: 'story-elements-q1',
        type: 'multiple-choice',
        text: 'What is the CLIMAX of a story?',
        options: [
          'The introduction of characters',
          'The final resolution',
          'The turning point of highest tension',
          'The setting description',
        ],
        answer: 'The turning point of highest tension',
        hint: 'When is the conflict at its most intense?',
        explanation: 'The climax is the most intense moment — the peak of the conflict before the story resolves.',
      },
      {
        id: 'story-elements-q2',
        type: 'multiple-choice',
        text: '"A boy struggles to forgive his friend who betrayed him." This conflict is:',
        options: ['Person vs Nature', 'Person vs Self', 'Person vs Society', 'Person vs Technology'],
        answer: 'Person vs Self',
        hint: 'Is the struggle internal or external?',
        explanation: 'The boy is wrestling with his own feelings and decisions — an internal conflict is Person vs Self.',
      },
      {
        id: 'story-elements-q3',
        type: 'multiple-choice',
        text: 'What is the difference between a topic and a theme?',
        options: [
          'They are the same thing',
          'A topic is a single word/phrase; a theme is the message or lesson',
          'A theme is shorter than a topic',
          'Topics are only in non-fiction',
        ],
        answer: 'A topic is a single word/phrase; a theme is the message or lesson',
        hint: 'Which one expresses a full idea or lesson?',
        explanation: 'Topic: friendship. Theme: True friendship requires honesty even when it hurts.',
      },
      {
        id: 'story-elements-q4',
        type: 'multiple-choice',
        text: 'Who is the antagonist in a story?',
        options: [
          'The narrator',
          'The main character',
          'The character who opposes the protagonist',
          'The author',
        ],
        answer: 'The character who opposes the protagonist',
        hint: 'Who creates conflict for the main character?',
        explanation: 'The antagonist creates conflict for the protagonist — they do not have to be evil, just in opposition.',
      },
    ] satisfies Question[],
  },

  // ── UNIT 3: READING ──────────────────────────────────────────
  {
    id: 'main-idea',
    unit: 3,
    title: 'Main Idea & Supporting Details',
    grade: '6th',
    shortExplanation:
      'The main idea is what a paragraph or passage is mostly about. Supporting details are the facts, examples, or reasons that back up the main idea.',
    detailedExplanation: `**Main Idea & Supporting Details**

**Main idea** — the central point of a paragraph or passage. It is often (but not always) in the topic sentence — usually the first or last sentence of a paragraph.

**Supporting details** — evidence, examples, facts, or explanations that develop the main idea.

How to find the main idea: ask "What is this paragraph MOSTLY about?" The main idea should be broad enough to cover all the details but specific enough to distinguish the paragraph.

**Implied main idea** — sometimes the main idea is not stated directly; you infer it from the details.

**Summary** vs **main idea**: the main idea is one sentence; a summary includes the main idea AND key supporting details.

Signal words for supporting details: "for example", "such as", "in addition", "also", "furthermore".`,
    simulationId: 'main-idea-builder',
    questions: [
      {
        id: 'main-idea-q1',
        type: 'multiple-choice',
        text: 'Where is the main idea most commonly found in a paragraph?',
        options: [
          'In the middle',
          'In every sentence',
          'In the topic sentence, often first or last',
          'Only in the title',
        ],
        answer: 'In the topic sentence, often first or last',
        hint: 'Which sentence usually introduces what the paragraph is about?',
        explanation: 'The topic sentence states the main idea and is most often the first sentence, sometimes the last.',
      },
      {
        id: 'main-idea-q2',
        type: 'multiple-choice',
        text: 'What is the purpose of supporting details?',
        options: [
          'To introduce new topics',
          'To confuse the reader',
          'To provide evidence and examples that back up the main idea',
          'To summarise the text',
        ],
        answer: 'To provide evidence and examples that back up the main idea',
        hint: 'What do details do for the main idea?',
        explanation: 'Supporting details develop the main idea with facts, examples, or explanations.',
      },
      {
        id: 'main-idea-q3',
        type: 'multiple-choice',
        text: 'A paragraph about lions describes their hunting habits, pride structure, and territory. What is the most likely main idea?',
        options: [
          'Lions are dangerous',
          'Lions have complex social and survival behaviours',
          'Africa has many animals',
          'Hunting is important',
        ],
        answer: 'Lions have complex social and survival behaviours',
        hint: 'Which answer covers all the details mentioned?',
        explanation: 'All the details — hunting, social structure, territory — relate to lion behaviour, so that is the main idea.',
      },
      {
        id: 'main-idea-q4',
        type: 'multiple-choice',
        text: 'What is the difference between a summary and a main idea?',
        options: [
          'They are identical',
          'A summary is shorter',
          'The main idea is one central point; a summary includes main idea plus key details',
          'A summary never includes the main idea',
        ],
        answer: 'The main idea is one central point; a summary includes main idea plus key details',
        hint: 'Which one is longer and more detailed?',
        explanation: 'Main idea: one sentence stating the central point. Summary: a short retelling that includes the main idea and the most important supporting details.',
      },
    ] satisfies Question[],
  },
  {
    id: 'point-of-view',
    unit: 3,
    title: 'Point of View',
    grade: '7th',
    shortExplanation:
      'Point of view is the perspective from which a story is told. First person uses "I". Second person uses "you". Third person uses "he/she/they" — and can be limited or omniscient.',
    detailedExplanation: `**Point of View**

Point of view (POV) is the perspective from which a story is told.

**First-person** — narrator is a character in the story. Uses: I, me, my, we. Advantage: feels personal and intimate. Limitation: reader only knows what the narrator knows/sees.

**Second-person** — addresses the reader as "you". Rare in fiction; common in instructions and choose-your-own-adventure stories.

**Third-person limited** — narrator is outside the story but follows ONE character's thoughts and feelings. Uses he/she/they. Most common in modern fiction.

**Third-person omniscient** — narrator knows everything about ALL characters' thoughts and feelings. "All-knowing" narrator.

**Unreliable narrator** — a narrator whose account may not be fully accurate or truthful (often first-person).

Point of view affects what information the reader receives and how they feel about characters. Changing the point of view changes the entire feel of a story.`,
    simulationId: 'pov-identifier',
    questions: [
      {
        id: 'point-of-view-q1',
        type: 'multiple-choice',
        text: '"I walked nervously to the front of the class." This is written in:',
        options: ['Second person', 'Third-person omniscient', 'First person', 'Third-person limited'],
        answer: 'First person',
        hint: 'What pronoun does the narrator use?',
        explanation: 'The use of "I" tells us the narrator is a character in the story — that is first person.',
      },
      {
        id: 'point-of-view-q2',
        type: 'multiple-choice',
        text: '"You open the door and see a dark corridor." This is written in:',
        options: ['First person', 'Second person', 'Third-person limited', 'Third-person omniscient'],
        answer: 'Second person',
        hint: 'Who is the narrator addressing?',
        explanation: '"You" directly addresses the reader — that is second person, common in choose-your-own-adventure stories.',
      },
      {
        id: 'point-of-view-q3',
        type: 'multiple-choice',
        text: 'A narrator knows the thoughts and feelings of ALL characters in the story. This is:',
        options: ['First person', 'Third-person limited', 'Third-person omniscient', 'Second person'],
        answer: 'Third-person omniscient',
        hint: 'Which POV gives the narrator unlimited knowledge?',
        explanation: '"Omniscient" means all-knowing. The narrator sees inside every character\'s mind.',
      },
      {
        id: 'point-of-view-q4',
        type: 'multiple-choice',
        text: 'What is the main LIMITATION of first-person narration?',
        options: [
          'It is too formal',
          'The reader only knows what the narrator knows and experiences',
          'It cannot describe action',
          'It uses too many pronouns',
        ],
        answer: 'The reader only knows what the narrator knows and experiences',
        hint: 'What can the narrator NOT tell us?',
        explanation: 'In first person, the narrator can only tell us what they personally see, hear, and feel — other characters remain a mystery.',
      },
    ] satisfies Question[],
  },

  // ── UNIT 4: WRITING ──────────────────────────────────────────
  {
    id: 'paragraph-structure',
    unit: 4,
    title: 'Paragraph Structure',
    grade: '6th',
    shortExplanation:
      'A well-written paragraph has three parts — a topic sentence that states the main idea, body sentences with evidence and explanation, and a concluding sentence that wraps up the idea.',
    detailedExplanation: `**Paragraph Structure**

A strong paragraph has three parts:

**Topic sentence** — the first sentence. States the main idea of the paragraph. Should be specific, not too broad.

**Body sentences** — the middle sentences. Provide evidence, examples, facts, or explanations. Often follow the PIE structure: Point → Illustration (example/quote) → Explanation.

**Concluding sentence** — the last sentence. Restates the main idea in new words or links to the next paragraph. Never introduce new ideas here.

**Coherence** — sentences should flow logically. Use transition words: "furthermore", "however", "in addition", "therefore", "as a result".

**Unity** — every sentence must relate to the topic sentence. Off-topic sentences break unity.

A strong paragraph = 5-8 sentences. Not too short (underdeveloped) and not too long (unfocused).`,
    simulationId: 'paragraph-builder',
    questions: [
      {
        id: 'paragraph-structure-q1',
        type: 'multiple-choice',
        text: 'What is the purpose of a topic sentence?',
        options: [
          'To end the paragraph',
          'To give examples',
          'To state the main idea of the paragraph',
          'To introduce a new topic',
        ],
        answer: 'To state the main idea of the paragraph',
        hint: 'What does the first sentence of a paragraph do?',
        explanation: 'The topic sentence is the first sentence — it tells the reader what the whole paragraph is about.',
      },
      {
        id: 'paragraph-structure-q2',
        type: 'multiple-choice',
        text: 'In the PIE structure for body sentences, what does "I" stand for?',
        options: ['Introduction', 'Illustration (example or evidence)', 'Idea', 'Importance'],
        answer: 'Illustration (example or evidence)',
        hint: 'PIE = Point, ?, Explanation',
        explanation: 'PIE = Point, Illustration, Explanation. The "I" means providing an example, quote, or evidence to support your point.',
      },
      {
        id: 'paragraph-structure-q3',
        type: 'multiple-choice',
        text: 'Which sentence does NOT belong in a paragraph about the benefits of exercise?',
        options: [
          'Exercise improves mood.',
          'Regular activity strengthens the heart.',
          'My favourite food is pizza.',
          'Exercise can help you sleep better.',
        ],
        answer: 'My favourite food is pizza.',
        hint: 'Which sentence is off-topic?',
        explanation: 'This sentence has nothing to do with exercise — it breaks the unity of the paragraph.',
      },
      {
        id: 'paragraph-structure-q4',
        type: 'multiple-choice',
        text: 'What should a concluding sentence do?',
        options: [
          'Introduce a new argument',
          'Copy the topic sentence word for word',
          'Restate the main idea in new words and wrap up the paragraph',
          'Ask a question',
        ],
        answer: 'Restate the main idea in new words and wrap up the paragraph',
        hint: 'How should a paragraph end?',
        explanation: 'The concluding sentence closes the paragraph by restating the main point — but in fresh language, not copying the topic sentence.',
      },
    ] satisfies Question[],
  },
  {
    id: 'essay-structure',
    unit: 4,
    title: 'Essay Structure',
    grade: '8th',
    shortExplanation:
      'An essay has three parts — an introduction that hooks the reader and states the thesis, body paragraphs that each develop one point, and a conclusion that ties everything together.',
    detailedExplanation: `**Essay Structure**

**Introduction paragraph**: Hook (grabbing opening — question, fact, quote, or anecdote) → Background context (2-3 sentences) → Thesis statement (your main argument — the most important sentence in the essay).

**Thesis statement** — one sentence that states your position/argument and the main points you will cover. A weak thesis: "Social media is bad." A strong thesis: "Social media negatively affects teenagers by reducing face-to-face interaction, increasing anxiety, and disrupting sleep."

**Body paragraphs** — usually 3. Each follows paragraph structure (topic sentence → evidence → analysis → concluding/transition sentence). Each paragraph develops ONE point from the thesis.

**Conclusion paragraph**: Restate thesis (in new words) → Summarise main points → Closing thought (wider implication or call to action). Never introduce new evidence in the conclusion.

**Transitions between paragraphs** — link ideas: "Building on this...", "However...", "Another key reason is..."`,
    simulationId: 'essay-map',
    questions: [
      {
        id: 'essay-structure-q1',
        type: 'multiple-choice',
        text: 'What is a thesis statement?',
        options: [
          'The title of the essay',
          'The hook sentence',
          'One sentence stating your main argument and key points',
          'The concluding sentence',
        ],
        answer: 'One sentence stating your main argument and key points',
        hint: 'What is the backbone of the essay?',
        explanation: 'The thesis is the backbone of the essay — it tells the reader exactly what you will argue and how.',
      },
      {
        id: 'essay-structure-q2',
        type: 'multiple-choice',
        text: 'How many main points does a standard body paragraph develop?',
        options: [
          'As many as possible',
          'One clear point, developed with evidence and analysis',
          'Two or three points briefly',
          'None — body paragraphs only have examples',
        ],
        answer: 'One clear point, developed with evidence and analysis',
        hint: 'Focus is key in body paragraphs.',
        explanation: 'Each body paragraph focuses on ONE point. Trying to cover multiple points in one paragraph leads to a weak, unfocused essay.',
      },
      {
        id: 'essay-structure-q3',
        type: 'multiple-choice',
        text: 'Which is the STRONGEST thesis statement?',
        options: [
          'My essay is about climate change.',
          'Climate change is a problem.',
          'Climate change threatens biodiversity, displaces communities, and demands urgent global policy action.',
          'I will discuss climate change in this essay.',
        ],
        answer: 'Climate change threatens biodiversity, displaces communities, and demands urgent global policy action.',
        hint: 'Which one takes a clear position and outlines specific points?',
        explanation: 'A strong thesis takes a clear position and outlines the specific points the essay will cover.',
      },
      {
        id: 'essay-structure-q4',
        type: 'multiple-choice',
        text: 'What should you NEVER do in a conclusion?',
        options: [
          'Restate the thesis in new words',
          'Summarise the main points',
          'Introduce brand new evidence or arguments',
          'End with a closing thought',
        ],
        answer: 'Introduce brand new evidence or arguments',
        hint: 'Where does new evidence belong?',
        explanation: 'The conclusion closes the essay — new evidence belongs in the body. Introducing it at the end leaves the reader with unanswered questions.',
      },
    ] satisfies Question[],
  },
];

export function getELATopicById(id: string): Topic | undefined {
  return elaCurriculum.find((t) => t.id === id);
}

export function isELATopicUnlocked(topicIndex: number, completedIds: string[]): boolean {
  if (topicIndex === 0) return true;
  const prev = elaCurriculum[topicIndex - 1];
  return completedIds.includes(prev.id);
}
