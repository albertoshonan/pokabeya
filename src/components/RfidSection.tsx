import { formatPrice } from "@/data/rooms";
import RfidVideoPlayer from "./RfidVideoPlayer";
import {
  rfidModes,
  rfidThreeCamOption,
  rfidVideoNote,
  getRfidOption,
  type RfidVideo,
} from "@/data/rfid";

function VideoFrame({ video }: { video: RfidVideo }) {
  return (
    // 動画名はモードごとの見出しで分かるので、枠にキャプションは付けない
    <div className="aspect-video rounded-2xl overflow-hidden bg-off border border-light">
      {video.youtubeId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : video.src ? (
        <RfidVideoPlayer video={video} />
      ) : (
        // 動画が未設定の間はプレースホルダー枠を出しておく
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-mid">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
          <span className="text-xs">サンプル動画</span>
        </div>
      )}
    </div>
  );
}

export default function RfidSection() {
  return (
    <section id="rfid" className="max-w-[1200px] mx-auto px-5 sm:px-10 py-20">
      <div className="mb-14">
        <p className="text-xs tracking-[0.15em] text-mid mb-1">SPECIALTY</p>
        <h2 className="font-[family-name:var(--font-playfair)] italic text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-black leading-tight">
          RFID
        </h2>
        <p className="text-sm text-mid mt-1">RFID利用について</p>
      </div>

      {/* モードごとの表示可能項目と料金 */}
      <p className="text-sm font-semibold text-black mb-4">画面に表示できる項目</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rfidModes.map((mode) => {
          const option = getRfidOption(mode.optionName);
          return (
            // 項目数が左右で違うので、表示項目の枠を伸ばして料金表の枠を上下で揃える
            <div key={mode.optionName} className="flex flex-col gap-4">
              {/* ① 表示可 */}
              <div className="border border-light rounded-2xl p-7 flex-1">
                <p className="text-base font-semibold text-black mb-4">{mode.optionName}</p>
                <ul className="space-y-2">
                  {mode.displayItems.map((item) => (
                    <li key={item} className="flex gap-2.5 text-xs text-gray leading-relaxed">
                      <span className="mt-[0.42rem] w-1 h-1 rounded-full bg-mid shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* 料金表 */}
              {option?.tiers && (
                <div className="border border-light rounded-2xl p-7">
                  <p className="text-sm font-semibold text-black mb-4">{mode.optionName}</p>
                  <div className="space-y-1.5">
                    {option.tiers.map((tier) => (
                      <div key={tier.label} className="flex items-baseline justify-between">
                        <span className="text-xs text-mid">{tier.label}</span>
                        <span className="text-sm font-bold text-black">{formatPrice(tier.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3カメ利用オプション。設計メモどおり、枠線の上に見出しを乗せる */}
      <div className="mt-4 relative border-2 border-alberto rounded-2xl px-7 pt-8 pb-7">
        <span className="absolute -top-3 left-5 bg-white px-2 text-sm font-semibold text-alberto">
          {rfidThreeCamOption.name}
        </span>
        <p className="text-xl sm:text-2xl font-bold text-alberto">
          ご希望のRFID料金 +{formatPrice(rfidThreeCamOption.addonPrice)}
        </p>
      </div>

      {/* 各モードの説明 */}
      <div className="mt-12 space-y-8">
        {rfidModes.map((mode) => (
          <div key={mode.optionName}>
            <h3 className="text-sm font-semibold text-black mb-2">{mode.optionName}</h3>
            <p className="text-sm text-gray leading-[1.9]">{mode.description}</p>
          </div>
        ))}
        <div>
          <h3 className="text-sm font-semibold text-black mb-2">{rfidThreeCamOption.name}</h3>
          <p className="text-sm text-gray leading-[1.9]">{rfidThreeCamOption.description}</p>
        </div>
      </div>

      {/* サンプル動画。モードごとに2本ずつ並べる */}
      <div className="mt-12 space-y-8">
        {rfidModes.map((mode) => (
          <div key={mode.optionName}>
            <h3 className="text-sm font-semibold text-black mb-4">{mode.optionName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mode.videos.map((video) => (
                <VideoFrame key={video.title} video={video} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* 設計メモどおり、この注記だけ赤字で目立たせる */}
      <p className="mt-4 text-xs text-red-600 leading-relaxed">{rfidVideoNote}</p>

      <p className="mt-6 text-xs text-gray leading-relaxed">
        ※ RFID料金は部屋のご利用料金とは別途かかります<br />
        ※ ご利用のご希望は予約時または公式LINEよりお知らせください
      </p>
    </section>
  );
}
