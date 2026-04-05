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
      {
        id: 'atoms-q5',
        type: 'multiple-choice',
        text: 'An atom has 11 protons, 12 neutrons, and 11 electrons. What is its mass number?',
        options: ['11', '22', '23', '12'],
        answer: '23',
        hint: 'Mass number = protons + neutrons.',
        explanation: '11 protons + 12 neutrons = mass number 23. This is sodium-23.',
      },
      {
        id: 'atoms-q6',
        type: 'multiple-choice',
        text: 'What charge does an electron carry?',
        options: ['Positive', 'Negative', 'Neutral', 'It depends on the element'],
        answer: 'Negative',
        hint: 'Electrons are attracted to the positively charged nucleus.',
        explanation: 'Electrons carry a negative charge (−1). Protons carry +1, neutrons are neutral.',
      },
      {
        id: 'atoms-q7',
        type: 'multiple-choice',
        text: 'Two atoms of the same element have different numbers of neutrons. They are called:',
        options: ['Ions', 'Isotopes', 'Molecules', 'Compounds'],
        answer: 'Isotopes',
        hint: 'Same element, different mass — same protons, different neutrons.',
        explanation: 'Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons, giving them different mass numbers.',
      },
      {
        id: 'atoms-q8',
        type: 'numeric',
        text: 'Sodium has atomic number 11. How many electrons does a neutral sodium atom have?',
        answer: 11,
        unit: 'electrons',
        tolerance: 0,
        hint: 'In a neutral atom, electrons = protons.',
        explanation: 'A neutral atom has equal numbers of protons and electrons. Sodium has 11 protons, so 11 electrons.',
      },
      {
        id: 'atoms-q9',
        type: 'multiple-choice',
        text: 'Which subatomic particle has virtually no mass?',
        options: ['Proton', 'Neutron', 'Electron', 'Nucleus'],
        answer: 'Electron',
        hint: 'Protons and neutrons have roughly equal mass; one other particle is nearly massless.',
        explanation: 'Electrons have a mass of about 1/1836 of a proton — so small it is considered negligible in atomic mass calculations.',
      },
      {
        id: 'atoms-q10',
        type: 'multiple-choice',
        text: 'Chlorine-35 and Chlorine-37 are isotopes. What do they have in common?',
        options: [
          'Same number of neutrons',
          'Same mass number',
          'Same number of protons',
          'Same number of electrons and neutrons',
        ],
        answer: 'Same number of protons',
        hint: 'Isotopes are the same element — same atomic number.',
        explanation: 'Both are chlorine (atomic number 17), so both have 17 protons. They differ only in neutron count: Cl-35 has 18 neutrons, Cl-37 has 20.',
      },
      {
        id: 'atoms-q11',
        type: 'multiple-choice',
        text: 'Where is most of an atom\'s mass concentrated?',
        options: ['In the electron shells', 'In the nucleus', 'Evenly throughout', 'In the outer shell only'],
        answer: 'In the nucleus',
        hint: 'Protons and neutrons are much heavier than electrons.',
        explanation: 'Protons and neutrons in the nucleus account for nearly all of an atom\'s mass. Electrons contribute almost nothing.',
      },
      {
        id: 'atoms-q12',
        type: 'multiple-choice',
        text: 'An atom loses 1 electron. It becomes:',
        options: ['A negative ion (anion)', 'A positive ion (cation)', 'A neutral atom still', 'An isotope'],
        answer: 'A positive ion (cation)',
        hint: 'Fewer electrons means less negative charge — the positive charge wins.',
        explanation: 'Losing an electron leaves more protons than electrons, giving the atom a net +1 charge. It becomes a cation.',
      },
      {
        id: 'atoms-q13',
        type: 'numeric',
        text: 'Oxygen has atomic number 8. Its most common isotope is oxygen-16. How many neutrons does it have?',
        answer: 8,
        unit: 'neutrons',
        tolerance: 0,
        hint: 'Neutrons = mass number − atomic number.',
        explanation: 'Neutrons = 16 − 8 = 8 neutrons.',
      },
      {
        id: 'atoms-q14',
        type: 'multiple-choice',
        text: 'The second electron shell can hold a maximum of how many electrons?',
        options: ['2', '4', '8', '18'],
        answer: '8',
        hint: 'The second shell is larger than the first.',
        explanation: 'The second electron shell can hold up to 8 electrons. So elements in period 2 fill this shell across the row.',
      },
      {
        id: 'atoms-q15',
        type: 'multiple-choice',
        text: 'A neutral atom of magnesium (atomic number 12) has how many electrons in its outermost shell?',
        options: ['2', '8', '12', '4'],
        answer: '2',
        hint: 'Fill the shells in order: 2 in shell 1, 8 in shell 2, then the rest in shell 3.',
        explanation: 'Magnesium has 12 electrons: 2 in shell 1, 8 in shell 2, and 2 in shell 3. Its outer shell has 2 electrons.',
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
      {
        id: 'states-q5',
        type: 'multiple-choice',
        text: 'The process of a solid turning directly into a gas without passing through the liquid state is called:',
        options: ['Evaporation', 'Condensation', 'Sublimation', 'Deposition'],
        answer: 'Sublimation',
        hint: 'Dry ice (frozen CO₂) does this at room temperature.',
        explanation: 'Sublimation is when a solid converts directly to a gas. Dry ice and iodine crystals are common examples.',
      },
      {
        id: 'states-q6',
        type: 'multiple-choice',
        text: 'Which state of matter is compressible?',
        options: ['Solid only', 'Liquid only', 'Gas only', 'Both solid and liquid'],
        answer: 'Gas only',
        hint: 'Think about the space between particles in each state.',
        explanation: 'Gases can be compressed because particles are far apart with lots of empty space between them. Solids and liquids are essentially incompressible.',
      },
      {
        id: 'states-q7',
        type: 'multiple-choice',
        text: 'At the melting point of a substance, which two states are in equilibrium?',
        options: ['Solid and gas', 'Liquid and gas', 'Solid and liquid', 'Plasma and gas'],
        answer: 'Solid and liquid',
        hint: 'The melting point is where the solid and liquid phases coexist.',
        explanation: 'At the melting point, both the solid and liquid phases exist together. Adding heat converts solid to liquid without changing temperature until all solid has melted.',
      },
      {
        id: 'states-q8',
        type: 'numeric',
        text: 'Water freezes at 0°C. What is this temperature in Kelvin?',
        answer: 273,
        unit: 'K',
        tolerance: 1,
        hint: 'Kelvin = Celsius + 273.',
        explanation: '0 + 273 = 273 K. This is also called absolute zero of water\'s freeze point.',
      },
      {
        id: 'states-q9',
        type: 'multiple-choice',
        text: 'Why do solids have a definite shape?',
        options: [
          'Particles are moving rapidly',
          'Particles are held in fixed positions by strong forces',
          'There is no space between particles',
          'Particles have no energy',
        ],
        answer: 'Particles are held in fixed positions by strong forces',
        hint: 'In a solid, particles vibrate but cannot move to new positions.',
        explanation: 'Strong intermolecular forces in a solid hold particles in a fixed, regular arrangement, giving solids a definite shape.',
      },
      {
        id: 'states-q10',
        type: 'multiple-choice',
        text: 'When steam (water vapour) cools and becomes liquid water, this is called:',
        options: ['Evaporation', 'Melting', 'Condensation', 'Freezing'],
        answer: 'Condensation',
        hint: 'Gas → liquid.',
        explanation: 'Condensation is the change from gas to liquid. Water vapour condensing on a cold glass is a common example.',
      },
      {
        id: 'states-q11',
        type: 'multiple-choice',
        text: 'A substance has a fixed volume but expands to fill its container. What state is it in?',
        options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
        answer: 'Gas',
        hint: 'Only gases expand to fill their container completely.',
        explanation: 'Gases have no fixed shape or volume — they expand to fill whatever container they are in.',
      },
      {
        id: 'states-q12',
        type: 'multiple-choice',
        text: 'What is the fourth state of matter, found in stars and lightning?',
        options: ['Supercooled liquid', 'Plasma', 'Bose-Einstein condensate', 'Superfluid'],
        answer: 'Plasma',
        hint: 'It is made of ionised gas at extremely high temperatures.',
        explanation: 'Plasma is a high-energy state of ionised gas. It is found in the sun, lightning bolts, and neon signs.',
      },
      {
        id: 'states-q13',
        type: 'multiple-choice',
        text: 'As temperature increases in a gas, what happens to the pressure (if volume stays constant)?',
        options: ['Pressure decreases', 'Pressure increases', 'Pressure stays the same', 'Gas becomes a liquid'],
        answer: 'Pressure increases',
        hint: 'Faster particles hit the container walls more often and harder.',
        explanation: 'Higher temperature means particles move faster and collide with container walls more frequently and with greater force, increasing pressure.',
      },
      {
        id: 'states-q14',
        type: 'multiple-choice',
        text: 'During a change of state (e.g. melting), the temperature of a pure substance:',
        options: [
          'Rises continuously',
          'Drops',
          'Remains constant',
          'Changes unpredictably',
        ],
        answer: 'Remains constant',
        hint: 'The energy goes into breaking bonds, not raising temperature.',
        explanation: 'During a change of state, added energy breaks intermolecular bonds rather than increasing particle speed, so temperature stays flat until the state change is complete.',
      },
      {
        id: 'states-q15',
        type: 'multiple-choice',
        text: 'Liquid particles compared to gas particles are:',
        options: [
          'Farther apart and slower',
          'Closer together and slower',
          'Farther apart and faster',
          'The same distance apart but slower',
        ],
        answer: 'Closer together and slower',
        hint: 'Liquids are denser than gases and have less energy.',
        explanation: 'Liquid particles are much closer together than gas particles (giving liquids their definite volume) and move more slowly because they have less kinetic energy.',
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
      {
        id: 'changes-q5',
        type: 'multiple-choice',
        text: 'Which of these is a PHYSICAL change?',
        options: [
          'Wood burning in a fireplace',
          'A copper statue turning green over time',
          'Crushing a can of aluminium',
          'Food digesting in your stomach',
        ],
        answer: 'Crushing a can of aluminium',
        hint: 'Which one does NOT produce a new substance?',
        explanation: 'Crushing a can changes its shape but the aluminium is still aluminium — no new substance is formed. All others involve chemical reactions.',
      },
      {
        id: 'changes-q6',
        type: 'multiple-choice',
        text: 'Dissolving salt in water is generally considered a physical change because:',
        options: [
          'It produces a gas',
          'The salt can be recovered by evaporating the water',
          'The water changes colour',
          'Heat is released',
        ],
        answer: 'The salt can be recovered by evaporating the water',
        hint: 'Physical changes are usually reversible.',
        explanation: 'Dissolving is physical because the salt (NaCl) is still present in solution and can be recovered by evaporation — no new substance was created.',
      },
      {
        id: 'changes-q7',
        type: 'multiple-choice',
        text: 'A precipitate forming in a solution is a sign of:',
        options: ['A physical change', 'A chemical change', 'A change of state', 'Evaporation'],
        answer: 'A chemical change',
        hint: 'A new solid substance appearing is one of the key indicators.',
        explanation: 'A precipitate (an insoluble solid that forms in solution) indicates that a chemical reaction has produced a new substance.',
      },
      {
        id: 'changes-q8',
        type: 'multiple-choice',
        text: 'Which of the following BEST distinguishes a chemical change from a physical change?',
        options: [
          'A chemical change always releases heat',
          'A chemical change always involves colour change',
          'A chemical change produces one or more new substances',
          'A chemical change always involves a gas',
        ],
        answer: 'A chemical change produces one or more new substances',
        hint: 'Focus on what defines a chemical change at its core.',
        explanation: 'The defining feature of a chemical change is that new substances with different chemical properties are produced. No single indicator (heat, colour, gas) is always present.',
      },
      {
        id: 'changes-q9',
        type: 'multiple-choice',
        text: 'Magnesium ribbon burns with a bright white light, producing a white powder. This is:',
        options: [
          'A physical change because it glows',
          'A physical change because it is still a solid',
          'A chemical change because magnesium oxide (new substance) is formed',
          'A physical change because energy is released',
        ],
        answer: 'A chemical change because magnesium oxide (new substance) is formed',
        hint: 'Ask: is a new substance formed?',
        explanation: 'Burning magnesium reacts with oxygen to produce magnesium oxide (MgO) — a completely different substance. This is definitely a chemical change.',
      },
      {
        id: 'changes-q10',
        type: 'multiple-choice',
        text: 'Which process is an example of a chemical change in everyday life?',
        options: [
          'Chopping vegetables',
          'Ice forming in a freezer',
          'Milk going sour',
          'Mixing sand and gravel',
        ],
        answer: 'Milk going sour',
        hint: 'Which one cannot be undone and produces new substances?',
        explanation: 'Milk souring involves bacteria converting lactose into lactic acid — new chemical substances. The other options are all physical changes.',
      },
      {
        id: 'changes-q11',
        type: 'multiple-choice',
        text: 'In a chemical change, what happens to the atoms of the reactants?',
        options: [
          'They are destroyed',
          'They are rearranged to form new substances',
          'They stay in the same arrangement',
          'They lose mass',
        ],
        answer: 'They are rearranged to form new substances',
        hint: 'Atoms are never created or destroyed — only reorganised.',
        explanation: 'Chemical changes involve breaking old bonds and forming new ones. The atoms are the same, just rearranged into different molecules.',
      },
      {
        id: 'changes-q12',
        type: 'multiple-choice',
        text: 'An exothermic reaction is one that:',
        options: [
          'Absorbs heat from surroundings',
          'Releases heat to surroundings',
          'Only occurs at high temperatures',
          'Produces water as a product',
        ],
        answer: 'Releases heat to surroundings',
        hint: '"Exo" means out — heat goes out.',
        explanation: 'Exothermic reactions release energy (heat) to the surroundings. Burning and hand warmers are exothermic. Endothermic reactions absorb heat.',
      },
      {
        id: 'changes-q13',
        type: 'multiple-choice',
        text: 'Photosynthesis in plants is a chemical change because:',
        options: [
          'Plants change colour',
          'Water and CO₂ are converted into glucose and oxygen (new substances)',
          'Light is involved',
          'It is reversible',
        ],
        answer: 'Water and CO₂ are converted into glucose and oxygen (new substances)',
        hint: 'New substances are the hallmark of a chemical change.',
        explanation: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Carbon dioxide and water become glucose and oxygen — entirely new substances.',
      },
      {
        id: 'changes-q14',
        type: 'multiple-choice',
        text: 'Which of the following is evidence that a chemical reaction might be occurring?',
        options: [
          'A substance is being cut into pieces',
          'A substance changes colour and produces an odour',
          'Water is poured into a different container',
          'Ice is left in a warm room',
        ],
        answer: 'A substance changes colour and produces an odour',
        hint: 'Look for multiple indicators: colour change, odour, gas, light, or temperature change.',
        explanation: 'Colour change combined with a new odour strongly suggests new substances have been formed — a chemical change. Cutting and pouring are physical; ice melting is a change of state.',
      },
      {
        id: 'changes-q15',
        type: 'multiple-choice',
        text: 'A student mixes vinegar and baking soda. Bubbling occurs. This is a:',
        options: [
          'Physical change — the substances are just mixing',
          'Physical change — the bubbles are just air',
          'Chemical change — CO₂ gas is produced as a new substance',
          'Chemical change — the mixture gets colder only',
        ],
        answer: 'Chemical change — CO₂ gas is produced as a new substance',
        hint: 'CH₃COOH + NaHCO₃ → CO₂ + H₂O + CH₃COONa.',
        explanation: 'Mixing vinegar (acetic acid) and baking soda (sodium bicarbonate) is an acid-base reaction that produces CO₂, water, and sodium acetate — all new substances.',
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
      {
        id: 'mass-q5',
        type: 'multiple-choice',
        text: 'A piece of wood is burned in a closed metal container. What happens to the total mass of the container and contents?',
        options: [
          'It decreases because the wood is gone',
          'It increases because fire adds mass',
          'It stays the same',
          'It depends on the temperature',
        ],
        answer: 'It stays the same',
        hint: 'Closed system — nothing escapes.',
        explanation: 'In a closed system, all gases produced stay inside. Total mass (wood + oxygen → ash + gases) is conserved.',
      },
      {
        id: 'mass-q6',
        type: 'multiple-choice',
        text: 'Why does a burning log appear to lose mass (in an open system)?',
        options: [
          'Atoms are destroyed by fire',
          'CO₂ and water vapour escape into the air',
          'The log converts mass to energy',
          'Neutrons are released',
        ],
        answer: 'CO₂ and water vapour escape into the air',
        hint: 'The gases produced just float away — but the atoms are still there.',
        explanation: 'The carbon and hydrogen in wood react with oxygen to produce CO₂ and H₂O gases, which escape. If you could capture them, total mass would be conserved.',
      },
      {
        id: 'mass-q7',
        type: 'numeric',
        text: 'In the reaction 2H₂ + O₂ → 2H₂O, if 4g of H₂ reacts with 32g of O₂, how many grams of water are produced?',
        answer: 36,
        unit: 'g',
        tolerance: 0.5,
        hint: 'Total mass of reactants = total mass of products.',
        explanation: '4g + 32g = 36g of water. Conservation of mass: reactants total 36g so products must total 36g.',
      },
      {
        id: 'mass-q8',
        type: 'multiple-choice',
        text: 'A balanced chemical equation shows conservation of mass because:',
        options: [
          'Both sides have the same number of molecules',
          'Both sides have the same number of atoms of each element',
          'The products are always lighter than reactants',
          'Coefficients are always equal on both sides',
        ],
        answer: 'Both sides have the same number of atoms of each element',
        hint: 'Count the atoms, not the molecules.',
        explanation: 'A balanced equation has the same number of each type of atom on both sides, reflecting that atoms are rearranged not destroyed.',
      },
      {
        id: 'mass-q9',
        type: 'multiple-choice',
        text: 'Which equation is balanced?',
        options: [
          'H₂ + O₂ → H₂O',
          '2H₂ + O₂ → 2H₂O',
          'H₂ + O₂ → 2H₂O',
          '2H₂ + 2O₂ → 2H₂O',
        ],
        answer: '2H₂ + O₂ → 2H₂O',
        hint: 'Count H and O atoms on each side.',
        explanation: '2H₂ + O₂ → 2H₂O: Left: 4H + 2O. Right: 4H + 2O. Balanced! All other options have unequal atom counts.',
      },
      {
        id: 'mass-q10',
        type: 'numeric',
        text: 'Reaction: C + O₂ → CO₂. If 12g of carbon reacts completely with 32g of oxygen, what mass of CO₂ is produced?',
        answer: 44,
        unit: 'g',
        tolerance: 0.5,
        hint: 'Mass of products = mass of reactants.',
        explanation: '12g C + 32g O₂ = 44g CO₂. Conservation of mass always holds.',
      },
      {
        id: 'mass-q11',
        type: 'multiple-choice',
        text: 'Calcium carbonate (CaCO₃) decomposes: CaCO₃ → CaO + CO₂. If 100g of CaCO₃ produces 56g of CaO, how much CO₂ is released?',
        options: ['44g', '56g', '100g', '28g'],
        answer: '44g',
        hint: 'Products must total the same mass as reactants.',
        explanation: '100g reactant → 56g CaO + x g CO₂. x = 100 − 56 = 44g CO₂.',
      },
      {
        id: 'mass-q12',
        type: 'multiple-choice',
        text: 'Which scientist\'s careful experiments with closed containers proved that mass is conserved in reactions?',
        options: ['Dalton', 'Lavoisier', 'Bohr', 'Mendeleev'],
        answer: 'Lavoisier',
        hint: 'He used precise scales and sealed flasks in 18th-century France.',
        explanation: 'Antoine Lavoisier used sealed flasks and precise balances to show that total mass never changes in a chemical reaction.',
      },
      {
        id: 'mass-q13',
        type: 'multiple-choice',
        text: 'Iron (Fe) reacts with sulfur (S) to form iron sulfide (FeS). If 56g of Fe reacts with 32g of S, what mass of FeS is produced?',
        options: ['56g', '32g', '88g', '24g'],
        answer: '88g',
        hint: 'Total reactant mass = total product mass.',
        explanation: '56g Fe + 32g S = 88g FeS. Conservation of mass.',
      },
      {
        id: 'mass-q14',
        type: 'multiple-choice',
        text: 'In a neutralisation reaction, 25g of acid is mixed with 25g of base. The reaction produces a salt and water. What is the total mass of salt and water produced?',
        options: ['25g', '50g', 'Less than 50g', 'More than 50g'],
        answer: '50g',
        hint: 'Conservation of mass applies to neutralisation reactions too.',
        explanation: '25g + 25g = 50g. By conservation of mass, total products must equal total reactants.',
      },
      {
        id: 'mass-q15',
        type: 'multiple-choice',
        text: 'The law of conservation of mass is consistent with Dalton\'s atomic theory because:',
        options: [
          'Atoms can be created during reactions',
          'Atoms of different elements weigh the same',
          'Atoms are indestructible and simply rearrange in reactions',
          'All reactions release energy',
        ],
        answer: 'Atoms are indestructible and simply rearrange in reactions',
        hint: 'If atoms cannot be created or destroyed, what must be true about mass?',
        explanation: 'Dalton proposed that atoms are indestructible. Since atoms just rearrange into new molecules without being created or destroyed, the total mass must remain constant.',
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
      {
        id: 'pt-q5',
        type: 'multiple-choice',
        text: 'How many periods (rows) are in the standard periodic table?',
        options: ['4', '6', '7', '8'],
        answer: '7',
        hint: 'Count from hydrogen (period 1) down to the heaviest naturally occurring elements.',
        explanation: 'The standard periodic table has 7 periods (rows). Period 7 includes the heaviest elements.',
      },
      {
        id: 'pt-q6',
        type: 'multiple-choice',
        text: 'Which group contains the alkali metals?',
        options: ['Group 1', 'Group 2', 'Group 17', 'Group 18'],
        answer: 'Group 1',
        hint: 'They are in the first column — very reactive metals.',
        explanation: 'Group 1 contains the alkali metals (Li, Na, K, Rb, Cs, Fr). They are highly reactive and have 1 outer electron.',
      },
      {
        id: 'pt-q7',
        type: 'multiple-choice',
        text: 'Which element has the highest electronegativity (most likely to attract electrons)?',
        options: ['Oxygen', 'Fluorine', 'Chlorine', 'Nitrogen'],
        answer: 'Fluorine',
        hint: 'It is in the top-right corner of the periodic table.',
        explanation: 'Fluorine (F) is the most electronegative element — it has the greatest tendency to attract electrons in a bond.',
      },
      {
        id: 'pt-q8',
        type: 'multiple-choice',
        text: 'What is the symbol for the element with atomic number 26?',
        options: ['Co', 'Fe', 'Ni', 'Cu'],
        answer: 'Fe',
        hint: 'This element is the main component of steel.',
        explanation: 'Iron (Fe, from the Latin "ferrum") has atomic number 26.',
      },
      {
        id: 'pt-q9',
        type: 'multiple-choice',
        text: 'Mendeleev left gaps in his periodic table because:',
        options: [
          'He ran out of paper',
          'He predicted elements that had not yet been discovered',
          'Some elements had no properties',
          'He only included metals',
        ],
        answer: 'He predicted elements that had not yet been discovered',
        hint: 'His table had predictive power — a strength, not a flaw.',
        explanation: 'Mendeleev left gaps where he predicted undiscovered elements would fit. When gallium and germanium were later discovered, they matched his predictions closely.',
      },
      {
        id: 'pt-q10',
        type: 'multiple-choice',
        text: 'As you move across a period from left to right, what generally happens to the atomic radius?',
        options: [
          'It increases',
          'It decreases',
          'It stays the same',
          'It first increases then decreases',
        ],
        answer: 'It decreases',
        hint: 'More protons pull electrons closer to the nucleus.',
        explanation: 'Moving left to right across a period, the number of protons increases while electrons are added to the same shell. The stronger nuclear pull makes the radius smaller.',
      },
      {
        id: 'pt-q11',
        type: 'multiple-choice',
        text: 'The halogens (Group 17) are highly reactive because:',
        options: [
          'They have a full outer shell',
          'They need only 1 electron to complete their outer shell',
          'They are all gases',
          'They have many neutrons',
        ],
        answer: 'They need only 1 electron to complete their outer shell',
        hint: 'A full shell has 8 electrons — halogens have 7.',
        explanation: 'Halogens have 7 outer electrons and need just 1 more to fill their shell. This makes them very reactive — they readily gain or share that electron.',
      },
      {
        id: 'pt-q12',
        type: 'multiple-choice',
        text: 'Which of the following is a metalloid?',
        options: ['Aluminium', 'Silicon', 'Sulfur', 'Calcium'],
        answer: 'Silicon',
        hint: 'It separates the metals from the nonmetals on the table.',
        explanation: 'Silicon (Si) is a metalloid — it has properties of both metals and nonmetals. It is the basis of semiconductors and computer chips.',
      },
      {
        id: 'pt-q13',
        type: 'multiple-choice',
        text: 'Elements in the same period have the same number of:',
        options: ['Outer electrons', 'Neutrons', 'Electron shells', 'Protons'],
        answer: 'Electron shells',
        hint: 'The period number tells you how many shells there are.',
        explanation: 'All elements in period 3, for example, have 3 electron shells. The period number equals the number of occupied electron shells.',
      },
      {
        id: 'pt-q14',
        type: 'numeric',
        text: 'Sodium is in Group 1, Period 3. How many outer (valence) electrons does it have?',
        answer: 1,
        unit: 'electrons',
        tolerance: 0,
        hint: 'Group number = number of outer electrons (for Groups 1 and 2).',
        explanation: 'Sodium is in Group 1, so it has 1 outer electron. This is why it readily loses that electron to form Na⁺.',
      },
      {
        id: 'pt-q15',
        type: 'multiple-choice',
        text: 'Which property generally increases as you go DOWN a group in the periodic table?',
        options: [
          'Electronegativity',
          'Ionisation energy',
          'Atomic radius',
          'Number of protons per shell',
        ],
        answer: 'Atomic radius',
        hint: 'Going down, you add more electron shells.',
        explanation: 'Going down a group, each successive element has one more electron shell, making the atom larger. Atomic radius increases down a group.',
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
      {
        id: 'bonding-q5',
        type: 'multiple-choice',
        text: 'When sodium (Na) forms an ionic bond with chlorine (Cl), sodium:',
        options: [
          'Gains 1 electron and becomes Na⁻',
          'Loses 1 electron and becomes Na⁺',
          'Shares 1 electron',
          'Gains a proton',
        ],
        answer: 'Loses 1 electron and becomes Na⁺',
        hint: 'Na has 1 outer electron — it is easier to lose it than gain 7 more.',
        explanation: 'Sodium loses its single outer electron to chlorine, becoming Na⁺. Chlorine gains it to become Cl⁻. The opposite charges attract.',
      },
      {
        id: 'bonding-q6',
        type: 'multiple-choice',
        text: 'Which compound contains a covalent bond?',
        options: ['NaCl (table salt)', 'MgO (magnesium oxide)', 'CO₂ (carbon dioxide)', 'KBr (potassium bromide)'],
        answer: 'CO₂ (carbon dioxide)',
        hint: 'Covalent bonds form between nonmetals.',
        explanation: 'Carbon and oxygen are both nonmetals, so CO₂ has covalent bonds. The others all involve metals bonding with nonmetals (ionic).',
      },
      {
        id: 'bonding-q7',
        type: 'multiple-choice',
        text: 'In a double covalent bond, how many electrons are shared?',
        options: ['1', '2', '4', '6'],
        answer: '4',
        hint: 'A single bond shares 2 electrons (1 pair). A double bond shares twice as many.',
        explanation: 'A single covalent bond shares 2 electrons (1 pair). A double bond shares 4 electrons (2 pairs). Example: O₂ has a double bond.',
      },
      {
        id: 'bonding-q8',
        type: 'multiple-choice',
        text: 'Ionic compounds typically have:',
        options: [
          'Low melting points',
          'High melting points',
          'No electrical conductivity when dissolved',
          'Slippery textures',
        ],
        answer: 'High melting points',
        hint: 'Strong ionic attractions between ions require a lot of energy to break.',
        explanation: 'Ionic compounds form crystal lattices with strong electrostatic forces between ions. A lot of energy is needed to break these, giving high melting points.',
      },
      {
        id: 'bonding-q9',
        type: 'multiple-choice',
        text: 'Which type of bonding holds metal atoms together?',
        options: ['Ionic', 'Covalent', 'Metallic', 'Hydrogen bonding'],
        answer: 'Metallic',
        hint: 'Metal atoms share their outer electrons in a "sea".',
        explanation: 'Metallic bonding involves a lattice of positive metal ions surrounded by a "sea" of delocalised electrons. This gives metals their conductivity and malleability.',
      },
      {
        id: 'bonding-q10',
        type: 'multiple-choice',
        text: 'Why can ionic compounds conduct electricity when dissolved in water, but not when solid?',
        options: [
          'Water adds electrons to the compound',
          'Dissolved ions are free to move and carry charge; in solid form they are fixed',
          'Solids absorb electricity',
          'Water reacts chemically with the ions',
        ],
        answer: 'Dissolved ions are free to move and carry charge; in solid form they are fixed',
        hint: 'Electrical conductivity requires mobile charge carriers.',
        explanation: 'In a solid ionic lattice, ions are locked in place and cannot move. When dissolved, the ions separate and become mobile, allowing them to carry electrical current.',
      },
      {
        id: 'bonding-q11',
        type: 'multiple-choice',
        text: 'Chlorine gas (Cl₂) is held together by a:',
        options: ['Ionic bond', 'Single covalent bond', 'Double covalent bond', 'Metallic bond'],
        answer: 'Single covalent bond',
        hint: 'Each Cl atom needs 1 more electron to complete its outer shell.',
        explanation: 'Each chlorine atom has 7 outer electrons and needs 1 more. They share 1 pair of electrons (single covalent bond) to each effectively have 8.',
      },
      {
        id: 'bonding-q12',
        type: 'multiple-choice',
        text: 'What is the charge of a chloride ion (Cl⁻) and why?',
        options: [
          '+1, because it lost a proton',
          '−1, because it gained 1 electron',
          '+1, because it gained a proton',
          '−2, because it gained 2 electrons',
        ],
        answer: '−1, because it gained 1 electron',
        hint: 'Cl has 7 outer electrons and gains 1 more.',
        explanation: 'Chlorine gains 1 electron (giving it 8 outer electrons like argon), making it have more electrons than protons — a −1 charge.',
      },
      {
        id: 'bonding-q13',
        type: 'multiple-choice',
        text: 'Which of the following molecules has a triple covalent bond?',
        options: ['H₂', 'O₂', 'N₂', 'F₂'],
        answer: 'N₂',
        hint: 'Nitrogen atoms have 5 outer electrons and need 3 more each.',
        explanation: 'N₂ has a triple bond (3 shared pairs = 6 electrons). Each nitrogen needs 3 more electrons to complete its shell, so they share 3 pairs.',
      },
      {
        id: 'bonding-q14',
        type: 'multiple-choice',
        text: 'Covalent compounds generally have lower melting points than ionic compounds because:',
        options: [
          'They contain fewer electrons',
          'Intermolecular forces between covalent molecules are weaker than ionic lattice forces',
          'They are always gases',
          'Their atoms are larger',
        ],
        answer: 'Intermolecular forces between covalent molecules are weaker than ionic lattice forces',
        hint: 'Compare the strength of forces that must be overcome to melt each type.',
        explanation: 'Ionic compounds have strong electrostatic forces throughout a crystal lattice. Most covalent molecules only have weaker van der Waals forces between molecules, requiring less energy to melt.',
      },
      {
        id: 'bonding-q15',
        type: 'multiple-choice',
        text: 'Magnesium oxide (MgO) forms when Mg gives 2 electrons to O. What ions are formed?',
        options: ['Mg⁺ and O⁻', 'Mg²⁺ and O²⁻', 'Mg⁻ and O⁺', 'Mg²⁻ and O²⁺'],
        answer: 'Mg²⁺ and O²⁻',
        hint: 'Mg loses 2 electrons; O gains 2 electrons.',
        explanation: 'Magnesium has 2 outer electrons and loses both → Mg²⁺. Oxygen has 6 outer electrons and needs 2 more → O²⁻. They attract to form MgO.',
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
      {
        id: 'acids-q5',
        type: 'multiple-choice',
        text: 'What colour does litmus paper turn in an acidic solution?',
        options: ['Blue', 'Green', 'Red', 'Yellow'],
        answer: 'Red',
        hint: 'Litmus turns one colour in acid, another in base.',
        explanation: 'Litmus paper turns red in acidic solutions and blue in basic (alkaline) solutions.',
      },
      {
        id: 'acids-q6',
        type: 'multiple-choice',
        text: 'Which of these is a strong acid?',
        options: ['Vinegar (acetic acid)', 'Lemon juice (citric acid)', 'Hydrochloric acid (HCl)', 'Carbonic acid (H₂CO₃)'],
        answer: 'Hydrochloric acid (HCl)',
        hint: 'Strong acids completely dissociate in water.',
        explanation: 'HCl is a strong acid — it fully dissociates into H⁺ and Cl⁻ ions in water. The others are weak acids that only partially dissociate.',
      },
      {
        id: 'acids-q7',
        type: 'multiple-choice',
        text: 'Acids produce which ion in aqueous solution?',
        options: ['OH⁻', 'Na⁺', 'H⁺', 'Cl⁻'],
        answer: 'H⁺',
        hint: 'The Arrhenius definition of an acid.',
        explanation: 'Acids produce hydrogen ions (H⁺) in water. Bases produce hydroxide ions (OH⁻). The H⁺ is what causes acidity.',
      },
      {
        id: 'acids-q8',
        type: 'multiple-choice',
        text: 'What is the product of HCl + NaOH?',
        options: ['H₂O + NaCl', 'HNaCl + O', 'Na + HClOH', 'NaO + HCl₂'],
        answer: 'H₂O + NaCl',
        hint: 'acid + base → salt + water.',
        explanation: 'HCl (hydrochloric acid) + NaOH (sodium hydroxide) → NaCl (table salt) + H₂O (water).',
      },
      {
        id: 'acids-q9',
        type: 'multiple-choice',
        text: 'A solution with pH 11 is:',
        options: ['Strongly acidic', 'Weakly acidic', 'Neutral', 'Strongly basic'],
        answer: 'Strongly basic',
        hint: 'pH above 7 is basic; closer to 14 means more basic.',
        explanation: 'pH 11 is well above 7 and close to the basic end of the scale — it is strongly alkaline (basic).',
      },
      {
        id: 'acids-q10',
        type: 'multiple-choice',
        text: 'How much more acidic is a solution of pH 4 compared to pH 6?',
        options: ['2×', '10×', '100×', '1000×'],
        answer: '100×',
        hint: 'The pH scale is logarithmic — each unit = 10×.',
        explanation: 'pH 4 vs pH 6 is a difference of 2 units. Each unit = 10×, so 2 units = 10² = 100 times more acidic.',
      },
      {
        id: 'acids-q11',
        type: 'multiple-choice',
        text: 'Which of the following is a base?',
        options: ['Lemon juice', 'Vinegar', 'Baking soda (NaHCO₃)', 'Tomato juice'],
        answer: 'Baking soda (NaHCO₃)',
        hint: 'Bases have pH above 7.',
        explanation: 'Baking soda (sodium bicarbonate) is a weak base with pH around 8–9. Lemon juice, vinegar, and tomato juice are all acidic.',
      },
      {
        id: 'acids-q12',
        type: 'multiple-choice',
        text: 'Universal indicator is useful because:',
        options: [
          'It only shows if a solution is acidic',
          'It gives a full range of colours corresponding to different pH values',
          'It tells you the exact concentration of an acid',
          'It only works with strong acids',
        ],
        answer: 'It gives a full range of colours corresponding to different pH values',
        hint: 'Unlike litmus, universal indicator gives more than two colours.',
        explanation: 'Universal indicator changes through a rainbow of colours across pH 1–14, allowing you to estimate the approximate pH of a solution.',
      },
      {
        id: 'acids-q13',
        type: 'multiple-choice',
        text: 'Acids react with metals to produce:',
        options: ['Salt and oxygen', 'Salt and hydrogen gas', 'Water and carbon dioxide', 'Only salt'],
        answer: 'Salt and hydrogen gas',
        hint: 'This is why acids corrode metals — a gas is produced.',
        explanation: 'Acid + metal → salt + hydrogen gas. For example: 2HCl + Mg → MgCl₂ + H₂↑.',
      },
      {
        id: 'acids-q14',
        type: 'multiple-choice',
        text: 'Acid rain forms when sulfur dioxide (SO₂) reacts with water in the atmosphere. The product is:',
        options: ['Sulfuric acid (H₂SO₄)', 'Sodium sulfate', 'Hydrochloric acid', 'Carbonic acid'],
        answer: 'Sulfuric acid (H₂SO₄)',
        hint: 'SO₂ + water → sulfurous/sulfuric acid.',
        explanation: 'SO₂ released from burning fossil fuels reacts with water and oxygen in clouds to form sulfuric acid (H₂SO₄), making the rain acidic.',
      },
      {
        id: 'acids-q15',
        type: 'multiple-choice',
        text: 'At the equivalence point of a neutralisation reaction:',
        options: [
          'The solution is always pH 7',
          'Moles of acid equal moles of base',
          'All the water evaporates',
          'The acid becomes a base',
        ],
        answer: 'Moles of acid equal moles of base',
        hint: 'The equivalence point is defined by stoichiometry, not necessarily pH 7.',
        explanation: 'At the equivalence point, the moles of H⁺ from the acid exactly equal the moles of OH⁻ from the base. For strong acid + strong base, pH = 7, but this is not always the case.',
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
      {
        id: 'minerals-q9',
        type: 'multiple-choice',
        text: 'A mineral scratches glass (hardness ~5.5) but is scratched by quartz (hardness 7). What is its approximate Mohs hardness?',
        options: ['Less than 5.5', 'Between 5.5 and 7', 'Exactly 7', 'Greater than 7'],
        answer: 'Between 5.5 and 7',
        hint: 'It is harder than glass but softer than quartz.',
        explanation: 'If a mineral scratches glass (5.5) but is scratched by quartz (7), its hardness must be between 5.5 and 7 on the Mohs scale. Feldspar (6) would fit.',
      },
      {
        id: 'minerals-q10',
        type: 'multiple-choice',
        text: 'Which mineral group contains calcite and dolomite?',
        options: ['Silicates', 'Sulfides', 'Carbonates', 'Oxides'],
        answer: 'Carbonates',
        hint: 'The name reflects the CO₃ group they contain.',
        explanation: 'Calcite (CaCO₃) and dolomite (CaMg(CO₃)₂) are carbonates — they contain the carbonate ion (CO₃²⁻). Limestone and marble are rocks made mostly of calcite.',
      },
      {
        id: 'minerals-q11',
        type: 'multiple-choice',
        text: 'What property is being described: "The way a mineral breaks along flat, smooth surfaces"?',
        options: ['Fracture', 'Lustre', 'Cleavage', 'Streak'],
        answer: 'Cleavage',
        hint: 'It is different from fracture — the break follows crystal structure.',
        explanation: 'Cleavage is when a mineral breaks along flat, smooth planes determined by its crystal structure. Mica cleaves perfectly into thin sheets. Fracture is an irregular break.',
      },
      {
        id: 'minerals-q12',
        type: 'multiple-choice',
        text: 'Which of the following minerals is used in making glass and computer chips due to its silicon content?',
        options: ['Calcite', 'Quartz', 'Pyrite', 'Magnetite'],
        answer: 'Quartz',
        hint: 'SiO₂ is the chemical formula.',
        explanation: 'Quartz (SiO₂) is a silicate mineral used to make glass, silicon semiconductors, and electronic components. It has a hardness of 7 on the Mohs scale.',
      },
      {
        id: 'minerals-q13',
        type: 'multiple-choice',
        text: 'Why is colour alone an unreliable way to identify a mineral?',
        options: [
          'All minerals are the same colour',
          'Colour changes with temperature',
          'The same mineral can appear in many colours due to impurities',
          'Minerals have no colour',
        ],
        answer: 'The same mineral can appear in many colours due to impurities',
        hint: 'Think about quartz — it can be clear, purple (amethyst), pink, or smoky.',
        explanation: 'Impurities (trace elements) in a mineral\'s structure can produce very different colours. Quartz alone exists as colourless, purple, rose, smoky, and yellow varieties.',
      },
      {
        id: 'minerals-q14',
        type: 'multiple-choice',
        text: 'Magnetite (Fe₃O₄) belongs to which mineral group?',
        options: ['Silicates', 'Carbonates', 'Sulfides', 'Oxides'],
        answer: 'Oxides',
        hint: 'Its formula contains iron combined with oxygen.',
        explanation: 'Magnetite is an oxide mineral — iron combined with oxygen (Fe₃O₄). It is naturally magnetic and is an important iron ore.',
      },
      {
        id: 'minerals-q15',
        type: 'multiple-choice',
        text: 'A rock is different from a mineral because:',
        options: [
          'Rocks are man-made',
          'Rocks are a mixture of one or more minerals',
          'Rocks have a defined chemical formula',
          'Rocks are never solid',
        ],
        answer: 'Rocks are a mixture of one or more minerals',
        hint: 'Think about granite: quartz + feldspar + mica.',
        explanation: 'A mineral has a definite chemical composition and crystal structure. A rock is an aggregate (mixture) of minerals. Granite contains quartz, feldspar, and mica.',
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
      {
        id: 'sol-q5',
        type: 'multiple-choice',
        text: 'A solution is described as homogeneous. This means:',
        options: [
          'It contains only one substance',
          'The composition is uniform throughout',
          'It cannot be separated',
          'It has a pH of 7',
        ],
        answer: 'The composition is uniform throughout',
        hint: 'Homo = same, geneous = kind.',
        explanation: 'A homogeneous mixture has uniform composition throughout — you cannot see separate components. Saltwater looks the same everywhere in the glass.',
      },
      {
        id: 'sol-q6',
        type: 'numeric',
        text: 'A solution contains 25g of NaCl dissolved in 500mL of water. What is its concentration in g/L?',
        answer: 50,
        unit: 'g/L',
        tolerance: 0.5,
        hint: 'Convert 500mL to 0.5L first, then divide mass by volume.',
        explanation: '500mL = 0.5L. Concentration = 25g ÷ 0.5L = 50 g/L.',
      },
      {
        id: 'sol-q7',
        type: 'multiple-choice',
        text: 'Why does hot water dissolve more sugar than cold water?',
        options: [
          'Hot water is heavier',
          'Sugar melts at high temperatures',
          'Higher temperature gives water molecules more energy to surround and separate sugar molecules',
          'Cold water is already saturated',
        ],
        answer: 'Higher temperature gives water molecules more energy to surround and separate sugar molecules',
        hint: 'More energy = more effective dissolving action.',
        explanation: 'Higher temperatures give solvent molecules more kinetic energy, allowing them to more effectively break apart and surround solute particles — increasing solubility.',
      },
      {
        id: 'sol-q8',
        type: 'multiple-choice',
        text: 'Which of the following is NOT a solution?',
        options: ['Saltwater', 'Air', 'Muddy water', 'Brass (copper + zinc alloy)'],
        answer: 'Muddy water',
        hint: 'Solutions are clear and homogeneous — you cannot see the particles.',
        explanation: 'Muddy water is a suspension — the mud particles are visible and will settle over time. The others are true solutions (homogeneous mixtures).',
      },
      {
        id: 'sol-q9',
        type: 'multiple-choice',
        text: 'What term describes a solution that contains less solute than it could hold at that temperature?',
        options: ['Saturated', 'Supersaturated', 'Unsaturated', 'Concentrated'],
        answer: 'Unsaturated',
        hint: 'It still has room to dissolve more solute.',
        explanation: 'An unsaturated solution contains less dissolved solute than the maximum possible at that temperature — more solute can still be added.',
      },
      {
        id: 'sol-q10',
        type: 'multiple-choice',
        text: 'How can you separate a solute from its solvent in a solution?',
        options: ['Filtration', 'Evaporation', 'Sieving', 'Magnetism'],
        answer: 'Evaporation',
        hint: 'The solvent turns to vapour and leaves the solute behind.',
        explanation: 'Evaporating the solvent (e.g. heating the solution) leaves the dissolved solute behind as a solid. Filtration only separates insoluble solids.',
      },
      {
        id: 'sol-q11',
        type: 'multiple-choice',
        text: 'In which of these is water NOT the solvent?',
        options: ['Seawater', 'Lemonade', 'Nail polish remover (acetone with dissolved colour)', 'Tea'],
        answer: 'Nail polish remover (acetone with dissolved colour)',
        hint: 'The solvent is the component present in the largest amount.',
        explanation: 'Nail polish remover uses acetone as the solvent, not water. Seawater, lemonade, and tea all use water as the solvent.',
      },
      {
        id: 'sol-q12',
        type: 'multiple-choice',
        text: 'Crushed sugar dissolves faster than a sugar cube because:',
        options: [
          'Crushed sugar is a different chemical',
          'Crushing produces heat',
          'Smaller particles have more surface area exposed to the solvent',
          'Cubes are hydrophobic',
        ],
        answer: 'Smaller particles have more surface area exposed to the solvent',
        hint: 'Surface area is key to reaction and dissolving rates.',
        explanation: 'Smaller particles have a greater surface area relative to their volume, so more solute is in contact with the solvent at once, speeding up dissolving.',
      },
      {
        id: 'sol-q13',
        type: 'multiple-choice',
        text: 'What is the solubility of a substance?',
        options: [
          'The speed at which it dissolves',
          'The maximum amount that can dissolve in a given volume of solvent at a specific temperature',
          'Whether it is acidic or basic',
          'Its melting point',
        ],
        answer: 'The maximum amount that can dissolve in a given volume of solvent at a specific temperature',
        hint: 'Solubility has units like g/100mL and depends on temperature.',
        explanation: 'Solubility is the maximum mass of solute that will dissolve in a given volume of solvent at a stated temperature — it defines when a solution becomes saturated.',
      },
      {
        id: 'sol-q14',
        type: 'numeric',
        text: 'A student dissolves 15g of KNO₃ in 100g of water at 40°C. If the solubility of KNO₃ at 40°C is 64g per 100g water, how many more grams can dissolve?',
        answer: 49,
        unit: 'g',
        tolerance: 0.5,
        hint: 'Maximum − already dissolved = how much more can dissolve.',
        explanation: '64g − 15g = 49g more can dissolve before the solution is saturated.',
      },
      {
        id: 'sol-q15',
        type: 'multiple-choice',
        text: 'A supersaturated solution is unstable because:',
        options: [
          'It contains too much solvent',
          'It contains more dissolved solute than is normally possible, and can crystallise suddenly',
          'It has a pH above 7',
          'It is boiling',
        ],
        answer: 'It contains more dissolved solute than is normally possible, and can crystallise suddenly',
        hint: 'Hand warmers use supersaturation — clicking the disc triggers rapid crystallisation.',
        explanation: 'A supersaturated solution holds more solute than its normal saturation limit. It is unstable — a seed crystal or disturbance causes the excess solute to crystallise rapidly out of solution.',
      },
    ],
  },
];

export function getChemTopicById(id: string): Topic | undefined {
  return chemistryCurriculum.find((t) => t.id === id);
}

export function isChemTopicUnlocked(_topicIndex: number, _completedIds: string[]): boolean {
  return true;
}
