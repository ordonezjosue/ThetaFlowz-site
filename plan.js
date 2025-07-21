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

    if (portfolio === "lt5k") {
      if (goal === "income") {
        strategy = `
          <h2>🔄 The Wheel on High-IV Small Caps</h2>
          <p>Focus on under-$10 stocks with IVR &gt; 40, weekly puts at ATM or slight OTM. Manage at 50% profit or roll weekly. Covered calls if assigned.</p>
        `;
        screening = `
          <strong>Screening Tips:</strong><br>
          • Price &lt; $10<br>
          • IVR &gt; 40<br>
          • Avg Volume &gt; 1M<br>
          • Liquid weekly options<br>
          • No earnings within 10 days
        `;
      } else {
        strategy = `
          <h2>💰 Conservative Cash-Secured Puts</h2>
          <p>Sell puts on dividend stocks or ETFs with high liquidity and low volatility. Prioritize capital preservation.</p>
        `;
        screening = `
          <strong>Screening Tips:</strong><br>
          • Price $10–$30<br>
          • Dividend Yield ≥ 3%<br>
          • Beta &lt; 1<br>
          • Liquid options<br>
          • No binary events
        `;
      }
    } else if (portfolio === "100k_plus" && goal === "income" && age === "60_plus") {
      strategy = `
        <h2>🛡️ Covered Calls on Dividend ETFs</h2>
        <p>Generate steady income by selling covered calls on broad-market or sector ETFs with stable yield and low risk.</p>
      `;
      screening = `
        <strong>Screening Tips:</strong><br>
        • ETFs like SCHD, VYM, QYLD<br>
        • Yield &gt; 3%<br>
        • 30 delta call, 30–45 DTE<br>
        • Roll monthly or hold to expiry
      `;
    } else if (portfolio === "100k_plus" && riskProfile === "Aggressive") {
      strategy = `
        <h2>🔥 0DTE SPX Iron Condors</h2>
        <p>Capital-efficient daily income targeting 50% profit with intraday risk control. Ideal for high-risk-tolerant traders.</p>
      `;
      screening = `
        <strong>Execution Notes:</strong><br>
        • Trade 10:30–11:30am ET<br>
        • ±2 SD wings<br>
        • 15–20 delta shorts<br>
        • Exit at 50% or EOD
      `;
    } else {
      strategy = `
        <h2>📆 45 DTE SPY Put Credit Spreads</h2>
        <p>Balanced risk strategy with defined loss and solid win rate. Roll at 21 DTE, use 25 delta strikes, $5 wide.</p>
      `;
      screening = `
        <strong>Screening Tips:</strong><br>
        • SPY or index ETFs<br>
        • IVR &gt; 30<br>
        • Avoid earnings weeks<br>
        • Trade every Monday or Wednesday
      `;
    }

    document.getElementById("fullRecommendation").innerHTML = `
      <h2>📋 Your Custom Strategy Plan</h2>
      <p><strong>Age Group:</strong> ${document.getElementById("age").selectedOptions[0].text}</p>
      <p><strong>Portfolio:</strong> ${document.getElementById("portfolio").selectedOptions[0].text}</p>
      <p><strong>Goal:</strong> ${document.getElementById("goal").selectedOptions[0].text}</p>
      <p><strong>Risk Profile:</strong> ${riskProfile}</p>
      ${strategy}
      <br />
      ${screening}
    `;
  });
});
