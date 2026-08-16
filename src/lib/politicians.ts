export type Party = "D" | "R" | "I";
export type Chamber = "House" | "Senate";

export type Politician = {
  slug: string;
  name: string;
  party: Party;
  chamber: Chamber;
  state: string;
};

export type Trade = {
  politicianSlug: string;
  ticker: string;
  type: "Buy" | "Sell";
  amount: string;
  date: string;
  entryPrice: number;
  currentPrice: number;
};

export type Holding = {
  ticker: string;
  company: string;
  sector: string;
  valueRange: string;
};

export const politicians: Politician[] = [
  { slug: "susie-lee", name: "Susie Lee", party: "D", chamber: "House", state: "NV" },
  { slug: "marjorie-taylor-greene", name: "Marjorie Taylor Greene", party: "R", chamber: "House", state: "GA" },
  { slug: "michael-mccaul", name: "Michael McCaul", party: "R", chamber: "House", state: "TX" },
  { slug: "nancy-pelosi", name: "Nancy Pelosi", party: "D", chamber: "House", state: "CA" },
  { slug: "dan-crenshaw", name: "Dan Crenshaw", party: "R", chamber: "House", state: "TX" },
  { slug: "tommy-tuberville", name: "Tommy Tuberville", party: "R", chamber: "Senate", state: "AL" },
  { slug: "josh-gottheimer", name: "Josh Gottheimer", party: "D", chamber: "House", state: "NJ" },
  { slug: "ro-khanna", name: "Ro Khanna", party: "D", chamber: "House", state: "CA" },
  { slug: "markwayne-mullin", name: "Markwayne Mullin", party: "R", chamber: "Senate", state: "OK" },
];

export const trades: Trade[] = [
  { politicianSlug: "susie-lee", ticker: "META", type: "Buy", amount: "$100K–$250K", date: "2026-08-05", entryPrice: 615.0, currentPrice: 642.1 },
  { politicianSlug: "marjorie-taylor-greene", ticker: "TSLA", type: "Buy", amount: "$50K–$100K", date: "2026-08-01", entryPrice: 245.0, currentPrice: 268.4 },
  { politicianSlug: "michael-mccaul", ticker: "AMZN", type: "Sell", amount: "$250K–$500K", date: "2026-07-30", entryPrice: 228.0, currentPrice: 234.75 },
  { politicianSlug: "nancy-pelosi", ticker: "NVDA", type: "Buy", amount: "$1M–$5M", date: "2026-07-28", entryPrice: 172.5, currentPrice: 195.3 },
  { politicianSlug: "dan-crenshaw", ticker: "LMT", type: "Buy", amount: "$15K–$50K", date: "2026-07-25", entryPrice: 612.0, currentPrice: 598.5 },
  { politicianSlug: "tommy-tuberville", ticker: "MSFT", type: "Sell", amount: "$15K–$50K", date: "2026-07-22", entryPrice: 512.0, currentPrice: 498.1 },
  { politicianSlug: "josh-gottheimer", ticker: "AAPL", type: "Buy", amount: "$50K–$100K", date: "2026-07-19", entryPrice: 231.4, currentPrice: 227.9 },
  { politicianSlug: "ro-khanna", ticker: "GOOGL", type: "Sell", amount: "$1K–$15K", date: "2026-07-15", entryPrice: 198.2, currentPrice: 210.55 },
  { politicianSlug: "markwayne-mullin", ticker: "XOM", type: "Buy", amount: "$100K–$250K", date: "2026-07-10", entryPrice: 118.75, currentPrice: 124.1 },
];

