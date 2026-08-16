import Header from "@/components/Header";
import TradesTable from "@/components/TradesTable";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Know what Congress is trading.
          </h1>
          <p className="max-w-2xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            StockGuru tracks stock trades disclosed by members of Congress, so you can
            follow what the people writing the rules are actually buying and selling.
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
            Recent Trades
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Placeholder data — live disclosures coming soon.
          </p>
          <TradesTable />
        </section>
      </main>
    </div>
  );
}
