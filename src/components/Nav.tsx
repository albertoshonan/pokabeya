import Link from "next/link";
import Image from "next/image";
import { LINE_URL } from "@/data/links";

export default function Nav({ showBack = false }: { showBack?: boolean }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-xl border-b border-black/6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-dark.png"
            alt="Pokabeya"
            width={160}
            height={53}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-2">
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
            <>
              {/* チャットで予約 */}
              <Link
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-[0.62rem] sm:text-[0.72rem] px-3 sm:px-4 py-2 rounded-full tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <span>LINE</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>予約</span>
                <span className="text-[0.55rem] text-white/60 hidden sm:inline">(PayPay Only)</span>
              </Link>
              <Link
                href="https://reserva.be/pokerbear"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-[0.62rem] sm:text-[0.72rem] px-3 sm:px-4 py-2 rounded-full tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <span>ネット予約</span>
                <span className="text-[0.55rem] text-white/60 hidden sm:inline">(クレジットOnly)</span>
              </Link>
              {/* 電話希望の方の受け口。電話番号は廃止したため公式LINEへ誘導する */}
              <Link
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-[0.62rem] sm:text-[0.72rem] px-3 sm:px-4 py-2 rounded-full tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <span>LINE</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                </svg>
                <span>予約</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
