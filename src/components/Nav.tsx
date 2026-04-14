import Link from "next/link";

const navLinks = [
  { href: "#spaces", label: "スペース" },
  { href: "#pricing", label: "料金" },
  { href: "#flow", label: "ご利用の流れ" },
  { href: "#access", label: "アクセス" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav({ showBack = false }: { showBack?: boolean }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-xl border-b border-black/6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] italic text-lg text-black"
        >
          Pokabeya
        </Link>
        <div className="flex items-center gap-6">
          {showBack ? (
            <Link
              href="/"
              className="text-xs text-mid hover:text-black transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              TOPに戻る
            </Link>
          ) : (
            <ul className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link
            href="#"
            className="bg-black text-white text-[0.72rem] px-5 py-2 rounded-full tracking-wider hover:opacity-80 transition-opacity"
          >
            予約する
          </Link>
        </div>
      </div>
    </nav>
  );
}
