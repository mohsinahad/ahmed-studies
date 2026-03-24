import type { Topic, Question } from './curriculum';

export const mathsCurriculum: Topic[] = [
  // ── UNIT 1: NUMBER & ALGEBRA ──────────────────────────────────────────
  {
    id: 'geometry',
    unit: 1,
    title: 'Geometry',
    grade: '6th',
    shortExplanation:
      'Geometry is the study of shapes, sizes, and properties of figures. Explore angles, area, perimeter, and more through the interactive geometry explorer.',
    detailedExplanation: `**Geometry**

Geometry covers basic geometry concepts — points, lines, angles (acute < 90°, right = 90°, obtuse 90–180°), triangles (equilateral, isosceles, scalene), quadrilaterals (square, rectangle, parallelogram, trapezoid), area formulas (rectangle: l×w, triangle: ½bh, circle: πr²), perimeter, and the Pythagorean theorem (a² + b² = c² for right triangles). The interactive explorer below lets you experiment with shapes and their properties.`,
    simulationId: 'geometry-embed',
    questions: [
      {
        id: 'geometry-q1',
        type: 'multiple-choice',
        text: 'What is the area of a rectangle with length 8 and width 5?',
        options: ['13', '40', '26', '80'],
        answer: '40',
        hint: 'Area = length × width.',
        explanation: 'Area of rectangle = length × width = 8 × 5 = 40 square units.',
      },
      {
        id: 'geometry-q2',
        type: 'multiple-choice',
        text: 'A triangle has a base of 6 and a height of 4. What is its area?',
        options: ['24', '12', '10', '48'],
        answer: '12',
        hint: 'Area of triangle = ½ × base × height.',
        explanation: 'Area of triangle = ½ × base × height = ½ × 6 × 4 = 12 square units.',
      },
      {
        id: 'geometry-q3',
        type: 'multiple-choice',
        text: 'What type of angle is 135°?',
        options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
        answer: 'Obtuse',
        hint: 'Obtuse angles are between 90° and 180°.',
        explanation: 'An obtuse angle is between 90° and 180°. 135° falls in this range.',
      },
      {
        id: 'geometry-q4',
        type: 'multiple-choice',
        text: 'In a right triangle, if a=3 and b=4, what is c (the hypotenuse)?',
        options: ['5', '7', '6', '12'],
        answer: '5',
        hint: 'Use the Pythagorean theorem: a² + b² = c².',
        explanation: 'a² + b² = c² → 9 + 16 = 25 → c = 5. This is the famous 3-4-5 Pythagorean triple.',
      },
      {
        id: 'geometry-q5',
        type: 'multiple-choice',
        text: 'What is the perimeter of a square with side length 7?',
        options: ['14', '28', '49', '21'],
        answer: '28',
        hint: 'Perimeter of a square = 4 × side.',
        explanation: 'Perimeter of a square = 4 × side = 4 × 7 = 28 units.',
      },
      {
        id: 'geometry-q6',
        type: 'multiple-choice',
        text: 'How many degrees are in the interior angles of any triangle?',
        options: ['90°', '270°', '360°', '180°'],
        answer: '180°',
        hint: 'This is a fundamental property of all triangles.',
        explanation: 'The three interior angles of any triangle always add up to exactly 180°.',
      },
    ] satisfies Question[],
  },
  {
    id: 'absolute-values',
    unit: 1,
    title: 'Absolute Values',
    grade: '7th',
    shortExplanation:
      'The absolute value of a number is its distance from zero on a number line. It is always zero or positive — never negative. Written as |x|, it ignores the direction (positive or negative) and only cares about size.',
    detailedExplanation: `**What is absolute value?**
The absolute value of a number is how far it is from zero on the number line, regardless of direction.
|−7| = 7 (seven steps from zero)
|7| = 7 (also seven steps from zero)
|0| = 0 (zero is already at zero)

**Key rule:** Absolute value is ALWAYS zero or positive.

**Notation:** Written with vertical bars: |−5| is read as "the absolute value of negative five."

**Why it matters:**
Real-world situations use absolute value whenever direction doesn't matter but size does.
- A submarine at −200 metres: the depth is |−200| = 200 metres.
- A temperature of −15°C: the magnitude is |−15| = 15 degrees.
- Profit and loss: a loss of £50 has a magnitude of |−50| = £50.

**Operations with absolute value:**
Evaluate the absolute value FIRST, then do the arithmetic.
|−8| + |3| = 8 + 3 = 11
|−10| − |4| = 10 − 4 = 6
|−6| × |−2| = 6 × 2 = 12

**Solving |x| = n:**
If |x| = 5, then x = 5 OR x = −5. There are always TWO solutions (unless n = 0, where x = 0 is the only solution).

**Absolute value on a number line:**
Think of absolute value as distance. Distance is always positive — you can't travel a negative distance.`,
    simulationId: 'absolute-value-sim',
    questions: [
      {
        id: 'abs-q1',
        type: 'numeric',
        text: 'Evaluate: |−18| − |−5| + |3|',
        answer: 16,
        unit: '',
        tolerance: 0,
        hint: 'Resolve each absolute value first: |−18|=18, |−5|=5, |3|=3. Then compute left to right.',
        explanation: '|−18| = 18, |−5| = 5, |3| = 3. So 18 − 5 + 3 = 16.',
      },
      {
        id: 'abs-q2',
        type: 'multiple-choice',
        text: 'Which expression has the greatest value?',
        options: ['|−25|', '|18| + |−4|', '|−10| × |2|', '|30| − |−8|'],
        answer: '|−25|',
        hint: 'Evaluate each option: |−25|=25, 18+4=22, 10×2=20, 30−8=22. Which is largest?',
        explanation: '|−25|=25, |18|+|−4|=22, |−10|×|2|=20, |30|−|−8|=22. |−25|=25 is the greatest.',
      },
      {
        id: 'abs-q3',
        type: 'numeric',
        text: 'If |x| = 11, what is the sum of all possible values of x?',
        answer: 0,
        unit: '',
        tolerance: 0,
        hint: '|x| = 11 gives two solutions. What do they add up to?',
        explanation: '|x| = 11 means x = 11 or x = −11. The sum is 11 + (−11) = 0.',
      },
      {
        id: 'abs-q4',
        type: 'multiple-choice',
        text: 'A stock price changes by −$14 on Monday and +$9 on Tuesday. What is the total magnitude of change (sum of absolute values)?',
        options: ['$5', '$14', '$23', '$−5'],
        answer: '$23',
        hint: 'Magnitude means absolute value — ignore the signs, then add.',
        explanation: '|−14| + |9| = 14 + 9 = 23. Total magnitude of price movement is $23.',
      },
      {
        id: 'abs-q5',
        type: 'numeric',
        text: 'Evaluate: 3 × |−4| − |−6| ÷ 2',
        answer: 9,
        unit: '',
        tolerance: 0,
        hint: 'Resolve absolute values first, then follow BIDMAS: multiply and divide before subtract.',
        explanation: '3 × |−4| − |−6| ÷ 2 = 3×4 − 6÷2 = 12 − 3 = 9.',
      },
      {
        id: 'abs-q6',
        type: 'multiple-choice',
        text: 'Point A is at −7 and point B is at 4 on a number line. What is the distance between them?',
        options: ['3', '11', '−3', '−11'],
        answer: '11',
        hint: 'Distance = |A − B| or |B − A|. Subtract the coordinates and take the absolute value.',
        explanation: 'Distance = |−7 − 4| = |−11| = 11. Or |4 − (−7)| = |11| = 11.',
      },
      {
        id: 'abs-q7',
        type: 'multiple-choice',
        text: 'Which values of x satisfy |x − 3| = 5?',
        options: ['x = 8 only', 'x = −2 only', 'x = 8 or x = −2', 'x = 2 or x = −8'],
        answer: 'x = 8 or x = −2',
        hint: '|x − 3| = 5 means x − 3 = 5 OR x − 3 = −5. Solve both.',
        explanation: 'x − 3 = 5 → x = 8. x − 3 = −5 → x = −2. Both satisfy |x − 3| = 5.',
      },
      {
        id: 'abs-q8',
        type: 'numeric',
        text: 'A submarine descends to −240 m, then rises 85 m, then descends again 60 m. What is the absolute value of the submarine\'s final depth?',
        answer: 215,
        unit: 'm',
        tolerance: 0,
        hint: 'Track the depth step by step: start at −240, add +85, then add −60. Take the absolute value at the end.',
        explanation: '−240 + 85 = −155. −155 − 60 = −215. The absolute value of the final depth is |−215| = 215 m.',
      },
      {
        id: 'abs-q9',
        type: 'multiple-choice',
        text: 'Which inequality is equivalent to |x| < 6?',
        options: ['x < 6', 'x > −6', '−6 < x < 6', 'x < −6 or x > 6'],
        answer: '−6 < x < 6',
        hint: '|x| < 6 means x is within 6 units of zero in both directions.',
        explanation: '|x| < 6 means the distance from zero is less than 6, so −6 < x < 6.',
      },
      {
        id: 'abs-q10',
        type: 'numeric',
        text: 'Two friends live on the same street. Ahmed is at position −8 and his friend is at position 14. If they walk towards each other and meet exactly halfway, what is the absolute value of the meeting point?',
        answer: 3,
        unit: '',
        tolerance: 0,
        hint: 'Midpoint = (a + b) ÷ 2. Then take the absolute value of that result.',
        explanation: 'Midpoint = (−8 + 14) ÷ 2 = 6 ÷ 2 = 3. The meeting point is at 3, and |3| = 3.',
      },
    ] satisfies Question[],
  },
  {
    id: 'algebra',
    unit: 1,
    title: 'Algebra',
    grade: '7th',
    shortExplanation:
      'Algebra uses letters (called variables) to represent unknown numbers. By following the golden rule — do the same thing to both sides — you can solve equations and find what the variable equals.',
    detailedExplanation: `**What is Algebra?**
Algebra is a branch of maths where we use letters like x, y, or n to stand for unknown numbers. An equation is a statement that two things are equal, like x + 5 = 12.

**The Golden Rule of Algebra:**
Whatever you do to one side of the equation, you MUST do to the other side. This keeps the equation balanced — like a set of scales.

**Solving one-step equations:**
x + 5 = 12 → Subtract 5 from both sides → x = 7
3x = 21 → Divide both sides by 3 → x = 7
x ÷ 3 = 4 → Multiply both sides by 3 → x = 12

**Solving two-step equations:**
Work backwards through the order of operations — undo addition/subtraction first, then multiplication/division.
2x + 4 = 14 → Subtract 4: 2x = 10 → Divide by 2: x = 5
5x − 3 = 22 → Add 3: 5x = 25 → Divide by 5: x = 5

**Checking your answer:**
Always substitute your answer back into the original equation.
If x = 7 and the equation was x + 5 = 12: 7 + 5 = 12 ✓

**Why does algebra matter?**
Algebra is the language of problem-solving. Scientists, engineers, and programmers use it every day to model real situations and find unknown values.`,
    simulationId: 'algebra-sim',
    questions: [
      {
        id: 'algebra-q1',
        type: 'numeric',
        text: 'Solve: x + 8 = 15',
        answer: 7,
        unit: '',
        tolerance: 0,
        hint: 'Subtract 8 from both sides.',
        explanation: 'x + 8 = 15 → Subtract 8: x = 15 − 8 = 7.',
      },
      {
        id: 'algebra-q2',
        type: 'numeric',
        text: 'Solve: x − 4 = 9',
        answer: 13,
        unit: '',
        tolerance: 0,
        hint: 'Add 4 to both sides.',
        explanation: 'x − 4 = 9 → Add 4: x = 9 + 4 = 13.',
      },
      {
        id: 'algebra-q3',
        type: 'numeric',
        text: 'Solve: 5x = 35',
        answer: 7,
        unit: '',
        tolerance: 0,
        hint: 'Divide both sides by 5.',
        explanation: '5x = 35 → Divide by 5: x = 35 ÷ 5 = 7.',
      },
      {
        id: 'algebra-q4',
        type: 'numeric',
        text: 'Solve: x ÷ 4 = 6',
        answer: 24,
        unit: '',
        tolerance: 0,
        hint: 'Multiply both sides by 4.',
        explanation: 'x ÷ 4 = 6 → Multiply by 4: x = 6 × 4 = 24.',
      },
      {
        id: 'algebra-q5',
        type: 'numeric',
        text: 'Solve: 2x + 3 = 11',
        answer: 4,
        unit: '',
        tolerance: 0,
        hint: 'First subtract 3 from both sides, then divide by 2.',
        explanation: '2x + 3 = 11 → Subtract 3: 2x = 8 → Divide by 2: x = 4.',
      },
      {
        id: 'algebra-q6',
        type: 'numeric',
        text: 'Solve: 3x − 6 = 12',
        answer: 6,
        unit: '',
        tolerance: 0,
        hint: 'First add 6, then divide by 3.',
        explanation: '3x − 6 = 12 → Add 6: 3x = 18 → Divide by 3: x = 6.',
      },
      {
        id: 'algebra-q7',
        type: 'multiple-choice',
        text: 'What is the "golden rule" of algebra?',
        options: [
          'Add the same number to both sides only',
          'Whatever you do to one side, do the same to the other',
          'Always divide before you subtract',
          'Move all numbers to the left side',
        ],
        answer: 'Whatever you do to one side, do the same to the other',
        hint: 'Think about keeping an equation balanced like a set of scales.',
        explanation: 'The golden rule keeps the equation balanced — both sides must always stay equal.',
      },
      {
        id: 'algebra-q8',
        type: 'multiple-choice',
        text: 'You solve x + 7 = 20 and get x = 13. How do you check this is correct?',
        options: [
          'Divide 20 by 7',
          'Substitute 13 back: 13 + 7 = 20 ✓',
          'Subtract 13 from 7',
          'You cannot check algebra answers',
        ],
        answer: 'Substitute 13 back: 13 + 7 = 20 ✓',
        hint: 'Replace x with your answer and see if both sides are equal.',
        explanation: 'Substituting x = 13: 13 + 7 = 20 ✓. Both sides match, so the answer is correct.',
      },
      {
        id: 'algebra-q9',
        type: 'numeric',
        text: 'Solve: 4x + 1 = 17',
        answer: 4,
        unit: '',
        tolerance: 0,
        hint: 'Subtract 1 first, then divide by 4.',
        explanation: '4x + 1 = 17 → Subtract 1: 4x = 16 → Divide by 4: x = 4.',
      },
      {
        id: 'algebra-q10',
        type: 'multiple-choice',
        text: 'In algebra, what does a variable (like x) represent?',
        options: [
          'A multiplication symbol',
          'An unknown number we want to find',
          'The answer to any equation',
          'A very large number',
        ],
        answer: 'An unknown number we want to find',
        hint: 'Think about what we are trying to solve for.',
        explanation: 'A variable is a letter that stands for an unknown number. Solving the equation means finding what number the variable equals.',
      },
    ] satisfies Question[],
  },
];

export function getMathsTopicById(id: string): Topic | undefined {
  return mathsCurriculum.find((t) => t.id === id);
}

export function isMathsTopicUnlocked(_topicIndex: number, _completedIds: string[]): boolean {
  return true;
}
