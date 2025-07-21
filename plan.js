// plan.js – Fully rewritten with beginner-friendly guidance for all strategies

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buildPlanBtn").addEventListener("click", () => {
    const age = document.getElementById("age").value;
    const portfolio = document.getElementById("portfolio").value;
    const goal = document.getElementById("goal").value;
    const risk = document.getElementById("volatilityComfort").value;
    const horizon = document.getElementById("timeHorizon").value;
    const crash = document.getElementById("panicResponse").value;

    let riskLevel = 0;
    if (risk === "low") riskLevel += 1;
    if (risk === "medium") riskLevel += 2;
    if (risk === "high") riskLevel += 3;
    if (horizon === "short") riskLevel += 1;
    if (horizon === "medium") riskLevel += 2;
    if (horizon === "long") riskLevel += 3;
    if (crash === "sell") riskLevel += 1;
    if (crash === "wait") riskLevel += 2;
    if (crash === "buy") riskLevel += 3;

    let riskProfile = "";
    if (riskLevel <= 4) riskProfile = "Conservative";
    else if (riskLevel <= 6) riskProfile = "Moderate";
    else riskProfile = "Aggressive";

    let strategy = "";
    let screening = "";

    // 🔄 The Wheel Strategy
    if (portfolio === "lt5k" && goal === "income") {
      strategy = `
        <h2>🔄 The Wheel Strategy on Small Caps</h2>
        <p><strong>What it is:</strong> A simple cash flow strategy where you sell puts to buy stocks, then sell calls to collect more income.</p>
        <p><strong>Why it fits you:</strong> Great for small accounts and beginners. You only use cash you already have, and focus on affordable, optionable stocks.</p>
        <ol>
          <li>Sell a cash-secured put on a stock &lt;$10</li>
          <li>If assigned, buy 100 shares</li>
          <li>Sell a covered call on those shares</li>
          <li>Repeat to generate income</li>
        </ol>
      `;
      screening = `
        <strong>How to use Finviz:</strong><br>
        1. Go to <a href='https://finviz.com/screener.ashx' target='_blank'>finviz.com</a><br>
        2. Filter by: Price &lt;$10, Avg Volume &gt;1M, Optionable = Yes<br>
        3. Look for high IV using your broker or tools like OptionStrat
      `;
    }

    // 🛡️ Covered Calls on Dividend ETFs
    else if (portfolio === "100k_plus" && goal === "income" && age === "60_plus") {
      strategy = `
        <h2>🛡️ Covered Calls on Dividend ETFs</h2>
        <p><strong>What it is:</strong> You buy shares of an ETF and sell calls monthly to generate cash flow.</p>
        <p><strong>Why it fits you:</strong> Conservative, low-risk, and ideal for retirees wanting predictable income.</p>
        <ol>
          <li>Buy 100 shares of a dividend ETF (e.g., SCHD, VYM)</li>
          <li>Sell a 30 DTE call option at 30 delta</li>
          <li>Repeat monthly</li>
        </ol>
      `;
      screening = `
        <strong>How to use Finviz:</strong><br>
        1. Use ETF list or screener for Yield &gt;3%<br>
        2. Look for SCHD, VYM, QYLD with high volume<br>
        3. Confirm options are liquid, and price is stable
      `;
    }

    // 🔥 0DTE SPX Iron Condors
    else if (portfolio === "100k_plus" && riskProfile === "Aggressive") {
      strategy = `
        <h2>🔥 0DTE SPX Iron Condors</h2>
        <p><strong>What it is:</strong> A high-frequency strategy where you trade same-day SPX options to collect premium.</p>
        <p><strong>Why it fits you:</strong> You have the capital and risk tolerance to manage trades daily with tight exits.</p>
        <ol>
          <li>Sell a call spread and a put spread on SPX around 10:30 AM</li>
          <li>Place short legs at 15–20 delta, 2 SD wide</li>
          <li>Exit at 50% profit or EOD</li>
        </ol>
      `;
      screening = `
        <strong>Tools to use:</strong><br>
        • No screener needed — trade SPX or XSP<br>
        • Use TradingView for trend analysis<br>
        • Use OptionStrat or Tastytrade platform to model payoff
      `;
    }

    // 📆 45 DTE Put Credit Spreads
    else if (portfolio === "25k_100k" || (portfolio === "5k_25k" && riskProfile === "Moderate")) {
      strategy = `
        <h2>📆 45 DTE SPY Put Credit Spreads</h2>
        <p><strong>What it is:</strong> You sell a put and buy a lower strike put to define your risk. This collects premium over 30–45 days.</p>
        <p><strong>Why it fits you:</strong> It balances risk and reward, fits IRAs or cash accounts, and has a high win rate.</p>
        <ol>
          <li>Sell a put at 25 delta, 45 DTE</li>
          <li>Buy a put $5 lower (defined risk)</li>
          <li>Take profit at 50% or roll at 21 DTE</li>
        </ol>
      `;
      screening = `
        <strong>How to use Finviz:</strong><br>
        • Focus on ETFs: SPY, QQQ, IWM<br>
        • Use IV Rank &gt;30 as signal to enter<br>
        • Look for liquid options with tight bid/ask spreads
      `;
    }

    // 💰 Conservative Cash-Secured Puts
    else {
      strategy = `
        <h2>💰 Cash-Secured Puts on Dividend Stocks</h2>
        <p><strong>What it is:</strong> You sell a put and hold cash in case you are assigned the stock. Great for entry + income.</p>
        <p><strong>Why it fits you:</strong> Low risk, income-friendly, and lets you buy quality stocks cheaper.</p>
        <ol>
          <li>Sell a put below current price on a stock you want</li>
          <li>Hold cash in case of assignment</li>
          <li>If not assigned, keep the premium</li>
        </ol>
      `;
      screening = `
        <strong>Finviz.com Filters:</strong><br>
        • Price $20–$100<br>
        • Dividend Yield &gt;2%<br>
        • Optionable = Yes<br>
        • Sector = Financials, Energy, or Healthcare
      `;
    }

    document.getElementById("fullRecommendation").innerHTML = `
      <h2>📋 Your Custom Strategy Plan</h2>
      <p><strong>Age Group:</strong> ${document.getElementById("age").selectedOptions[0].text}</p>
      <p><strong>Portfolio:</strong> ${document.getElementById("portfolio").selectedOptions[0].text}</p>
      <p><strong>Goal:</strong> ${document.getElementById("goal").selectedOptions[0].text}</p>
      <p><strong>Risk Profile:</strong> ${riskProfile}</p>
      ${strategy}<br><br>${screening}
    `;
  });
});
