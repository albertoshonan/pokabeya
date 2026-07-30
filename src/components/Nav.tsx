import Link from "next/link";
import Image from "next/image";

const LINE_URL = "https://page.line.me/515smhfk?oat_content=url&openQrModal=true";

export default function Nav({ showBack = false }: { showBack?: boolean }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-xl border-b border-black/6">
      {/* 電話番号を廃止したため、問い合わせを公式LINEへ誘導する告知バー */}
      <Link
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="h-9 px-4 bg-[#06C755] text-white flex items-center justify-center gap-2 sm:gap-3 hover:brightness-95 transition-[filter]"
      >
        <span className="text-[0.62rem] sm:text-xs tracking-wide">
          お電話ご希望の方は公式LINEへ📞ください！
        </span>
        <span className="shrink-0 bg-white text-[#06C755] text-[0.58rem] sm:text-[0.65rem] font-bold px-2.5 py-1 rounded-full">
          ともだち追加
        </span>
      </Link>
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
              <Link
                href="https://reserva.be/pokerbear"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-[0.62rem] sm:text-[0.72rem] px-3 sm:px-4 py-2 rounded-full tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <span>ネット予約</span>
                <span className="text-[0.55rem] text-white/60 hidden sm:inline">(クレジットOnly)</span>
              </Link>
              <Link
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-[0.62rem] sm:text-[0.72rem] px-3 sm:px-4 py-2 rounded-full tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1"
              >
                <span>LINE予約</span>
                <span className="text-[0.55rem] text-white/60 hidden sm:inline">(PayPay Only)</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
