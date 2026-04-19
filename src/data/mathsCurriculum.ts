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
    detailedExplanation: `**Geometry — Middle School Advanced**

**Angles**
- Acute: < 90° | Right: = 90° | Obtuse: 90°–180° | Straight: 180° | Reflex: 180°–360°
- Complementary angles sum to 90°; supplementary angles sum to 180°.
- Vertical angles (formed by two intersecting lines) are always equal.
- Alternate interior angles are equal when a transversal crosses parallel lines.
- Co-interior (same-side interior) angles are supplementary when lines are parallel.

**Triangles**
- Interior angles always sum to 180°.
- Exterior angle = sum of the two non-adjacent interior angles.
- Types by sides: equilateral (all equal), isosceles (two equal), scalene (none equal).
- Types by angles: acute (all < 90°), right (one = 90°), obtuse (one > 90°).
- Area = ½ × base × height.

**Pythagorean Theorem** (right triangles only)
a² + b² = c²  where c is the hypotenuse (longest side, opposite the right angle).
Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.
Converse: if a² + b² = c², the triangle is a right triangle.

**Quadrilaterals** — interior angles always sum to 360°.
- Square: 4 equal sides, 4 right angles. Area = s². Perimeter = 4s.
- Rectangle: opposite sides equal, 4 right angles. Area = lw. Perimeter = 2(l+w).
- Parallelogram: opposite sides parallel and equal. Area = base × height.
- Trapezoid: exactly one pair of parallel sides. Area = ½(b₁ + b₂) × h.
- Rhombus: 4 equal sides. Area = ½ × d₁ × d₂ (diagonals).

**Circles**
- Circumference = 2πr = πd.
- Area = πr².
- A diameter is twice the radius.
- Arc length = (central angle / 360°) × 2πr.
- Sector area = (central angle / 360°) × πr².

**3D Figures**
- Rectangular prism: Volume = l×w×h. Surface Area = 2(lw + lh + wh).
- Cylinder: Volume = πr²h. Surface Area = 2πr² + 2πrh.
- Cone: Volume = ⅓πr²h.
- Sphere: Volume = (4/3)πr³. Surface Area = 4πr².
- Pyramid (rectangular base): Volume = ⅓ × base area × height.

**Coordinate Geometry**
- Distance between (x₁,y₁) and (x₂,y₂): d = √[(x₂−x₁)² + (y₂−y₁)²].
- Midpoint = ((x₁+x₂)/2 , (y₁+y₂)/2).
- Slope = (y₂−y₁)/(x₂−x₁). Parallel lines have equal slopes; perpendicular lines have slopes that are negative reciprocals.

**Transformations**
- Translation: slides a figure (x+a, y+b).
- Reflection: flips across a line (e.g., over x-axis: (x,y)→(x,−y)).
- Rotation: turns around a point.
- Dilation: scales by a factor k from a center point. If k>1 enlargement; 0<k<1 reduction.
- Congruent figures have the same shape and size. Similar figures have the same shape, proportional sides.

**Angle Relationships in Polygons**
- Sum of interior angles of an n-gon = (n−2) × 180°.
- Each interior angle of a regular n-gon = (n−2) × 180° / n.
- Sum of exterior angles of any convex polygon = 360°.`,
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
      {
        id: 'geometry-q7',
        type: 'multiple-choice',
        text: 'Two angles are supplementary. One measures 73°. What is the other?',
        options: ['17°', '107°', '117°', '97°'],
        answer: '107°',
        hint: 'Supplementary angles add up to 180°.',
        explanation: '180° − 73° = 107°. Supplementary means the two angles sum to 180°.',
      },
      {
        id: 'geometry-q8',
        type: 'multiple-choice',
        text: 'What is the sum of the interior angles of a hexagon?',
        options: ['540°', '720°', '900°', '360°'],
        answer: '720°',
        hint: 'Use the formula (n−2) × 180°.',
        explanation: 'A hexagon has 6 sides. (6−2) × 180° = 4 × 180° = 720°.',
      },
      {
        id: 'geometry-q9',
        type: 'multiple-choice',
        text: 'A right triangle has legs of 5 cm and 12 cm. What is the hypotenuse?',
        options: ['13 cm', '17 cm', '11 cm', '15 cm'],
        answer: '13 cm',
        hint: 'a² + b² = c². Try 5² + 12².',
        explanation: '5² + 12² = 25 + 144 = 169. √169 = 13 cm. This is the 5-12-13 Pythagorean triple.',
      },
      {
        id: 'geometry-q10',
        type: 'multiple-choice',
        text: 'What is the area of a trapezoid with parallel sides 8 and 14 and height 5?',
        options: ['55', '110', '70', '22'],
        answer: '55',
        hint: 'Area of trapezoid = ½(b₁ + b₂) × h.',
        explanation: 'Area = ½ × (8 + 14) × 5 = ½ × 22 × 5 = 55 square units.',
      },
      {
        id: 'geometry-q11',
        type: 'multiple-choice',
        text: 'A circle has a radius of 7 cm. What is its circumference? (Use π ≈ 3.14)',
        options: ['21.98 cm', '43.96 cm', '153.86 cm', '87.92 cm'],
        answer: '43.96 cm',
        hint: 'Circumference = 2πr.',
        explanation: 'C = 2 × 3.14 × 7 = 43.96 cm.',
      },
      {
        id: 'geometry-q12',
        type: 'multiple-choice',
        text: 'What is the area of a circle with diameter 10? (Use π ≈ 3.14)',
        options: ['31.4', '78.5', '314', '62.8'],
        answer: '78.5',
        hint: 'Radius = diameter ÷ 2. Area = πr².',
        explanation: 'Radius = 10 ÷ 2 = 5. Area = π × 5² = 3.14 × 25 = 78.5 square units.',
      },
      {
        id: 'geometry-q13',
        type: 'multiple-choice',
        text: 'Two parallel lines are cut by a transversal. One alternate interior angle is 65°. What is the other alternate interior angle?',
        options: ['115°', '25°', '65°', '45°'],
        answer: '65°',
        hint: 'Alternate interior angles are equal when lines are parallel.',
        explanation: 'When a transversal crosses parallel lines, alternate interior angles are congruent. So the other angle is also 65°.',
      },
      {
        id: 'geometry-q14',
        type: 'multiple-choice',
        text: 'An exterior angle of a triangle is 110°. One non-adjacent interior angle is 48°. What is the other non-adjacent interior angle?',
        options: ['62°', '70°', '48°', '110°'],
        answer: '62°',
        hint: 'The exterior angle equals the sum of the two non-adjacent interior angles.',
        explanation: 'Exterior angle = sum of two non-adjacent interior angles. So 110° = 48° + x → x = 62°.',
      },
      {
        id: 'geometry-q15',
        type: 'multiple-choice',
        text: 'What is the volume of a rectangular prism with dimensions 4 × 6 × 3?',
        options: ['13', '72', '48', '36'],
        answer: '72',
        hint: 'Volume = length × width × height.',
        explanation: 'V = 4 × 6 × 3 = 72 cubic units.',
      },
      {
        id: 'geometry-q16',
        type: 'multiple-choice',
        text: 'What is the distance between points (1, 2) and (4, 6)?',
        options: ['5', '7', '3', '6'],
        answer: '5',
        hint: 'Distance = √[(x₂−x₁)² + (y₂−y₁)²].',
        explanation: 'd = √[(4−1)² + (6−2)²] = √[9 + 16] = √25 = 5.',
      },
      {
        id: 'geometry-q17',
        type: 'multiple-choice',
        text: 'A parallelogram has a base of 9 cm and height of 7 cm. What is its area?',
        options: ['32', '63', '16', '126'],
        answer: '63',
        hint: 'Area of parallelogram = base × height.',
        explanation: 'Area = 9 × 7 = 63 cm². Note: height is the perpendicular distance between the parallel sides, not the slant side.',
      },
      {
        id: 'geometry-q18',
        type: 'multiple-choice',
        text: 'What is each interior angle of a regular pentagon?',
        options: ['108°', '72°', '120°', '90°'],
        answer: '108°',
        hint: 'Sum of interior angles = (n−2) × 180°. Divide by n for each angle.',
        explanation: 'Sum = (5−2) × 180° = 540°. Each angle = 540° ÷ 5 = 108°.',
      },
      {
        id: 'geometry-q19',
        type: 'multiple-choice',
        text: 'A triangle has sides 7, 24, and 25. Is it a right triangle?',
        options: ['Yes', 'No', 'Cannot be determined', 'Only if the angles are measured'],
        answer: 'Yes',
        hint: 'Check if a² + b² = c² where c is the longest side.',
        explanation: '7² + 24² = 49 + 576 = 625 = 25². Since a² + b² = c², it is a right triangle (7-24-25 triple).',
      },
      {
        id: 'geometry-q20',
        type: 'multiple-choice',
        text: 'What is the surface area of a rectangular prism with l=5, w=3, h=4?',
        options: ['60', '94', '47', '120'],
        answer: '94',
        hint: 'SA = 2(lw + lh + wh).',
        explanation: 'SA = 2(5×3 + 5×4 + 3×4) = 2(15 + 20 + 12) = 2 × 47 = 94 square units.',
      },
      {
        id: 'geometry-q21',
        type: 'multiple-choice',
        text: 'What is the midpoint of the segment from (−2, 4) to (6, −8)?',
        options: ['(2, −2)', '(4, −4)', '(2, 2)', '(−4, 4)'],
        answer: '(2, −2)',
        hint: 'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2).',
        explanation: 'Midpoint = ((−2+6)/2, (4+(−8))/2) = (4/2, −4/2) = (2, −2).',
      },
      {
        id: 'geometry-q22',
        type: 'multiple-choice',
        text: 'A sector of a circle has a central angle of 90° and radius 8. What is its area? (Use π ≈ 3.14)',
        options: ['50.24', '200.96', '25.12', '100.48'],
        answer: '50.24',
        hint: 'Sector area = (central angle / 360°) × πr².',
        explanation: 'Sector area = (90/360) × 3.14 × 64 = 0.25 × 200.96 = 50.24 square units.',
      },
      {
        id: 'geometry-q23',
        type: 'multiple-choice',
        text: 'Two vertical angles are formed at an intersection. One is (3x + 15)°. The other is (5x − 5)°. What is x?',
        options: ['10', '15', '20', '5'],
        answer: '10',
        hint: 'Vertical angles are equal. Set them equal and solve.',
        explanation: '3x + 15 = 5x − 5 → 20 = 2x → x = 10.',
      },
      {
        id: 'geometry-q24',
        type: 'multiple-choice',
        text: 'A dilation with scale factor 3 is applied to a triangle with area 12 cm². What is the new area?',
        options: ['36 cm²', '108 cm²', '15 cm²', '24 cm²'],
        answer: '108 cm²',
        hint: 'When you dilate by factor k, area scales by k².',
        explanation: 'Area scales by k². New area = 12 × 3² = 12 × 9 = 108 cm².',
      },
      {
        id: 'geometry-q25',
        type: 'multiple-choice',
        text: 'What is the volume of a cone with radius 6 cm and height 10 cm? (Use π ≈ 3.14)',
        options: ['376.8 cm³', '1130.4 cm³', '125.6 cm³', '188.4 cm³'],
        answer: '376.8 cm³',
        hint: 'Volume of cone = ⅓ × π × r² × h.',
        explanation: 'V = ⅓ × 3.14 × 36 × 10 = ⅓ × 1130.4 = 376.8 cm³.',
      },
      {
        id: 'geometry-q26',
        type: 'multiple-choice',
        text: 'Lines p and q are parallel. A transversal crosses them, creating a co-interior angle of 72° on one side. What is the co-interior angle on the same side?',
        options: ['72°', '108°', '18°', '118°'],
        answer: '108°',
        hint: 'Co-interior (same-side interior) angles are supplementary — they add to 180°.',
        explanation: 'Co-interior angles sum to 180° when lines are parallel. 180° − 72° = 108°.',
      },
      {
        id: 'geometry-q27',
        type: 'multiple-choice',
        text: 'A rhombus has diagonals of length 10 cm and 24 cm. What is its area?',
        options: ['120 cm²', '240 cm²', '60 cm²', '34 cm²'],
        answer: '120 cm²',
        hint: 'Area of rhombus = ½ × d₁ × d₂.',
        explanation: 'Area = ½ × 10 × 24 = ½ × 240 = 120 cm².',
      },
      {
        id: 'geometry-q28',
        type: 'multiple-choice',
        text: 'A point (3, −5) is reflected over the x-axis. What are its new coordinates?',
        options: ['(−3, 5)', '(3, 5)', '(−3, −5)', '(5, −3)'],
        answer: '(3, 5)',
        hint: 'Reflecting over the x-axis negates the y-coordinate.',
        explanation: 'Reflection over the x-axis: (x, y) → (x, −y). So (3, −5) → (3, 5).',
      },
      {
        id: 'geometry-q29',
        type: 'multiple-choice',
        text: 'What is the volume of a cylinder with radius 5 and height 12? (Use π ≈ 3.14)',
        options: ['942', '188.4', '1884', '471'],
        answer: '942',
        hint: 'Volume of cylinder = π × r² × h.',
        explanation: 'V = 3.14 × 5² × 12 = 3.14 × 25 × 12 = 3.14 × 300 = 942 cubic units.',
      },
      {
        id: 'geometry-q30',
        type: 'multiple-choice',
        text: 'Triangle ABC is similar to triangle DEF. AB = 4, BC = 6, DE = 10. What is EF?',
        options: ['15', '12', '8', '24'],
        answer: '15',
        hint: 'Similar triangles have proportional sides. Set up the ratio AB/DE = BC/EF.',
        explanation: 'AB/DE = BC/EF → 4/10 = 6/EF → EF = 6 × 10/4 = 60/4 = 15.',
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
|−7| = 7   (seven steps from zero)
|7|  = 7   (also seven steps from zero)
|0|  = 0   (zero is already at zero)

Key rule: Absolute value is ALWAYS zero or positive — it can NEVER be negative.
Notation: Written with vertical bars. |−5| is read "the absolute value of negative five."

Formal definition:
  |x| = x    when x ≥ 0
  |x| = −x   when x < 0   (the negative of a negative gives a positive)

Real-world meaning: anytime you care about SIZE but not DIRECTION — depth of a submarine, temperature difference, manufacturing error, price change.

──────────────────────────────────────────
**Operations with absolute value**
Evaluate the absolute value FIRST, then do the arithmetic.
  |−8| + |3| = 8 + 3 = 11
  |−10| − |4| = 10 − 4 = 6
  |−6| × |−2| = 6 × 2 = 12
  3 × |−4| − |−6| ÷ 2 = 12 − 3 = 9   (BIDMAS applies after resolving bars)

──────────────────────────────────────────
**ABSOLUTE VALUE EQUATIONS**

Basic form: |x| = n
  If n > 0 → two solutions: x = n  OR  x = −n
  If n = 0 → one solution:  x = 0
  If n < 0 → NO solution (absolute value can never equal a negative)

Example 1 — Simple
  |x| = 9
  x = 9   or   x = −9

Example 2 — Linear inside: |2x − 3| = 7
  Case 1: 2x − 3 = 7  →  2x = 10  →  x = 5
  Case 2: 2x − 3 = −7 →  2x = −4  →  x = −2
  Solutions: x = 5 or x = −2
  Check: |2(5)−3| = |7| = 7 ✓   |2(−2)−3| = |−7| = 7 ✓

Example 3 — Coefficient outside: 3|x + 1| − 6 = 9
  Step 1 — isolate the absolute value:
    3|x + 1| = 15  →  |x + 1| = 5
  Case 1: x + 1 = 5  →  x = 4
  Case 2: x + 1 = −5 →  x = −6
  Solutions: x = 4 or x = −6

Example 4 — Two absolute values: |x + 4| = |2x − 1|
  Case 1 (expressions equal):    x + 4 = 2x − 1  →  5 = x  →  x = 5
  Case 2 (expressions opposite): x + 4 = −(2x − 1)  →  x + 4 = −2x + 1  →  3x = −3  →  x = −1
  Solutions: x = 5 or x = −1

Example 5 — No solution: |3x − 2| = −5
  Absolute value can NEVER be negative. No solution.

Key steps for any absolute value equation:
  1. Isolate the absolute value expression on one side.
  2. If the right side is negative → write "No solution."
  3. Otherwise split into two cases (positive and negative) and solve each.
  4. Always CHECK by substituting back.

──────────────────────────────────────────
**ABSOLUTE VALUE INEQUALITIES**

There are two types. Remember the key phrases:
  "Less than" → AND → one connected interval (between two values)
  "Greater than" → OR → two separate rays (outside two values)

TYPE 1: |x| < n   (or ≤)  →  "AND"  →  −n < x < n
  |x| < 4  means x is within 4 of zero:  −4 < x < 4
  On a number line: a segment with open circles at −4 and 4, shaded between.

  General rule: |ax + b| < c  (c > 0)
    →  −c < ax + b < c
    →  Solve the compound inequality.

  Example: |2x − 1| ≤ 5
    −5 ≤ 2x − 1 ≤ 5
    −4 ≤ 2x ≤ 6       (add 1 throughout)
    −2 ≤ x ≤ 3        (divide by 2)
  Graph: closed circles at −2 and 3, shaded between.

TYPE 2: |x| > n   (or ≥)  →  "OR"  →  x < −n  or  x > n
  |x| > 4  means x is more than 4 away from zero:  x < −4  or  x > 4
  On a number line: two rays going outward with open circles at −4 and 4.

  General rule: |ax + b| > c  (c > 0)
    →  ax + b < −c  OR  ax + b > c
    →  Solve each inequality separately.

  Example: |3x + 2| ≥ 8
    Case 1: 3x + 2 ≥ 8   →  3x ≥ 6   →  x ≥ 2
    Case 2: 3x + 2 ≤ −8  →  3x ≤ −10 →  x ≤ −10/3
  Graph: closed circles at −10/3 and 2, shaded outward.

Special cases:
  |x| < 0  →  No solution (absolute value is never negative)
  |x| ≤ 0  →  x = 0 only (only zero has absolute value 0)
  |x| > 0  →  All real numbers EXCEPT x = 0
  |x| ≥ 0  →  All real numbers (always true)

Solving strategy — isolate first, then split:
  2|x − 5| + 3 > 11
  Step 1: 2|x − 5| > 8  →  |x − 5| > 4
  Step 2 (OR): x − 5 > 4 → x > 9   or   x − 5 < −4 → x < 1
  Answer: x < 1 or x > 9

──────────────────────────────────────────
**GRAPHING ABSOLUTE VALUE FUNCTIONS**

The parent function y = |x| produces a V-shape:
  • The vertex (the tip of the V) is at the origin (0, 0).
  • The left arm has slope −1; the right arm has slope +1.
  • The graph is symmetric about the y-axis.

Standard form: y = a|x − h| + k
  (h, k) is the vertex.
  a controls the steepness and direction:
    a > 0 → V opens upward
    a < 0 → V opens downward
    |a| > 1 → steeper (narrower) than y = |x|
    0 < |a| < 1 → shallower (wider) than y = |x|

Transformations from y = |x|:
  y = |x − h|     → shifts RIGHT by h
  y = |x + h|     → shifts LEFT by h  (because +h means h is subtracted from inside)
  y = |x| + k     → shifts UP by k
  y = |x| − k     → shifts DOWN by k
  y = −|x|        → reflects over x-axis (V flips downward)
  y = a|x|        → vertical stretch (|a|>1) or compression (|a|<1)

Example 1 — y = |x − 3| + 2
  Vertex: (3, 2). Opens upward. Slope ±1.
  Table of values:
    x=0: |0−3|+2 = 3+2 = 5
    x=3: |3−3|+2 = 0+2 = 2  ← vertex
    x=6: |6−3|+2 = 3+2 = 5

Example 2 — y = −2|x + 1| + 4
  Vertex: (−1, 4). Opens DOWNWARD (a = −2 < 0). Steeper than parent.
  x=−1: −2|0|+4 = 4 ← vertex (maximum point)
  x=1:  −2|2|+4 = −4+4 = 0
  x=−3: −2|−2|+4 = −4+4 = 0

Finding x-intercepts of y = a|x − h| + k:
  Set y = 0 and solve the resulting absolute value equation.
  0 = −2|x + 1| + 4  →  |x + 1| = 2  →  x = 1 or x = −3

Domain: all real numbers for any absolute value function.
Range: depends on vertex and direction.
  Opens up: y ≥ k
  Opens down: y ≤ k

Axis of symmetry: x = h (vertical line through the vertex).`,
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
      {
        id: 'abs-q11',
        type: 'multiple-choice',
        text: 'Solve: |2x − 3| = 7. What are the two solutions?',
        options: ['x = 5 or x = 2', 'x = 5 or x = −2', 'x = −5 or x = 2', 'x = 5 or x = −5'],
        answer: 'x = 5 or x = −2',
        hint: 'Split into two cases: 2x − 3 = 7 and 2x − 3 = −7. Solve each.',
        explanation: 'Case 1: 2x − 3 = 7 → 2x = 10 → x = 5. Case 2: 2x − 3 = −7 → 2x = −4 → x = −2.',
      },
      {
        id: 'abs-q12',
        type: 'multiple-choice',
        text: 'How many solutions does |5x + 2| = −3 have?',
        options: ['Two solutions', 'One solution', 'No solution', 'Infinitely many solutions'],
        answer: 'No solution',
        hint: 'Absolute value is always ≥ 0. Can it ever equal a negative number?',
        explanation: 'Absolute value is always ≥ 0. It can never equal −3. There is no solution.',
      },
      {
        id: 'abs-q13',
        type: 'numeric',
        text: 'Solve: 3|x + 1| − 6 = 9. Find the positive solution.',
        answer: 4,
        unit: '',
        tolerance: 0,
        hint: 'First isolate |x + 1| by adding 6 and dividing by 3. Then split into two cases.',
        explanation: '3|x+1| = 15 → |x+1| = 5. Case 1: x+1=5 → x=4. Case 2: x+1=−5 → x=−6. Positive solution is x=4.',
      },
      {
        id: 'abs-q14',
        type: 'multiple-choice',
        text: 'Solve: |x + 4| = |2x − 1|. What are the solutions?',
        options: ['x = 5 or x = 1', 'x = 5 or x = −1', 'x = −5 or x = 1', 'x = 3 or x = −5'],
        answer: 'x = 5 or x = −1',
        hint: 'Two cases: (1) x+4 = 2x−1 and (2) x+4 = −(2x−1). Solve each.',
        explanation: 'Case 1: x+4=2x−1 → 5=x. Case 2: x+4=−2x+1 → 3x=−3 → x=−1. Solutions: x=5 or x=−1.',
      },
      {
        id: 'abs-q15',
        type: 'numeric',
        text: 'Solve: 2|3x − 6| + 4 = 16. Find the larger solution.',
        answer: 4,
        unit: '',
        tolerance: 0,
        hint: 'Isolate the absolute value: subtract 4 then divide by 2. Then split into two cases.',
        explanation: '2|3x−6|=12 → |3x−6|=6. Case 1: 3x−6=6 → 3x=12 → x=4. Case 2: 3x−6=−6 → 3x=0 → x=0. Larger is x=4.',
      },
      {
        id: 'abs-q16',
        type: 'multiple-choice',
        text: 'Which compound inequality correctly represents |2x − 1| ≤ 5?',
        options: ['−5 ≤ 2x − 1 ≤ 5', '2x − 1 ≤ 5 only', 'x ≤ 3 or x ≥ −2', '2x − 1 ≥ −5 only'],
        answer: '−5 ≤ 2x − 1 ≤ 5',
        hint: '|expression| ≤ c means −c ≤ expression ≤ c.',
        explanation: '|2x−1| ≤ 5 splits into −5 ≤ 2x−1 ≤ 5 (the AND / between rule for less-than inequalities).',
      },
      {
        id: 'abs-q17',
        type: 'multiple-choice',
        text: 'Solve: |2x − 1| ≤ 5. What is the solution set?',
        options: ['−2 ≤ x ≤ 3', '−3 ≤ x ≤ 2', 'x ≤ −2 or x ≥ 3', 'x ≤ 3 only'],
        answer: '−2 ≤ x ≤ 3',
        hint: '−5 ≤ 2x−1 ≤ 5 → add 1 throughout → −4 ≤ 2x ≤ 6 → divide by 2.',
        explanation: '−5 ≤ 2x−1 ≤ 5 → −4 ≤ 2x ≤ 6 → −2 ≤ x ≤ 3.',
      },
      {
        id: 'abs-q18',
        type: 'multiple-choice',
        text: 'Solve: |3x + 2| ≥ 8. What is the solution set?',
        options: ['x ≤ −10/3 or x ≥ 2', '−10/3 ≤ x ≤ 2', 'x ≥ 2 only', 'x ≤ −10/3 only'],
        answer: 'x ≤ −10/3 or x ≥ 2',
        hint: '|expression| ≥ c means expression ≥ c OR expression ≤ −c (the OR / outside rule).',
        explanation: 'Case 1: 3x+2 ≥ 8 → 3x ≥ 6 → x ≥ 2. Case 2: 3x+2 ≤ −8 → 3x ≤ −10 → x ≤ −10/3.',
      },
      {
        id: 'abs-q19',
        type: 'multiple-choice',
        text: 'How many solutions does |x + 3| ≤ 0 have?',
        options: ['No solutions', 'Exactly one: x = −3', 'All real numbers', 'Two solutions'],
        answer: 'Exactly one: x = −3',
        hint: 'Absolute value is always ≥ 0, so |x+3| ≤ 0 can only be true when |x+3| = 0.',
        explanation: '|x+3| ≥ 0 always. For ≤ 0 to hold, |x+3| must equal 0 exactly, which means x+3=0 → x=−3.',
      },
      {
        id: 'abs-q20',
        type: 'multiple-choice',
        text: 'Solve: 2|x − 5| + 3 > 11. What is the solution?',
        options: ['x < 1 or x > 9', '1 < x < 9', 'x < 9 only', 'x > 1 only'],
        answer: 'x < 1 or x > 9',
        hint: 'First isolate the absolute value: subtract 3, divide by 2. Then apply the OR rule for >.',
        explanation: '2|x−5| > 8 → |x−5| > 4. OR rule: x−5 > 4 → x > 9, or x−5 < −4 → x < 1.',
      },
      {
        id: 'abs-q21',
        type: 'multiple-choice',
        text: 'What is the vertex of y = |x − 4| + 7?',
        options: ['(4, 7)', '(−4, 7)', '(4, −7)', '(7, 4)'],
        answer: '(4, 7)',
        hint: 'Standard form: y = a|x − h| + k. The vertex is (h, k).',
        explanation: 'y = |x − 4| + 7 has h = 4 and k = 7. Vertex is (4, 7). The V tip is at x=4, y=7.',
      },
      {
        id: 'abs-q22',
        type: 'multiple-choice',
        text: 'The graph of y = −3|x + 2| + 6 opens in which direction and has what vertex?',
        options: ['Upward, vertex (2, 6)', 'Downward, vertex (2, 6)', 'Downward, vertex (−2, 6)', 'Upward, vertex (−2, 6)'],
        answer: 'Downward, vertex (−2, 6)',
        hint: 'a = −3 < 0 means downward. For |x + 2|, think |x − (−2)|, so h = −2.',
        explanation: 'a = −3 < 0 → opens downward. Standard form: y = −3|x − (−2)| + 6, so h = −2, k = 6. Vertex (−2, 6).',
      },
      {
        id: 'abs-q23',
        type: 'multiple-choice',
        text: 'Compared to y = |x|, the graph of y = |x| − 5 is:',
        options: ['Shifted left 5', 'Shifted right 5', 'Shifted down 5', 'Shifted up 5'],
        answer: 'Shifted down 5',
        hint: 'Adding or subtracting outside the bars shifts vertically.',
        explanation: 'y = |x| − 5 subtracts 5 from the output (y-value), shifting the entire graph 5 units downward.',
      },
      {
        id: 'abs-q24',
        type: 'multiple-choice',
        text: 'What is the range of y = 2|x − 1| − 3?',
        options: ['y ≥ −3', 'y ≤ −3', 'y ≥ 2', 'All real numbers'],
        answer: 'y ≥ −3',
        hint: 'a = 2 > 0, so the parabola opens upward. The minimum is at the vertex.',
        explanation: 'a = 2 > 0 → opens upward → minimum at vertex. Vertex is (1, −3). So y ≥ −3.',
      },
      {
        id: 'abs-q25',
        type: 'multiple-choice',
        text: 'Find the x-intercepts of y = |x + 3| − 5.',
        options: ['x = 2 or x = −8', 'x = 2 or x = 8', 'x = −2 or x = 8', 'x = 5 or x = −3'],
        answer: 'x = 2 or x = −8',
        hint: 'Set y = 0: |x+3| = 5, then split into two cases.',
        explanation: '|x+3| = 5 → x+3=5 → x=2, or x+3=−5 → x=−8. X-intercepts at (2,0) and (−8,0).',
      },
      {
        id: 'abs-q26',
        type: 'multiple-choice',
        text: 'Which graph transformation maps y = |x| onto y = |x + 6| + 1?',
        options: [
          'Shift right 6, up 1',
          'Shift left 6, up 1',
          'Shift left 6, down 1',
          'Shift right 6, down 1',
        ],
        answer: 'Shift left 6, up 1',
        hint: 'y = |x + 6| + 1 → |x − (−6)| + 1. h = −6 (left 6), k = 1 (up 1).',
        explanation: 'h = −6 (shift left 6 units), k = 1 (shift up 1 unit). New vertex is (−6, 1).',
      },
      {
        id: 'abs-q27',
        type: 'numeric',
        text: 'A factory specifies that a part must be 50 mm long with a tolerance of ±2 mm. Write this as |x − 50| ≤ 2 and find the minimum acceptable length in mm.',
        answer: 48,
        unit: 'mm',
        tolerance: 0,
        hint: 'Solve −2 ≤ x − 50 ≤ 2 by adding 50 throughout.',
        explanation: '|x−50| ≤ 2 → −2 ≤ x−50 ≤ 2 → 48 ≤ x ≤ 52. Minimum is 48 mm.',
      },
      {
        id: 'abs-q28',
        type: 'numeric',
        text: 'Solve: |4x − 8| = |2x + 4|. Find the positive solution.',
        answer: 6,
        unit: '',
        tolerance: 0,
        hint: 'Two cases: 4x−8 = 2x+4 and 4x−8 = −(2x+4). Solve each.',
        explanation: 'Case 1: 4x−8=2x+4 → 2x=12 → x=6. Case 2: 4x−8=−2x−4 → 6x=4 → x=2/3. Positive integer solution: x=6.',
      },
      {
        id: 'abs-q29',
        type: 'multiple-choice',
        text: 'A thermometer reading must satisfy |T − 20| < 3 (in °C). Which temperatures are acceptable?',
        options: ['17 < T < 23', '17 ≤ T ≤ 23', 'T < 17 or T > 23', 'T > 23 only'],
        answer: '17 < T < 23',
        hint: 'Use the AND rule: −3 < T − 20 < 3, then add 20 throughout.',
        explanation: '−3 < T−20 < 3 → 17 < T < 23. Temperatures strictly between 17°C and 23°C are acceptable.',
      },
      {
        id: 'abs-q30',
        type: 'multiple-choice',
        text: 'The axis of symmetry of y = |2x − 10| + 3 is:',
        options: ['x = 5', 'x = 10', 'x = −5', 'x = 3'],
        answer: 'x = 5',
        hint: 'Vertex is at x = h. Rewrite |2x − 10| = 2|x − 5|. What is h?',
        explanation: '|2x−10| = 2|x−5|. So y = 2|x−5|+3, vertex at (5, 3). Axis of symmetry: x = 5.',
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
