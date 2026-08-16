type Trade = {
  politician: string;
  party: "D" | "R" | "I";
  chamber: "House" | "Senate";
  ticker: string;
  type: "Buy" | "Sell";
  amount: string;
  date: string;
  entryPrice: number;
  currentPrice: number;
};

const placeholderTrades: Trade[] = [
  { politician: "Susie Lee", party: "D", chamber: "House", ticker: "META", type: "Buy", amount: "$100K–$250K", date: "2026-08-05", entryPrice: 615.0, currentPrice: 642.1 },
  { politician: "Marjorie Taylor Greene", party: "R", chamber: "House", ticker: "TSLA", type: "Buy", amount: "$50K–$100K", date: "2026-08-01", entryPrice: 245.0, currentPrice: 268.4 },
  { politician: "Michael McCaul", party: "R", chamber: "House", ticker: "AMZN", type: "Sell", amount: "$250K–$500K", date: "2026-07-30", entryPrice: 228.0, currentPrice: 234.75 },
  { politician: "Nancy Pelosi", party: "D", chamber: "House", ticker: "NVDA", type: "Buy", amount: "$1M–$5M", date: "2026-07-28", entryPrice: 172.5, currentPrice: 195.3 },
  { politician: "Dan Crenshaw", party: "R", chamber: "House", ticker: "LMT", type: "Buy", amount: "$15K–$50K", date: "2026-07-25", entryPrice: 612.0, currentPrice: 598.5 },
  { politician: "Tommy Tuberville", party: "R", chamber: "Senate", ticker: "MSFT", type: "Sell", amount: "$15K–$50K", date: "2026-07-22", entryPrice: 512.0, currentPrice: 498.1 },
  { politician: "Josh Gottheimer", party: "D", chamber: "House", ticker: "AAPL", type: "Buy", amount: "$50K–$100K", date: "2026-07-19", entryPrice: 231.4, currentPrice: 227.9 },
  { politician: "Ro Khanna", party: "D", chamber: "House", ticker: "GOOGL", type: "Sell", amount: "$1K–$15K", date: "2026-07-15", entryPrice: 198.2, currentPrice: 210.55 },
  { politician: "Markwayne Mullin", party: "R", chamber: "Senate", ticker: "XOM", type: "Buy", amount: "$100K–$250K", date: "2026-07-10", entryPrice: 118.75, currentPrice: 124.1 },
];

const partyStyles: Record<Trade["party"], string> = {
  D: "text-blue-600 dark:text-blue-400",
  R: "text-red-600 dark:text-red-400",
  I: "text-zinc-600 dark:text-zinc-400",
};

const typeStyles: Record<Trade["type"], string> = {
  Buy: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Sell: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

// A "Sell" is mirrored as a short position, so a falling price is a gain.
function copiedReturnPct(trade: Trade): number {
  const priceReturn =
    ((trade.currentPrice - trade.entryPrice) / trade.entryPrice) * 100;
  return trade.type === "Sell" ? -priceReturn : priceReturn;
}

export default function TradesTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-black/[.08] dark:border-white/[.145]">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead>
          <tr className="border-b border-black/[.08] text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
            <th className="px-4 py-3 font-medium">Politician</th>
            <th className="px-4 py-3 font-medium">Chamber</th>
            <th className="px-4 py-3 font-medium">Ticker</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Amount</th>
            <th className="px-4 py-3 font-medium">Date</th>
            <th className="px-4 py-3 font-medium">If You Copied</th>
          </tr>
        </thead>
        <tbody>
          {placeholderTrades.map((trade, i) => {
            const pct = copiedReturnPct(trade);
            const isPositive = pct >= 0;
            return (
              <tr
                key={`${trade.politician}-${trade.date}`}
                className={
                  i !== placeholderTrades.length - 1
                    ? "border-b border-black/[.06] dark:border-white/[.1]"
                    : ""
                }
              >
                <td className="px-4 py-3">
                  {trade.politician}{" "}
                  <span className={`font-medium ${partyStyles[trade.party]}`}>
                    ({trade.party})
                  </span>
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{trade.chamber}</td>
                <td className="px-4 py-3 font-mono font-medium">{trade.ticker}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${typeStyles[trade.type]}`}>
                    {trade.type}
                  </span>
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{trade.amount}</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{trade.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`font-mono font-medium ${
                      isPositive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {pct.toFixed(1)}%
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
