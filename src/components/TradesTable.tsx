type Trade = {
  politician: string;
  party: "D" | "R" | "I";
  chamber: "House" | "Senate";
  ticker: string;
  type: "Buy" | "Sell";
  amount: string;
  date: string;
};

const placeholderTrades: Trade[] = [
  { politician: "Nancy Pelosi", party: "D", chamber: "House", ticker: "NVDA", type: "Buy", amount: "$1M–$5M", date: "2026-07-28" },
  { politician: "Tommy Tuberville", party: "R", chamber: "Senate", ticker: "MSFT", type: "Sell", amount: "$15K–$50K", date: "2026-07-22" },
  { politician: "Josh Gottheimer", party: "D", chamber: "House", ticker: "AAPL", type: "Buy", amount: "$50K–$100K", date: "2026-07-19" },
  { politician: "Ro Khanna", party: "D", chamber: "House", ticker: "GOOGL", type: "Sell", amount: "$1K–$15K", date: "2026-07-15" },
  { politician: "Markwayne Mullin", party: "R", chamber: "Senate", ticker: "XOM", type: "Buy", amount: "$100K–$250K", date: "2026-07-10" },
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

export default function TradesTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-black/[.08] dark:border-white/[.145]">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-black/[.08] text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
            <th className="px-4 py-3 font-medium">Politician</th>
            <th className="px-4 py-3 font-medium">Chamber</th>
            <th className="px-4 py-3 font-medium">Ticker</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Amount</th>
            <th className="px-4 py-3 font-medium">Date</th>
          </tr>
        </thead>
        <tbody>
          {placeholderTrades.map((trade, i) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
