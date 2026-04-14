import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { rooms, getRoomBySlug, getOtherRooms, formatPrice } from "@/data/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.nameJa} - ${room.area} | Pokabeya`,
    description: room.tagline,
  };
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const others = getOtherRooms(slug);

  return (
    <>
      <Nav showBack />

      {/* Hero */}
      <div className="pt-[100px] pb-[60px] px-4 sm:px-10 max-w-[1200px] mx-auto">
        <div className="text-xs text-mid mb-6 flex items-center gap-2">
          <Link href="/" className="text-mid hover:text-black transition-colors">Pokabeya</Link>
          <span>/</span>
          <span>{room.nameJa}</span>
        </div>
        <div className="flex items-end gap-4 mb-2">
          <h1 className="font-[family-name:var(--font-playfair)] italic text-[clamp(2rem,5vw,3.2rem)] font-bold text-black leading-tight">
            {room.name}
          </h1>
          <span className="text-sm text-mid mb-1.5">{room.area}</span>
        </div>
        <p className="text-sm text-gray mt-3">{room.tagline}</p>
        <div className="flex gap-6 flex-wrap mt-7 pt-7 border-t border-light">
          {[
            { icon: clockIcon, text: "24時間営業" },
            { icon: rfidIcon, text: "RFID完備" },
            { icon: usersIcon, text: `最大${room.maxGuests}名` },
            { icon: videoIcon, text: "配信OK" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-gray">
              <span className="w-[18px] h-[18px] text-black">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="px-4 sm:px-10 pb-[60px] max-w-[1200px] mx-auto">
        {room.images.length >= 3 ? (
          <div className="grid grid-cols-3 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[480px] max-sm:grid-cols-1 max-sm:grid-rows-3 max-sm:h-auto">
            <div className="row-span-2 max-sm:row-span-1 relative">
              <Image src={room.images[0]} alt={`${room.nameJa} メイン`} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover" />
            </div>
            <div className="relative max-sm:hidden">
              <Image src={room.images[1]} alt={`${room.nameJa} 写真2`} fill sizes="30vw" className="object-cover" />
            </div>
            <div className="relative max-sm:hidden">
              <Image src={room.images[2]} alt={`${room.nameJa} 写真3`} fill sizes="30vw" className="object-cover" />
            </div>
            {room.images[3] ? (
              <div className="relative max-sm:hidden">
                <Image src={room.images[3]} alt={`${room.nameJa} 写真4`} fill sizes="30vw" className="object-cover" />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-[#e2e2e2] to-[#eee] max-sm:hidden" />
            )}
            <div className="bg-gradient-to-br from-[#e2e2e2] to-[#eee] max-sm:hidden" />
          </div>
        ) : room.images.length === 2 ? (
          <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden h-[400px]">
            {room.images.map((img, i) => (
              <div key={i} className="relative">
                <Image src={img} alt={`${room.nameJa} 写真${i + 1}`} fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <Image src={room.images[0]} alt={room.nameJa} fill sizes="100vw" className="object-cover" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Main */}
          <div>
            {/* About */}
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-black mb-5 flex items-center gap-2.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                スペースについて
              </h2>
              <p className="text-sm text-gray leading-[1.9] whitespace-pre-line">{room.description}</p>
            </div>

            {/* Equipment */}
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-black mb-5 flex items-center gap-2.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                設備・アメニティ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {room.equipment.map((eq) => (
                  <div key={eq} className="bg-off rounded-xl p-4 flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-sm text-dark">{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-14">
              <h2 className="text-lg font-semibold text-black mb-5 flex items-center gap-2.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                料金プラン
              </h2>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-light">
                    <th className="text-left text-xs text-mid tracking-wider font-semibold py-2.5 px-4">時間帯</th>
                    <th className="text-left text-xs text-mid tracking-wider font-semibold py-2.5 px-4">料金</th>
                    <th className="text-left text-xs text-mid tracking-wider font-semibold py-2.5 px-4">時間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-light">
                    <td className="py-3.5 px-4 text-sm text-dark">早朝</td>
                    <td className="py-3.5 px-4">
                      <span className="text-xl font-bold text-black">{formatPrice(room.pricing.early)}</span>
                      <span className="text-xs text-mid ml-1">/ 1h</span>
                    </td>
                    <td className="py-3.5 px-4 text-sm text-dark">06:00 〜 08:59</td>
                  </tr>
                  <tr className="border-b border-light">
                    <td className="py-3.5 px-4 text-sm text-dark">日中</td>
                    <td className="py-3.5 px-4">
                      <span className="text-xl font-bold text-black">{formatPrice(room.pricing.day)}</span>
                      <span className="text-xs text-mid ml-1">/ 1h</span>
                    </td>
                    <td className="py-3.5 px-4 text-sm text-dark">09:00 〜 16:59</td>
                  </tr>
                  <tr className="bg-black rounded-lg">
                    <td className="py-3.5 px-4 text-sm text-white rounded-l-lg">夜間</td>
                    <td className="py-3.5 px-4">
                      <span className="text-xl font-bold text-white">{formatPrice(room.pricing.night)}</span>
                      <span className="text-xs text-[#999] ml-1">/ 1h</span>
                    </td>
                    <td className="py-3.5 px-4 text-sm text-white rounded-r-lg">17:00 〜 05:59</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-sm font-semibold mt-7 mb-1">パック料金</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                {room.packs.map((pack) => (
                  <div key={pack.hours} className="border border-light rounded-xl p-3.5 text-center">
                    <p className="text-xs text-mid mb-0.5">{pack.hours}時間</p>
                    <p className="text-base font-bold text-black">{formatPrice(pack.price)}</p>
                    <p className="text-[0.62rem] text-mid">
                      {formatPrice(Math.round(pack.price / pack.hours))}/h
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-off rounded-xl text-xs text-gray leading-relaxed">
                ※ 料金は1部屋あたりの料金です（人数割りではありません）<br />
                ※ 会議室利用（ポーカーテーブル未使用時）は別料金となります<br />
                ※ 延長は予約システムまたはLINEから対応可能です
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* CTA Card */}
            <div className="border border-light rounded-2xl p-7 mb-5">
              <Link
                href="#"
                className="block w-full text-center bg-black text-white py-3.5 rounded-full text-sm font-medium mb-2.5 hover:opacity-80 transition-opacity"
              >
                今すぐ予約する
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 w-full text-center border border-light text-dark py-3 rounded-full text-sm hover:border-black transition-colors"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                LINEで相談
              </Link>
              <div className="flex items-center justify-center gap-2 mt-3.5 text-sm text-gray">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:07090248529" className="text-black font-semibold no-underline">070-9024-8529</a>
              </div>
            </div>

            {/* Access Info */}
            <div className="border border-light rounded-2xl p-7 mb-5">
              <h3 className="text-sm font-semibold text-black mb-4">アクセス情報</h3>
              <div className="flex gap-2.5 py-2.5 border-b border-light items-start">
                <svg className="w-[18px] h-[18px] text-mid mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-xs text-mid">住所</p>
                  <p className="text-sm text-dark">
                    {room.address.zip && <>{room.address.zip}<br /></>}
                    {room.address.lines.map((line, i) => (
                      <span key={i}>{line}{i < room.address.lines.length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 border-b border-light items-start">
                <svg className="w-[18px] h-[18px] text-mid mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div>
                  <p className="text-xs text-mid">最寄り駅</p>
                  <p className="text-sm text-dark">{room.access}</p>
                </div>
              </div>
              <div className="flex gap-2.5 py-2.5 items-start">
                <svg className="w-[18px] h-[18px] text-mid mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-xs text-mid">営業時間</p>
                  <p className="text-sm text-dark">24時間営業</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-light h-[240px] bg-off">
              <iframe
                src={room.mapEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Other Rooms */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 py-16 border-t border-light">
        <h3 className="text-lg font-semibold text-black mb-6">他のスペース</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/rooms/${other.slug}`}
              className="group bg-off rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <div className="relative h-28 overflow-hidden">
                <Image
                  src={other.images[0]}
                  alt={other.nameJa}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-sm font-semibold mb-0.5">{other.nameJa}</h4>
                <p className="text-xs text-mid">{other.area}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

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
