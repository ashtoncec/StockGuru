import type { Holding } from "@/lib/politicians";

export default function HoldingsTable({ holdings }: { holdings: Holding[] }) {
  if (holdings.length === 0) {
    return (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        No public holdings on file yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-black/[.08] dark:border-white/[.145]">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-black/[.08] text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
            <th className="px-4 py-3 font-medium">Ticker</th>
            <th className="px-4 py-3 font-medium">Company</th>
            <th className="px-4 py-3 font-medium">Sector</th>
            <th className="px-4 py-3 font-medium">Reported Value</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding, i) => (
            <tr
              key={holding.ticker}
              className={
                i !== holdings.length - 1
                  ? "border-b border-black/[.06] dark:border-white/[.1]"
                  : ""
              }
            >
              <td className="px-4 py-3 font-mono font-medium">{holding.ticker}</td>
              <td className="px-4 py-3">{holding.company}</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{holding.sector}</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{holding.valueRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