export const holdings: Record<string, Holding[]> = {
  "susie-lee": [
    { ticker: "META", company: "Meta Platforms", sector: "Technology", valueRange: "$100K–$250K" },
    { ticker: "MGM", company: "MGM Resorts International", sector: "Hospitality", valueRange: "$50K–$100K" },
    { ticker: "LVS", company: "Las Vegas Sands", sector: "Hospitality", valueRange: "$15K–$50K" },
    { ticker: "AMZN", company: "Amazon.com", sector: "Technology", valueRange: "$1K–$15K" },
  ],
  "marjorie-taylor-greene": [
    { ticker: "TSLA", company: "Tesla", sector: "Automotive", valueRange: "$50K–$100K" },
    { ticker: "SWBI", company: "Smith & Wesson Brands", sector: "Industrials", valueRange: "$15K–$50K" },
    { ticker: "XOM", company: "Exxon Mobil", sector: "Energy", valueRange: "$1K–$15K" },
  ],
  "michael-mccaul": [
    { ticker: "AMZN", company: "Amazon.com", sector: "Technology", valueRange: "$250K–$500K" },
    { ticker: "RTX", company: "RTX Corporation", sector: "Defense", valueRange: "$100K–$250K" },
    { ticker: "MSFT", company: "Microsoft", sector: "Technology", valueRange: "$50K–$100K" },
    { ticker: "JPM", company: "JPMorgan Chase", sector: "Financials", valueRange: "$15K–$50K" },
  ],
  "nancy-pelosi": [
    { ticker: "NVDA", company: "NVIDIA", sector: "Technology", valueRange: "$1M–$5M" },
    { ticker: "AAPL", company: "Apple", sector: "Technology", valueRange: "$1M–$5M" },
    { ticker: "MSFT", company: "Microsoft", sector: "Technology", valueRange: "$500K–$1M" },
    { ticker: "GOOGL", company: "Alphabet", sector: "Technology", valueRange: "$250K–$500K" },
    { ticker: "TSLA", company: "Tesla", sector: "Automotive", valueRange: "$100K–$250K" },
  ],
  "dan-crenshaw": [
    { ticker: "LMT", company: "Lockheed Martin", sector: "Defense", valueRange: "$15K–$50K" },
    { ticker: "NOC", company: "Northrop Grumman", sector: "Defense", valueRange: "$15K–$50K" },
    { ticker: "XOM", company: "Exxon Mobil", sector: "Energy", valueRange: "$1K–$15K" },
  ],
  "tommy-tuberville": [
    { ticker: "MSFT", company: "Microsoft", sector: "Technology", valueRange: "$15K–$50K" },
    { ticker: "DE", company: "Deere & Company", sector: "Industrials", valueRange: "$15K–$50K" },
    { ticker: "CAT", company: "Caterpillar", sector: "Industrials", valueRange: "$1K–$15K" },
  ],
  "josh-gottheimer": [
    { ticker: "AAPL", company: "Apple", sector: "Technology", valueRange: "$50K–$100K" },
    { ticker: "JPM", company: "JPMorgan Chase", sector: "Financials", valueRange: "$50K–$100K" },
    { ticker: "GOOGL", company: "Alphabet", sector: "Technology", valueRange: "$15K–$50K" },
  ],
  "ro-khanna": [
    { ticker: "GOOGL", company: "Alphabet", sector: "Technology", valueRange: "$1K–$15K" },
    { ticker: "NVDA", company: "NVIDIA", sector: "Technology", valueRange: "$1K–$15K" },
    { ticker: "META", company: "Meta Platforms", sector: "Technology", valueRange: "$1K–$15K" },
  ],
  "markwayne-mullin": [
    { ticker: "XOM", company: "Exxon Mobil", sector: "Energy", valueRange: "$100K–$250K" },
    { ticker: "CVX", company: "Chevron", sector: "Energy", valueRange: "$50K–$100K" },
    { ticker: "OXY", company: "Occidental Petroleum", sector: "Energy", valueRange: "$15K–$50K" },
  ],
};

export function getPolitician(slug: string): Politician | undefined {
  return politicians.find((p) => p.slug === slug);
}

export function getTradesForPolitician(slug: string): Trade[] {
  return trades.filter((t) => t.politicianSlug === slug);
}

export function getHoldingsForPolitician(slug: string): Holding[] {
  return holdings[slug] ?? [];
}

// A "Sell" is mirrored as a short position, so a falling price is a gain.
export function copiedReturnPct(trade: Trade): number {
  const priceReturn =
    ((trade.currentPrice - trade.entryPrice) / trade.entryPrice) * 100;
  return trade.type === "Sell" ? -priceReturn : priceReturn;
}
