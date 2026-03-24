import type { Topic } from './curriculum';

export const chemistryCurriculum: Topic[] = [
  // ── UNIT 1: MATTER & ATOMS ──────────────────────────────────────────
  {
    id: 'atoms',
    unit: 1,
    title: 'Atoms & Elements',
    grade: '6th',
    shortExplanation:
      'All matter is made of tiny atoms. Each element is made of one type of atom. The periodic table organises all known elements.',
    detailedExplanation: `**Atom Structure**

Every atom has a **nucleus** at the centre containing **protons** (positively charged) and **neutrons** (no charge). Orbiting the nucleus are **electrons** (negatively charged).

**Atomic Number** = number of protons in the nucleus. This is what makes one element different from another. Carbon always has 6 protons; oxygen always has 8.

**Mass Number** = protons + neutrons. For carbon-12: 6 protons + 6 neutrons = mass number 12.

**Electron Shells:** Electrons occupy shells around the nucleus. The first shell holds up to 2 electrons, the second up to 8, the third up to 8.

**Common elements:**
- Hydrogen (H) — 1 proton, simplest element
- Helium (He) — 2 protons, noble gas
- Carbon (C) — 6 protons, basis of life
- Oxygen (O) — 8 protons, essential for respiration
- Sodium (Na) — 11 protons, alkali metal
- Chlorine (Cl) — 17 protons, halogen`,
    simulationId: 'atom',
    questions: [
      {
        id: 'atoms-q1',
        type: 'multiple-choice',
        text: 'What determines which element an atom is?',
        options: ['Number of protons', 'Number of neutrons', 'Number of electrons', 'Size of the nucleus'],
        answer: 'Number of protons',
        hint: 'Think about what is unique to each element.',
        explanation: 'The number of protons (atomic number) uniquely identifies each element.',
      },
      {
        id: 'atoms-q2',
        type: 'multiple-choice',
        text: 'How many electrons can the first electron shell hold?',
        options: ['2', '8', '18', '32'],
        answer: '2',
        hint: 'The first shell is the smallest and closest to the nucleus.',
        explanation: 'The first shell can hold a maximum of 2 electrons.',
      },
      {
        id: 'atoms-q3',
        type: 'numeric',
        text: 'Carbon has 6 protons and 6 neutrons. What is its mass number?',
        answer: 12,
        unit: 'amu',
        tolerance: 0.5,
        hint: 'Mass number = protons + neutrons.',
        explanation: '6 protons + 6 neutrons = mass number 12.',
      },
      {
        id: 'atoms-q4',
        type: 'multiple-choice',
        text: 'What is the atomic number of an element with 8 protons?',
        options: ['6', '8', '10', '16'],
        answer: '8',
        hint: 'Atomic number = number of protons.',
        explanation: 'Atomic number equals the number of protons, which is 8.',
      },
    ],
  },
  {
    id: 'states',
    unit: 1,
    title: 'States of Matter',
    grade: '6th',
    shortExplanation:
      'Matter exists as solid, liquid, or gas depending on how fast its particles move and how close they are together.',
    detailedExplanation: `**Solids:** Particles are tightly packed in a regular arrangement. They vibrate in place but cannot move freely. Solids have a **definite shape and volume**.

**Liquids:** Particles are close together but can flow past each other. Liquids have a **definite volume but no definite shape** — they take the shape of their container.

**Gases:** Particles are far apart and move quickly in all directions. Gases have **no definite shape or volume** — they expand to fill any container.

**Plasma:** A fourth state of matter — extremely hot, ionised gas. Found in stars and lightning.

**Particle energy and temperature:** As temperature increases, particles gain energy and move faster. This is what causes changes of state.

**Melting** = solid → liquid (at the melting point)
**Boiling/evaporation** = liquid → gas (at the boiling point)
**Condensation** = gas → liquid
**Freezing** = liquid → solid

**Water:** melts at 0°C and boils at 100°C (at standard pressure).`,
    simulationId: 'states',
    questions: [
      {
        id: 'states-q1',
        type: 'multiple-choice',
        text: 'In which state do particles move fastest?',
        options: ['Solid', 'Liquid', 'Gas', 'They all move at the same speed'],
        answer: 'Gas',
        hint: 'Think about which state has the most energy.',
        explanation: 'Gas particles have the most energy and move fastest, spreading out to fill their container.',
      },
      {
        id: 'states-q2',
        type: 'multiple-choice',
        text: 'What happens to particles when a liquid becomes a gas?',
        options: ['They slow down', 'They gain energy and move faster', 'They pack more tightly', 'They lose protons'],
        answer: 'They gain energy and move faster',
        hint: 'Energy is needed to change state from liquid to gas.',
        explanation: 'Particles must gain enough energy to overcome the forces holding them together in the liquid.',
      },
      {
        id: 'states-q3',
        type: 'multiple-choice',
        text: 'Which state of matter has a definite volume but no definite shape?',
        options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
        answer: 'Liquid',
        hint: 'Think about water in different containers.',
        explanation: 'Liquids keep their volume but take the shape of whatever container they are in.',
      },
      {
        id: 'states-q4',
        type: 'numeric',
        text: 'Water boils at 100°C. At what temperature in Kelvin does water boil?',
        answer: 373,
        unit: 'K',
        tolerance: 1,
        hint: 'Kelvin = Celsius + 273',
        explanation: '100 + 273 = 373 K',
      },
    ],
  },

  // ── UNIT 2: CHEMICAL REACTIONS ──────────────────────────────────────────
  {
    id: 'changes',
    unit: 2,
    title: 'Physical vs Chemical Changes',
    grade: '7th',
    shortExplanation:
      'A physical change alters shape or state but NOT the substance. A chemical change creates a new substance with different properties.',
    detailedExplanation: `**Physical Changes:** The substance remains the same — only its shape, size, or state changes.

Examples of physical changes:
- **Cutting** paper — still paper, just smaller pieces
- **Melting** ice — still H₂O, just liquid now
- **Dissolving** salt in water — both substances are still present

Physical changes are usually **reversible**. You can freeze water back to ice.

**Chemical Changes:** A new substance is formed with different properties from the original.

Examples of chemical changes:
- **Burning** wood — produces ash and gases (not wood anymore)
- **Rusting** iron — iron reacts with oxygen to form iron oxide
- **Cooking** an egg — proteins change permanently

**Signs of a chemical change:**
- Colour change
- Gas produced (bubbling)
- Heat or light given off
- A precipitate (solid) forms
- The change is hard to reverse

**Key test:** Is the same substance still there, or is a NEW substance formed?`,
    simulationId: 'changes',
    questions: [
      {
        id: 'changes-q1',
        type: 'multiple-choice',
        text: 'Which is a CHEMICAL change?',
        options: ['Ice melting into water', 'Iron rusting', 'Tearing paper', 'Salt dissolving in water'],
        answer: 'Iron rusting',
        hint: 'Which one produces a new substance?',
        explanation: 'Rusting creates iron oxide — a completely new substance. The others are physical changes.',
      },
      {
        id: 'changes-q2',
        type: 'multiple-choice',
        text: 'Which sign indicates a chemical change is occurring?',
        options: ['Water changing shape', 'A gas being produced', 'Salt dissolving', 'An ice cube shrinking'],
        answer: 'A gas being produced',
        hint: 'Look for signs that a new substance is being formed.',
        explanation: 'Producing a gas (bubbling) is a classic sign of a chemical reaction forming new substances.',
      },
      {
        id: 'changes-q3',
        type: 'multiple-choice',
        text: 'Melting ice is a physical change because:',
        options: [
          'It produces heat',
          'Water is still H₂O after melting',
          'It involves energy',
          'It changes colour',
        ],
        answer: 'Water is still H₂O after melting',
        hint: 'What defines a physical change?',
        explanation: 'In a physical change, the chemical identity stays the same. Ice and liquid water are both H₂O.',
      },
      {
        id: 'changes-q4',
        type: 'multiple-choice',
        text: 'Baking a cake is a chemical change. Why?',
        options: [
          'The batter gets warm',
          'New substances are formed that cannot be unbaked',
          'The volume changes',
          'The colour stays the same',
        ],
        answer: 'New substances are formed that cannot be unbaked',
        hint: 'Can you turn a baked cake back into raw batter?',
        explanation: 'Baking causes irreversible chemical reactions — new proteins, colours, and flavours form.',
      },
    ],
  },
  {
    id: 'mass-conservation',
    unit: 2,
    title: 'Conservation of Mass',
    grade: '7th',
    shortExplanation:
      'In any chemical reaction, mass is never created or destroyed. The total mass of reactants always equals the total mass of products.',
    detailedExplanation: `**Law of Conservation of Mass** (Antoine Lavoisier, 1789):

*"In any chemical reaction, the total mass of the reactants equals the total mass of the products."*

**Why?** Atoms are never created or destroyed in a chemical reaction — they are simply **rearranged** into new combinations. If you count all the atoms before and after, the numbers are the same.

**Example:** Hydrogen + Oxygen → Water
2H₂ + O₂ → 2H₂O
(4g)  (32g)  → (36g)
4g + 32g = 36g ✓

**Balanced equations** show this — the number of each type of atom must be equal on both sides.

**Open vs closed systems:**
- In a closed container, mass is always conserved.
- In an open system (like burning), gases may escape, making it look like mass is lost — but if you could capture all the gases, the total mass would still be the same.`,
    simulationId: 'mass-conservation',
    questions: [
      {
        id: 'mass-q1',
        type: 'multiple-choice',
        text: 'Who first stated the Law of Conservation of Mass?',
        options: ['Newton', 'Lavoisier', 'Einstein', 'Bohr'],
        answer: 'Lavoisier',
        hint: 'This French chemist worked in the 18th century.',
        explanation: 'Antoine Lavoisier established the Law of Conservation of Mass in 1789.',
      },
      {
        id: 'mass-q2',
        type: 'numeric',
        text: '20g of reactant A combines with 12g of reactant B. What is the total mass of products (in grams)?',
        answer: 32,
        unit: 'g',
        tolerance: 0.5,
        hint: 'Mass of reactants = mass of products.',
        explanation: '20g + 12g = 32g. By conservation of mass, products must also total 32g.',
      },
      {
        id: 'mass-q3',
        type: 'multiple-choice',
        text: 'In a chemical reaction, atoms are:',
        options: [
          'Created from nothing',
          'Destroyed',
          'Rearranged into new combinations',
          'Converted to energy',
        ],
        answer: 'Rearranged into new combinations',
        hint: 'Think about what actually happens to atoms during a reaction.',
        explanation: 'Atoms are never created or destroyed — they just form new bonds and arrangements.',
      },
      {
        id: 'mass-q4',
        type: 'numeric',
        text: 'A reaction produces 45g of products. How many grams of reactants were used?',
        answer: 45,
        unit: 'g',
        tolerance: 0.5,
        hint: 'Conservation of mass: reactants = products',
        explanation: 'By the law of conservation of mass, reactants and products must have equal total mass: 45g.',
      },
    ],
  },

  // ── UNIT 3: PERIODIC TABLE & BONDING ──────────────────────────────────────────
  {
    id: 'periodic-table',
    unit: 3,
    title: 'The Periodic Table',
    grade: '7th',
    shortExplanation:
      'The periodic table arranges all elements by atomic number. Elements in the same column (group) have similar properties.',
    detailedExplanation: `**Structure of the Periodic Table:**

- **Periods** (rows): Elements in the same period have the same number of electron shells. Period 1 has 1 shell, Period 2 has 2 shells, etc.
- **Groups** (columns): Elements in the same group have the same number of outer electrons, giving them similar chemical properties.

**Categories of elements:**
- **Metals** — left and centre of the table. Good conductors, shiny, malleable.
- **Nonmetals** — top right. Poor conductors, often gases or brittle solids.
- **Metalloids** — between metals and nonmetals. Have properties of both.

**Key groups:**
- **Group 1 (Alkali metals):** Very reactive (Li, Na, K). React vigorously with water.
- **Group 17 (Halogens):** Reactive nonmetals (F, Cl, Br). Form salts with metals.
- **Group 18 (Noble gases):** Very unreactive (He, Ne, Ar). Full outer shells.

**Mendeleev** arranged elements by atomic mass in 1869 and predicted undiscovered elements. Today's table is ordered by **atomic number**.

Properties of elements repeat periodically across the table — this is the **periodic law**.`,
    simulationId: 'periodic-table',
    questions: [
      {
        id: 'pt-q1',
        type: 'multiple-choice',
        text: 'Elements in the same group have similar:',
        options: ['Atomic masses', 'Chemical properties', 'Number of protons', 'States of matter'],
        answer: 'Chemical properties',
        hint: 'What do elements in the same column share?',
        explanation: 'Elements in the same group have the same number of outer electrons, giving them similar chemical properties.',
      },
      {
        id: 'pt-q2',
        type: 'multiple-choice',
        text: 'Noble gases (Group 18) are very unreactive because:',
        options: [
          'They have too many protons',
          'Their outer electron shell is full',
          'They are metals',
          'They have no electrons',
        ],
        answer: 'Their outer electron shell is full',
        hint: 'Think about why atoms react — they want a full outer shell.',
        explanation: 'Noble gases already have a full outer electron shell, so they have no need to gain or lose electrons.',
      },
      {
        id: 'pt-q3',
        type: 'multiple-choice',
        text: 'Which element is in Period 2, Group 1?',
        options: ['Hydrogen', 'Lithium', 'Sodium', 'Potassium'],
        answer: 'Lithium',
        hint: 'Period 2 = second row. Group 1 = first column.',
        explanation: 'Lithium (Li) is in the second row, first column of the periodic table.',
      },
      {
        id: 'pt-q4',
        type: 'multiple-choice',
        text: 'The periodic table is arranged in order of increasing:',
        options: ['Mass number', 'Atomic number', 'Number of neutrons', 'Reactivity'],
        answer: 'Atomic number',
        hint: 'This is the modern arrangement since Moseley.',
        explanation: 'The modern periodic table arranges elements by increasing atomic number (number of protons).',
      },
    ],
  },
  {
    id: 'bonding',
    unit: 3,
    title: 'Chemical Bonding',
    grade: '8th',
    shortExplanation:
      'Atoms bond together to form molecules and compounds. Ionic bonds transfer electrons; covalent bonds share electrons.',
    detailedExplanation: `**Why do atoms bond?** Atoms are most stable when their outer electron shell is full. Bonding allows atoms to achieve this.

**Ionic Bonding** (metal + nonmetal):
An electron is **transferred** from one atom to another. The atom that loses an electron becomes a positive ion (cation). The atom that gains an electron becomes a negative ion (anion). Opposite charges attract.

**Example:** Sodium (Na) gives 1 electron to Chlorine (Cl).
Na → Na⁺  |  Cl → Cl⁻  |  NaCl (table salt) forms.

**Properties of ionic compounds:** High melting points, conduct electricity when dissolved in water, form crystals.

**Covalent Bonding** (nonmetal + nonmetal):
Electrons are **shared** between atoms. Both atoms get to "count" the shared electrons toward their full shell.

**Examples:**
- H₂ — two hydrogen atoms share 1 pair of electrons
- H₂O — oxygen shares electrons with two hydrogen atoms

**Properties of covalent compounds:** Generally lower melting points, do not conduct electricity (usually).`,
    simulationId: 'bonding',
    questions: [
      {
        id: 'bonding-q1',
        type: 'multiple-choice',
        text: 'In an ionic bond, electrons are:',
        options: [
          'Shared equally',
          'Transferred from one atom to another',
          'Destroyed',
          'Multiplied',
        ],
        answer: 'Transferred from one atom to another',
        hint: 'Think about what "ionic" means — ions are charged particles.',
        explanation: 'Ionic bonds form when electrons are transferred, creating oppositely charged ions that attract.',
      },
      {
        id: 'bonding-q2',
        type: 'multiple-choice',
        text: 'Water (H₂O) is held together by:',
        options: ['Ionic bonds', 'Covalent bonds', 'Metallic bonds', 'No bonds'],
        answer: 'Covalent bonds',
        hint: 'Water is nonmetal + nonmetal (H and O).',
        explanation: 'Hydrogen and oxygen are both nonmetals, so they share electrons in covalent bonds.',
      },
      {
        id: 'bonding-q3',
        type: 'multiple-choice',
        text: 'Which pair would form an ionic bond?',
        options: ['H and O', 'Na and Cl', 'C and H', 'O and O'],
        answer: 'Na and Cl',
        hint: 'Ionic bonds form between a metal and a nonmetal.',
        explanation: 'Na is a metal; Cl is a nonmetal. This combination transfers electrons to form Na⁺ and Cl⁻.',
      },
      {
        id: 'bonding-q4',
        type: 'multiple-choice',
        text: 'Atoms bond to achieve:',
        options: ['More protons', 'A full outer electron shell', 'Higher temperature', 'Greater mass'],
        answer: 'A full outer electron shell',
        hint: 'What makes noble gases so stable and unreactive?',
        explanation: 'Atoms bond because having a full outer electron shell (like noble gases) is the most stable configuration.',
      },
    ],
  },

  // ── UNIT 4: ACIDS, BASES & SOLUTIONS ──────────────────────────────────────────
  {
    id: 'acids-bases',
    unit: 4,
    title: 'Acids & Bases',
    grade: '8th',
    shortExplanation:
      'Acids have pH below 7 and taste sour. Bases have pH above 7 and feel slippery. Neutral substances have pH of exactly 7.',
    detailedExplanation: `**The pH Scale** runs from 0 to 14.
- **0–6:** Acidic
- **7:** Neutral
- **8–14:** Basic (alkaline)

**Acids:**
- Produce H⁺ ions in solution
- Taste sour (e.g. lemon juice, vinegar)
- Can be corrosive
- Examples: lemon juice (pH ≈ 2), vinegar (pH ≈ 3), stomach acid (pH ≈ 2)

**Bases/Alkalis:**
- Produce OH⁻ ions in solution
- Taste bitter, feel slippery
- Examples: baking soda (pH ≈ 9), bleach (pH ≈ 13)

**Neutralisation:**
acid + base → salt + water

Example: HCl + NaOH → NaCl + H₂O

**Indicators** change colour depending on pH:
- Litmus: red in acid, blue in base
- Universal indicator: full rainbow of colours
- pH meter: gives precise numerical reading

The pH scale is **logarithmic** — each unit represents a 10× change in acidity.`,
    simulationId: 'ph',
    questions: [
      {
        id: 'acids-q1',
        type: 'multiple-choice',
        text: 'A solution with pH 3 is:',
        options: ['Strongly basic', 'Weakly basic', 'Neutral', 'Acidic'],
        answer: 'Acidic',
        hint: 'pH below 7 is acidic.',
        explanation: 'pH 3 is well below 7, placing it firmly in the acidic range.',
      },
      {
        id: 'acids-q2',
        type: 'multiple-choice',
        text: 'What is the pH of pure water?',
        options: ['0', '7', '14', '1'],
        answer: '7',
        hint: 'Neutral is right in the middle of the pH scale.',
        explanation: 'Pure water is neutral with a pH of exactly 7.',
      },
      {
        id: 'acids-q3',
        type: 'multiple-choice',
        text: 'When an acid and base react, they form:',
        options: ['Only water', 'Salt and water', 'Carbon dioxide', 'More acid'],
        answer: 'Salt and water',
        hint: 'This reaction is called neutralisation.',
        explanation: 'Neutralisation: acid + base → salt + water. The H⁺ and OH⁻ ions combine to form water.',
      },
      {
        id: 'acids-q4',
        type: 'numeric',
        text: 'A solution has pH 2. Another has pH 4. Which is 100× more acidic? (Enter the pH value)',
        answer: 2,
        unit: '(pH value)',
        tolerance: 0.5,
        hint: 'Each pH unit is 10× — so 2 units = 100×',
        explanation: 'pH 2 is 100 times more acidic than pH 4 because each step on the pH scale is a factor of 10.',
      },
    ],
  },
  {
    id: 'minerals',
    unit: 1,
    title: 'Minerals',
    grade: '7th',
    shortExplanation:
      'A mineral is a naturally occurring, solid, inorganic substance with a defined chemical composition and crystal structure. Minerals are the building blocks of rocks and have countless uses in everyday life.',
    detailedExplanation: `**What is a Mineral?**

A mineral must satisfy 5 criteria: 1) Naturally occurring (not man-made), 2) Inorganic (not from living things), 3) Solid at room temperature, 4) Definite chemical composition, 5) Ordered crystal structure. Ice is technically a mineral; glass is not (it has no crystal structure).

**Mineral Properties (how scientists identify them):**
- Colour — but unreliable alone (quartz can be clear, purple, pink, or yellow)
- Streak — the colour of the powder when scraped on a ceramic plate (more reliable than colour)
- Lustre — how light reflects: metallic, vitreous (glassy), silky, pearly, earthy
- Hardness — resistance to scratching. Measured on the Mohs scale (1=talc, softest → 10=diamond, hardest). A fingernail is ~2.5, a steel knife ~5.5
- Cleavage — the tendency to break along flat planes. Halite breaks into perfect cubes
- Fracture — irregular breaking (like glass or quartz)
- Specific gravity (density relative to water)

**The Mohs Hardness Scale:**
1-Talc, 2-Gypsum, 3-Calcite, 4-Fluorite, 5-Apatite, 6-Feldspar, 7-Quartz, 8-Topaz, 9-Corundum (ruby/sapphire), 10-Diamond

**Common Mineral Groups:**
- Silicates (quartz, feldspar) — most abundant, contain silicon and oxygen
- Carbonates (calcite, dolomite) — contain CO₃
- Oxides (magnetite, haematite) — minerals combined with oxygen
- Sulfides (pyrite, galena) — minerals combined with sulfur
- Native elements (gold, silver, copper, diamond) — single elements in mineral form

**Minerals vs Rocks:**
A rock is a mixture of one or more minerals. Granite is a rock made of quartz, feldspar, and mica. Limestone is made mostly of calcite.

**Uses of Minerals:**
- Construction: calcite (limestone/marble), gypsum (plasterboard)
- Technology: quartz (electronics, glass), magnetite (magnets)
- Food & health: halite (salt), calcium minerals in bones and teeth
- Jewellery: diamond, malachite, amethyst (purple quartz)`,
    simulationId: 'minerals',
    questions: [
      {
        id: 'minerals-q1',
        type: 'multiple-choice',
        text: 'Which of the following is NOT required for a substance to be classified as a mineral?',
        options: [
          'It must be naturally occurring',
          'It must have a definite chemical composition',
          'It must come from a living organism',
          'It must be solid at room temperature',
        ],
        answer: 'It must come from a living organism',
        hint: 'Think about the 5 requirements — living things are excluded.',
        explanation:
          'Minerals must be INORGANIC — meaning they do NOT come from living organisms. Coal (from plants) and amber (from tree resin) are not minerals.',
      },
      {
        id: 'minerals-q2',
        type: 'multiple-choice',
        text: 'What does the Mohs scale measure?',
        options: ["A mineral's colour", "A mineral's hardness", "A mineral's density", "A mineral's age"],
        answer: "A mineral's hardness",
        hint: 'It is used to compare how easily minerals scratch each other.',
        explanation:
          'The Mohs scale measures hardness — a mineral\'s resistance to being scratched. It runs from 1 (talc, softest) to 10 (diamond, hardest).',
      },
      {
        id: 'minerals-q3',
        type: 'multiple-choice',
        text: "Pyrite is nicknamed 'Fool's Gold' because:",
        options: [
          'It contains real gold',
          'Its brassy yellow colour resembles gold',
          'It is worth more than gold',
          'It is found in the same places as gold',
        ],
        answer: 'Its brassy yellow colour resembles gold',
        hint: 'Think about how gold and pyrite look similar.',
        explanation:
          'Pyrite (FeS₂) has a shiny, brassy-yellow appearance that fooled many miners into thinking they had struck gold.',
      },
      {
        id: 'minerals-q4',
        type: 'numeric',
        text: 'Diamond has a Mohs hardness of 10. Quartz has a hardness of 7. How many steps apart are they on the Mohs scale?',
        answer: 3,
        unit: 'steps',
        tolerance: 0,
        hint: 'Subtract: 10 − 7 = ?',
        explanation:
          '10 − 7 = 3 steps apart. Diamond can scratch quartz, but quartz cannot scratch diamond.',
      },
      {
        id: 'minerals-q5',
        type: 'multiple-choice',
        text: 'What is the chemical formula for common table salt (halite)?',
        options: ['CaCO₃', 'SiO₂', 'NaCl', 'Fe₃O₄'],
        answer: 'NaCl',
        hint: 'Na = Sodium, Cl = Chlorine.',
        explanation: 'Halite is NaCl — sodium chloride. It is the mineral form of the salt we use every day.',
      },
      {
        id: 'minerals-q6',
        type: 'multiple-choice',
        text: "Which mineral group is the MOST abundant in Earth's crust?",
        options: ['Carbonates', 'Sulfides', 'Silicates', 'Native elements'],
        answer: 'Silicates',
        hint: 'Think about which elements are most common in rocks.',
        explanation:
          "Silicates (containing silicon and oxygen) make up about 90% of Earth's crust. Quartz and feldspar are both silicates.",
      },
      {
        id: 'minerals-q7',
        type: 'multiple-choice',
        text: "A mineral's STREAK is:",
        options: [
          'The pattern on its surface',
          'The colour of its powdered form when scraped on a ceramic plate',
          'How shiny it appears',
          'The way it breaks',
        ],
        answer: 'The colour of its powdered form when scraped on a ceramic plate',
        hint: "It's more reliable than just looking at the mineral's colour.",
        explanation:
          'Streak is the colour of a mineral\'s powder, tested by scraping it on an unglazed ceramic plate. It is more reliable than surface colour for identification.',
      },
      {
        id: 'minerals-q8',
        type: 'multiple-choice',
        text: 'Diamond and graphite (pencil lead) are both made of pure carbon. Why are they so different?',
        options: [
          'They contain different numbers of protons',
          'The carbon atoms are arranged differently',
          'Graphite contains oxygen',
          'Diamond is artificial',
        ],
        answer: 'The carbon atoms are arranged differently',
        hint: 'Same element, different atomic arrangement = different properties.',
        explanation:
          'Both are pure carbon (C), but diamond has carbon atoms in a rigid 3D tetrahedral structure (making it incredibly hard), while graphite has atoms in flat layers that slide apart (making it soft and useful as a lubricant/pencil lead).',
      },
    ],
  },
  {
    id: 'solutions',
    unit: 4,
    title: 'Solutions & Concentration',
    grade: '8th',
    shortExplanation:
      'A solution is a mixture where one substance dissolves evenly in another. Concentration measures how much solute is dissolved per unit of solvent.',
    detailedExplanation: `**Key terms:**

- **Solute:** The substance that is dissolved (e.g. salt, sugar)
- **Solvent:** The substance doing the dissolving (e.g. water)
- **Solution:** The homogeneous mixture of solute + solvent

**Concentration** = mass of solute ÷ volume of solution
Units: g/L, g/mL, mol/L (molarity)

A more concentrated solution has more solute per unit volume.

**Saturated solution:** When no more solute can dissolve at a given temperature. Adding more solute leaves undissolved solid.

**Factors that increase dissolving rate:**
- **Increasing temperature** — particles have more energy
- **Stirring** — brings fresh solvent into contact with solute
- **Smaller particle size** — more surface area exposed

**Mixtures vs compounds:**
- A solution is a mixture — the components keep their properties and can be separated (by evaporation).
- A compound is a new substance where elements are chemically bonded.`,
    simulationId: 'solution',
    questions: [
      {
        id: 'sol-q1',
        type: 'multiple-choice',
        text: 'In saltwater, the salt is the:',
        options: ['Solvent', 'Solute', 'Solution', 'Mixture'],
        answer: 'Solute',
        hint: 'Which component is being dissolved?',
        explanation: 'Salt (the dissolved substance) is the solute. Water is the solvent.',
      },
      {
        id: 'sol-q2',
        type: 'numeric',
        text: '10g of sugar is dissolved in 200mL of water. What is the concentration in g/mL?',
        answer: 0.05,
        unit: 'g/mL',
        tolerance: 0.005,
        hint: 'Concentration = mass ÷ volume = 10 ÷ 200',
        explanation: '10g ÷ 200mL = 0.05 g/mL',
      },
      {
        id: 'sol-q3',
        type: 'multiple-choice',
        text: 'Which increases the rate of dissolving?',
        options: [
          'Cooling the solution',
          'Using larger crystals',
          'Stirring the mixture',
          'Adding more solvent first',
        ],
        answer: 'Stirring the mixture',
        hint: 'Think about what brings solute and solvent into contact faster.',
        explanation: 'Stirring brings fresh solvent into contact with undissolved solute, speeding up dissolving.',
      },
      {
        id: 'sol-q4',
        type: 'multiple-choice',
        text: 'A saturated solution is one that:',
        options: [
          'Has no solute',
          'Cannot dissolve any more solute at that temperature',
          'Is boiling',
          'Has pH 7',
        ],
        answer: 'Cannot dissolve any more solute at that temperature',
        hint: 'What happens when you keep adding sugar to water?',
        explanation: 'A saturated solution has reached its maximum solute capacity at a given temperature.',
      },
    ],
  },
];

export function getChemTopicById(id: string): Topic | undefined {
  return chemistryCurriculum.find((t) => t.id === id);
}

export function isChemTopicUnlocked(topicIndex: number, completedIds: string[]): boolean {
  if (topicIndex === 0) return true;
  const prev = chemistryCurriculum[topicIndex - 1];
  return completedIds.includes(prev.id);
}
