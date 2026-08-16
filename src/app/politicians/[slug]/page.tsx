import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import HoldingsTable from "@/components/HoldingsTable";
import TradesTable from "@/components/TradesTable";
import {
  getHoldingsForPolitician,
  getPolitician,
  getTradesForPolitician,
  politicians,
} from "@/lib/politicians";

const partyStyles: Record<string, string> = {
  D: "text-blue-600 dark:text-blue-400",
  R: "text-red-600 dark:text-red-400",
  I: "text-zinc-600 dark:text-zinc-400",
};

export function generateStaticParams() {
  return politicians.map((politician) => ({ slug: politician.slug }));
}

export default async function PoliticianPage(
  props: PageProps<"/politicians/[slug]">,
) {
  const { slug } = await props.params;
  const politician = getPolitician(slug);

  if (!politician) {
    notFound();
  }

  const holdings = getHoldingsForPolitician(slug);
  const trades = getTradesForPolitician(slug);

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <Link
            href="/politicians"
            className="text-sm text-zinc-500 hover:underline dark:text-zinc-400"
          >
            ← All politicians
          </Link>
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            {politician.name}{" "}
            <span className={`font-medium ${partyStyles[politician.party]}`}>
              ({politician.party})
            </span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {politician.chamber} · {politician.state}
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
            Reported Portfolio
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Placeholder data based on the kind of holdings disclosed in Annual
            Financial Disclosure reports — live filings coming soon.
          </p>
          <HoldingsTable holdings={holdings} />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
            Trade History
          </h2>
          {trades.length > 0 ? (
            <TradesTable trades={trades} />
          ) : (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              No disclosed trades on file yet.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
