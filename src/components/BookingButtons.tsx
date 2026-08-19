import Link from "next/link";
import { LINE_URL } from "@/data/links";

const chatIcon = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const phoneIcon = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
  </svg>
);

/**
 * 予約導線のボタン群。トップの Nav と各部屋ページの CTA で同じ構成・同じ並び順を保つため
 * ここに集約する。PayPay で払える LINE 予約を先頭に置く。
 */
const buttons = [
  { href: LINE_URL, label: "LINE", icon: chatIcon, suffix: "予約", note: "(PayPay Only)" },
  { href: "https://reserva.be/pokerbear", label: "ネット予約", icon: null, suffix: null, note: "(クレジットOnly)" },
  { href: LINE_URL, label: "LINE", icon: phoneIcon, suffix: "予約", note: null, isPhone: true },
];

const shapes = {
  /** ヘッダー右上に並べる小さめのピル */
  nav: "text-[0.62rem] sm:text-[0.72rem] px-3 sm:px-4 py-2",
  /** サイドバーCTAで縦に積む横幅いっぱいのボタン */
  stacked: "w-full justify-center text-sm px-4 py-3.5 mb-2.5 last:mb-0",
  /** ページ下部CTAで中央に横並びにするボタン */
  wide: "text-sm px-6 sm:px-8 py-3.5",
};

export default function BookingButtons({
  variant,
  /** 電話の代わりに置いている3つ目のLINE予約ボタンを省く。別に電話導線がある場所で使う */
  omitPhoneButton = false,
}: {
  variant: keyof typeof shapes;
  omitPhoneButton?: boolean;
}) {
  const base =
    "bg-black text-white rounded-full tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1";
  const shown = omitPhoneButton ? buttons.filter((b) => !b.isPhone) : buttons;

  return (
    <>
      {shown.map((b, i) => (
        <Link
          key={i}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${shapes[variant]}`}
        >
          <span>{b.label}</span>
          {b.icon}
          {b.suffix && <span>{b.suffix}</span>}
          {b.note && (
            <span
              className={`text-[0.55rem] text-white/60 ${variant === "nav" ? "hidden sm:inline" : ""}`}
            >
              {b.note}
            </span>
          )}
        </Link>
      ))}
    </>
  );
}
