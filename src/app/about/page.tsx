import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            About StockGuru
          </h1>
          <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            StockGuru tracks stock trades disclosed by members of Congress, so you can
            see what the people writing the rules are actually buying and selling.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
            Why this data exists
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            The STOCK Act of 2012 requires members of Congress to publicly disclose
            stock trades within 45 days, and to file an Annual Financial Disclosure
            listing their full portfolio. StockGuru surfaces that public information
            in one place instead of digging through House and Senate filing sites.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
            About the data right now
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            StockGuru is early — trades and portfolio holdings shown today are
            placeholder data used to build out the product. A live pipeline pulling
            from real disclosure filings is on the roadmap.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
            Not investment advice
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            StockGuru is for informational and educational purposes only. Nothing on
            this site is a recommendation to buy or sell any security.
          </p>
        </section>
      </main>
    </div>
  );
}
