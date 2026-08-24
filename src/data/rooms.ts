export type Room = {
  slug: string;
  name: string;
  nameJa: string;
  area: string;
  tagline: string;
  description: string;
  maxGuests: number;
  /** 収容人数に幅がある部屋の上限。指定時は「最大{maxGuests}名〜{maxGuestsUpper}名」と表示する */
  maxGuestsUpper?: number;
  hoursLabel?: string;
  tables?: number;
  images: string[];
  address: {
    zip?: string;
    lines: string[];
  };
  access: string;
  accessLines: string[];
  equipment: string[];
  /** 1時間あたりの基本料金。平日と金土日祝日の2区分 */
  pricing: {
    weekday: number;
    weekend: number;
  };
  packs: { hours: number; weekday: number; weekend: number }[];
  /** この部屋では提供しないオプション名。OptionPlan.name と一致させる */
  excludedOptions?: string[];
  mapEmbedUrl: string;
};

/** 全部屋共通のオプション料金 */
export type OptionPlan = {
  name: string;
  desc?: string;
  price?: number;
  priceNote?: string;
  tiers?: { label: string; price: number }[];
  /** 2卓以上ある部屋でのみ提供するオプション */
  multiTableOnly?: boolean;
};

export const options: OptionPlan[] = [
  {
    name: "ゴミ処理お任せ",
    desc: "退室時のゴミ処理・ゴミ捨てをお任せできるオプション",
    price: 2900,
  },
  {
    name: "お片付けお任せ",
    desc: "退室時の片付けをお任せできるオプション",
    price: 4300,
  },
  {
    name: "全部お任せ",
    desc: "ゴミ処理・お片付けを全てお任せできるオプション。退室時はそのまま帰宅できます",
    price: 4800,
  },
  {
    name: "テーブル追加",
    desc: "2卓目の追加",
    price: 4000,
    multiTableOnly: true,
  },
  {
    name: "RFIDオートモード",
    tiers: [
      { label: "5時間以下", price: 5500 },
      { label: "6時間パック", price: 9900 },
      { label: "9時間パック", price: 13200 },
      { label: "12時間パック", price: 15800 },
      { label: "24時間パック", price: 29400 },
    ],
  },
  {
    name: "遠隔打込みモード",
    tiers: [
      { label: "5時間以下", price: 20000 },
      { label: "6時間以上", price: 28000 },
      { label: "9時間以上", price: 40000 },
      { label: "12時間以上", price: 69000 },
      { label: "24時間以上", price: 96000 },
    ],
  },
];

