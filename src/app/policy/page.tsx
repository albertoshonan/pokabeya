import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "利用規約 | Pokabeya",
  description: "ポカベヤの利用規約です。ご予約前に必ずご確認ください。",
};

export default function PolicyPage() {
  return (
    <>
      <Nav showBack />

      <div className="pt-[108px] pb-20 px-4 sm:px-10 max-w-[800px] mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] italic text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-black mb-2">
          Terms of Use
        </h1>
        <p className="text-sm text-mid mb-12">利用規約</p>

        <div className="text-sm text-dark leading-[2]">
          <h2 className="text-base font-bold text-black mb-4">ポカベヤ利用規約</h2>

          {/* ご予約時間について */}
          <section className="mb-8">
            <h3 className="font-bold text-black mb-2">● ご予約時間について</h3>
            <p className="text-gray">
              ご利用時間は、事前準備から後片付けまで含めて（開錠から施錠まで）、予約された時間内で必ず終わらせるようお願いいたします。
            </p>
          </section>

          {/* 損害賠償 */}
          <section className="mb-8">
            <h3 className="font-bold text-black mb-2">● 損害賠償</h3>
            <p className="text-gray">
              お客様およびお客様すべての関係者は当店の施設、器具の取り扱いに充分お気を付け下さいますようお願い申し上げます。破損した場合、修理費および損害賠償費はすべてお客様にご負担いただきます。また、施設内におきましてお客様の管理下で発生した事故・盗難・人身事故につきましては当施設では一切の責任を負いかねます。
            </p>
          </section>

          {/* 注意事項 */}
          <section className="mb-8">
            <h3 className="font-bold text-black mb-2">● 注意事項</h3>
            <ul className="text-gray space-y-2 list-none">
              <li>
                RFIDカードは厚みがあるため詰まりやすく、シャフラー使用は推奨しておりません。シャフラーが使えない・使えなくなる等の返金は致しかねます
              </li>
              <li>
                RFID使用時は、カメラの不調やソフトの挙動がおかしくなる場合がございます。スタッフが復旧を試みますが、復旧できない場合はRFIDオプション料金のみが返金対象となります
              </li>
              <li>
                ゴミは、お帰りの際にマンション１階のゴミ捨て場のルールに従い処分してください
              </li>
              <li>
                不測の災害に備え、非常口・誘導方法・消火設備等を予めご確認下さい
              </li>
            </ul>
          </section>

          {/* 禁止事項 */}
          <section className="mb-8">
            <h3 className="font-bold text-black mb-2">
              ● 禁止事項
              <span className="text-sm font-normal text-gray ml-2">
                違反した場合は即利用中止とし、返金は致しかねます
              </span>
            </h3>
            <ul className="text-gray space-y-2 list-none">
              <li>部屋内防犯カメラの接続解除</li>
              <li>
                店内での紙たばこの喫煙（加熱式たばこ、電子タバコの喫煙は問題ございません）
              </li>
              <li>ベランダへの立ち入り</li>
              <li>近隣の部屋からクレームが入るような行為全て</li>
              <li>大音量を発生させる恐れのあるものの持込み</li>
              <li>当店の許可なく備品・設備を移動させる、又は目的外の利用</li>
              <li>悪臭を発生させる恐れのあるものの持込み</li>
              <li>引火・発火の恐れのあるものの持込み</li>
              <li>
                マンション共有スペースでの喫煙（ベランダは喫煙以前に立ち入り禁止です）
              </li>
              <li>
                店内のものを店外へ持ち出す行為（発覚した場合は窃盗として警察署に通報します）
              </li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
