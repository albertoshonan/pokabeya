import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { rooms, formatPrice } from "@/data/rooms";

const pricingPlans = [
  { label: "早朝", price: 2200, time: "06:00 〜 08:59", featured: false },
  { label: "日中", price: 2750, time: "09:00 〜 16:59", featured: false },
  { label: "夜間", price: 3300, time: "17:00 〜 05:59", featured: true },
];

const steps = [
  {
    step: "STEP 1",
    title: "予約",
    desc: "WEBまたはLINEから予約",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    step: "STEP 2",
    title: "入室",
    desc: "暗証番号で解錠・入室",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
      </svg>
    ),
  },
  {
    step: "STEP 3",
    title: "プレイ",
    desc: "RFIDテーブルでポーカーを楽しむ",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12h.01" />
      </svg>
    ),
  },
  {
    step: "STEP 4",
    title: "退室",
    desc: "時間になったらそのまま退室",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "ポーカーが初めてでも大丈夫ですか？",
    a: "はい、もちろんです。RFIDテーブルが自動でカードを読み取るので、ルールさえ覚えればすぐにお楽しみいただけます。LINEでのサポートも対応しています。",
  },
  {
    q: "持ち物は必要ですか？",
    a: "手ぶらでOKです。チップ・カード・テーブルなど全て完備しています。飲食の持ち込みも自由です。",
  },
  {
    q: "何人から利用できますか？",
    a: "1名様からご利用可能です。最大10名まで対応しています。料金は1部屋あたりの料金なので、人数が多いほどお得です。",
  },
  {
    q: "配信はできますか？",
    a: "はい、配信カメラを完備しています。YouTube等での配信に対応しています。",
  },
  {
    q: "予約のキャンセルはできますか？",
    a: "予約システムまたはLINEからキャンセルが可能です。詳しくはLINEでお問い合わせください。",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px]">
          {/* Left: Text */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16">
            <h1 className="text-[clamp(2rem,4vw,2.8rem)] text-black leading-[1.3] mb-4">
              <span className="block font-[family-name:var(--font-playfair)] italic">Your Private</span>
              <span className="block font-[family-name:var(--font-playfair)] italic">Poker Room</span>
            </h1>
            <p className="text-sm font-medium text-dark mb-3">
              完全無人・RFID完備のプライベート空間
            </p>
            <p className="text-sm text-mid leading-relaxed mb-8">
              集めてくるのは仲間だけ。<br />
              カード、チップ、オートシャフラー全て完備。<br />
              手ぶらで来て、すぐにポーカーを始められます。
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="#"
                className="bg-black text-white text-sm px-7 py-3.5 rounded-full hover:opacity-80 transition-opacity"
              >
                今すぐ予約する
              </Link>
              <Link
                href="#"
                className="border border-light text-dark text-sm px-6 py-3.5 rounded-full hover:border-black transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                LINEで相談
              </Link>
            </div>
          </div>
          {/* Right: Image */}
          <div className="relative min-h-[340px] md:min-h-0">
            <Image
              src="/images/S__34218069_0.jpg"
              alt="Pokabeya ポーカールーム"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        {/* Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-light">
          {[
            { icon: homeIcon, text: "5店舗展開" },
            { icon: clockIcon, text: "24時間営業" },
            { icon: rfidIcon, text: "RFID完備" },
            { icon: videoIcon, text: "配信OK" },
          ].map((item, i, arr) => (
            <div
              key={item.text}
              className={`flex flex-col items-center gap-2 py-6 border-light ${
                i < arr.length - 1 ? "md:border-r" : ""
              } ${i < 2 ? "max-md:border-b" : ""} ${
                i % 2 === 0 ? "max-md:border-r" : ""
              }`}
            >
              <span className="w-6 h-6 text-black">{item.icon}</span>
              <span className="text-sm text-dark font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Spaces */}
      <section id="spaces" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20">
        <div className="mb-14">
          <p className="text-xs tracking-[0.15em] text-mid mb-1">SPACES</p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-black leading-tight">
            Our Rooms
          </h2>
          <p className="text-sm text-mid mt-1">スペース紹介</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              href={`/rooms/${room.slug}`}
              className="group bg-off rounded-2xl p-6 text-center hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-light to-off rounded-xl mx-auto mb-3 flex items-center justify-center text-mid">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-dark mb-0.5">{room.nameJa}</h4>
              <p className="text-xs text-mid">{room.area}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20">
        <div className="mb-14">
          <p className="text-xs tracking-[0.15em] text-mid mb-1">PRICING</p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-black leading-tight">
            Plans
          </h2>
          <p className="text-sm text-mid mt-1">料金プラン</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.label}
              className={`rounded-2xl p-7 text-center transition-all ${
                plan.featured
                  ? "bg-black text-white sm:scale-[1.03]"
                  : "border border-light"
              }`}
            >
              <p className={`text-xs tracking-widest mb-1.5 ${plan.featured ? "text-[#666]" : "text-mid"}`}>
                {plan.label}
              </p>
              <p className={`text-3xl font-bold leading-tight ${plan.featured ? "text-white" : "text-black"}`}>
                {formatPrice(plan.price)}
              </p>
              <p className={`text-xs mb-1.5 ${plan.featured ? "text-[#ccc]" : "text-mid"}`}>/ 1h</p>
              <p className={`text-xs ${plan.featured ? "text-[#888]" : "text-gray"}`}>{plan.time}</p>
            </div>
          ))}
        </div>
        <div className="bg-off rounded-xl p-4 text-xs text-gray leading-relaxed">
          ※ 料金は1部屋あたりの料金です（人数割りではありません）<br />
          ※ パック料金もあります（6h ¥13,200〜）<br />
          ※ 延長は予約システムまたはLINEから対応可能です
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20">
        <div className="mb-14">
          <p className="text-xs tracking-[0.15em] text-mid mb-1">FLOW</p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-black leading-tight">
            How It Works
          </h2>
          <p className="text-sm text-mid mt-1">ご利用の流れ</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.step} className="bg-off rounded-2xl p-7 text-center">
              <p className="text-[0.62rem] tracking-widest text-mid mb-2.5">{s.step}</p>
              <div className="w-[52px] h-[52px] bg-white rounded-full mx-auto mb-3 flex items-center justify-center text-black">
                {s.icon}
              </div>
              <h4 className="text-base font-semibold">{s.title}</h4>
              <p className="text-xs text-gray mt-1.5">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20">
        <div className="mb-14">
          <p className="text-xs tracking-[0.15em] text-mid mb-1">FAQ</p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-black leading-tight">
            Questions
          </h2>
          <p className="text-sm text-mid mt-1">よくある質問</p>
        </div>
        <div className="max-w-2xl">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-light py-5">
              <div className="flex items-start gap-2.5">
                <span className="font-[family-name:var(--font-playfair)] italic font-bold text-base text-black shrink-0">
                  Q
                </span>
                <p className="text-[0.95rem] font-medium text-dark">{faq.q}</p>
              </div>
              <p className="text-sm text-gray mt-2.5 pl-7 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off text-center py-24 px-5">
        <p className="text-xs tracking-[0.5em] text-mid mb-9">P O K A B E Y A</p>
        <h2 className="font-[family-name:var(--font-playfair)] italic text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-black mb-5">
          Book Now
        </h2>
        <p className="text-sm text-gray mb-10">完全無人 RFID ポーカールーム</p>
        <div className="flex gap-3 flex-wrap justify-center mb-8">
          <Link
            href="#"
            className="bg-black text-white text-sm px-8 py-3.5 rounded-full hover:opacity-80 transition-opacity"
          >
            今すぐ予約する
          </Link>
          <Link
            href="#"
            className="border border-light text-dark text-sm px-6 py-3.5 rounded-full hover:border-black transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            LINEで相談
          </Link>
        </div>
        <p className="text-sm text-mid">
          <a href="tel:07090248529" className="text-black font-semibold">070-9024-8529</a>
        </p>
      </section>

      <Footer />
    </>
  );
}

const homeIcon = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const clockIcon = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const rfidIcon = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const usersIcon = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const videoIcon = (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);
