import type { Topic } from './curriculum';

export const financeCurriculum: Topic[] = [
  {
    id: 'stocks',
    unit: 1,
    title: 'Stocks',
    grade: '6th-8th',
    shortExplanation: 'Own a tiny piece of a real company. When the company grows, your piece becomes more valuable.',
    detailedExplanation: `**What is a Stock?**
Imagine your friend starts a lemonade stand and needs $100 to buy supplies. She splits it into 100 pieces called "shares" — each worth $1. You buy 10 shares, so you own 10% of her lemonade stand!

**How do you make money with stocks?**
- 📈 **Price appreciation** — if the company grows, more people want the stock, so you can sell it for more than you paid
- 💵 **Dividends** — some companies share their profits with shareholders periodically, like an allowance from the company

**Risk**
Stock prices go up and down. If the company does badly, your shares are worth less. The ride can be bumpy! Historically though, good companies grow over many years.

**Fun Fact**
If you had bought 1 share of Apple in 2010 for $10, today it would be worth over $200. That's 20x your money in about 14 years!

**Halal Note**
Buying stocks is conditionally halal in Islam. You may only invest in companies whose main business is permissible — no alcohol, gambling, pork, or interest-based banking. Many Muslims use a halal stock screener to check before buying.`,
    simulationId: '',
    questions: [
      {
        id: 'stocks-q1',
        type: 'multiple-choice',
        text: 'If a company doubles in value and you own 10 shares, what happens to your investment?',
        options: [
          'Nothing changes',
          'Your shares are worth twice as much',
          'You lose your shares',
          'You get 10 more shares for free',
        ],
        answer: 'Your shares are worth twice as much',
        hint: 'Think about what happens proportionally when the whole company is worth 2x as much.',
        explanation: 'Ownership is proportional. If the company is worth 2x, your slice of it is also worth 2x.',
      },
      {
        id: 'stocks-q2',
        type: 'multiple-choice',
        text: 'What is a "dividend"?',
        options: [
          'A fee you pay to buy stocks',
          'A type of loan from the company',
          'A share of company profits paid to shareholders',
          'The price of a single share',
        ],
        answer: 'A share of company profits paid to shareholders',
        hint: 'Companies can share their earnings with people who own a piece of them.',
        explanation: 'Dividends are profit payments companies make to shareholders — like getting an allowance from the company.',
      },
      {
        id: 'stocks-q3',
        type: 'multiple-choice',
        text: 'Why are stocks considered "conditionally halal" rather than always halal?',
        options: [
          'Because you need a special Islamic licence to buy them',
          'Because owning a company means sharing in its business, which must be permissible',
          'Because all stocks involve interest payments',
          'Because stocks are the same as bonds',
        ],
        answer: 'Because owning a company means sharing in its business, which must be permissible',
        hint: 'Think about what the company actually does with its money.',
        explanation: 'Owning a share means profiting from the company\'s work. If that work is haram, the profit is too.',
      },
    ],
  },
  {
    id: 'bonds',
    unit: 1,
    title: 'Bonds',
    grade: '6th-8th',
    shortExplanation: 'Lend money to a government or company and receive it back with extra. Safer than stocks but involves interest.',
    detailedExplanation: `**What is a Bond?**
Imagine the school needs money to build a new playground. They ask you: "Can we borrow $100? We'll pay you back $110 in a year!" That extra $10 is called interest — your reward for letting them use your money.

**Types of Bonds**
- 🏛️ **Government bonds** — Lending to the government. Very safe because governments rarely fail to pay back
- 🏢 **Corporate bonds** — Companies borrow your money at slightly higher interest, but also slightly more risk

**How it compares to stocks**
Bonds are much safer than stocks. Your return is fixed and predictable. The downside: you won't get rich quickly, and if inflation is high, the fixed return may not keep up.

**Fun Fact**
The US government has never failed to pay back a bond in its entire history. It's considered one of the safest investments on Earth!

**Halal Note**
Bonds are generally considered haram in Islam because they involve riba (interest) — you lend money and are guaranteed extra money back. Islam strictly forbids earning or paying interest. As an alternative, Muslims can look into Sukuk (Islamic bonds) which give returns based on profit-sharing or real assets, not interest.`,
    simulationId: '',
    questions: [
      {
        id: 'bonds-q1',
        type: 'multiple-choice',
        text: 'Why would someone choose a bond over a stock?',
        options: [
          'Bonds make you richer much faster',
          'Bonds are safer and provide predictable returns',
          'Bonds let you own part of the company',
          'Bonds are always halal',
        ],
        answer: 'Bonds are safer and provide predictable returns',
        hint: 'Think about risk vs. reward. Bonds give a fixed, agreed-upon return.',
        explanation: 'Bonds pay a fixed return on a schedule. Stocks can go way up or way down — bonds are the steady option.',
      },
      {
        id: 'bonds-q2',
        type: 'multiple-choice',
        text: 'What is "riba" and why does it make bonds problematic in Islamic finance?',
        options: [
          'Riba means risk, and bonds have no risk',
          'Riba means interest — earning guaranteed extra money just for lending is forbidden',
          'Riba means profit, which is always halal',
          'Riba is the Arabic word for bond',
        ],
        answer: 'Riba means interest — earning guaranteed extra money just for lending is forbidden',
        hint: 'Think about what the lender receives in return for doing nothing except waiting.',
        explanation: 'Riba (interest) means money making money without real work or risk-sharing. Islam forbids this as it is seen as exploitative.',
      },
      {
        id: 'bonds-q3',
        type: 'multiple-choice',
        text: 'What is a "Sukuk" — the Islamic alternative to a bond?',
        options: [
          'A type of savings account with no returns',
          'A bond that pays interest in a halal currency',
          'A financial instrument that gives returns based on real assets or profit-sharing, not interest',
          'A government guarantee on stocks',
        ],
        answer: 'A financial instrument that gives returns based on real assets or profit-sharing, not interest',
        hint: 'Sukuk must be tied to something real — like ownership of an asset or a share in a project\'s profit.',
        explanation: 'Sukuk gives investors returns from actual assets or shared profits, not from lending with guaranteed interest. This makes it compatible with Islamic law.',
      },
    ],
  },
  {
    id: 'mutual-funds',
    unit: 1,
    title: 'Mutual Funds',
    grade: '6th-8th',
    shortExplanation: 'Pool your money with others and hire an expert to invest it across many companies for you.',
    detailedExplanation: `**What is a Mutual Fund?**
Imagine you and 9 friends each have $10. Instead of each buying one thing, you combine your $100 and hire a smart person (a fund manager) to invest in many companies for you. That combined pot is a mutual fund!

**Why is this a good idea?**
- 🌈 **Diversification** — if one company does badly, the others might do great, so you don't lose everything
- 👨‍💼 **Professional management** — you don't have to pick stocks yourself; an expert does it
- 💰 **Accessible** — you can start with a small amount; the fund does the rest

**The cost**
You pay a yearly fee called an expense ratio for the expert's management — usually 0.5% to 2% of your investment per year.

**Fun Fact**
There are over 7,000 mutual funds in the US! That's more than the number of individual stocks on the stock market.

**Halal Note**
Most conventional mutual funds invest in companies that include banks, alcohol producers, and other haram businesses. However, Islamic mutual funds exist that are screened to only hold halal stocks. Look for funds certified by an Islamic finance board.`,
    simulationId: '',
    questions: [
      {
        id: 'mf-q1',
        type: 'multiple-choice',
        text: 'What is the main benefit of a mutual fund compared to buying a single stock?',
        options: [
          'You always make more money',
          'You spread risk across many companies',
          'It costs nothing to invest',
          'You control every individual investment',
        ],
        answer: 'You spread risk across many companies',
        hint: 'What happens if you put all your eggs in one basket vs. many baskets?',
        explanation: 'Diversification means that if one company tanks, the others can balance it out. You\'re not betting everything on one horse.',
      },
      {
        id: 'mf-q2',
        type: 'multiple-choice',
        text: 'What is an "expense ratio" in a mutual fund?',
        options: [
          'The fee the fund manager charges yearly to manage your money',
          'The ratio of stocks to bonds in the fund',
          'The percentage of profit you must pay in taxes',
          'The minimum amount you must invest',
        ],
        answer: 'The fee the fund manager charges yearly to manage your money',
        hint: 'Someone is doing work to manage the fund — they get paid somehow.',
        explanation: 'The expense ratio is an annual fee (e.g. 1%) taken from your investment to pay for professional management and operating costs.',
      },
    ],
  },
  {
    id: 'etfs',
    unit: 1,
    title: 'ETFs',
    grade: '6th-8th',
    shortExplanation: 'Exchange-Traded Funds — like a mutual fund you can buy and sell anytime during the trading day, usually with very low fees.',
    detailedExplanation: `**What is an ETF?**
An ETF (Exchange-Traded Fund) is basically a mutual fund that works like a stock. It holds many investments inside, but you can buy and sell it on the stock market at any moment during the day — just like buying a book on Amazon, but for investing!

**ETF vs Mutual Fund**
- 🕐 **Trading** — ETFs trade all day like stocks; mutual funds only let you buy/sell at the end of the trading day
- 💸 **Fees** — ETFs typically charge far less (0.03%–0.2% per year vs 0.5%–2% for mutual funds)
- 🎯 **Management** — most ETFs just track an index automatically instead of having an expert pick stocks

**Most Famous ETF**
VOO and SPY are ETFs that automatically buy all 500 companies in the S&P 500 at once. One purchase gives you a tiny piece of 500 companies!

**Fun Fact**
Warren Buffett — one of the greatest investors of all time — told his own family: "Just put your money in an S&P 500 ETF." Even experts love simple, low-cost ETFs.

**Halal Note**
Most popular ETFs (like VOO or SPY) track the S&P 500, which includes haram companies such as banks and alcohol producers. However, halal ETFs do exist — examples include SPUS (SP Funds S&P 500 Sharia ETF) and HLAL (Wahed FTSE USA Shariah ETF) — which screen out non-compliant companies.`,
    simulationId: '',
    questions: [
      {
        id: 'etfs-q1',
        type: 'multiple-choice',
        text: 'What is the key difference between an ETF and a Mutual Fund?',
        options: [
          'ETFs only invest in bonds',
          'ETFs can be traded anytime during the day, just like stocks',
          'ETFs are always riskier than individual stocks',
          'ETFs charge higher fees than mutual funds',
        ],
        answer: 'ETFs can be traded anytime during the day, just like stocks',
        hint: 'Think about when you can buy/sell each type.',
        explanation: 'ETFs trade on stock exchanges continuously during market hours. Mutual fund orders execute once per day after the market closes.',
      },
      {
        id: 'etfs-q2',
        type: 'multiple-choice',
        text: 'Why do most experts recommend low-cost index ETFs for average investors?',
        options: [
          'Because they always outperform actively managed funds',
          'Because their low fees mean more of your money stays invested and compounds over time',
          'Because they only invest in safe government bonds',
          'Because they are guaranteed to never lose value',
        ],
        answer: 'Because their low fees mean more of your money stays invested and compounds over time',
        hint: 'Even a 1% difference in yearly fees adds up to an enormous difference over 20–30 years of investing.',
        explanation: 'A fee of 0.03% vs 1% might seem tiny, but over 30 years on a $10,000 investment, that 1% fee costs you tens of thousands of dollars in lost compounding.',
      },
    ],
  },
  {
    id: 'sp500',
    unit: 1,
    title: 'The S&P 500',
    grade: '6th-8th',
    shortExplanation: 'A list of the 500 biggest US companies used as the main scoreboard of the American economy.',
    detailedExplanation: `**What is the S&P 500?**
The S&P 500 is a list of the 500 biggest companies in America, maintained by a company called Standard & Poor's. It's updated regularly, so when a company grows huge it joins the list and when one shrinks it leaves.

**Why does it matter?**
When people say "the market went up today," they almost always mean the S&P 500 went up. It's the most widely used measure of how the US economy is doing overall.

**Historic performance**
The S&P 500 has averaged about 10% growth per year over the long run. Money invested tends to roughly double every 7 years — even without picking individual stocks.

**Top companies today (by size)**
- Apple (~$3.5 trillion)
- Nvidia (~$3.2 trillion)
- Microsoft (~$2.9 trillion)
- Google (~$2.4 trillion)
- Amazon (~$2.1 trillion)
...and 495 more!

**Fun Fact**
$1,000 invested in the S&P 500 in 1980 would be worth over $80,000 today — without ever trading, just holding!

**Halal Note**
The S&P 500 itself includes many haram companies — banks that charge interest, alcohol companies, and more. Investing directly in it (e.g. via SPY) is not considered halal. However, Sharia-compliant versions exist — like the SPUS ETF — that filter those companies out and still give you broad US market exposure.`,
    simulationId: '',
    questions: [
      {
        id: 'sp500-q1',
        type: 'multiple-choice',
        text: 'What does the S&P 500 track?',
        options: [
          'The top 500 investors in the US',
          'The 500 most popular YouTube channels',
          'The 500 largest US companies by market value',
          'The price of 500 everyday products',
        ],
        answer: 'The 500 largest US companies by market value',
        hint: 'S&P stands for Standard & Poor\'s — they rank companies by how big they are.',
        explanation: 'The S&P 500 is a list (index) of America\'s 500 biggest public companies, weighted by their total market value.',
      },
      {
        id: 'sp500-q2',
        type: 'multiple-choice',
        text: 'If the S&P 500 averages 10% growth per year, roughly how long does it take to double your money?',
        options: ['About 3 years', 'About 7 years', 'About 15 years', 'About 20 years'],
        answer: 'About 7 years',
        hint: 'Use the Rule of 72: divide 72 by the growth rate to estimate doubling time.',
        explanation: '72 ÷ 10 = 7.2 years. The Rule of 72 is a quick mental math shortcut for estimating compound growth.',
      },
      {
        id: 'sp500-q3',
        type: 'multiple-choice',
        text: 'Why is the standard S&P 500 index considered not halal for Muslim investors?',
        options: [
          'Because it includes too many companies to track',
          'Because it only invests in technology companies',
          'Because it includes companies whose primary business involves interest, alcohol, or other haram activities',
          'Because index funds are a form of gambling',
        ],
        answer: 'Because it includes companies whose primary business involves interest, alcohol, or other haram activities',
        hint: 'Think about what kinds of businesses are among America\'s 500 largest.',
        explanation: 'Banks, alcohol producers, and other non-halal businesses are some of the largest US companies. Halal-screened alternatives like SPUS filter these out.',
      },
    ],
  },
];

export function getFinanceTopicById(id: string): Topic | undefined {
  return financeCurriculum.find((t) => t.id === id);
}
