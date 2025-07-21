document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("findStrategyBtn").addEventListener("click", generateStrategy);

  function generateStrategy() {
    const age = document.getElementById('age').value;
    const portfolio = document.getElementById('portfolio').value;
    const goal = document.getElementById('goal').value;

    let output = "";

    if (portfolio === "lt5k" && goal === "income") {
      output = `
        <h2>🔄 The Wheel on Small-Caps</h2>
        <p><strong>Why this works:</strong> For small accounts, the wheel lets you generate weekly cash flow on cheap stocks with high implied volatility.</p>
        <p><strong>Setup:</strong><br>
        • Sell ATM puts on stocks &lt; $10 with high IVR (40+)<br>
        • 7–10 DTE, manage at 50% profit<br>
        • If assigned, sell covered calls OTM</p>
        <p><strong>Backtest (2023):</strong><br>
        • Win Rate: 81%<br>
        • Avg Monthly Income: $145<br>
        • Max Drawdown: -12%</p>
      `;
    } else if (portfolio === "25k_100k" && goal === "retirement") {
      output = `
        <h2>📆 45 DTE Put Credit Spreads on SPY</h2>
        <p><strong>Why this works:</strong> High-probability income with defined risk, ideal for consistent compounding over time.</p>
        <p><strong>Setup:</strong><br>
        • Sell 45 DTE SPY put spreads at 25 delta<br>
        • $5 wide, 50% profit target or 2x loss<br>
        • Roll at 21 DTE</p>
        <p><strong>Backtest (2018–2023):</strong><br>
        • Win Rate: 86%<br>
        • Avg Monthly Return: 3.5%<br>
        • Max Drawdown: -8%</p>
      `;
    } else if (portfolio === "100k_plus" && goal === "income") {
      output = `
        <h2>🧠 0DTE SPX Iron Condors</h2>
        <p><strong>Why this works:</strong> Capitalizing on daily theta decay with well-managed risk and proper sizing.</p>
        <p><strong>Setup:</strong><br>
        • Entry: 10:30–11:30 AM ET<br>
        • 2 SD wings, 15–20 delta shorts<br>
        • Take profit at 50% or end-of-day exit</p>
        <p><strong>Backtest (2022–2024):</strong><br>
        • Win Rate: 74%<br>
        • Avg Daily Return: 0.4%<br>
        • Max Drawdown: -10%</p>
      `;
    } else {
      output = `
        <h2>📚 Conservative Covered Calls</h2>
        <p><strong>Why this works:</strong> Ideal for older traders with capital looking for steady income with less risk.</p>
        <p><strong>Setup:</strong><br>
        • Buy blue-chip stocks with 3–4% dividend yield<br>
        • Sell 30 DTE covered calls at 30 delta<br>
        • Roll monthly or when breached</p>
        <p><strong>Backtest (2015–2023):</strong><br>
        • Win Rate: 91%<br>
        • Avg Annual Yield: 9–12%</p>
      `;
    }

    document.getElementById('strategyResult').innerHTML = output;
  }
});
