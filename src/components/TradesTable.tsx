import Link from "next/link";
import {
  copiedReturnPct,
  getPolitician,
  type Party,
  type Trade,
} from "@/lib/politicians";

const partyStyles: Record<Party, string> = {
  D: "text-blue-600 dark:text-blue-400",
  R: "text-red-600 dark:text-red-400",
  I: "text-zinc-600 dark:text-zinc-400",
};

const typeStyles: Record<Trade["type"], string> = {
  Buy: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Sell: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
};

export default function TradesTable({ trades }: { trades: Trade[] }) {
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
          {trades.map((trade, i) => {
            const politician = getPolitician(trade.politicianSlug);
            const pct = copiedReturnPct(trade);
            const isPositive = pct >= 0;
            return (
              <tr
                key={`${trade.politicianSlug}-${trade.date}-${trade.ticker}`}
                className={
                  i !== trades.length - 1
                    ? "border-b border-black/[.06] dark:border-white/[.1]"
                    : ""
                }
              >
                <td className="px-4 py-3">
                  {politician ? (
                    <Link
                      href={`/politicians/${politician.slug}`}
                      className="hover:underline"
                    >
                      {politician.name}
                    </Link>
                  ) : (
                    trade.politicianSlug
                  )}{" "}
                  {politician && (
                    <span className={`font-medium ${partyStyles[politician.party]}`}>
                      ({politician.party})
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                  {politician?.chamber}
                </td>
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
