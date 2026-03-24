export interface Topic {
  id: string;
  unit: number;
  title: string;
  grade: string;
  shortExplanation: string;
  detailedExplanation: string;
  simulationId: string;
  questions: Question[];
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'numeric';
  text: string;
  options?: string[];
  answer: string | number;
  hint: string;
  explanation: string;
  unit?: string;
  tolerance?: number;
}

export const curriculum: Topic[] = [
  // ── UNIT 1: MOTION ──────────────────────────────────────────
  {
    id: 'speed',
    unit: 1,
    title: 'Speed & Velocity',
    grade: '6th',
    shortExplanation:
      'Speed tells you how fast something moves. Velocity tells you how fast AND in which direction.',
    detailedExplanation: `**Speed** is the distance an object travels divided by the time it takes.

**Formula:** Speed = Distance ÷ Time  (or  s = d / t)

For example, if you ride your bike 30 meters in 10 seconds, your speed is 3 m/s.

**Velocity** is like speed, but it also includes direction. So "5 m/s north" is a velocity, while just "5 m/s" is a speed. Direction matters — a car going east at 60 km/h and a car going west at 60 km/h have the same speed, but different velocities.

**Average speed** is total distance divided by total time. Even if you slow down and speed up along the way, you can find one average number.

**Units:** Speed is measured in meters per second (m/s), kilometers per hour (km/h), or miles per hour (mph).`,
    simulationId: 'speed',
    questions: [
      {
        id: 'speed-q1',
        type: 'multiple-choice',
        text: 'A car travels 120 km in 2 hours. What is its average speed?',
        options: ['60 km/h', '240 km/h', '30 km/h', '120 km/h'],
        answer: '60 km/h',
        hint: 'Speed = Distance ÷ Time. Divide 120 by 2.',
        explanation: '120 km ÷ 2 h = 60 km/h',
      },
      {
        id: 'speed-q2',
        type: 'numeric',
        text: 'A runner covers 400 meters in 50 seconds. What is their speed in m/s?',
        answer: 8,
        unit: 'm/s',
        tolerance: 0.1,
        hint: 'Speed = Distance ÷ Time = 400 ÷ 50',
        explanation: '400 m ÷ 50 s = 8 m/s',
      },
      {
        id: 'speed-q3',
        type: 'multiple-choice',
        text: 'What is the difference between speed and velocity?',
        options: [
          'Velocity includes direction, speed does not',
          'Speed includes direction, velocity does not',
          'They are exactly the same thing',
          'Velocity is always faster than speed',
        ],
        answer: 'Velocity includes direction, speed does not',
        hint: 'Think about what extra information velocity gives you.',
        explanation:
          'Velocity is speed + direction. "60 km/h north" is a velocity; "60 km/h" is a speed.',
      },
      {
        id: 'speed-q4',
        type: 'numeric',
        text: 'If you walk at 1.5 m/s for 60 seconds, how far do you travel (in meters)?',
        answer: 90,
        unit: 'm',
        tolerance: 0.5,
        hint: 'Rearrange: Distance = Speed × Time',
        explanation: '1.5 m/s × 60 s = 90 m',
      },
    ],
  },
  {
    id: 'acceleration',
    unit: 1,
    title: 'Acceleration',
    grade: '7th',
    shortExplanation:
      'Acceleration is how quickly an object changes its speed. Speeding up, slowing down, or changing direction are all forms of acceleration.',
    detailedExplanation: `**Acceleration** is the rate of change of velocity over time.

**Formula:** Acceleration = (Final Velocity − Initial Velocity) ÷ Time
(a = Δv / t)

If a car goes from 0 to 20 m/s in 4 seconds, its acceleration is:
a = (20 − 0) / 4 = **5 m/s²**

**Positive acceleration** = speeding up
**Negative acceleration** (deceleration) = slowing down

**Units:** meters per second squared (m/s²)

**Key insight:** Even moving in a circle at constant speed counts as acceleration, because direction is changing. This is called *centripetal acceleration*.

**Gravity** is a familiar acceleration — on Earth, objects in free fall accelerate at **9.8 m/s²** downward.`,
    simulationId: 'acceleration',
    questions: [
      {
        id: 'acc-q1',
        type: 'numeric',
        text: 'A bike speeds up from 2 m/s to 10 m/s in 4 seconds. What is its acceleration (m/s²)?',
        answer: 2,
        unit: 'm/s²',
        tolerance: 0.1,
        hint: 'a = (final speed − initial speed) ÷ time = (10 − 2) ÷ 4',
        explanation: '(10 − 2) / 4 = 8 / 4 = 2 m/s²',
      },
      {
        id: 'acc-q2',
        type: 'multiple-choice',
        text: 'A car slows from 30 m/s to 0 m/s. This is an example of:',
        options: ['Positive acceleration', 'Negative acceleration (deceleration)', 'Constant velocity', 'No acceleration'],
        answer: 'Negative acceleration (deceleration)',
        hint: 'When speed decreases, what sign does the acceleration have?',
        explanation: 'The velocity decreased, so acceleration is negative — also called deceleration.',
      },
      {
        id: 'acc-q3',
        type: 'multiple-choice',
        text: 'What is the acceleration due to gravity on Earth?',
        options: ['9.8 m/s²', '9.8 m/s', '98 m/s²', '1 m/s²'],
        answer: '9.8 m/s²',
        hint: 'This is a constant you should memorize.',
        explanation: 'Earth\'s gravitational acceleration is approximately 9.8 m/s² downward.',
      },
    ],
  },

  // ── UNIT 2: FORCES ──────────────────────────────────────────
  {
    id: 'newtons-first',
    unit: 2,
    title: "Newton's First Law",
    grade: '6th',
    shortExplanation:
      'An object at rest stays at rest, and an object in motion stays in motion — unless a force acts on it. This is called inertia.',
    detailedExplanation: `**Newton's First Law of Motion** (Law of Inertia):

*"An object at rest stays at rest, and an object in motion stays in motion at the same speed and direction, unless acted on by an unbalanced force."*

**Inertia** is the tendency of an object to resist changes to its state of motion. The more mass an object has, the more inertia it has.

**Examples:**
- A book sitting on a table stays still because forces are balanced (gravity down, table pushes up).
- A hockey puck sliding on ice keeps going because there's very little friction to stop it.
- When a car brakes suddenly, passengers lurch forward — their bodies want to keep moving.

**Balanced vs Unbalanced forces:**
- Balanced forces = no change in motion (net force = 0)
- Unbalanced forces = acceleration (net force ≠ 0)`,
    simulationId: 'newtons-first',
    questions: [
      {
        id: 'n1-q1',
        type: 'multiple-choice',
        text: 'A soccer ball is sitting still on a field. What must happen for it to start moving?',
        options: [
          'An unbalanced force must act on it',
          'It will start moving on its own eventually',
          'Gravity must increase',
          'The field must be tilted',
        ],
        answer: 'An unbalanced force must act on it',
        hint: "Newton's 1st law: objects at rest stay at rest unless...",
        explanation: 'An unbalanced (net) force is required to change the state of motion of any object.',
      },
      {
        id: 'n1-q2',
        type: 'multiple-choice',
        text: 'Why do passengers slide forward when a car stops suddenly?',
        options: [
          'Their bodies have inertia and want to keep moving',
          'The brakes push passengers forward',
          'Gravity pulls them forward',
          'The seat pushes them forward',
        ],
        answer: 'Their bodies have inertia and want to keep moving',
        hint: 'Inertia is the resistance to change in motion.',
        explanation: "The passengers' bodies were moving forward. The car stopped, but inertia kept the passengers moving forward.",
      },
    ],
  },
  {
    id: 'newtons-second',
    unit: 2,
    title: "Newton's Second Law",
    grade: '7th',
    shortExplanation:
      'Force equals mass times acceleration (F = ma). Bigger force = more acceleration. More mass = less acceleration for the same force.',
    detailedExplanation: `**Newton's Second Law of Motion:**

**F = m × a**

Where:
- **F** = Force (measured in Newtons, N)
- **m** = Mass (measured in kilograms, kg)
- **a** = Acceleration (measured in m/s²)

**What this means:**
1. If you push harder (more force), the object accelerates more.
2. If the object is heavier (more mass), it accelerates less for the same push.

**Example:** Pushing a shopping cart. An empty cart (less mass) accelerates quickly. A full cart (more mass) accelerates slowly with the same push.

**1 Newton** = the force needed to accelerate a 1 kg object at 1 m/s².

You can rearrange the formula:
- a = F / m  (acceleration = force / mass)
- m = F / a  (mass = force / acceleration)`,
    simulationId: 'newtons-second',
    questions: [
      {
        id: 'n2-q1',
        type: 'numeric',
        text: 'A 5 kg box is pushed with a force of 20 N. What is its acceleration (m/s²)?',
        answer: 4,
        unit: 'm/s²',
        tolerance: 0.1,
        hint: 'Use a = F / m = 20 / 5',
        explanation: 'a = F / m = 20 N / 5 kg = 4 m/s²',
      },
      {
        id: 'n2-q2',
        type: 'numeric',
        text: 'A 10 kg object accelerates at 3 m/s². What force is acting on it (in N)?',
        answer: 30,
        unit: 'N',
        tolerance: 0.5,
        hint: 'F = m × a = 10 × 3',
        explanation: 'F = 10 kg × 3 m/s² = 30 N',
      },
      {
        id: 'n2-q3',
        type: 'multiple-choice',
        text: 'If the same force is applied to a light object and a heavy object, which accelerates more?',
        options: ['The light object', 'The heavy object', 'They accelerate equally', 'Neither accelerates'],
        answer: 'The light object',
        hint: 'a = F / m — what happens when m is smaller?',
        explanation: 'a = F / m. Less mass means more acceleration for the same force.',
      },
    ],
  },
  {
    id: 'newtons-third',
    unit: 2,
    title: "Newton's Third Law",
    grade: '7th',
    shortExplanation:
      'For every action, there is an equal and opposite reaction. Forces always come in pairs.',
    detailedExplanation: `**Newton's Third Law of Motion:**

*"For every action, there is an equal and opposite reaction."*

Forces always come in **pairs**. When object A pushes on object B, object B pushes back on object A with the same strength but in the opposite direction.

**Examples:**
- You push off a wall → the wall pushes you back
- A rocket expels gas downward → the gas pushes the rocket upward
- A swimmer pushes water backward → the water pushes the swimmer forward
- Walking: your foot pushes the ground backward → the ground pushes you forward

**Important:** Action-reaction pairs act on *different* objects, so they don't cancel each other out.

**Why doesn't the ground move when you push it?**
The forces are equal, but Earth has enormous mass, so its acceleration is tiny (F = ma — same F, huge m = tiny a).`,
    simulationId: 'newtons-third',
    questions: [
      {
        id: 'n3-q1',
        type: 'multiple-choice',
        text: 'A swimmer pushes water backward. What happens according to Newton\'s 3rd Law?',
        options: [
          'The water pushes the swimmer forward',
          'The swimmer speeds up because of the water\'s weight',
          'Nothing — only one force acts',
          'The water pushes the swimmer backward too',
        ],
        answer: 'The water pushes the swimmer forward',
        hint: 'Equal and opposite reaction — the water pushes back.',
        explanation: 'The swimmer pushes water backward (action); the water pushes the swimmer forward (reaction).',
      },
      {
        id: 'n3-q2',
        type: 'multiple-choice',
        text: 'When a rocket fires its engines, gas is pushed downward. What happens to the rocket?',
        options: ['It moves upward', 'It moves downward', 'It stays still', 'It spins'],
        answer: 'It moves upward',
        hint: 'Opposite reaction to pushing gas downward is...',
        explanation: 'Gas pushed down (action) → rocket pushed up (reaction). This is how rockets work in space too!',
      },
    ],
  },

  // ── UNIT 3: ENERGY ──────────────────────────────────────────
  {
    id: 'kinetic-energy',
    unit: 3,
    title: 'Kinetic Energy',
    grade: '7th',
    shortExplanation:
      'Kinetic energy is the energy of motion. Any moving object has kinetic energy. The faster it moves or the heavier it is, the more kinetic energy it has.',
    detailedExplanation: `**Kinetic Energy (KE)** is the energy an object has because it is moving.

**Formula:** KE = ½ × m × v²

Where:
- **m** = mass in kilograms (kg)
- **v** = velocity in m/s
- **KE** = kinetic energy in Joules (J)

**Key insight:** Velocity is squared! If you double the speed, kinetic energy quadruples. This is why car crashes at high speed are so much more dangerous than low-speed crashes.

**Examples:**
- A baseball thrown fast has more KE than one thrown slowly
- A truck moving at 60 km/h has far more KE than a bicycle at 60 km/h (due to mass)
- A stationary object has zero kinetic energy

**Units:** Joules (J). 1 Joule = 1 kg·m²/s²`,
    simulationId: 'kinetic-energy',
    questions: [
      {
        id: 'ke-q1',
        type: 'numeric',
        text: 'A 2 kg ball moves at 3 m/s. What is its kinetic energy (in J)?',
        answer: 9,
        unit: 'J',
        tolerance: 0.5,
        hint: 'KE = ½ × m × v² = ½ × 2 × 3²',
        explanation: 'KE = ½ × 2 × 9 = 9 J',
      },
      {
        id: 'ke-q2',
        type: 'multiple-choice',
        text: 'If a car doubles its speed, its kinetic energy:',
        options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
        answer: 'Quadruples',
        hint: 'KE = ½mv². Speed is squared in the formula.',
        explanation: 'If v doubles, v² quadruples. So KE quadruples.',
      },
    ],
  },
  {
    id: 'potential-energy',
    unit: 3,
    title: 'Potential Energy',
    grade: '7th',
    shortExplanation:
      'Potential energy is stored energy based on position. A raised object has gravitational potential energy — it could fall and do work.',
    detailedExplanation: `**Gravitational Potential Energy (GPE)** is energy stored in an object due to its height above the ground.

**Formula:** GPE = m × g × h

Where:
- **m** = mass (kg)
- **g** = gravitational acceleration = 9.8 m/s²
- **h** = height above ground (m)
- **GPE** = energy in Joules (J)

**Other types of potential energy:**
- **Elastic PE** — energy stored in a stretched spring or rubber band
- **Chemical PE** — energy stored in food, fuel, batteries

**The big picture:** Potential energy and kinetic energy convert into each other. A ball held up high has GPE. When dropped, GPE converts to KE. At the bottom, all GPE has become KE (ignoring air resistance).

**Example:** A 1 kg book sitting 2 m above the floor has:
GPE = 1 × 9.8 × 2 = **19.6 J**`,
    simulationId: 'potential-energy',
    questions: [
      {
        id: 'pe-q1',
        type: 'numeric',
        text: 'A 3 kg rock is held 5 m above the ground. What is its gravitational PE (in J)? Use g = 9.8 m/s².',
        answer: 147,
        unit: 'J',
        tolerance: 1,
        hint: 'GPE = m × g × h = 3 × 9.8 × 5',
        explanation: 'GPE = 3 × 9.8 × 5 = 147 J',
      },
      {
        id: 'pe-q2',
        type: 'multiple-choice',
        text: 'A roller coaster at the top of a hill has mostly:',
        options: ['Kinetic energy', 'Potential energy', 'No energy', 'Electrical energy'],
        answer: 'Potential energy',
        hint: 'At the top, the coaster is high up and moving slowly.',
        explanation: 'At the peak, height is maximum and speed is low — mostly GPE.',
      },
    ],
  },

  // ── UNIT 4: WAVES ───────────────────────────────────────────
  {
    id: 'waves-basics',
    unit: 4,
    title: 'Waves: Frequency & Amplitude',
    grade: '8th',
    shortExplanation:
      'Waves carry energy through a medium. Frequency is how many waves pass per second. Amplitude is how tall the wave is.',
    detailedExplanation: `A **wave** is a disturbance that transfers energy from one place to another.

**Key properties:**

- **Wavelength (λ):** Distance from one crest to the next (meters)
- **Amplitude:** Height from rest position to crest — measures the wave's energy
- **Frequency (f):** Number of complete waves per second — measured in Hertz (Hz)
- **Period (T):** Time for one complete wave — T = 1/f

**Wave speed formula:** v = f × λ
(speed = frequency × wavelength)

**Types of waves:**
- **Transverse waves** — particles move perpendicular to wave direction (light, water waves)
- **Longitudinal waves** — particles move parallel to wave direction (sound)

**Sound waves** are longitudinal waves that need a medium (air, water, solid) to travel.
**Light waves** are transverse electromagnetic waves that can travel through a vacuum.

High frequency = high pitch (sound) or high energy (light)
High amplitude = louder sound or brighter light`,
    simulationId: 'waves',
    questions: [
      {
        id: 'wave-q1',
        type: 'multiple-choice',
        text: 'What does the amplitude of a sound wave determine?',
        options: ['Pitch', 'Loudness', 'Speed', 'Wavelength'],
        answer: 'Loudness',
        hint: 'Amplitude = size of the disturbance = how much energy.',
        explanation: 'Higher amplitude = more energy = louder sound.',
      },
      {
        id: 'wave-q2',
        type: 'numeric',
        text: 'A wave has a frequency of 5 Hz and a wavelength of 2 m. What is its speed (m/s)?',
        answer: 10,
        unit: 'm/s',
        tolerance: 0.1,
        hint: 'v = f × λ = 5 × 2',
        explanation: 'v = 5 Hz × 2 m = 10 m/s',
      },
    ],
  },
];

export function getTopicById(id: string): Topic | undefined {
  return curriculum.find((t) => t.id === id);
}

export function isTopicUnlocked(_topicIndex: number, _completedIds: string[]): boolean {
  return true;
}
