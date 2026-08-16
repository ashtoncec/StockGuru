const navLinks = [
  { label: "Dashboard", href: "#" },
  { label: "Trades", href: "#" },
  { label: "Politicians", href: "#" },
  { label: "About", href: "#" },
];

export default function Header() {
  return (
    <header className="border-b border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <span className="text-lg font-semibold tracking-tight">
          Stock<span className="text-emerald-600 dark:text-emerald-400">Guru</span>
        </span>
        <nav className="hidden gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