export const rooms: Room[] = [
  {
    slug: "jukubeya",
    name: "Jukubeya",
    nameJa: "ジュクベヤ",
    area: "新宿",
    images: ["/images/jukubeya.jpg"],
    tagline: "完全無人 RFID ポーカールーム — JR新宿駅西口 徒歩5分",
    description:
      "ジュクベヤは、JR新宿駅西口から徒歩5分の好立地にある、完全無人のプライベートポーカースペースです。RFIDテーブル・オートシャフラー・オリジナルチップやカードなど全てを完備。集めてくるのは仲間だけ。手ぶらで来てポーカーができます。\n\nスタッフは遠隔でLINEにてサポート。スタッフに会うこともございません。そしてスマートテレビにてPOKER GOも視聴可能。ポーカーをしながらのエンターテイメントも充実。部屋内では飲食も自由、持ち込みも自由。加熱式タバコであれば喫煙OKです！\n\nRFIDテーブルを使う際は、スタッフは全て遠隔でコントロールできます。\n皆さまのプレイをYouTubeに配信。その動画をリアルタイムやディレイ配信で楽しむ。\n自分たちのプレイ内容を記録しておくなど、使い方は無限大です！",
    maxGuests: 15,
    maxGuestsUpper: 20,
    tables: 2,
    address: {
      zip: "〒160-0023",
      lines: ["東京都新宿区西新宿1-16-11", "伊藤ビル3階"],
    },
    access: "JR新宿駅 西口 徒歩5分",
    accessLines: ["新宿駅西口・南口から徒歩3分", "大江戸線新宿駅3番出口から徒歩3分"],
    equipment: [
      "RFID搭載ポーカーテーブル",
      "オートシャフラー",
      "オリジナルチップ・カード各種",
      "大型スマートテレビ・Fire Stick",
      "配信用ウェブカメラ",
      "スピーカー・充電器完備",
      "電子レンジ・ケトル",
      "冷蔵庫・空気清浄機完備",
      "飲食持ち込みOK",
    ],
    pricing: { weekday: 3680, weekend: 4375 },
    packs: [
      { hours: 6, weekday: 20976, weekend: 24937 },
      { hours: 9, weekday: 29808, weekend: 35437 },
      { hours: 12, weekday: 39744, weekend: 47250 },
      { hours: 24, weekday: 75072, weekend: 82950 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.6917!3d35.6896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd580b18901%3A0x1!2z5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_MS0xNi0xMQ!5e0!3m2!1sja!2sjp!4v1",
  },
  {
    slug: "shibubeya",
    name: "Shibubeya",
    nameJa: "シブヤベヤ",
    area: "渋谷",
    images: ["/images/shibubeya.jpg", "/images/S__34218076_0.jpg", "/images/S__34218077_0.jpg"],
    tagline: "完全無人 RFID ポーカールーム — 渋谷ヒカリエ近く",
    description:
      "シブヤベヤは、宮益坂上やヒカリエからすぐの好立地にある、完全無人のプライベートポーカースペースです。RFIDテーブル・オートシャフラー・オリジナルチップやカードなど全てを完備。集めてくるのは仲間だけ。手ぶらで来てポーカーができます。\nシブヤベヤはインテリアにもこだわっており、撮影にも最適。バリや南国の雰囲気もあり、ゆったりとした環境でポーカーができます。\n\nスタッフは遠隔でLINEにてサポート。スタッフに会うこともございません。そしてスマートテレビにてPOKER GOも視聴可能。ポーカーをしながらのエンターテイメントも充実。部屋内では飲食も自由、持ち込みも自由。加熱式タバコであれば喫煙OKです！\n\nRFIDテーブルを使う際は、スタッフは全て遠隔でコントロールできます。\n皆さまのプレイをYouTubeに配信。その動画をリアルタイムやディレイ配信で楽しむ。\n自分たちのプレイ内容を記録しておくなど、使い方は無限大です！",
    maxGuests: 15,
    maxGuestsUpper: 20,
    tables: 2,
    address: {
      lines: ["東京都渋谷区渋谷2丁目"],
    },
    access: "JR渋谷駅 徒歩5分 / 渋谷ヒカリエ近く",
    accessLines: ["JR渋谷駅から徒歩5分", "宮益坂上交差点から徒歩1分"],
    equipment: [
      "RFID搭載ポーカーテーブル",
      "オートシャフラー",
      "オリジナルチップ・カード各種",
      "大型スマートテレビ・Fire Stick",
      "配信用ウェブカメラ",
      "スピーカー・充電器完備",
      "電子レンジ・ケトル",
      "冷蔵庫・空気清浄機完備",
      "飲食持ち込みOK",
    ],
    pricing: { weekday: 3680, weekend: 4375 },
    packs: [
      { hours: 6, weekday: 20976, weekend: 24937 },
      { hours: 9, weekday: 29808, weekend: 35437 },
      { hours: 12, weekday: 39744, weekend: 47250 },
      { hours: 24, weekday: 75072, weekend: 82950 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d139.7030!3d35.6580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b57a5e5b5e7%3A0x1!2z5p2x5Lqs6YO95riL6LC35Yy65riL6LC3MuS4geebri!5e0!3m2!1sja!2sjp!4v1",
  },
  {
    slug: "mitabeya",
    name: "Mitabeya",
    nameJa: "ミタベヤ",
    area: "三田",
    images: ["/images/S__34218071_0.jpg", "/images/S__34218075_0.jpg"],
    tagline: "完全無人 RFID ポーカールーム — 慶應義塾大学東門の真横",
    description:
      "ミタベヤは慶應義塾大学東門の真横に位置する、完全無人プライベートポーカースペース。日本の若いポーカープレイヤーの皆さまに、手頃な価格でポーカーをプレイしてもらいたいという想いで設立。RFIDテーブル・オートシャフラー・オリジナルチップ・カードなど全て完備。\n集めてくるのは仲間だけ。すぐにポーカーが始められます。\n\nスタッフは遠隔でLINEにてサポート。スタッフに会うこともございません。そしてスマートテレビにてPOKER GOも視聴可能。ポーカーをしながらのエンターテイメントも充実。部屋内では飲食も自由、持ち込みも自由。加熱式タバコであれば喫煙OKです！\n\nRFIDテーブルを使う際は、スタッフは全て遠隔でコントロールできます。\n皆さまのプレイをYouTubeに配信。その動画をリアルタイムやディレイ配信で楽しむ。\n自分たちのプレイ内容を記録しておくなど、使い方は無限大です！",
    maxGuests: 10,
    hoursLabel: "24時までご利用可",
    address: {
      zip: "〒108-0073",
      lines: ["東京都港区三田2-14-4", "三田慶応レジデンス403"],
    },
    access: "都営三田線 三田駅 徒歩3分 / JR田町駅 徒歩5分 / 慶應義塾大学東門すぐ",
    accessLines: ["地下鉄三田駅から徒歩5分", "田町駅から徒歩8分"],
    equipment: [
      "RFID搭載ポーカーテーブル",
      "オートシャフラー",
      "オリジナルチップ・カード各種",
      "大型スマートテレビ・Fire Stick",
      "配信用ウェブカメラ",
      "スピーカー・充電器完備",
      "電子レンジ・ケトル",
      "冷蔵庫・空気清浄機完備",
      "飲食持ち込みOK",
    ],
    pricing: { weekday: 3480, weekend: 3875 },
    packs: [
      { hours: 6, weekday: 19836, weekend: 22087 },
      { hours: 9, weekday: 28088, weekend: 31387 },
      { hours: 12, weekday: 37584, weekend: 41850 },
      { hours: 24, weekday: 70992, weekend: 79050 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d139.7433!3d35.6486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bb3a6f6e1a1%3A0x1!2z5p2x5Lqs6YO95riv5Yy65LiJ55SwMi0xNC00!5e0!3m2!1sja!2sjp!4v1",
  },
  {
    slug: "akibabeya",
    name: "Akibabeya",
    nameJa: "アキバベヤ",
    area: "秋葉原",
    images: [
      "/images/akibabeya-top.jpg",
      "/images/akibabeya-02.jpg",
      "/images/akibabeya-04.jpg",
      "/images/akibabeya-10.jpg",
      "/images/akibabeya-03.jpg",
    ],
    tagline: "完全無人 RFID ポーカールーム — 銀座線末広町駅 徒歩2分",
    description:
      "アキバベヤはJR秋葉原駅からも徒歩8分、銀座線末広町駅から徒歩2分の好立地にあります。\nRFIDテーブル・オートシャフラー・オリジナルチップやカードなど全てを完備。集めてくるのは仲間だけ。\nポーカーが盛んな秋葉原にて、完全無人プライベート空間でのポーカーをお楽しみください！\n\nスタッフは遠隔でLINEにてサポート。スタッフに会うこともございません。そしてスマートテレビにてPOKER GOも視聴可能。ポーカーをしながらのエンターテイメントも充実。部屋内では飲食も自由、持ち込みも自由。加熱式タバコであれば喫煙OKです！\n\nRFIDテーブルを使う際は、スタッフは全て遠隔でコントロールできます。\n皆さまのプレイをYouTubeに配信。その動画をリアルタイムやディレイ配信で楽しむ。\n自分たちのプレイ内容を記録しておくなど、使い方は無限大です！",
    maxGuests: 10,
    address: {
      zip: "〒101-0021",
      lines: ["東京都千代田区外神田3-6-5", "外神田永谷タウンプラザ407"],
    },
    access: "銀座線末広町駅 徒歩2分 / JR秋葉原駅 徒歩8分",
    accessLines: ["銀座線末広町駅から徒歩2分", "JR秋葉原駅から徒歩8分"],
    equipment: [
      "RFID搭載ポーカーテーブル",
      "オートシャフラー",
      "オリジナルチップ・カード各種",
      "大型スマートテレビ・Fire Stick",
      "配信用ウェブカメラ",
      "スピーカー・充電器完備",
      "電子レンジ・ケトル",
      "テーブルトップ（会議利用可）",
      "飲食持ち込みOK",
    ],
    pricing: { weekday: 3480, weekend: 3875 },
    packs: [
      { hours: 6, weekday: 19836, weekend: 22087 },
      { hours: 9, weekday: 28088, weekend: 31387 },
      { hours: 12, weekday: 37584, weekend: 41850 },
      { hours: 24, weekday: 70992, weekend: 79050 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4!2d139.7705!3d35.7005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea73e2a9a1f%3A0x1!2z5Y2D5Luj55Sw5Yy65aSW56We55SwMy02LTU!5e0!3m2!1sja!2sjp!4v1",
  },
  {
    slug: "bukurobeya",
    name: "Bukurobeya",
    nameJa: "ブクロベヤ",
    area: "池袋",
    images: [],
    tagline: "完全無人 RFID ポーカールーム — 池袋駅すぐ",
    description:
      "ブクロベヤは池袋駅西口（北）から徒歩5分の好立地にオープン！\nRFIDテーブル・オートシャフラー・オリジナルチップやカードなど全てを完備。集めてくるのは仲間だけ。すぐにポーカーができます。\n部屋は都会のジャングルをイメージした作り。ラシャにもこだわり、かっこいい空間でいつでもポーカーを！\n\nスタッフは遠隔でLINEにてサポート。スタッフに会うこともございません。そしてスマートテレビにてPOKER GOも視聴可能。ポーカーをしながらのエンターテイメントも充実。部屋内では飲食も自由、持ち込みも自由。加熱式タバコであれば喫煙OKです！\n\nRFIDテーブルを使う際は、スタッフは全て遠隔でコントロールできます。\n皆さまのプレイをYouTubeに配信。その動画をリアルタイムやディレイ配信で楽しむ。\n自分たちのプレイ内容を記録しておくなど、使い方は無限大です！",
    maxGuests: 15,
    maxGuestsUpper: 20,
    tables: 2,
    address: {
      zip: "〒170-0014",
      lines: ["東京都豊島区池袋1-2-6", "ベルメゾン池袋 10階 1003号室"],
    },
    access: "JR・東京メトロ・西武・東武 池袋駅",
    accessLines: ["JR池袋駅 西口", "東京メトロ・西武池袋線・東武東上線 池袋駅"],
    equipment: [
      "RFID搭載ポーカーテーブル",
      "オートシャフラー",
      "オリジナルチップ・カード各種",
      "大型スマートテレビ・Fire Stick",
      "配信用ウェブカメラ",
      "充電器完備",
      "電子レンジ・ケトル",
      "冷蔵庫・空気清浄機完備",
      "飲食持ち込みOK",
    ],
    pricing: { weekday: 3680, weekend: 4375 },
    packs: [
      { hours: 6, weekday: 20976, weekend: 24937 },
      { hours: 9, weekday: 29808, weekend: 35437 },
      { hours: 12, weekday: 39744, weekend: 47250 },
      { hours: 24, weekday: 75072, weekend: 82950 },
    ],
    excludedOptions: ["ゴミ処理お任せ", "お片付けお任せ", "全部お任せ"],
    mapEmbedUrl:
      "https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B1%8A%E5%B3%B6%E5%8C%BA%E6%B1%A0%E8%A2%8B1-2-6&hl=ja&z=17&output=embed",
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}

export function getOtherRooms(slug: string): Room[] {
  return rooms.filter((r) => r.slug !== slug);
}

export function formatPrice(price: number): string {
  return `¥${price.toLocaleString()}`;
}
