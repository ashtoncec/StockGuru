import Link from "next/link";
import Header from "@/components/Header";
import { politicians } from "@/lib/politicians";

const partyStyles: Record<string, string> = {
  D: "text-blue-600 dark:text-blue-400",
  R: "text-red-600 dark:text-red-400",
  I: "text-zinc-600 dark:text-zinc-400",
};

export default function PoliticiansPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Politicians
          </h1>
          <p className="max-w-2xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Browse tracked members of Congress to see their full reported portfolio,
            not just their most recent trades.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {politicians.map((politician) => (
            <Link
              key={politician.slug}
              href={`/politicians/${politician.slug}`}
              className="flex flex-col gap-2 rounded-xl border border-black/[.08] bg-white p-5 transition-colors hover:border-black/[.16] dark:border-white/[.145] dark:bg-zinc-950 dark:hover:border-white/[.3]"
            >
              <span className="font-semibold text-black dark:text-zinc-50">
                {politician.name}{" "}
                <span className={`font-medium ${partyStyles[politician.party]}`}>
                  ({politician.party})
                </span>
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {politician.chamber} · {politician.state}
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
