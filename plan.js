// plan.js – Enhanced layout with sidebar + cleaned results + external links

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

    if (portfolio === "lt5k" && goal === "income") {
      strategy = `
        <h2>🔄 The Wheel Strategy on Small Caps</h2>
        <p><strong>What it is:</strong> A simple income strategy where you sell puts to buy stocks, then sell calls to collect more income.</p>
        <p><strong>Why it fits you:</strong> Ideal for beginners with small accounts. Uses only your cash. Focuses on cheap, optionable stocks. High control, low stress.</p>
        <ol>
          <li>Sell a cash-secured put on a stock under $10</li>
          <li>If assigned, buy 100 shares</li>
          <li>Sell a covered call on those shares</li>
          <li>Repeat monthly to generate consistent income</li>
        </ol>
        <p><strong>Tip:</strong> Avoid earnings weeks. Use 30–45 DTE puts. Target 20–30 delta for safety.</p>
      `;
      screening = `
        <h3>🔎 How to Screen Stocks with <a href='https://finviz.com/screener.ashx' target='_blank'>Finviz</a></h3>
        <ol>
          <li>Price: under $10</li>
          <li>Average Volume: over 1M</li>
          <li>Optionable: Yes</li>
          <li>Market Cap: Mid or Small</li>
        </ol>
        <p>For high IV stocks, use <a href='https://optionstrat.com' target='_blank'>OptionStrat</a> or your broker’s IV scanner.</p>
      `;
    }

    const summary = `
      <div class='sidebar-box'>
        <h3>Your Selections</h3>
        <ul>
          <li><strong>Age Group:</strong> ${document.getElementById("age").selectedOptions[0].text}</li>
          <li><strong>Portfolio:</strong> ${document.getElementById("portfolio").selectedOptions[0].text}</li>
          <li><strong>Goal:</strong> ${document.getElementById("goal").selectedOptions[0].text}</li>
          <li><strong>Risk Profile:</strong> ${riskProfile}</li>
          <li><strong>Time Horizon:</strong> ${document.getElementById("timeHorizon").selectedOptions[0].text}</li>
        </ul>
      </div>`;

    const mainPlan = `
      <div class='plan-box'>
        ${strategy}
        <hr>
        ${screening}
        <p><strong>Want to learn more?</strong></p>
        <ul>
          <li><a href='https://tastytrade.com' target='_blank'>Tastytrade Education</a></li>
          <li><a href='https://www.investopedia.com/options-basics-tutorial-4583012' target='_blank'>Investopedia: Options 101</a></li>
        </ul>
      </div>`;

    document.getElementById("fullRecommendation").innerHTML = `
      <div class='layout'>
        <div class='sidebar'>${summary}</div>
        <div class='content'>${mainPlan}</div>
      </div>`;
  });
});
