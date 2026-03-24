const CURRICULUM = {
  6: {
    history: {
      label: "World History",
      subject: "history",
      lessons: [
        {
          id: "ancient-egypt",
          title: "Ancient Egypt",
          subtitle: "The Gift of the Nile",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#fef3c7"/>
  <circle cx="530" cy="55" r="44" fill="#fbbf24" opacity="0.85"/>
  <rect y="185" width="600" height="75" fill="#d97706" opacity="0.25"/>
  <rect x="255" y="160" width="55" height="100" fill="#93c5fd" opacity="0.7"/>
  <polygon points="185,185 290,62 395,185" fill="#d97706"/>
  <polygon points="50,185 135,108 220,185" fill="#b45309" opacity="0.85"/>
  <polygon points="390,185 460,120 530,185" fill="#b45309" opacity="0.85"/>
  <rect x="120" y="162" width="55" height="23" rx="4" fill="#92400e"/>
  <circle cx="122" cy="157" r="13" fill="#92400e"/>
  <line x1="460" y1="185" x2="472" y2="128" stroke="#15803d" stroke-width="3"/>
  <ellipse cx="468" cy="122" rx="18" ry="10" fill="#16a34a" transform="rotate(-15,468,122)"/>
  <ellipse cx="474" cy="128" rx="16" ry="9" fill="#16a34a" transform="rotate(25,474,128)"/>
  <text x="30" y="240" font-size="11" fill="#92400e" opacity="0.6" font-family="sans-serif">Nile River</text>
  <line x1="60" y1="232" x2="255" y2="200" stroke="#92400e" stroke-width="1" opacity="0.4" stroke-dasharray="3,3"/>
</svg>`,
          content: [
            "Ancient Egypt was one of the world's first great civilizations, lasting over 3,000 years along the banks of the Nile River in northeastern Africa. The Nile flooded every year, leaving behind rich, black soil that made farming possible in the middle of a desert. This reliable food supply allowed Egyptians to build a powerful, organized society.",
            "Egypt was ruled by pharaohs — god-kings who held absolute power over the land and its people. Pharaohs commanded armies, controlled trade, and directed massive building projects. The most famous pharaohs include Ramesses II, known for military conquests, and Cleopatra, the last ruler of ancient Egypt.",
            "The Egyptians built the pyramids as tombs for their pharaohs, believing in an afterlife where the body would need to be preserved. The Great Pyramid of Giza, built around 2560 BCE for Pharaoh Khufu, is the only ancient wonder of the world still standing today.",
            "Egyptians also developed hieroglyphics — one of humanity's earliest writing systems — along with advances in medicine, mathematics, and astronomy. Their knowledge was recorded on papyrus, an early form of paper made from reed plants."
          ],
          fact: "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.",
          quiz: [
            { type: "mc", q: "Which river was central to Ancient Egyptian civilization?", options: ["Tigris", "Nile", "Amazon", "Ganges"], answer: 1, explanation: "The Nile River flooded annually, depositing fertile soil that made farming possible and supported Egyptian civilization." },
            { type: "tf", q: "The Great Pyramid of Giza was built as a tomb for a pharaoh.", answer: true, explanation: "Correct! The Great Pyramid was built for Pharaoh Khufu around 2560 BCE." },
            { type: "fb", q: "Ancient Egyptians developed one of the earliest writing systems, called ___.", answer: "hieroglyphics", hint: "Symbols carved into stone walls...", explanation: "Hieroglyphics was a writing system using pictorial symbols. It was used for religious texts and royal records." },
            { type: "mc", q: "What title was given to the rulers of Ancient Egypt?", options: ["King", "Emperor", "Pharaoh", "Sultan"], answer: 2, explanation: "Pharaohs were the god-kings of Egypt, holding both political and religious authority." }
          ]
        },
        {
          id: "ancient-greece",
          title: "Ancient Greece",
          subtitle: "Birthplace of Democracy",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#e0f2fe"/>
  <rect y="190" width="600" height="70" fill="#7dd3fc" opacity="0.5"/>
  <rect x="50" y="195" width="500" height="15" rx="3" fill="#bfdbfe"/>
  <rect x="130" y="100" width="320" height="95" fill="white" opacity="0.9"/>
  <rect x="120" y="90" width="340" height="18" rx="3" fill="#dbeafe"/>
  <rect x="110" y="82" width="360" height="14" rx="2" fill="#93c5fd"/>
  <rect x="145" y="100" width="18" height="90" rx="3" fill="#bfdbfe"/>
  <rect x="185" y="100" width="18" height="90" rx="3" fill="#bfdbfe"/>
  <rect x="225" y="100" width="18" height="90" rx="3" fill="#bfdbfe"/>
  <rect x="265" y="100" width="18" height="90" rx="3" fill="#bfdbfe"/>
  <rect x="305" y="100" width="18" height="90" rx="3" fill="#bfdbfe"/>
  <rect x="345" y="100" width="18" height="90" rx="3" fill="#bfdbfe"/>
  <rect x="385" y="100" width="18" height="90" rx="3" fill="#bfdbfe"/>
  <rect x="425" y="100" width="18" height="90" rx="3" fill="#bfdbfe"/>
  <circle cx="490" cy="65" r="35" fill="#fbbf24" opacity="0.7"/>
  <text x="160" y="175" font-size="13" fill="#1e40af" font-family="sans-serif" font-weight="bold">THE PARTHENON</text>
  <text x="155" y="230" font-size="11" fill="#0369a1" font-family="sans-serif">Athens · Built 447–432 BCE</text>
</svg>`,
          content: [
            "Ancient Greece was a collection of city-states — independent cities each with their own government — that shared a common language and culture. The two most powerful city-states were Athens, known for arts and democracy, and Sparta, known for military discipline and strength.",
            "Around 500 BCE, Athens created one of history's most influential ideas: democracy. In Athens, free male citizens could vote on laws and elect leaders. While it excluded women and enslaved people, this experiment with self-governance inspired governments around the world, including the United States.",
            "Ancient Greece produced some of history's greatest thinkers. Socrates, Plato, and Aristotle asked deep questions about knowledge, justice, and the good life. Their ideas shaped Western philosophy, science, and education for over two thousand years.",
            "The Greeks also gave us the Olympic Games (first held in 776 BCE), epic poetry like Homer's Iliad and Odyssey, magnificent architecture like the Parthenon, and advances in geometry and astronomy."
          ],
          fact: "The word 'democracy' comes from the Greek words demos (people) and kratos (power) — literally meaning 'power of the people.'",
          quiz: [
            { type: "mc", q: "Which city-state is credited with inventing democracy?", options: ["Sparta", "Athens", "Corinth", "Troy"], answer: 1, explanation: "Athens developed one of history's first democracies around 500 BCE, where free male citizens could vote on laws." },
            { type: "tf", q: "The ancient Olympic Games were held every four years in Greece.", answer: true, explanation: "The first recorded Olympics were held in 776 BCE in Olympia, Greece, and continued every four years." },
            { type: "fb", q: "The famous philosopher who taught Alexander the Great was ___.", answer: "aristotle", hint: "One of the three great Greek philosophers...", explanation: "Aristotle tutored Alexander the Great and wrote influential works on logic, science, politics, and ethics." },
            { type: "mc", q: "Which building in Athens was dedicated to the goddess Athena?", options: ["The Forum", "The Colosseum", "The Parthenon", "The Pantheon"], answer: 2, explanation: "The Parthenon, built on the Acropolis hill in Athens, was a temple dedicated to the goddess Athena." }
          ]
        },
        {
          id: "ancient-mesopotamia",
          title: "Ancient Mesopotamia",
          subtitle: "The Cradle of Civilisation",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#fef3c7"/>
  <circle cx="530" cy="50" r="38" fill="#fbbf24" opacity="0.85"/>
  <rect x="0" y="220" width="600" height="40" fill="#92400e" opacity="0.15"/>
  <rect x="60" y="130" width="130" height="110" fill="#d97706" opacity="0.2"/>
  <polygon points="80,240 125,160 170,240" fill="#b45309"/>
  <polygon points="95,240 125,185 155,240" fill="#92400e"/>
  <polygon points="105,240 125,205 145,240" fill="#78350f"/>
  <rect x="112" y="225" width="26" height="15" fill="#78350f"/>
  <rect x="270" y="185" width="60" height="28" rx="3" fill="#d97706" opacity="0.5"/>
  <rect x="340" y="195" width="45" height="18" rx="3" fill="#d97706" opacity="0.45"/>
  <rect x="400" y="190" width="50" height="22" rx="3" fill="#d97706" opacity="0.45"/>
  <path d="M 220 210 Q 240 200 260 215 Q 280 225 300 210 Q 320 200 340 215 Q 360 225 380 210 Q 400 200 420 215" stroke="#3b82f6" stroke-width="4" fill="none" opacity="0.7"/>
  <path d="M 215 230 Q 235 220 255 235 Q 275 245 295 230 Q 315 220 335 235 Q 355 245 375 230 Q 395 220 415 235" stroke="#60a5fa" stroke-width="4" fill="none" opacity="0.6"/>
  <text x="225" y="200" font-size="10" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Euphrates</text>
  <text x="225" y="248" font-size="10" fill="#1e40af" font-family="sans-serif" font-weight="bold">Tigris</text>
</svg>`,
          content: [
            "Mesopotamia means \"land between the rivers\" in Greek — referring to the Tigris and Euphrates rivers in what is now Iraq. Around 3500 BCE, the Sumerians built the world's first cities here, including Ur and Uruk. The fertile land between the rivers allowed farming to flourish, supporting large populations and complex societies.",
            "The Mesopotamians made one of humanity's greatest contributions: the invention of writing. Around 3200 BCE, the Sumerians developed cuneiform — a system of wedge-shaped marks pressed into clay tablets. At first used for record-keeping and trade, writing eventually allowed them to record laws, stories, and history. The Epic of Gilgamesh, written around 2100 BCE, is one of the world's oldest pieces of literature.",
            "Mesopotamia was ruled by powerful city-states, each with its own king. The most famous ruler was Hammurabi of Babylon (ruled c. 1792–1750 BCE), who created one of history's first written law codes. Hammurabi's Code included 282 laws covering trade, property, marriage, and crime. The principle of \"an eye for an eye\" comes from this ancient code.",
            "The Mesopotamians also made remarkable advances in mathematics and astronomy. They developed a number system based on 60 (which is why we have 60 minutes in an hour and 360 degrees in a circle), tracked the movements of planets and stars, and built enormous temple towers called ziggurats as centres of religious and civic life."
          ],
          fact: "The 60-minute hour and 360-degree circle both come from ancient Mesopotamian mathematics — a system based on the number 60.",
          quiz: [
            { type: "mc", q: "What does the word 'Mesopotamia' mean?", options: ["Land of the pharaohs", "Land between the rivers", "The fertile crescent", "Home of the gods"], answer: 1, explanation: "Mesopotamia comes from Greek: mesos (middle) and potamos (river) — land between the Tigris and Euphrates rivers." },
            { type: "mc", q: "Which civilisation invented cuneiform writing?", options: ["Egyptians", "Babylonians", "Sumerians", "Persians"], answer: 2, explanation: "The Sumerians of Mesopotamia invented cuneiform around 3200 BCE — one of the world's earliest writing systems." },
            { type: "tf", q: "Hammurabi's Code was one of the first written collections of laws in history.", answer: true, explanation: "Hammurabi's Code (c. 1754 BCE) is one of the oldest and most complete written legal codes ever discovered." },
            { type: "fb", q: "The enormous stepped temple towers built by the Mesopotamians were called ___.", answer: "ziggurats", hint: "They look like stepped pyramids...", explanation: "Ziggurats were massive stepped structures built as temples. The Tower of Babel in the Bible may have been inspired by a ziggurat." },
            { type: "mc", q: "Our 60-minute hour and 360-degree circle come from which ancient civilisation?", options: ["Ancient Greece", "Ancient Egypt", "Ancient Mesopotamia", "Ancient Rome"], answer: 2, explanation: "The Mesopotamians used a base-60 number system. We still use their units for time and angles today." }
          ]
        },
        {
          id: "ancient-china",
          title: "Ancient China",
          subtitle: "The Middle Kingdom",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f0f9ff"/>
  <circle cx="70" cy="55" r="32" fill="#fde68a" opacity="0.8"/>
  <ellipse cx="100" cy="160" rx="100" ry="55" fill="#86efac" opacity="0.7"/>
  <ellipse cx="280" cy="150" rx="130" ry="60" fill="#4ade80" opacity="0.6"/>
  <ellipse cx="460" cy="155" rx="110" ry="50" fill="#86efac" opacity="0.65"/>
  <polyline points="30,148 70,138 110,145 150,132 190,140 230,128 270,136 310,122 350,130 390,120 430,128 470,115 510,124 550,135 590,128" stroke="#9ca3af" stroke-width="5" fill="none"/>
  <rect x="498" y="108" width="6" height="18" fill="#6b7280"/>
  <rect x="308" y="115" width="6" height="18" fill="#6b7280"/>
  <rect x="148" y="125" width="6" height="18" fill="#6b7280"/>
  <polyline points="30,148 70,138 110,145 150,132 190,140 230,128 270,136 310,122 350,130 390,120 430,128 470,115 510,124 550,135 590,128" stroke="#d1d5db" stroke-width="2" fill="none" opacity="0.5"/>
  <rect x="490" y="155" width="28" height="70" fill="#7f1d1d" opacity="0.8"/>
  <polygon points="476,155 518,155 504,138 490,155" fill="#991b1b"/>
  <rect x="480" y="138" width="38" height="8" fill="#b91c1c"/>
  <polygon points="480,138 520,138 510,124 490,124" fill="#dc2626"/>
  <rect x="484" y="124" width="32" height="6" fill="#b91c1c"/>
  <polygon points="484,124 516,124 508,114 492,114" fill="#ef4444"/>
  <text x="290" y="108" font-size="10" fill="#374151" font-family="sans-serif" font-weight="bold">Great Wall</text>
  <line x1="310" y1="110" x2="330" y2="120" stroke="#374151" stroke-width="1.5"/>
</svg>`,
          content: [
            "Ancient China developed along the Yellow River (Huang He) and the Yangtze River, beginning over 4,000 years ago. Chinese civilisation is one of the world's oldest continuous cultures. The Shang Dynasty (c. 1600–1046 BCE) was the first historically confirmed Chinese dynasty, known for its bronze work and an early form of Chinese writing carved onto oracle bones.",
            "China was unified for the first time under Qin Shi Huang in 221 BCE, who became the first emperor of China. He standardised weights, measures, and writing across the empire, and began construction of what would become the Great Wall — a massive defensive structure stretching thousands of kilometres to protect China's northern border from nomadic invasions. After his death, a life-size army of 8,000 terracotta soldiers was buried with him.",
            "The Han Dynasty (206 BCE – 220 CE) is often called China's golden age. It established the Silk Road — a network of trade routes connecting China to Central Asia, the Middle East, and eventually Europe. Through the Silk Road, China exported silk, porcelain, and spices, while importing ideas, religions, and goods. Buddhism entered China along these routes.",
            "Ancient China gave the world some of its most important inventions: paper (105 CE), the printing press, gunpowder, the compass, and silk weaving. Chinese philosophers also left a lasting legacy — Confucius (551–479 BCE) taught that social harmony depended on respect for family, education, and proper behaviour, ideas that still shape East Asian cultures today."
          ],
          fact: "China is the world's oldest continuous civilisation — Chinese culture, writing, and governance have developed without interruption for over 4,000 years.",
          quiz: [
            { type: "mc", q: "Along which river did ancient Chinese civilisation first develop?", options: ["Yangtze only", "The Nile", "The Yellow River (Huang He)", "The Indus"], answer: 2, explanation: "Ancient China developed along the Yellow River (Huang He), whose floods deposited fertile soil ideal for farming." },
            { type: "mc", q: "Who was the first emperor to unify China?", options: ["Confucius", "Han Wudi", "Qin Shi Huang", "Kublai Khan"], answer: 2, explanation: "Qin Shi Huang unified China in 221 BCE, standardised the writing system and measurements, and began the Great Wall." },
            { type: "tf", q: "The Silk Road was a network of trade routes connecting China to the rest of the world.", answer: true, explanation: "The Silk Road connected China to Central Asia, the Middle East, and Europe, enabling the exchange of goods and ideas." },
            { type: "fb", q: "The Chinese philosopher ___ taught that social harmony depends on respect for family and proper behaviour.", answer: "confucius", hint: "His teachings are called Confucianism...", explanation: "Confucius (551–479 BCE) was one of the world's most influential thinkers. His ideas on ethics and society shaped Chinese culture for millennia." },
            { type: "mc", q: "Which of these was NOT invented in ancient China?", options: ["Paper", "Gunpowder", "The printing press", "The steam engine"], answer: 3, explanation: "The steam engine was invented in 18th-century Britain during the Industrial Revolution. Paper, gunpowder, and the printing press all originated in ancient China." }
          ]
        },
        {
          id: "ancient-india",
          title: "Ancient India",
          subtitle: "The Indus Valley & Beyond",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#fffbeb"/>
  <ellipse cx="300" cy="180" rx="290" ry="55" fill="#86efac" opacity="0.5"/>
  <ellipse cx="150" cy="165" rx="90" ry="40" fill="#4ade80" opacity="0.4"/>
  <ellipse cx="480" cy="160" rx="80" ry="38" fill="#4ade80" opacity="0.35"/>
  <path d="M 180 80 Q 185 120 183 160 Q 181 200 185 240" stroke="#3b82f6" stroke-width="6" fill="none" opacity="0.65"/>
  <path d="M 193 80 Q 198 120 196 160 Q 194 200 198 240" stroke="#60a5fa" stroke-width="3" fill="none" opacity="0.45"/>
  <rect x="50" y="130" width="18" height="14" rx="1" fill="#92400e" opacity="0.7"/>
  <rect x="72" y="125" width="18" height="19" rx="1" fill="#92400e" opacity="0.7"/>
  <rect x="94" y="132" width="18" height="12" rx="1" fill="#92400e" opacity="0.7"/>
  <rect x="50" y="148" width="62" height="6" fill="#78350f" opacity="0.5"/>
  <rect x="50" y="118" width="18" height="14" rx="1" fill="#a16207" opacity="0.6"/>
  <rect x="72" y="112" width="18" height="15" rx="1" fill="#a16207" opacity="0.6"/>
  <rect x="94" y="119" width="18" height="13" rx="1" fill="#a16207" opacity="0.6"/>
  <rect x="50" y="130" width="62" height="5" fill="#92400e" opacity="0.4"/>
  <line x1="60" y1="112" x2="60" y2="154" stroke="#92400e" stroke-width="1.5" opacity="0.3"/>
  <line x1="82" y1="112" x2="82" y2="154" stroke="#92400e" stroke-width="1.5" opacity="0.3"/>
  <line x1="104" y1="112" x2="104" y2="154" stroke="#92400e" stroke-width="1.5" opacity="0.3"/>
  <ellipse cx="430" cy="175" rx="28" ry="18" fill="#374151" opacity="0.8"/>
  <ellipse cx="418" cy="165" rx="12" ry="20" fill="#4b5563" opacity="0.75"/>
  <circle cx="418" cy="152" r="10" fill="#374151"/>
  <ellipse cx="410" cy="170" rx="5" ry="3" fill="#6b7280"/>
  <ellipse cx="440" cy="172" rx="5" ry="3" fill="#6b7280"/>
  <path d="M 422 148 Q 415 138 408 142" stroke="#374151" stroke-width="3" fill="none"/>
  <circle cx="340" cy="120" r="14" fill="#fde68a" opacity="0.9"/>
  <path d="M 330 120 Q 340 108 350 120 Q 340 132 330 120" fill="#fbbf24" opacity="0.6"/>
  <path d="M 340 110 Q 352 120 340 130 Q 328 120 340 110" fill="#f59e0b" opacity="0.6"/>
  <text x="50" y="108" font-size="10" fill="#78350f" font-family="sans-serif" font-weight="bold">Mohenjo-daro</text>
  <text x="194" y="100" font-size="10" fill="#1d4ed8" font-family="sans-serif" font-weight="bold">Indus</text>
</svg>`,
          content: [
            "One of the world's earliest and most sophisticated civilisations emerged in the Indus Valley (in what is now Pakistan and northwestern India) around 2600 BCE. Cities like Mohenjo-daro and Harappa were remarkably advanced — they had grid-planned streets, multi-storey brick houses, and an elaborate drainage and sewage system more advanced than many cities in Europe thousands of years later.",
            "The Indus Valley Civilisation eventually declined around 1900 BCE, possibly due to climate change and shifts in river patterns. Around the same time, the Vedic Period began, brought by the Indo-Aryan peoples who migrated into the subcontinent. They composed the Vedas — among the world's oldest religious texts — and established the foundations of Hinduism, one of the world's oldest living religions.",
            "Ancient India's greatest empire was the Maurya Empire (322–185 BCE), founded by Chandragupta Maurya and reaching its peak under Emperor Ashoka. After witnessing the devastation of war, Ashoka converted to Buddhism and spent the rest of his reign spreading its message of non-violence and compassion across Asia. He erected stone pillars with his edicts across the empire — some still stand today.",
            "Ancient India made extraordinary contributions to human knowledge. Indian mathematicians invented the decimal number system and the concept of zero — arguably the most important mathematical invention in history. They also made advances in astronomy, medicine (Ayurveda), linguistics, and metallurgy. The Arthashastra, written around 300 BCE, was a sophisticated treatise on economics and statecraft."
          ],
          fact: "Ancient Indian mathematicians invented zero and the decimal number system — the foundation of all modern mathematics and computing.",
          quiz: [
            { type: "mc", q: "Where was the Indus Valley Civilisation located?", options: ["Along the Nile in Africa", "In what is now Pakistan and northwest India", "Along the Yellow River in China", "In modern-day Iraq"], answer: 1, explanation: "The Indus Valley Civilisation thrived in what is now Pakistan and northwestern India, centred on cities like Mohenjo-daro and Harappa." },
            { type: "tf", q: "The cities of the Indus Valley Civilisation had advanced drainage and sewage systems.", answer: true, explanation: "Mohenjo-daro and Harappa had sophisticated drainage systems — more advanced than many contemporary civilisations." },
            { type: "mc", q: "Which emperor spread Buddhism across Asia after converting to its teachings?", options: ["Chandragupta", "Ashoka", "Akbar", "Harsha"], answer: 1, explanation: "Emperor Ashoka converted to Buddhism after the bloody Kalinga War and spent his reign spreading Buddhist teachings of non-violence across Asia." },
            { type: "fb", q: "Ancient Indian mathematicians invented ___ — a concept essential to all modern mathematics.", answer: "zero", hint: "It's the number that means 'nothing'...", explanation: "The concept of zero was developed in ancient India. Without zero, modern mathematics, computing, and science would be impossible." },
            { type: "mc", q: "What were the Vedas?", options: ["A collection of laws like Hammurabi's Code", "A set of trade routes", "Ancient religious texts that formed the basis of Hinduism", "A type of ancient Indian currency"], answer: 2, explanation: "The Vedas are among the world's oldest religious texts, composed during India's Vedic Period and forming the foundation of Hinduism." }
          ]
        }
      ]
    },
    geography: {
      label: "Geography",
      subject: "geography",
      lessons: [
        {
          id: "continents-oceans",
          title: "Continents and Oceans",
          subtitle: "The Shape of Our World",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#bfdbfe"/>
  <ellipse cx="120" cy="110" rx="75" ry="60" fill="#86efac" opacity="0.9"/>
  <ellipse cx="110" cy="120" rx="55" ry="38" fill="#4ade80" opacity="0.5"/>
  <ellipse cx="260" cy="100" rx="65" ry="55" fill="#86efac" opacity="0.9"/>
  <ellipse cx="265" cy="115" rx="42" ry="30" fill="#4ade80" opacity="0.5"/>
  <ellipse cx="380" cy="95" rx="50" ry="45" fill="#86efac" opacity="0.9"/>
  <ellipse cx="385" cy="145" rx="30" ry="50" fill="#86efac" opacity="0.9"/>
  <ellipse cx="490" cy="105" rx="55" ry="50" fill="#86efac" opacity="0.9"/>
  <ellipse cx="510" cy="105" rx="30" ry="22" fill="#4ade80" opacity="0.5"/>
  <ellipse cx="300" cy="215" rx="260" ry="28" fill="#86efac" opacity="0.6"/>
  <text x="100" y="108" font-size="9" fill="#166534" font-family="sans-serif" font-weight="bold" text-anchor="middle">N. AMERICA</text>
  <text x="255" y="98" font-size="9" fill="#166534" font-family="sans-serif" font-weight="bold" text-anchor="middle">EUROPE/AFRICA</text>
  <text x="383" y="93" font-size="9" fill="#166534" font-family="sans-serif" font-weight="bold" text-anchor="middle">ASIA</text>
  <text x="490" y="103" font-size="9" fill="#166534" font-family="sans-serif" font-weight="bold" text-anchor="middle">AUSTRALIA</text>
  <text x="300" y="215" font-size="9" fill="#166534" font-family="sans-serif" font-weight="bold" text-anchor="middle">ANTARCTICA</text>
  <text x="185" y="155" font-size="9" fill="#1e40af" font-family="sans-serif" text-anchor="middle">Atlantic</text>
  <text x="440" y="175" font-size="9" fill="#1e40af" font-family="sans-serif" text-anchor="middle">Indian</text>
  <text x="560" y="155" font-size="9" fill="#1e40af" font-family="sans-serif" text-anchor="middle">Pacific</text>
</svg>`,
          content: [
            "Earth's land is divided into seven continents: Asia (the largest), Africa, North America, South America, Antarctica, Europe, and Australia (the smallest). Each continent has unique geography, climates, and cultures. Asia alone is home to more than 4 billion people — over half the world's population.",
            "Earth's water is divided into five oceans: the Pacific (largest), Atlantic, Indian, Southern, and Arctic (smallest). The Pacific Ocean is so large that all seven continents could fit inside it. Oceans regulate Earth's temperature, produce most of our oxygen, and support billions of living things.",
            "Continents sit on massive slabs of rock called tectonic plates, which move very slowly over millions of years. This movement created mountain ranges, caused earthquakes and volcanoes, and explains why the shapes of South America and Africa look like they could fit together — they were once joined in a supercontinent called Pangaea.",
            "Knowing the world's continents and oceans is the foundation of all geography. They help us organize information about climate, culture, trade, and history across our planet."
          ],
          fact: "About 71% of Earth's surface is covered by water, yet 97% of that water is saltwater in the oceans — leaving only 3% as fresh water.",
          quiz: [
            { type: "mc", q: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: 2, explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia." },
            { type: "tf", q: "Antarctica is the smallest continent.", answer: false, explanation: "Australia is the smallest continent. Antarctica is actually larger than Europe." },
            { type: "fb", q: "The largest ocean on Earth is the ___ Ocean.", answer: "pacific", hint: "It borders Asia, Australia, and the Americas...", explanation: "The Pacific Ocean is the largest, covering more than 30% of Earth's surface." },
            { type: "mc", q: "Which continent is BOTH a country and a continent?", options: ["Antarctica", "Greenland", "Australia", "Africa"], answer: 2, explanation: "Australia is unique — it is both a continent and an independent country, officially called the Commonwealth of Australia." }
          ]
        },
        {
          id: "reading-maps",
          title: "Reading Maps",
          subtitle: "Latitude, Longitude, and Scale",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f0fdf4"/>
  <line x1="50" y1="130" x2="550" y2="130" stroke="#86efac" stroke-width="2.5"/>
  <line x1="300" y1="20"  x2="300" y2="250" stroke="#86efac" stroke-width="2.5"/>
  <line x1="50" y1="75"  x2="550" y2="75"  stroke="#d1fae5" stroke-width="1"/>
  <line x1="50" y1="185" x2="550" y2="185" stroke="#d1fae5" stroke-width="1"/>
  <line x1="175" y1="20" x2="175" y2="250" stroke="#d1fae5" stroke-width="1"/>
  <line x1="425" y1="20" x2="425" y2="250" stroke="#d1fae5" stroke-width="1"/>
  <text x="555" y="134" font-size="10" fill="#16a34a" font-family="sans-serif" font-weight="bold">0° Equator</text>
  <text x="305" y="18"  font-size="10" fill="#16a34a" font-family="sans-serif" font-weight="bold">0° Prime Meridian</text>
  <circle cx="390" cy="90" r="7" fill="#ef4444"/>
  <text x="400" y="88" font-size="10" fill="#ef4444" font-family="sans-serif" font-weight="bold">40°N, 30°E</text>
  <circle cx="210" cy="165" r="7" fill="#2563eb"/>
  <text x="220" y="163" font-size="10" fill="#2563eb" font-family="sans-serif" font-weight="bold">20°S, 45°W</text>
  <text x="30" y="75"  font-size="9" fill="#4b5563" font-family="sans-serif">45°N</text>
  <text x="30" y="134" font-size="9" fill="#4b5563" font-family="sans-serif">0°</text>
  <text x="30" y="185" font-size="9" fill="#4b5563" font-family="sans-serif">45°S</text>
  <text x="160" y="248" font-size="9" fill="#4b5563" font-family="sans-serif">45°W</text>
  <text x="295" y="248" font-size="9" fill="#4b5563" font-family="sans-serif">0°</text>
  <text x="420" y="248" font-size="9" fill="#4b5563" font-family="sans-serif">45°E</text>
  <polygon points="555,35 548,55 555,50 562,55" fill="#374151"/>
  <text x="548" y="65" font-size="9" fill="#374151" font-family="sans-serif">N</text>
</svg>`,
          content: [
            "Maps use a grid system of imaginary lines to help us find any location on Earth. Lines of latitude run east-west and measure how far north or south you are from the equator (0°). Lines of longitude run north-south and measure how far east or west you are from the Prime Meridian (0°), which passes through Greenwich, England.",
            "Every location on Earth has a unique address using latitude and longitude. For example, New York City is approximately 40°N latitude and 74°W longitude. Navigators, pilots, and GPS systems all rely on this coordinate system to find exact locations.",
            "Maps also use a scale to represent real distances. A scale might show that 1 inch on the map equals 100 miles in real life. Without a scale, you couldn't know whether two cities on a map are 10 miles or 1,000 miles apart.",
            "Other important map elements include the compass rose (showing directions), a legend or key (explaining symbols), and the title (telling you what area the map shows). Together, these tools make maps one of the most powerful tools in geography."
          ],
          fact: "GPS (Global Positioning System) satellites use latitude and longitude to pinpoint your location to within a few feet, anywhere on Earth.",
          quiz: [
            { type: "mc", q: "What is the name of the imaginary line at 0° latitude?", options: ["Prime Meridian", "Tropic of Cancer", "Equator", "Arctic Circle"], answer: 2, explanation: "The Equator is the 0° latitude line that circles Earth at its widest point, dividing it into the Northern and Southern hemispheres." },
            { type: "tf", q: "Lines of longitude run east and west around the globe.", answer: false, explanation: "Lines of longitude run north-south (from pole to pole). Lines of latitude run east-west." },
            { type: "fb", q: "The Prime Meridian (0° longitude) passes through the city of ___, England.", answer: "greenwich", hint: "A district in London...", explanation: "The Prime Meridian was established at Greenwich, England in 1884 and is the reference point for all longitude measurements." },
            { type: "mc", q: "A map's scale helps you understand:", options: ["The weather patterns", "Real distances between places", "Population sizes", "Time zones"], answer: 1, explanation: "A map scale lets you convert distances on the map to real-world distances, like '1 inch = 50 miles.'" }
          ]
        }
      ]
    },
    economics: {
      label: "Economics",
      subject: "economics",
      lessons: [
        {
          id: "needs-wants-scarcity",
          title: "Needs, Wants, and Scarcity",
          subtitle: "The Foundation of Economics",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f0fdf4"/>
  <rect x="40" y="40" width="230" height="185" rx="12" fill="white" stroke="#86efac" stroke-width="2"/>
  <rect x="330" y="40" width="230" height="185" rx="12" fill="white" stroke="#fca5a5" stroke-width="2"/>
  <text x="155" y="68" font-size="13" fill="#15803d" font-family="sans-serif" font-weight="bold" text-anchor="middle">NEEDS</text>
  <text x="445" y="68" font-size="13" fill="#b91c1c" font-family="sans-serif" font-weight="bold" text-anchor="middle">WANTS</text>
  <text x="70" y="105" font-size="11" fill="#374151" font-family="sans-serif">Food</text>
  <text x="70" y="130" font-size="11" fill="#374151" font-family="sans-serif">Water</text>
  <text x="70" y="155" font-size="11" fill="#374151" font-family="sans-serif">Shelter</text>
  <text x="70" y="180" font-size="11" fill="#374151" font-family="sans-serif">Clothing</text>
  <text x="70" y="205" font-size="11" fill="#374151" font-family="sans-serif">Healthcare</text>
  <text x="360" y="105" font-size="11" fill="#374151" font-family="sans-serif">Video games</text>
  <text x="360" y="130" font-size="11" fill="#374151" font-family="sans-serif">New shoes</text>
  <text x="360" y="155" font-size="11" fill="#374151" font-family="sans-serif">Movie tickets</text>
  <text x="360" y="180" font-size="11" fill="#374151" font-family="sans-serif">Vacation</text>
  <text x="360" y="205" font-size="11" fill="#374151" font-family="sans-serif">Latest phone</text>
  <circle cx="50" cy="100" r="5" fill="#16a34a"/>
  <circle cx="50" cy="125" r="5" fill="#16a34a"/>
  <circle cx="50" cy="150" r="5" fill="#16a34a"/>
  <circle cx="50" cy="175" r="5" fill="#16a34a"/>
  <circle cx="50" cy="200" r="5" fill="#16a34a"/>
  <circle cx="345" cy="100" r="5" fill="#dc2626"/>
  <circle cx="345" cy="125" r="5" fill="#dc2626"/>
  <circle cx="345" cy="150" r="5" fill="#dc2626"/>
  <circle cx="345" cy="175" r="5" fill="#dc2626"/>
  <circle cx="345" cy="200" r="5" fill="#dc2626"/>
</svg>`,
          content: [
            "Economics begins with a simple but powerful observation: people have unlimited wants, but the world has limited resources. A need is something essential for survival — food, water, shelter, and clothing. A want is something that improves your life but isn't necessary to survive, like a video game console or a vacation.",
            "Because resources are limited, we face scarcity — there is never enough to satisfy all of everyone's wants. Scarcity forces every person, business, and government to make choices about how to use their limited resources.",
            "Every choice involves a trade-off: when you choose one thing, you give up something else. The best alternative you give up when making a choice is called the opportunity cost. If you spend $20 on a book, the opportunity cost might be the movie ticket you could have bought instead.",
            "Understanding needs, wants, and scarcity is the foundation of all economic thinking. It explains why prices exist, why people work, and why governments must make difficult decisions about spending."
          ],
          fact: "Scarcity is the reason economics exists as a field of study. If everything were unlimited and free, there would be no economic decisions to make.",
          quiz: [
            { type: "mc", q: "Which of the following is a NEED?", options: ["Video game", "Food", "Movie ticket", "New sneakers"], answer: 1, explanation: "Food is a need — something essential for survival. The others are wants that improve life but aren't necessary." },
            { type: "tf", q: "Scarcity means there is more of something than people want.", answer: false, explanation: "Scarcity is the opposite — it means resources are limited relative to people's unlimited wants." },
            { type: "fb", q: "The best alternative you give up when making a choice is called the ___ cost.", answer: "opportunity", hint: "What you sacrifice when choosing...", explanation: "Opportunity cost is what you give up when you make a choice. Every decision has an opportunity cost." },
            { type: "mc", q: "A trade-off occurs when you:", options: ["Buy two things at once", "Give up one thing to get another", "Find something for free", "Save money in a bank"], answer: 1, explanation: "A trade-off means sacrificing one option to choose another, because you can't have everything with limited resources." }
          ]
        },
        {
          id: "barter-trade",
          title: "Barter and Trade",
          subtitle: "How Economies Began",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#fef3c7"/>
  <circle cx="150" cy="130" r="55" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <circle cx="450" cy="130" r="55" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <text x="150" y="115" font-size="11" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">FARMER</text>
  <text x="150" y="133" font-size="11" fill="#92400e" font-family="sans-serif" text-anchor="middle">has: wheat</text>
  <text x="150" y="151" font-size="11" fill="#92400e" font-family="sans-serif" text-anchor="middle">wants: cloth</text>
  <text x="450" y="115" font-size="11" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">WEAVER</text>
  <text x="450" y="133" font-size="11" fill="#92400e" font-family="sans-serif" text-anchor="middle">has: cloth</text>
  <text x="450" y="151" font-size="11" fill="#92400e" font-family="sans-serif" text-anchor="middle">wants: wheat</text>
  <line x1="215" y1="118" x2="385" y2="108" stroke="#d97706" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="385" y1="152" x2="215" y2="142" stroke="#d97706" stroke-width="2"/>
  <polygon points="215,152 225,147 225,157" fill="#d97706"/>
  <text x="300" y="103" font-size="10" fill="#b45309" font-family="sans-serif" text-anchor="middle">wheat →</text>
  <text x="300" y="163" font-size="10" fill="#b45309" font-family="sans-serif" text-anchor="middle">← cloth</text>
  <text x="300" y="220" font-size="12" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">BARTER = Direct Exchange</text>
</svg>`,
          content: [
            "Long before money was invented, people traded goods and services directly in a system called barter. A farmer with extra wheat might trade it for cloth from a weaver, or a hunter might trade animal skins for tools made by a craftsman. Barter worked well in small communities where people knew each other.",
            "However, barter has a big problem called the double coincidence of wants — you can only trade if you find someone who has exactly what you want AND wants exactly what you have. Imagine trying to trade wheat for shoes if the shoemaker already has plenty of wheat!",
            "As societies grew, people began using commodity money — valuable goods that everyone agreed to accept, like gold, silver, shells, or salt. Eventually, governments began minting coins and printing paper money, making trade much easier. China was the first civilization to use paper money, around 700 CE.",
            "Trade between communities and countries — called commerce — allowed people to specialize. Instead of every family making everything they needed, people could focus on what they were best at and trade for the rest. This specialization made everyone more productive."
          ],
          fact: "The word 'salary' comes from the Latin word for salt (sal). Roman soldiers were sometimes paid in salt because it was so valuable for preserving food.",
          quiz: [
            { type: "mc", q: "Bartering means:", options: ["Buying goods with coins", "Exchanging goods or services directly", "Borrowing money from a bank", "Paying taxes to a government"], answer: 1, explanation: "Barter is the direct exchange of goods or services without using money." },
            { type: "tf", q: "Money was invented before bartering.", answer: false, explanation: "Bartering came first. Money was invented later to solve the problems of barter, like the double coincidence of wants." },
            { type: "fb", q: "Trading goods and services with other countries is called international ___.", answer: "trade", hint: "Two words — the second word describes exchange between nations...", explanation: "International trade allows countries to exchange goods, specialize in what they produce best, and access things they can't make themselves." },
            { type: "mc", q: "What is one advantage of using money over barter?", options: ["It grows in value always", "It is easier to carry than most goods", "It tastes good", "It never wears out"], answer: 1, explanation: "Money is portable and accepted by everyone, unlike bulky trade goods. It solves the double coincidence of wants problem." }
          ]
        }
      ]
    }
  },

  7: {
    history: {
      label: "World History",
      subject: "history",
      lessons: [
        {
          id: "medieval-europe",
          title: "Medieval Europe",
          subtitle: "Feudalism, Castles, and the Church",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#e0e7ef"/>
  <rect y="200" width="600" height="60" fill="#6b7280" opacity="0.3"/>
  <rect x="230" y="100" width="140" height="100" fill="#9ca3af"/>
  <rect x="210" y="80" width="40" height="120" fill="#6b7280"/>
  <rect x="350" y="80" width="40" height="120" fill="#6b7280"/>
  <rect x="215" y="72" width="10" height="16" fill="#374151"/>
  <rect x="230" y="72" width="10" height="16" fill="#374151"/>
  <rect x="245" y="72" width="10" height="16" fill="#374151"/>
  <rect x="355" y="72" width="10" height="16" fill="#374151"/>
  <rect x="370" y="72" width="10" height="16" fill="#374151"/>
  <rect x="385" y="72" width="10" height="16" fill="#374151"/>
  <rect x="275" y="160" width="50" height="40" fill="#4b5563"/>
  <rect x="240" y="120" width="20" height="15" rx="2" fill="#93c5fd" opacity="0.7"/>
  <rect x="275" y="120" width="20" height="15" rx="2" fill="#93c5fd" opacity="0.7"/>
  <rect x="340" y="120" width="20" height="15" rx="2" fill="#93c5fd" opacity="0.7"/>
  <line x1="300" y1="100" x2="300" y2="60" stroke="#6b7280" stroke-width="2"/>
  <polygon points="295,60 300,44 305,60" fill="#dc2626"/>
  <rect x="50" y="130" width="100" height="70" fill="#d1d5db" opacity="0.7" rx="4"/>
  <polygon points="50,130 100,95 150,130" fill="#9ca3af"/>
  <text x="100" y="185" font-size="9" fill="#374151" font-family="sans-serif" text-anchor="middle">Village</text>
  <text x="480" y="185" font-size="11" fill="#374151" font-family="sans-serif">Knight</text>
  <rect x="460" y="150" width="15" height="40" fill="#9ca3af"/>
  <ellipse cx="467" cy="148" rx="10" ry="12" fill="#6b7280"/>
  <line x1="475" y1="140" x2="510" y2="120" stroke="#6b7280" stroke-width="2"/>
  <polygon points="510,115 515,125 505,123" fill="#6b7280"/>
</svg>`,
          content: [
            "After the fall of the Roman Empire around 476 CE, Europe entered a period historians call the Middle Ages (roughly 500–1500 CE). Without a central government, power fragmented into a system called feudalism. At the top was the king, below him were nobles and lords who controlled land, then knights who provided military service, and at the bottom were peasants (serfs) who farmed the land.",
            "In the feudal system, land was the source of all power and wealth. Lords gave portions of land called fiefs to knights in exchange for military loyalty. Peasants worked the land in exchange for protection. This pyramid of relationships held medieval society together for centuries.",
            "The Catholic Church was the most powerful institution in medieval Europe. It ran schools, hospitals, and courts, collected taxes, and influenced kings. The Pope in Rome held enormous authority — he could even excommunicate (ban from the church) rulers who disobeyed him. Nearly every aspect of daily life was shaped by Christian faith.",
            "Castles were both military fortresses and centers of local government. They protected the lord and surrounding population during attacks. Medieval towns grew up around castles and cathedrals, and trade guilds organized craftsmen and merchants. By 1300, cities like Paris and London were thriving centers of culture."
          ],
          fact: "The Black Death (bubonic plague) of 1347–1351 killed an estimated one-third of Europe's population — roughly 25 million people.",
          quiz: [
            { type: "mc", q: "In the feudal system, who sat at the very top of the social pyramid?", options: ["Peasants", "Knights", "Lords", "The King"], answer: 3, explanation: "The king sat at the top of the feudal pyramid. Below him were nobles/lords, then knights, then serfs/peasants." },
            { type: "tf", q: "In the feudal system, peasants (serfs) were tied to the land they worked.", answer: true, explanation: "Serfs were bound to the land — they could not leave without their lord's permission, and they were bought and sold along with the land." },
            { type: "fb", q: "The head of the Catholic Church in medieval Europe, who lived in Rome, was called the ___.", answer: "pope", hint: "A title still used today...", explanation: "The Pope led the Catholic Church and wielded enormous political as well as religious power in medieval Europe." },
            { type: "mc", q: "What was the main purpose of castles in medieval Europe?", options: ["Shopping centers", "Hospitals", "Military fortresses and seats of power", "Schools"], answer: 2, explanation: "Castles were fortified residences that served as military defenses, administrative centers, and homes for lords and their households." }
          ]
        },
        {
          id: "islamic-golden-age",
          title: "The Islamic Golden Age",
          subtitle: "Scholarship, Science, and Trade",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#1e1b4b"/>
  <circle cx="100" cy="50" r="18" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <path d="M 112 38 A 18 18 0 1 1 112 62" fill="#1e1b4b"/>
  <polygon points="120,42 125,50 120,58" fill="#fbbf24"/>
  <circle cx="180" cy="35" r="3" fill="#fbbf24" opacity="0.8"/>
  <circle cx="220" cy="55" r="2" fill="#fbbf24" opacity="0.7"/>
  <circle cx="160" cy="70" r="2" fill="#fbbf24" opacity="0.6"/>
  <circle cx="260" cy="30" r="3" fill="#fbbf24" opacity="0.8"/>
  <circle cx="310" cy="50" r="2" fill="#fbbf24" opacity="0.7"/>
  <circle cx="380" cy="25" r="3" fill="#fbbf24" opacity="0.9"/>
  <circle cx="440" cy="45" r="2" fill="#fbbf24" opacity="0.7"/>
  <circle cx="500" cy="30" r="3" fill="#fbbf24" opacity="0.8"/>
  <circle cx="560" cy="55" r="2" fill="#fbbf24" opacity="0.6"/>
  <rect x="250" y="180" width="100" height="10" rx="3" fill="#7c3aed" opacity="0.6"/>
  <rect x="270" y="115" width="60" height="65" fill="#7c3aed" opacity="0.8"/>
  <polygon points="300,90 270,115 330,115" fill="#6d28d9"/>
  <rect x="293" y="90" width="14" height="30" fill="#8b5cf6"/>
  <circle cx="300" cy="88" r="8" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="296,84 300,76 304,84" fill="#fbbf24"/>
  <rect x="295" y="148" width="10" height="32" fill="#4c1d95"/>
  <rect x="80" y="170" width="120" height="70" rx="6" fill="#312e81" opacity="0.8"/>
  <text x="140" y="197" font-size="9" fill="#c4b5fd" font-family="sans-serif" text-anchor="middle">Book of</text>
  <text x="140" y="210" font-size="9" fill="#c4b5fd" font-family="sans-serif" text-anchor="middle">Knowledge</text>
  <text x="140" y="228" font-size="8" fill="#a78bfa" font-family="sans-serif" text-anchor="middle">Baghdad · 830 CE</text>
  <text x="430" y="170" font-size="10" fill="#fbbf24" font-family="sans-serif" text-anchor="middle" font-weight="bold">BAGHDAD</text>
  <text x="430" y="190" font-size="9" fill="#c4b5fd" font-family="sans-serif" text-anchor="middle">Center of Learning</text>
  <circle cx="430" cy="210" r="30" fill="none" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity="0.6"/>
  <text x="430" y="215" font-size="8" fill="#c4b5fd" font-family="sans-serif" text-anchor="middle">Trade Routes</text>
</svg>`,
          content: [
            "While Europe was in the early Middle Ages, the Islamic world experienced a remarkable period of intellectual achievement known as the Islamic Golden Age (roughly 800–1300 CE). Centered in Baghdad (in modern-day Iraq), Muslim scholars translated, preserved, and expanded upon the knowledge of ancient Greece, Persia, and India.",
            "The Abbasid Caliph Harun al-Rashid and his son al-Ma'mun established the House of Wisdom in Baghdad — a great library and research center that attracted scholars from across the world. Here, mathematicians, astronomers, doctors, and philosophers worked together, creating new knowledge in dozens of fields.",
            "Islamic scholars made groundbreaking advances in mathematics, astronomy, medicine, and chemistry. Al-Khwarizmi invented algebra (the word itself comes from his book title Al-Jabr), Ibn Sina wrote a medical encyclopedia used in European universities for 500 years, and Al-Biruni calculated the Earth's circumference with remarkable accuracy.",
            "The Islamic world also served as a vital trade and cultural bridge between East and West. Trade routes connected China, India, Africa, and Europe, spreading not just goods but also ideas, technologies like papermaking and the compass, and the numerals (0-9) we still use today."
          ],
          fact: "The word 'algebra' comes from the Arabic title of al-Khwarizmi's 9th-century book: 'Al-Kitab al-mukhtasar fi hisab al-jabr wal-muqabala.'",
          quiz: [
            { type: "mc", q: "During the Islamic Golden Age, which city was the greatest center of learning?", options: ["Rome", "London", "Baghdad", "Athens"], answer: 2, explanation: "Baghdad, capital of the Abbasid Caliphate, was home to the House of Wisdom and was the intellectual capital of the medieval world." },
            { type: "tf", q: "Muslim scholars preserved and translated ancient Greek and Roman texts during the Middle Ages.", answer: true, explanation: "Islamic scholars translated Greek, Persian, and Indian works into Arabic, preserving them when many were lost in Europe." },
            { type: "fb", q: "The number system we use today, including zero, is called ___ numerals.", answer: "arabic", hint: "Named after the civilization that spread them to Europe...", explanation: "Arabic numerals (0-9) originated in India but were spread to Europe by Arab scholars. They replaced the much harder Roman numeral system." },
            { type: "mc", q: "Which Islamic scholar wrote a medical encyclopedia used in European universities for 500 years?", options: ["Al-Khwarizmi", "Ibn Sina", "Al-Biruni", "Ibn Rushd"], answer: 1, explanation: "Ibn Sina (also called Avicenna in Europe) wrote the 'Canon of Medicine,' which was a standard medical textbook in Europe and the Islamic world for centuries." }
          ]
        }
      ]
    },
    geography: {
      label: "Geography",
      subject: "geography",
      lessons: [
        {
          id: "climate-zones",
          title: "Climate Zones",
          subtitle: "Why Weather Differs Around the World",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f8fafc"/>
  <ellipse cx="300" cy="130" rx="200" ry="115" fill="#bfdbfe" stroke="#93c5fd" stroke-width="2"/>
  <ellipse cx="300" cy="130" rx="200" ry="60" fill="#4ade80" opacity="0.6"/>
  <ellipse cx="300" cy="130" rx="200" ry="20" fill="#fbbf24" opacity="0.7"/>
  <clipPath id="globe"><ellipse cx="300" cy="130" rx="200" ry="115"/></clipPath>
  <rect x="100" y="15" width="400" height="30" fill="#bfdbfe" clip-path="url(#globe)"/>
  <rect x="100" y="215" width="400" height="30" fill="#bfdbfe" clip-path="url(#globe)"/>
  <rect x="100" y="45" width="400" height="35" fill="#93c5fd" opacity="0.5" clip-path="url(#globe)"/>
  <rect x="100" y="180" width="400" height="35" fill="#93c5fd" opacity="0.5" clip-path="url(#globe)"/>
  <rect x="100" y="80" width="400" height="100" fill="#4ade80" opacity="0.5" clip-path="url(#globe)"/>
  <rect x="100" y="118" width="400" height="24" fill="#fbbf24" opacity="0.6" clip-path="url(#globe)"/>
  <line x1="100" y1="130" x2="500" y2="130" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="510" y="134" font-size="9" fill="#dc2626" font-family="sans-serif" font-weight="bold">Equator</text>
  <text x="510" y="90" font-size="9" fill="#15803d" font-family="sans-serif">Temperate</text>
  <text x="510" y="134" font-size="0" fill="none"/>
  <text x="60" y="25" font-size="9" fill="#1e40af" font-family="sans-serif" font-weight="bold">POLAR</text>
  <text x="60" y="70" font-size="9" fill="#0369a1" font-family="sans-serif" font-weight="bold">TEMPERATE</text>
  <text x="60" y="130" font-size="9" fill="#b45309" font-family="sans-serif" font-weight="bold">TROPICAL</text>
  <text x="60" y="190" font-size="9" fill="#0369a1" font-family="sans-serif" font-weight="bold">TEMPERATE</text>
  <text x="60" y="230" font-size="9" fill="#1e40af" font-family="sans-serif" font-weight="bold">POLAR</text>
  <circle cx="540" cy="60" r="25" fill="#fbbf24" opacity="0.8"/>
  <line x1="540" y1="25" x2="540" y2="30" stroke="#fbbf24" stroke-width="2"/>
  <line x1="540" y1="90" x2="540" y2="95" stroke="#fbbf24" stroke-width="2"/>
  <line x1="505" y1="60" x2="510" y2="60" stroke="#fbbf24" stroke-width="2"/>
  <line x1="570" y1="60" x2="575" y2="60" stroke="#fbbf24" stroke-width="2"/>
</svg>`,
          content: [
            "A climate is the average weather conditions of a place over a long period of time — not just today's weather, but patterns over decades. Earth has several major climate zones, largely determined by how much sunlight a region receives, which depends on its latitude (distance from the equator).",
            "The tropical zone near the equator receives the most direct sunlight year-round, making it hot and often very wet. Rainforests like the Amazon thrive here. Moving toward the poles, we enter the temperate zones, which have four distinct seasons — warm summers and cold winters. Most of the United States, Europe, and China are in temperate zones.",
            "Near the poles are the polar zones, which receive very little sunlight (especially in winter) and are extremely cold year-round. Antarctica is the coldest, driest, and windiest continent. Between tropical and temperate zones are dry zones where deserts often form, such as the Sahara in Africa.",
            "Climate affects everything: what crops can grow, what animals live in an area, how people dress and build homes, and even how economies work. Climate zones also help explain patterns of human settlement — most of the world's largest cities are in temperate zones."
          ],
          fact: "The Sahara Desert, the world's largest hot desert, is nearly as large as the entire United States — yet fewer than 2 million people live there permanently.",
          quiz: [
            { type: "mc", q: "Which climate zone is found near the equator?", options: ["Polar", "Temperate", "Tropical", "Alpine"], answer: 2, explanation: "The tropical zone near the equator receives the most direct sunlight year-round, making it the hottest and often wettest climate zone." },
            { type: "tf", q: "Temperate zones have extreme temperatures and only one or two seasons.", answer: false, explanation: "Temperate zones actually have four distinct seasons — spring, summer, autumn, and winter — with moderate temperatures." },
            { type: "fb", q: "The climate zone found near the North and South Poles is called ___.", answer: "polar", hint: "Named after the geographic features it surrounds...", explanation: "Polar climates are extremely cold year-round, with very little sunlight during winter months." },
            { type: "mc", q: "Which best describes a tropical rainforest climate?", options: ["Hot dry summers and cold winters", "Warm year-round with heavy rainfall", "Cold and icy most of the year", "Mild temperatures with four seasons"], answer: 1, explanation: "Tropical rainforests are warm year-round (near the equator) and receive enormous amounts of rainfall, supporting incredible biodiversity." }
          ]
        },
        {
          id: "river-systems",
          title: "Major River Systems",
          subtitle: "Earth's Lifelines",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f0fdf4"/>
  <text x="50" y="30" font-size="11" fill="#374151" font-family="sans-serif" font-weight="bold">Major Rivers of the World</text>
  <rect x="30" y="50" width="120" height="70" rx="8" fill="#d1fae5" stroke="#86efac" stroke-width="1.5"/>
  <path d="M 55 85 Q 75 75 90 90 Q 105 105 130 88" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="90" y="65" font-size="9" fill="#15803d" font-family="sans-serif" text-anchor="middle" font-weight="bold">NILE</text>
  <text x="90" y="78" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">6,650 km · Africa</text>
  <text x="90" y="112" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">World's longest</text>
  <rect x="170" y="50" width="120" height="70" rx="8" fill="#dbeafe" stroke="#93c5fd" stroke-width="1.5"/>
  <path d="M 195 90 Q 215 75 230 88 Q 245 102 265 82 Q 278 68 285 80" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="230" y="65" font-size="9" fill="#1e40af" font-family="sans-serif" text-anchor="middle" font-weight="bold">AMAZON</text>
  <text x="230" y="78" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">6,400 km · S. America</text>
  <text x="230" y="112" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">Greatest by volume</text>
  <rect x="310" y="50" width="120" height="70" rx="8" fill="#fef3c7" stroke="#fcd34d" stroke-width="1.5"/>
  <path d="M 335 75 Q 345 90 360 85 Q 375 80 385 95 Q 395 110 415 90" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="370" y="65" font-size="9" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">GANGES</text>
  <text x="370" y="78" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">2,525 km · India</text>
  <text x="370" y="112" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">Sacred river</text>
  <rect x="450" y="50" width="120" height="70" rx="8" fill="#fce7f3" stroke="#f9a8d4" stroke-width="1.5"/>
  <path d="M 470 70 Q 490 85 505 78 Q 520 70 540 88 Q 555 103 560 95" stroke="#60a5fa" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="510" y="65" font-size="9" fill="#9d174d" font-family="sans-serif" text-anchor="middle" font-weight="bold">MISSISSIPPI</text>
  <text x="510" y="78" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">3,730 km · N. America</text>
  <text x="510" y="112" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">Major trade route</text>
  <rect x="30" y="145" width="540" height="90" rx="8" fill="white" stroke="#e5e7eb" stroke-width="1"/>
  <text x="300" y="168" font-size="10" fill="#374151" font-family="sans-serif" text-anchor="middle" font-weight="bold">Why Rivers Matter</text>
  <text x="60" y="188" font-size="9" fill="#374151" font-family="sans-serif">Fresh water supply</text>
  <text x="60" y="203" font-size="9" fill="#374151" font-family="sans-serif">Fertile farmland (flooding)</text>
  <text x="60" y="218" font-size="9" fill="#374151" font-family="sans-serif">Transportation routes</text>
  <text x="230" y="188" font-size="9" fill="#374151" font-family="sans-serif">Fish and food</text>
  <text x="230" y="203" font-size="9" fill="#374151" font-family="sans-serif">Hydroelectric power</text>
  <text x="230" y="218" font-size="9" fill="#374151" font-family="sans-serif">Trade and commerce</text>
  <text x="400" y="188" font-size="9" fill="#374151" font-family="sans-serif">Cultural significance</text>
  <text x="400" y="203" font-size="9" fill="#374151" font-family="sans-serif">City development</text>
  <text x="400" y="218" font-size="9" fill="#374151" font-family="sans-serif">Natural borders</text>
</svg>`,
          content: [
            "Rivers have been essential to human civilization throughout history. They provide fresh water for drinking and farming, transport goods and people, support fish and other food sources, and create fertile land when they flood. Almost every major ancient civilization — Egypt, Mesopotamia, India, China — developed along a major river.",
            "The Nile River in Africa, at 6,650 kilometers, is the world's longest river. It flows northward through the Sahara Desert to the Mediterranean Sea. Ancient Egyptian civilization depended entirely on the Nile's annual floods, which deposited rich soil along its banks. Today, over 90% of Egypt's population still lives within a few miles of the Nile.",
            "The Amazon River in South America carries more water than any other river — it discharges about 20% of all the fresh water that flows into the world's oceans. The Amazon basin contains the world's largest tropical rainforest, home to an estimated 10% of all species on Earth. The Ganges in India is considered sacred by over a billion Hindus.",
            "The Mississippi River drains about 40% of North America's landmass and has served as a vital highway for commerce and migration. Mark Twain's famous novels are set along its banks. Rivers continue to be critical infrastructure today — for water supply, shipping, and electricity generation through hydropower."
          ],
          fact: "The Amazon River discharges so much water into the Atlantic Ocean that you can find fresh water 100 miles (160 km) out to sea.",
          quiz: [
            { type: "mc", q: "Which river is considered the longest in the world?", options: ["Amazon", "Mississippi", "Nile", "Ganges"], answer: 2, explanation: "The Nile River in Africa, at approximately 6,650 km, is generally considered the world's longest river." },
            { type: "tf", q: "The Amazon River flows through the continent of South America.", answer: true, explanation: "The Amazon flows through Brazil and several other South American countries, draining into the Atlantic Ocean." },
            { type: "fb", q: "The river that flows through India and is considered sacred by Hindus is the ___ River.", answer: "ganges", hint: "A major river in northern India...", explanation: "The Ganges is one of India's most important rivers — sacred in Hinduism, it supports over 400 million people." },
            { type: "mc", q: "Rivers have historically been important to civilizations primarily because they:", options: ["Keep enemies away", "Support farming, drinking water, and transport", "Produce electricity", "Mark national borders"], answer: 1, explanation: "Rivers provide fresh water, fertile soil from flooding, fish for food, and natural highways for trade and travel." }
          ]
        }
      ]
    },
    economics: {
      label: "Economics",
      subject: "economics",
      lessons: [
        {
          id: "markets-trade-routes",
          title: "Markets and Trade Routes",
          subtitle: "How the Ancient World Connected",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#fef9c3"/>
  <ellipse cx="90" cy="110" rx="55" ry="40" fill="#86efac" opacity="0.8"/>
  <ellipse cx="310" cy="90" rx="65" ry="45" fill="#fca5a5" opacity="0.8"/>
  <ellipse cx="520" cy="115" rx="55" ry="40" fill="#c4b5fd" opacity="0.8"/>
  <ellipse cx="200" cy="185" rx="50" ry="35" fill="#fcd34d" opacity="0.8"/>
  <ellipse cx="400" cy="195" rx="50" ry="35" fill="#7dd3fc" opacity="0.8"/>
  <line x1="145" y1="110" x2="245" y2="97" stroke="#d97706" stroke-width="2" stroke-dasharray="6,3"/>
  <line x1="375" y1="90" x2="465" y2="108" stroke="#d97706" stroke-width="2" stroke-dasharray="6,3"/>
  <line x1="130" y1="130" x2="158" y2="170" stroke="#d97706" stroke-width="2" stroke-dasharray="6,3"/>
  <line x1="245" y1="185" x2="350" y2="190" stroke="#d97706" stroke-width="2" stroke-dasharray="6,3"/>
  <line x1="450" y1="188" x2="476" y2="145" stroke="#d97706" stroke-width="2" stroke-dasharray="6,3"/>
  <line x1="255" y1="103" x2="355" y2="95" stroke="#d97706" stroke-width="2" stroke-dasharray="6,3"/>
  <circle cx="90" cy="110" r="7" fill="#d97706"/>
  <circle cx="310" cy="90" r="7" fill="#d97706"/>
  <circle cx="520" cy="115" r="7" fill="#d97706"/>
  <circle cx="200" cy="185" r="7" fill="#d97706"/>
  <circle cx="400" cy="195" r="7" fill="#d97706"/>
  <text x="90" y="108" font-size="9" fill="#166534" font-family="sans-serif" text-anchor="middle" font-weight="bold">ROME</text>
  <text x="310" y="88" font-size="9" fill="#7f1d1d" font-family="sans-serif" text-anchor="middle" font-weight="bold">BAGHDAD</text>
  <text x="520" y="113" font-size="9" fill="#3b0764" font-family="sans-serif" text-anchor="middle" font-weight="bold">CHANG'AN</text>
  <text x="200" y="183" font-size="9" fill="#78350f" font-family="sans-serif" text-anchor="middle" font-weight="bold">CAIRO</text>
  <text x="400" y="193" font-size="9" fill="#0c4a6e" font-family="sans-serif" text-anchor="middle" font-weight="bold">DELHI</text>
  <text x="300" y="245" font-size="10" fill="#92400e" font-family="sans-serif" text-anchor="middle">--- The Silk Road Trade Network ---</text>
</svg>`,
          content: [
            "A market is any place where buyers and sellers exchange goods and services. Markets can be physical (like a farmers' market or a bazaar) or virtual (like an online store). Throughout history, markets developed wherever people gathered — at crossroads, rivers, and ports.",
            "The Silk Road was one of the most famous trade networks in history, connecting China in the east to the Mediterranean in the west for over a thousand years (roughly 200 BCE to 1400 CE). Despite its name, it was not a single road but a network of land and sea routes. Merchants traded silk, spices, glassware, gold, and countless other goods.",
            "The Silk Road was about more than just goods — it was a highway for ideas, religions, and technologies. Buddhism traveled from India to China, Christianity and Islam spread along trade routes, and technologies like papermaking and gunpowder moved from China to Europe. The bubonic plague also spread along the Silk Road in the 1300s.",
            "Trade routes created specialized economies. Cities on trade routes grew wealthy by taxing goods passing through. Artisans in one region could focus entirely on producing a single item (like silk, spices, or pottery) because they could trade it for everything else they needed."
          ],
          fact: "The Silk Road got its name from Chinese silk, which was so valuable in Rome that Roman senators were forbidden from wearing it — they considered it too luxurious and morally corrupt.",
          quiz: [
            { type: "mc", q: "The Silk Road was a trade route primarily connecting:", options: ["Europe and Africa", "China and Europe/Mediterranean", "North and South America", "Australia and Asia"], answer: 1, explanation: "The Silk Road connected China in the east to the Mediterranean (Rome, Constantinople) in the west, passing through Central Asia and the Middle East." },
            { type: "tf", q: "The Silk Road was a single, well-paved road running through deserts.", answer: false, explanation: "The Silk Road was actually a vast network of land and sea routes, not one road. Merchants rarely traveled the entire route." },
            { type: "fb", q: "The Silk Road got its name from the valuable material ___ that was traded from China.", answer: "silk", hint: "Made from silkworm cocoons...", explanation: "Chinese silk was so prized in the Roman Empire that it was literally worth its weight in gold." },
            { type: "mc", q: "Trade routes help economies by:", options: ["Making all goods more expensive", "Reducing variety of available products", "Allowing exchange of goods, ideas, and culture", "Keeping wealth concentrated in one place"], answer: 2, explanation: "Trade routes spread goods, ideas, religions, and technologies between civilizations, benefiting all participants." }
          ]
        },
        {
          id: "money-banking",
          title: "Money and Banking",
          subtitle: "The History of Currency",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f0fdf4"/>
  <circle cx="80" cy="90" r="32" fill="#fcd34d" stroke="#d97706" stroke-width="2"/>
  <circle cx="80" cy="90" r="24" fill="#fbbf24" stroke="#d97706" stroke-width="1"/>
  <text x="80" y="95" font-size="14" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">$</text>
  <circle cx="155" cy="90" r="28" fill="#fcd34d" stroke="#d97706" stroke-width="2"/>
  <circle cx="155" cy="90" r="20" fill="#fbbf24" stroke="#d97706" stroke-width="1"/>
  <text x="155" y="95" font-size="12" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">¥</text>
  <circle cx="222" cy="90" r="22" fill="#fcd34d" stroke="#d97706" stroke-width="2"/>
  <text x="222" y="95" font-size="11" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">€</text>
  <rect x="270" y="58" width="100" height="64" rx="5" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
  <rect x="277" y="65" width="86" height="50" rx="3" fill="#22c55e" opacity="0.5"/>
  <text x="320" y="95" font-size="16" fill="#14532d" font-family="sans-serif" text-anchor="middle" font-weight="bold">$100</text>
  <rect x="390" y="48" width="175" height="120" rx="10" fill="white" stroke="#9ca3af" stroke-width="2"/>
  <rect x="390" y="48" width="175" height="28" rx="10" fill="#1e40af" opacity="0.9"/>
  <rect x="390" y="62" width="175" height="14" fill="#1e40af" opacity="0.9"/>
  <text x="478" y="65" font-size="10" fill="white" font-family="sans-serif" text-anchor="middle" font-weight="bold">CITY BANK</text>
  <text x="410" y="105" font-size="8" fill="#374151" font-family="sans-serif">Deposits (savings)</text>
  <text x="410" y="120" font-size="8" fill="#374151" font-family="sans-serif">Loans (lending)</text>
  <text x="410" y="135" font-size="8" fill="#374151" font-family="sans-serif">Interest rates</text>
  <text x="80" y="145" font-size="9" fill="#374151" font-family="sans-serif" text-anchor="middle">Coins</text>
  <text x="155" y="135" font-size="9" fill="#374151" font-family="sans-serif" text-anchor="middle">Currency</text>
  <text x="320" y="140" font-size="9" fill="#374151" font-family="sans-serif" text-anchor="middle">Paper Money</text>
  <rect x="30" y="175" width="540" height="60" rx="8" fill="white" stroke="#e5e7eb" stroke-width="1"/>
  <text x="300" y="198" font-size="10" fill="#374151" font-family="sans-serif" text-anchor="middle" font-weight="bold">Timeline of Money</text>
  <text x="80" y="218" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">9000 BCE</text>
  <text x="80" y="228" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">Commodity</text>
  <text x="210" y="218" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">600 BCE</text>
  <text x="210" y="228" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">Metal coins</text>
  <text x="340" y="218" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">700 CE</text>
  <text x="340" y="228" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">Paper money (China)</text>
  <text x="480" y="218" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">1990s</text>
  <text x="480" y="228" font-size="8" fill="#374151" font-family="sans-serif" text-anchor="middle">Digital payments</text>
</svg>`,
          content: [
            "Money is anything that people widely accept in exchange for goods and services. Money makes trade far more efficient than barter by solving the double coincidence of wants problem. For money to work, everyone must trust that others will accept it — which is why governments back currencies.",
            "The first paper money was invented in China around 700 CE during the Tang Dynasty. Chinese merchants found it easier to deposit heavy metal coins with a trusted merchant and carry lightweight paper receipts instead. The government eventually took over this system, creating the world's first government-issued paper currency.",
            "A bank is an institution that accepts deposits (savings) from people and businesses, and lends that money to borrowers. Banks charge interest on loans — a percentage fee for borrowing money. They pay smaller interest to depositors for letting the bank use their money. This system channels savings into investments that help the economy grow.",
            "Inflation occurs when prices rise over time, meaning the same amount of money buys less than it used to. Governments and central banks (like the Federal Reserve in the US) try to control inflation by adjusting interest rates and the money supply. Understanding money and banking is essential to understanding how modern economies function."
          ],
          fact: "The word 'bank' comes from the Italian word 'banco,' meaning bench — early Italian bankers conducted business sitting at benches in the marketplace.",
          quiz: [
            { type: "mc", q: "Paper money was first used in which country?", options: ["England", "China", "USA", "India"], answer: 1, explanation: "China invented paper money around 700 CE during the Tang Dynasty, when merchants used paper receipts instead of heavy coins." },
            { type: "tf", q: "A bank is an institution where people can both save money and borrow money.", answer: true, explanation: "Banks accept deposits (savings) and make loans. They pay interest on deposits and charge interest on loans." },
            { type: "fb", q: "The cost of borrowing money, expressed as a percentage, is called the ___ rate.", answer: "interest", hint: "A fee charged on loans...", explanation: "Interest rates determine how much borrowers pay for loans and how much savers earn on deposits." },
            { type: "mc", q: "Inflation means that over time, the same amount of money:", options: ["Buys more goods", "Buys fewer goods", "Stays exactly the same", "Doubles in purchasing power"], answer: 1, explanation: "Inflation is a rise in prices over time, which reduces the purchasing power of money — $100 buys less today than it did 20 years ago." }
          ]
        }
      ]
    }
  },

  8: {
    history: {
      label: "World History",
      subject: "history",
      lessons: [
        {
          id: "renaissance",
          title: "The Renaissance",
          subtitle: "Rebirth of Art, Science, and Ideas",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#fef9ec"/>
  <rect x="40" y="40" width="155" height="185" rx="8" fill="#fff7ed" stroke="#d97706" stroke-width="1.5"/>
  <text x="118" y="62" font-size="10" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">PAINTING</text>
  <ellipse cx="118" cy="115" rx="45" ry="55" fill="#fde68a" opacity="0.6"/>
  <ellipse cx="105" cy="105" rx="18" ry="22" fill="#fbbf24" opacity="0.6"/>
  <circle cx="118" cy="88" r="16" fill="#fcd34d" opacity="0.8"/>
  <path d="M 90 140 Q 100 160 118 155 Q 136 150 146 140" stroke="#d97706" stroke-width="2" fill="none"/>
  <text x="118" y="210" font-size="9" fill="#92400e" font-family="sans-serif" text-anchor="middle">Mona Lisa</text>
  <text x="118" y="222" font-size="9" fill="#92400e" font-family="sans-serif" text-anchor="middle">Leonardo da Vinci</text>
  <rect x="220" y="40" width="155" height="185" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="298" y="62" font-size="10" fill="#1e40af" font-family="sans-serif" text-anchor="middle" font-weight="bold">SCIENCE</text>
  <circle cx="298" cy="115" r="45" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <circle cx="298" cy="115" r="30" fill="none" stroke="#93c5fd" stroke-width="1"/>
  <circle cx="298" cy="115" r="5" fill="#1d4ed8"/>
  <ellipse cx="298" cy="115" rx="45" ry="18" fill="none" stroke="#60a5fa" stroke-width="1.5" transform="rotate(-30,298,115)"/>
  <text x="298" y="210" font-size="9" fill="#1e40af" font-family="sans-serif" text-anchor="middle">Astronomy</text>
  <text x="298" y="222" font-size="9" fill="#1e40af" font-family="sans-serif" text-anchor="middle">Copernicus · Galileo</text>
  <rect x="400" y="40" width="155" height="185" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="478" y="62" font-size="10" fill="#15803d" font-family="sans-serif" text-anchor="middle" font-weight="bold">PRINTING</text>
  <rect x="445" y="72" width="65" height="85" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <line x1="455" y1="90" x2="500" y2="90" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="455" y1="102" x2="500" y2="102" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="455" y1="114" x2="500" y2="114" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="455" y1="126" x2="490" y2="126" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="455" y1="138" x2="495" y2="138" stroke="#16a34a" stroke-width="1.5"/>
  <text x="478" y="178" font-size="9" fill="#15803d" font-family="sans-serif" text-anchor="middle">Gutenberg</text>
  <text x="478" y="190" font-size="9" fill="#15803d" font-family="sans-serif" text-anchor="middle">Printing Press</text>
  <text x="478" y="210" font-size="9" fill="#15803d" font-family="sans-serif" text-anchor="middle">1440 CE</text>
</svg>`,
          content: [
            "The Renaissance (French for 'rebirth') was a cultural and intellectual movement that began in Italy around the 14th century and spread across Europe through the 16th century. It marked a renewed interest in the ideas, art, and learning of ancient Greece and Rome, combined with new humanist values that placed human beings — rather than only religious themes — at the center of art and thought.",
            "The Renaissance produced some of the greatest artists in history. Leonardo da Vinci painted the Mona Lisa and The Last Supper while also designing flying machines and studying human anatomy. Michelangelo painted the Sistine Chapel ceiling and sculpted the David. Raphael created masterful compositions that combined beauty and geometric harmony.",
            "The Renaissance also transformed science. Nicolaus Copernicus proposed that the Earth orbited the Sun (not the other way around), challenging over a thousand years of accepted belief. Galileo Galilei used telescopes to observe the night sky and confirmed this heliocentric model. Leonardo da Vinci filled thousands of pages of notebooks with scientific observations and inventions.",
            "Perhaps the most transformative technology of the Renaissance was Johannes Gutenberg's printing press (around 1440). Before the printing press, books had to be copied by hand — only the wealthy and the church had access to knowledge. The printing press made books affordable, literacy spread rapidly, and new ideas circulated across Europe at unprecedented speed."
          ],
          fact: "Gutenberg's printing press is considered one of the most important inventions in human history — within 50 years of its invention, over 20 million books had been printed across Europe.",
          quiz: [
            { type: "mc", q: "The Renaissance began in which country?", options: ["England", "France", "Italy", "Germany"], answer: 2, explanation: "The Renaissance began in the Italian city-states (Florence, Venice, Rome) in the 14th century, spreading northward into France, England, and Germany." },
            { type: "tf", q: "The Renaissance was a period of renewed interest in ancient Greek and Roman ideas.", answer: true, explanation: "The word Renaissance means 'rebirth' — a rebirth of classical Greco-Roman learning, combined with new humanist ideas." },
            { type: "fb", q: "The Renaissance artist and scientist who painted the Mona Lisa was Leonardo ___.", answer: "da vinci", hint: "His full name means 'from Vinci' (a town in Italy)...", explanation: "Leonardo da Vinci (1452–1519) was the ultimate Renaissance man — painter, sculptor, architect, musician, mathematician, engineer, and scientist." },
            { type: "mc", q: "Which invention by Johannes Gutenberg helped spread Renaissance ideas across Europe?", options: ["The compass", "The printing press", "The telescope", "The steam engine"], answer: 1, explanation: "Gutenberg's printing press (c. 1440) made books affordable and widely available, dramatically accelerating the spread of new Renaissance ideas." }
          ]
        },
        {
          id: "age-of-exploration",
          title: "The Age of Exploration",
          subtitle: "Europeans Reach the New World",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#dbeafe"/>
  <path d="M 0 160 Q 150 140 300 165 Q 450 190 600 155" stroke="#93c5fd" stroke-width="3" fill="none" opacity="0.5"/>
  <path d="M 0 185 Q 150 165 300 190 Q 450 215 600 180" stroke="#93c5fd" stroke-width="2" fill="none" opacity="0.4"/>
  <polygon points="310,120 290,160 330,160" fill="#9ca3af"/>
  <polygon points="310,120 285,145 310,140" fill="#f1f5f9"/>
  <polygon points="310,120 310,140 335,145" fill="#e2e8f0"/>
  <rect x="290" y="158" width="40" height="8" rx="2" fill="#78716c"/>
  <line x1="310" y1="120" x2="310" y2="168" stroke="#78716c" stroke-width="2"/>
  <line x1="285" y1="130" x2="335" y2="130" stroke="#78716c" stroke-width="1.5"/>
  <circle cx="80" cy="110" r="35" fill="#86efac" opacity="0.8"/>
  <text x="80" y="108" font-size="9" fill="#166534" font-family="sans-serif" text-anchor="middle" font-weight="bold">EUROPE</text>
  <text x="80" y="120" font-size="8" fill="#166534" font-family="sans-serif" text-anchor="middle">Portugal/Spain</text>
  <circle cx="510" cy="120" r="40" fill="#fca5a5" opacity="0.8"/>
  <text x="510" y="118" font-size="9" fill="#7f1d1d" font-family="sans-serif" text-anchor="middle" font-weight="bold">AMERICAS</text>
  <text x="510" y="130" font-size="8" fill="#7f1d1d" font-family="sans-serif" text-anchor="middle">1492 Columbus</text>
  <path d="M 110 115 Q 200 80 285 135" stroke="#d97706" stroke-width="2" stroke-dasharray="5,3" fill="none"/>
  <polygon points="285,135 275,130 280,140" fill="#d97706"/>
  <text x="195" y="92" font-size="9" fill="#92400e" font-family="sans-serif" text-anchor="middle">Columbus 1492</text>
  <circle cx="80" cy="200" r="5" fill="#1e40af"/>
  <text x="100" y="204" font-size="8" fill="#1e40af" font-family="sans-serif">Vasco da Gama → India (1498)</text>
  <circle cx="80" cy="220" r="5" fill="#7c3aed"/>
  <text x="100" y="224" font-size="8" fill="#7c3aed" font-family="sans-serif">Magellan → Circumnavigation (1519–22)</text>
</svg>`,
          content: [
            "The Age of Exploration (roughly 1400–1600 CE) was a period when European sailors, funded by powerful monarchies, ventured into unknown seas to find new trade routes to Asia and Africa. Portugal and Spain led the way, driven by desire for wealth (especially spices, gold, and silk), religious missionary goals, and competition for power.",
            "In 1492, Christopher Columbus, sailing for Spain, crossed the Atlantic hoping to reach Asia by going west. Instead, he landed in the Caribbean, beginning sustained contact between Europe and the Americas. Columbus never realized he had reached a continent unknown to Europeans — he died believing he had found islands off the coast of Asia.",
            "Vasco da Gama of Portugal became the first European to sail around Africa to reach India (1498), opening a lucrative sea trade route. Ferdinand Magellan's expedition (1519–1522) became the first to circumnavigate (sail around) the entire globe, proving definitively that the Earth is round.",
            "The Age of Exploration had devastating consequences for the indigenous peoples of the Americas. European colonizers brought diseases like smallpox to which native populations had no immunity, killing an estimated 50–90% of the pre-Columbian population. European powers also established colonies, exploiting resources and enslaved Africans to work their plantations — beginning the transatlantic slave trade."
          ],
          fact: "When Spanish conquistadors arrived in the Aztec Empire in 1519, smallpox spread through the population so quickly that it killed millions before any battles were fought.",
          quiz: [
            { type: "mc", q: "Christopher Columbus's voyage in 1492 led him to:", options: ["The coast of India", "China", "The Caribbean and Americas", "Africa"], answer: 2, explanation: "Columbus sailed west from Spain expecting to reach Asia, but instead landed in the Caribbean, beginning European contact with the Americas." },
            { type: "tf", q: "Vasco da Gama was the first explorer to sail completely around the world.", answer: false, explanation: "Vasco da Gama sailed around Africa to reach India. Magellan's expedition (1519–1522) was the first to circumnavigate the globe." },
            { type: "fb", q: "The Portuguese explorer who first sailed around Africa to reach India was Vasco da ___.", answer: "gama", hint: "Portuguese explorer, 1498...", explanation: "Vasco da Gama's 1498 voyage opened a direct sea route from Europe to India, bypassing the Silk Road and shifting global trade power to Portugal." },
            { type: "mc", q: "What was a major devastating impact of European exploration on the Americas?", options: ["It helped native populations grow stronger", "European diseases killed vast numbers of indigenous people", "It brought new farming techniques that helped natives", "It had very little impact on native populations"], answer: 1, explanation: "European diseases like smallpox, to which native Americans had no immunity, killed an estimated 50–90% of the indigenous population." }
          ]
        }
      ]
    },
    geography: {
      label: "Geography",
      subject: "geography",
      lessons: [
        {
          id: "political-geography",
          title: "Political Geography",
          subtitle: "Nations, Borders, and Capitals",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f8fafc"/>
  <rect x="30" y="30" width="540" height="185" rx="8" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="1"/>
  <rect x="55" y="50" width="130" height="90" rx="5" fill="#bbf7d0" stroke="#4ade80" stroke-width="1.5"/>
  <rect x="200" y="55" width="110" height="80" rx="5" fill="#fde68a" stroke="#fbbf24" stroke-width="1.5"/>
  <rect x="325" y="45" width="90" height="100" rx="5" fill="#fca5a5" stroke="#f87171" stroke-width="1.5"/>
  <rect x="430" y="60" width="120" height="75" rx="5" fill="#c4b5fd" stroke="#a78bfa" stroke-width="1.5"/>
  <rect x="80" y="155" width="180" height="45" rx="5" fill="#fef9c3" stroke="#fcd34d" stroke-width="1.5"/>
  <rect x="280" y="150" width="165" height="50" rx="5" fill="#fed7aa" stroke="#fb923c" stroke-width="1.5"/>
  <circle cx="120" cy="95" r="5" fill="#166534"/>
  <text x="132" y="99" font-size="9" fill="#166534" font-family="sans-serif" font-weight="bold">Capital</text>
  <circle cx="255" cy="95" r="5" fill="#92400e"/>
  <circle cx="370" cy="95" r="5" fill="#7f1d1d"/>
  <circle cx="490" cy="97" r="5" fill="#3b0764"/>
  <text x="110" y="65" font-size="9" fill="#166534" font-family="sans-serif" font-weight="bold">COUNTRY A</text>
  <text x="218" y="70" font-size="9" fill="#92400e" font-family="sans-serif" font-weight="bold">COUNTRY B</text>
  <text x="340" y="60" font-size="9" fill="#7f1d1d" font-family="sans-serif" font-weight="bold">COUNTRY C</text>
  <text x="445" y="75" font-size="9" fill="#3b0764" font-family="sans-serif" font-weight="bold">COUNTRY D</text>
  <text x="130" y="175" font-size="9" fill="#78350f" font-family="sans-serif" font-weight="bold">COUNTRY E</text>
  <text x="330" y="170" font-size="9" fill="#7c2d12" font-family="sans-serif" font-weight="bold">COUNTRY F</text>
  <rect x="30" y="225" width="540" height="25" rx="5" fill="white" stroke="#e5e7eb" stroke-width="1"/>
  <circle cx="50" cy="237" r="5" fill="#166534"/>
  <text x="62" y="241" font-size="8" fill="#374151" font-family="sans-serif">National capital</text>
  <rect x="160" y="232" width="16" height="10" fill="#bbf7d0" stroke="#4ade80" stroke-width="1"/>
  <text x="183" y="241" font-size="8" fill="#374151" font-family="sans-serif">Sovereign nation</text>
  <line x1="300" y1="232" x2="300" y2="242" stroke="#374151" stroke-width="2"/>
  <text x="308" y="241" font-size="8" fill="#374151" font-family="sans-serif">National border</text>
</svg>`,
          content: [
            "Political geography is the study of how humans have divided the Earth's surface into political units — countries, states, provinces, and cities. Today, the world is divided into approximately 195 recognized sovereign nations, each with defined borders, a government, and a capital city.",
            "A sovereign nation is one that has the right to govern itself without outside interference. Sovereignty means a government has supreme authority within its borders. National borders are the lines that separate one country's territory from another. Some borders follow natural features like rivers and mountains; others are straight lines drawn by historical treaties.",
            "Every country has a capital city — the city where the central government is located. The capital is usually where the parliament or congress meets, where the president or prime minister works, and where foreign embassies are located. However, the capital is not always the largest city. For example, Washington D.C. is the U.S. capital, but New York City is much larger.",
            "Political geography constantly changes. Countries split apart (like Czechoslovakia becoming Czech Republic and Slovakia in 1993), merge (like East and West Germany unifying in 1990), or gain independence from colonial powers (most African and Asian nations gained independence in the 20th century). Understanding political geography helps us follow international news and global events."
          ],
          fact: "Russia is the world's largest country by area, covering 11 time zones — so when it's Monday morning in western Russia, it's already Tuesday morning in eastern Russia.",
          quiz: [
            { type: "mc", q: "A country's capital city is usually:", options: ["Always the largest city", "The center of government", "The wealthiest city", "The oldest city"], answer: 1, explanation: "A capital city is where the central government operates. It hosts parliament/congress, the head of state, and foreign embassies." },
            { type: "tf", q: "A sovereign nation has the right to govern itself without interference from other countries.", answer: true, explanation: "Sovereignty is the fundamental right of a nation to govern its own territory and people without outside control." },
            { type: "fb", q: "The imaginary line that marks where one country's territory ends and another begins is called a national ___.", answer: "border", hint: "Also called a boundary...", explanation: "National borders define the territory of a country. Some follow rivers or mountains; others are straight lines from historical agreements." },
            { type: "mc", q: "Approximately how many countries are recognized by the United Nations today?", options: ["About 50", "About 100", "About 195", "About 500"], answer: 2, explanation: "There are approximately 195 recognized sovereign nations in the world, all members of (or recognized by) the United Nations." }
          ]
        },
        {
          id: "population-urbanization",
          title: "Population and Urbanization",
          subtitle: "Where People Live and Why",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#fafafa"/>
  <text x="300" y="25" font-size="11" fill="#374151" font-family="sans-serif" text-anchor="middle" font-weight="bold">World Population Distribution</text>
  <rect x="30" y="35" width="540" height="160" rx="8" fill="#e0f2fe" stroke="#93c5fd" stroke-width="1"/>
  <circle cx="95" cy="90" r="4" fill="#1e40af" opacity="0.8"/>
  <circle cx="110" cy="80" r="4" fill="#1e40af" opacity="0.8"/>
  <circle cx="105" cy="100" r="4" fill="#1e40af" opacity="0.8"/>
  <circle cx="120" cy="95" r="4" fill="#1e40af" opacity="0.8"/>
  <circle cx="85" cy="110" r="4" fill="#1e40af" opacity="0.8"/>
  <text x="105" y="140" font-size="8" fill="#1e40af" font-family="sans-serif" text-anchor="middle">N. America</text>
  <circle cx="250" cy="75" r="4" fill="#dc2626" opacity="0.8"/>
  <circle cx="265" cy="68" r="4" fill="#dc2626" opacity="0.8"/>
  <circle cx="258" cy="85" r="4" fill="#dc2626" opacity="0.8"/>
  <text x="258" y="105" font-size="8" fill="#dc2626" font-family="sans-serif" text-anchor="middle">Europe</text>
  <circle cx="330" cy="85" r="5" fill="#d97706" opacity="0.9"/>
  <circle cx="345" cy="75" r="5" fill="#d97706" opacity="0.9"/>
  <circle cx="360" cy="85" r="5" fill="#d97706" opacity="0.9"/>
  <circle cx="338" cy="98" r="5" fill="#d97706" opacity="0.9"/>
  <circle cx="353" cy="98" r="5" fill="#d97706" opacity="0.9"/>
  <circle cx="370" cy="75" r="5" fill="#d97706" opacity="0.9"/>
  <circle cx="325" cy="72" r="5" fill="#d97706" opacity="0.9"/>
  <text x="350" y="120" font-size="8" fill="#d97706" font-family="sans-serif" text-anchor="middle">South/East Asia</text>
  <circle cx="430" cy="90" r="6" fill="#7c3aed" opacity="0.9"/>
  <circle cx="445" cy="80" r="6" fill="#7c3aed" opacity="0.9"/>
  <circle cx="458" cy="92" r="6" fill="#7c3aed" opacity="0.9"/>
  <circle cx="440" cy="100" r="6" fill="#7c3aed" opacity="0.9"/>
  <circle cx="465" cy="78" r="6" fill="#7c3aed" opacity="0.9"/>
  <circle cx="420" cy="95" r="6" fill="#7c3aed" opacity="0.9"/>
  <circle cx="480" cy="88" r="6" fill="#7c3aed" opacity="0.9"/>
  <circle cx="453" cy="108" r="6" fill="#7c3aed" opacity="0.9"/>
  <text x="450" y="132" font-size="8" fill="#7c3aed" font-family="sans-serif" text-anchor="middle">China/India</text>
  <text x="450" y="143" font-size="8" fill="#7c3aed" font-family="sans-serif" text-anchor="middle">(densest)</text>
  <rect x="30" y="210" width="540" height="40" rx="6" fill="white" stroke="#e5e7eb" stroke-width="1"/>
  <text x="130" y="228" font-size="9" fill="#374151" font-family="sans-serif" text-anchor="middle" font-weight="bold">Urbanization Rate</text>
  <rect x="55" y="234" width="150" height="8" rx="4" fill="#e5e7eb"/>
  <rect x="55" y="234" width="113" height="8" rx="4" fill="#3b82f6"/>
  <text x="213" y="241" font-size="8" fill="#374151" font-family="sans-serif">56% urban (2023)</text>
  <text x="380" y="228" font-size="9" fill="#374151" font-family="sans-serif" text-anchor="middle">World population</text>
  <text x="380" y="241" font-size="9" fill="#374151" font-family="sans-serif" text-anchor="middle">~8 billion (2023)</text>
</svg>`,
          content: [
            "World population reached 8 billion people in 2022, and continues to grow — though the rate of growth is slowing. Population is not evenly distributed: Asia is home to about 60% of the world's people, with China and India each having over 1.4 billion. Many regions of Africa, Europe, and the Americas are much less densely populated.",
            "Population density measures how many people live in a given area (usually per square kilometer or square mile). Dense areas like Bangladesh have over 1,200 people per square kilometer; sparse areas like Mongolia have fewer than 2. High density often leads to competition for resources, higher housing costs, and environmental pressure.",
            "Urbanization is the process by which people move from rural (countryside) areas to urban (city) areas. For the first time in history, more than half the world's population now lives in cities. Cities offer jobs, education, healthcare, and social opportunities that rural areas often lack — driving this massive migration.",
            "Megacities — cities with more than 10 million people — are a modern phenomenon. Tokyo (37 million), Delhi (32 million), and Shanghai (28 million) are the three largest. Urbanization creates challenges: cities must provide housing, transportation, clean water, and jobs for enormous and rapidly growing populations."
          ],
          fact: "In 1800, only 3% of the world's population lived in cities. By 2050, it is estimated that 68% of humanity will be urban dwellers.",
          quiz: [
            { type: "mc", q: "Population density measures:", options: ["How tall people are on average", "How many people live in a given area", "How fast a city grows", "How old the population is"], answer: 1, explanation: "Population density = number of people per unit of area (e.g., per square km). High density means many people in a small area." },
            { type: "tf", q: "Today, more than half the world's population lives in urban (city) areas.", answer: true, explanation: "For the first time in human history, over 56% of the world's population lives in cities, and this share continues to grow." },
            { type: "fb", q: "The movement of people from rural areas to cities is called ___.", answer: "urbanization", hint: "A word that includes 'urban'...", explanation: "Urbanization is one of the defining trends of the modern world, driven by economic opportunities and services available in cities." },
            { type: "mc", q: "Which continent has the largest total population?", options: ["Europe", "North America", "Africa", "Asia"], answer: 3, explanation: "Asia is home to about 60% of the world's population, including the two most populous countries — China and India." }
          ]
        }
      ]
    },
    economics: {
      label: "Economics",
      subject: "economics",
      lessons: [
        {
          id: "economic-systems",
          title: "Economic Systems",
          subtitle: "Capitalism, Socialism, and Mixed Economies",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f8fafc"/>
  <rect x="20" y="40" width="170" height="175" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <rect x="215" y="40" width="170" height="175" rx="10" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <rect x="410" y="40" width="170" height="175" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="105" y="65" font-size="11" fill="#1e40af" font-family="sans-serif" text-anchor="middle" font-weight="bold">CAPITALISM</text>
  <text x="300" y="65" font-size="11" fill="#15803d" font-family="sans-serif" text-anchor="middle" font-weight="bold">SOCIALISM</text>
  <text x="495" y="65" font-size="11" fill="#92400e" font-family="sans-serif" text-anchor="middle" font-weight="bold">MIXED</text>
  <text x="35" y="90" font-size="8" fill="#1e40af" font-family="sans-serif">Private ownership</text>
  <text x="35" y="105" font-size="8" fill="#1e40af" font-family="sans-serif">Free market prices</text>
  <text x="35" y="120" font-size="8" fill="#1e40af" font-family="sans-serif">Competition drives</text>
  <text x="35" y="133" font-size="8" fill="#1e40af" font-family="sans-serif">  innovation</text>
  <text x="35" y="150" font-size="8" fill="#1e40af" font-family="sans-serif">Profit motive</text>
  <text x="35" y="165" font-size="8" fill="#1e40af" font-family="sans-serif">Examples:</text>
  <text x="35" y="178" font-size="8" fill="#1e40af" font-family="sans-serif">USA, UK</text>
  <text x="230" y="90" font-size="8" fill="#15803d" font-family="sans-serif">Government controls</text>
  <text x="230" y="103" font-size="8" fill="#15803d" font-family="sans-serif">  key industries</text>
  <text x="230" y="118" font-size="8" fill="#15803d" font-family="sans-serif">Wealth more equally</text>
  <text x="230" y="131" font-size="8" fill="#15803d" font-family="sans-serif">  distributed</text>
  <text x="230" y="148" font-size="8" fill="#15803d" font-family="sans-serif">State planning</text>
  <text x="230" y="165" font-size="8" fill="#15803d" font-family="sans-serif">Examples:</text>
  <text x="230" y="178" font-size="8" fill="#15803d" font-family="sans-serif">Cuba, N. Korea</text>
  <text x="425" y="90" font-size="8" fill="#92400e" font-family="sans-serif">Private + public</text>
  <text x="425" y="105" font-size="8" fill="#92400e" font-family="sans-serif">Free markets + some</text>
  <text x="425" y="118" font-size="8" fill="#92400e" font-family="sans-serif">  regulation</text>
  <text x="425" y="135" font-size="8" fill="#92400e" font-family="sans-serif">Social safety nets</text>
  <text x="425" y="150" font-size="8" fill="#92400e" font-family="sans-serif">Most common today</text>
  <text x="425" y="165" font-size="8" fill="#92400e" font-family="sans-serif">Examples:</text>
  <text x="425" y="178" font-size="8" fill="#92400e" font-family="sans-serif">Canada, Germany</text>
  <text x="300" y="235" font-size="9" fill="#374151" font-family="sans-serif" text-anchor="middle">Most modern economies are mixed — combining elements of both</text>
</svg>`,
          content: [
            "An economic system is the way a society organizes the production, distribution, and consumption of goods and services. Every society must answer three fundamental questions: What to produce? How to produce it? For whom to produce it? Different economic systems answer these questions in different ways.",
            "In a capitalist (free market) economy, private individuals and businesses own the means of production — factories, farms, and businesses. Prices are set by supply and demand, competition drives efficiency and innovation, and the profit motive encourages people to work and create. The United States, Japan, and most of Western Europe operate largely on capitalist principles.",
            "In a socialist or command economy, the government controls major industries and economic planning. The goal is a more equal distribution of wealth and to ensure everyone's basic needs are met. Pure command economies (like the former Soviet Union) struggled with inefficiency and lack of innovation because there was no profit incentive for producers.",
            "Most modern countries have mixed economies — a combination of free markets and government regulation. The government provides public goods (roads, schools, military) and a safety net (unemployment insurance, healthcare, pensions), while private businesses drive most economic activity. The balance between private and public varies significantly between countries like Sweden (more socialist) and the United States (more capitalist)."
          ],
          fact: "The United States, often called the world's most capitalist economy, still has significant government involvement — the federal government spends about 24% of GDP and provides Medicare, Medicaid, and Social Security.",
          quiz: [
            { type: "mc", q: "In a capitalist (free market) economy, who primarily decides what to produce?", options: ["The government", "The military", "Private businesses and consumers", "International organizations"], answer: 2, explanation: "In capitalism, private businesses and consumers make production decisions based on supply, demand, and the profit motive." },
            { type: "tf", q: "In a command economy, the government controls all major economic decisions.", answer: true, explanation: "Command economies (like the former Soviet Union or North Korea) have the government control production, prices, and distribution of goods." },
            { type: "fb", q: "Most modern countries use a ___ economy, which combines features of both capitalism and socialism.", answer: "mixed", hint: "Combining two things...", explanation: "Mixed economies blend free market capitalism with government regulation and public services — this describes most developed nations today." },
            { type: "mc", q: "What is the main goal of a socialist economic system?", options: ["To maximize profits for businesses", "To distribute wealth more equally", "To eliminate all forms of trade", "To lower all taxes to zero"], answer: 1, explanation: "Socialism aims to reduce economic inequality by having the government own key industries and redistribute wealth more equally." }
          ]
        },
        {
          id: "supply-demand",
          title: "Supply and Demand",
          subtitle: "How Markets Set Prices",
          illustration: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="260" fill="#f8fafc"/>
  <rect x="60" y="20" width="480" height="210" rx="8" fill="white" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="100" y1="210" x2="100" y2="30" stroke="#374151" stroke-width="2"/>
  <line x1="100" y1="210" x2="530" y2="210" stroke="#374151" stroke-width="2"/>
  <text x="85" y="25" font-size="10" fill="#374151" font-family="sans-serif" font-weight="bold">Price</text>
  <text x="525" y="222" font-size="10" fill="#374151" font-family="sans-serif">Quantity</text>
  <line x1="120" y1="50" x2="500" y2="195" stroke="#dc2626" stroke-width="2.5"/>
  <text x="505" y="199" font-size="10" fill="#dc2626" font-family="sans-serif" font-weight="bold">D</text>
  <text x="460" y="42" font-size="9" fill="#dc2626" font-family="sans-serif">Demand</text>
  <text x="455" y="55" font-size="8" fill="#dc2626" font-family="sans-serif">(price ↑ = buy less)</text>
  <line x1="120" y1="195" x2="500" y2="50" stroke="#2563eb" stroke-width="2.5"/>
  <text x="505" y="54" font-size="10" fill="#2563eb" font-family="sans-serif" font-weight="bold">S</text>
  <text x="120" y="42" font-size="9" fill="#2563eb" font-family="sans-serif">Supply</text>
  <text x="120" y="55" font-size="8" fill="#2563eb" font-family="sans-serif">(price ↑ = supply more)</text>
  <circle cx="310" cy="122" r="8" fill="#16a34a"/>
  <line x1="310" y1="130" x2="310" y2="210" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="122" x2="310" y2="122" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="315" y="120" font-size="9" fill="#15803d" font-family="sans-serif" font-weight="bold">Equilibrium</text>
  <text x="315" y="132" font-size="8" fill="#15803d" font-family="sans-serif">Market price</text>
  <text x="75" y="125" font-size="8" fill="#15803d" font-family="sans-serif">P*</text>
  <text x="302" y="222" font-size="8" fill="#15803d" font-family="sans-serif">Q*</text>
  <text x="80" y="60" font-size="8" fill="#6b7280" font-family="sans-serif">High</text>
  <text x="80" y="200" font-size="8" fill="#6b7280" font-family="sans-serif">Low</text>
</svg>`,
          content: [
            "Supply and demand is the most fundamental concept in economics. Demand refers to how much of a product consumers want to buy at different prices. The law of demand states that as prices rise, consumers buy less — and as prices fall, they buy more. This makes intuitive sense: if pizza suddenly cost $50, you'd buy it much less often.",
            "Supply refers to how much of a product producers are willing to sell at different prices. The law of supply states that as prices rise, producers are willing to supply more — because higher prices mean higher profits, attracting more businesses into the market. If pizza prices doubled, more restaurants would open.",
            "When buyers and sellers interact in a market, supply and demand reach an equilibrium — the price at which the quantity demanded equals the quantity supplied. This is the market price. If prices are too high (surplus), sellers lower prices. If prices are too low (shortage), sellers raise prices. Markets naturally gravitate toward equilibrium.",
            "Supply and demand explains almost every price you see. Gas prices spike when oil supply falls or demand surges. Concert ticket prices skyrocket when everyone wants to attend a popular artist. Governments sometimes interfere with markets through price controls, but these often create shortages (price ceilings) or surpluses (price floors)."
          ],
          fact: "During the COVID-19 pandemic, hand sanitizer and toilet paper experienced massive demand spikes while supply stayed the same — resulting in empty shelves and tripled prices, a perfect real-world example of supply and demand.",
          quiz: [
            { type: "mc", q: "If the price of a product goes up, what usually happens to consumer demand?", options: ["Demand goes up", "Demand stays the same", "Demand goes down", "Supply also goes up"], answer: 2, explanation: "The law of demand: as price rises, consumers buy less. Higher prices make goods less affordable and attractive." },
            { type: "tf", q: "When supply increases while demand stays the same, prices usually fall.", answer: true, explanation: "More supply with the same demand creates a surplus, pushing sellers to lower prices to sell their excess goods." },
            { type: "fb", q: "The point where supply and demand are equal — the market price — is called market ___.", answer: "equilibrium", hint: "A word meaning 'balance'...", explanation: "Market equilibrium is the price where the quantity buyers want equals the quantity sellers supply — markets naturally tend toward this point." },
            { type: "mc", q: "Which would cause the supply of oranges to decrease?", options: ["A decrease in orange prices", "A cold snap that destroys orange crops", "More farmers starting to grow oranges", "Increased consumer demand for oranges"], answer: 1, explanation: "A cold snap (frost) destroys crops, reducing how many oranges are available to sell — shifting the supply curve left and raising prices." }
          ]
        }
      ]
    }
  }
};

const SUBJECT_META = {
  history:   { label: "World History",  icon: "scroll"   },
  geography: { label: "Geography",      icon: "globe"    },
  economics: { label: "Economics",      icon: "chart"    }
};
