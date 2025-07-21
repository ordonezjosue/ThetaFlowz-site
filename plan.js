document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("findStrategyBtn").addEventListener("click", generateStrategy);
  document.getElementById("riskBtn").addEventListener("click", generateRiskProfile);
});

function generateStrategy() {
  const age = document.getElementById('age').value;
  const portfolio = document.getElementById('portfolio').value;
  const goal = document.getElementById('goal').value;

  let output = "";

  if (portfolio === "lt5k" && goal === "income") {
    if (age === "under_30" || age === "30_45") {
      output = `
        <h2>🔄 Aggressive Wheel Strategy on Small-Caps</h2>
        <p><strong>Why this works:</strong> High IV tickers under $10 can generate great weekly income for young traders with time to recover.</p>
        <p><strong>Setup:</strong><br>
        • Sell ATM puts on high-IV stocks under $10<br>
        • 7–10 DTE, manage at 50% profit<br>
        • Roll if breached, sell OTM calls if assigned</p>
      `;
    } else {
      output = `
        <h2>🛡️ Conservative Wheel Strategy</h2>
        <p><strong>Why this works:</strong> Older users should focus on slower-moving dividend stocks under $20 with lower volatility.</p>
        <p><strong>Setup:</strong><br>
        • Sell ATM puts on large-cap or dividend payers<br>
        • 14–21 DTE, manage at 30–50% profit<br>
        • Prioritize safety over premium</p>
      `;
    }
  } else if (portfolio === "25k_100k" && goal === "retirement") {
    output = `
      <h2>📆 45 DTE SPY Put Credit Spreads</h2>
      <p><strong>Why this works:</strong> Steady income with low drawdown. Great for compounding returns for mid-range portfolios.</p>
      <p><strong>Setup:</strong><br>
      • Sell 25 delta put spreads on SPY<br>
      • $5 wide, 50% profit or 2x loss<br>
      • Roll at 21 DTE</p>
    `;
  } else if (portfolio === "100k_plus" && goal === "income") {
    if (age === "60_plus") {
      output = `
        <h2>📚 Conservative Income from Covered Calls</h2>
        <p><strong>Why this works:</strong> Low risk, steady yield for retirees or those near retirement using blue-chips and ETFs.</p>
        <p><strong>Setup:</strong><br>
        • Own dividend-paying ETFs<br>
        • Sell 30 DTE covered calls at 30 delta<br>
        • Roll monthly or manage early</p>
      `;
    } else {
      output = `
        <h2>🧠 0DTE SPX Iron Condors</h2>
        <p><strong>Why this works:</strong> High daily income potential for skilled traders with large accounts and time to manage risk.</p>
        <p><strong>Setup:</strong><br>
        • Entry: 10:30–11:30 AM ET<br>
        • 2 SD wings, 15–20 delta shorts<br>
        • Take profit at 50% or EOD</p>
      `;
    }
  } else {
    output = `
      <h2>📚 Covered Calls on Blue-Chip Stocks</h2>
      <p><strong>Why this works:</strong> Great all-around income strategy that balances risk and reward, especially for retirement goals.</p>
      <p><strong>Setup:</strong><br>
      • Buy solid stocks or ETFs<br>
      • Sell 30–45 DTE calls at 30 delta<br>
      • Roll monthly or let expire</p>
    `;
  }

  document.getElementById('strategyResult').innerHTML = output;
}

function generateRiskProfile() {
  const volatility = document.getElementById("volatilityComfort").value;
  const horizon = document.getElementById("timeHorizon").value;
  const crashResponse = document.getElementById("panicResponse").value;

  let score = 0;

  if (volatility === "low") score += 1;
  if (volatility === "medium") score += 2;
  if (volatility === "high") score += 3;

  if (horizon === "short") score += 1;
  if (horizon === "medium") score += 2;
  if (horizon === "long") score += 3;

  if (crashResponse === "sell") score += 1;
  if (crashResponse === "wait") score += 2;
  if (crashResponse === "buy") score += 3;

  let profile = "";
  if (score <= 4) {
    profile = `
      <h2>🛡️ Conservative Risk Tolerance</h2>
      <p>You prefer safety and stability. Covered calls, fixed income ETFs, or cash-secured puts on blue-chips may suit you.</p>
    `;
  } else if (score <= 6) {
    profile = `
      <h2>⚖️ Moderate Risk Tolerance</h2>
      <p>You accept some risk for better rewards. Consider credit spreads, wheel strategy, and diversified ETFs.</p>
    `;
  } else {
    profile = `
      <h2>🔥 Aggressive Risk Tolerance</h2>
      <p>You aim for growth and can handle swings. Explore 0DTE spreads, futures options, or leveraged strategies — with tight risk management.</p>
    `;
  }

  document.getElementById("riskResult").innerHTML = profile;
}
