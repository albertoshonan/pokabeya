export type Room = {
  slug: string;
  name: string;
  nameJa: string;
  area: string;
  tagline: string;
  description: string;
  maxGuests: number;
  address: {
    zip?: string;
    lines: string[];
  };
  access: string;
  equipment: string[];
  pricing: {
    early: number;
    day: number;
    night: number;
  };
  packs: { hours: number; price: number }[];
  mapEmbedUrl: string;
};

export const rooms: Room[] = [
  {
    slug: "akibabeya",
    name: "Akibabeya",
    nameJa: "アキバベヤ",
    area: "秋葉原",
    tagline: "完全無人 RFID ポーカールーム — 銀座線末広町駅 徒歩2分",
    description:
      "アキバベヤは銀座線末広町駅から徒歩2分、JR秋葉原駅からも徒歩8分の好立地。RFIDテーブルはシャフラー内蔵型で広々としたスペース。テーブルトップを使えば通常のダイニングテーブルとしても利用可能。配信にも対応しています。\n\nスタッフは遠隔でPCやLINEにてサポート。ファイヤースティック・スピーカーも備え、ポーカーをしながらのエンターテイメントも充実。POKER GOの視聴も可能です。部屋内での飲食自由、加熱式タバコOK、持ち込みも自由です。",
    maxGuests: 10,
    address: {
      zip: "〒101-0021",
      lines: ["東京都千代田区外神田3-6-5", "外神田永谷タウンプラザ407"],
    },
    access: "銀座線末広町駅 徒歩2分 / JR秋葉原駅 徒歩8分",
    equipment: [
      "RFIDポーカーテーブル",
      "オートシャフラー",
      "チップ・カード各種",
      "大型TV・Fire Stick",
      "配信カメラ",
      "スピーカー",
      "電子レンジ・ケトル",
      "テーブルトップ（会議利用可）",
      "飲食持ち込みOK",
    ],
    pricing: { early: 2200, day: 2750, night: 3300 },
    packs: [
      { hours: 6, price: 13200 },
      { hours: 9, price: 18150 },
      { hours: 12, price: 22000 },
      { hours: 24, price: 38500 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4!2d139.7705!3d35.7005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea73e2a9a1f%3A0x1!2z5Y2D5Luj55Sw5Yy65aSW56We55SwMy02LTU!5e0!3m2!1sja!2sjp!4v1",
  },
  {
    slug: "jukubeya",
    name: "Jukubeya",
    nameJa: "ジュクベヤ",
    area: "新宿",
    tagline: "完全無人 RFID ポーカールーム — JR新宿駅西口 徒歩5分",
    description:
      "ジュクベヤはJR新宿駅西口から徒歩5分の好立地にある完全無人のプライベートポーカールームです。RFIDテーブル・オートシャフラー・チップ・カードなど全て完備。手ぶらでお越しいただけます。\n\nスタッフは遠隔でPCやLINEにてサポート。ファイヤースティック・スピーカーも備え、ポーカーをしながらのエンターテイメントも充実。POKER GOの視聴も可能です。部屋内での飲食自由、加熱式タバコOK、持ち込みも自由です。",
    maxGuests: 10,
    address: {
      zip: "〒160-0023",
      lines: ["東京都新宿区西新宿1-16-11", "伊藤ビル3階"],
    },
    access: "JR新宿駅 西口 徒歩5分",
    equipment: [
      "RFIDポーカーテーブル",
      "オートシャフラー",
      "チップ・カード各種",
      "大型TV・Fire Stick",
      "配信カメラ",
      "スピーカー",
      "電子レンジ・ケトル",
      "冷蔵庫",
      "飲食持ち込みOK",
    ],
    pricing: { early: 2200, day: 2750, night: 3300 },
    packs: [
      { hours: 6, price: 13200 },
      { hours: 9, price: 18150 },
      { hours: 12, price: 22000 },
      { hours: 24, price: 38500 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.6917!3d35.6896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd580b18901%3A0x1!2z5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_MS0xNi0xMQ!5e0!3m2!1sja!2sjp!4v1",
  },
  {
    slug: "shibubeya",
    name: "Shibubeya",
    nameJa: "シブベヤ",
    area: "渋谷",
    tagline: "完全無人 RFID ポーカールーム — 渋谷ヒカリエ近く",
    description:
      "シブベヤは渋谷ヒカリエからすぐの立地にある完全無人プライベートポーカールーム。RFIDテーブル・オートシャフラー・チップ・カードなど全て完備。手ぶらでお越しいただけます。\n\nスタッフは遠隔でPCやLINEにてサポート。部屋内での飲食自由、加熱式タバコOK。",
    maxGuests: 10,
    address: {
      lines: ["東京都渋谷区渋谷2丁目"],
    },
    access: "JR渋谷駅 徒歩5分 / 渋谷ヒカリエ近く",
    equipment: [
      "RFIDポーカーテーブル",
      "オートシャフラー",
      "チップ・カード各種",
      "大型TV・Fire Stick",
      "配信カメラ",
      "スピーカー",
      "電子レンジ・ケトル",
      "冷蔵庫",
      "飲食持ち込みOK",
    ],
    pricing: { early: 2200, day: 2750, night: 3300 },
    packs: [
      { hours: 6, price: 13200 },
      { hours: 9, price: 18150 },
      { hours: 12, price: 22000 },
      { hours: 24, price: 38500 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7!2d139.7030!3d35.6580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b57a5e5b5e7%3A0x1!2z5p2x5Lqs6YO95riL6LC35Yy65riL6LC3MuS4geebri!5e0!3m2!1sja!2sjp!4v1",
  },
  {
    slug: "mitabeya",
    name: "Mitabeya",
    nameJa: "ミタベヤ",
    area: "三田",
    tagline: "完全無人 RFID ポーカールーム — 慶應義塾大学東門の真横",
    description:
      "ミタベヤは慶應義塾大学東門の真横に位置する完全無人プライベートポーカールーム。日本の若いポーカープレイヤーたちに手頃な価格でポーカーをプレイしてもらいたいという想いで設立。RFIDテーブル・オートシャフラー・チップ・カードなど全て完備。手ぶらでお越しいただけます。\n\nスタッフは遠隔でPCやLINEにてサポート。ファイヤースティック・スピーカーも備え、ポーカーをしながらのエンターテイメントも充実。POKER GOの視聴も可能です。部屋内での飲食自由、加熱式タバコOK、持ち込みも自由です。",
    maxGuests: 10,
    address: {
      zip: "〒108-0073",
      lines: ["東京都港区三田2-14-4", "三田慶応レジデンス403"],
    },
    access: "都営三田線 三田駅 徒歩3分 / JR田町駅 徒歩5分 / 慶應義塾大学東門すぐ",
    equipment: [
      "RFIDポーカーテーブル",
      "オートシャフラー",
      "チップ・カード各種",
      "大型TV・Fire Stick",
      "配信カメラ",
      "スピーカー",
      "電子レンジ・ケトル",
      "冷蔵庫",
      "飲食持ち込みOK",
    ],
    pricing: { early: 2200, day: 2750, night: 3300 },
    packs: [
      { hours: 6, price: 13200 },
      { hours: 9, price: 18150 },
      { hours: 12, price: 22000 },
      { hours: 24, price: 38500 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5!2d139.7433!3d35.6486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bb3a6f6e1a1%3A0x1!2z5p2x5Lqs6YO95riv5Yy65LiJ55SwMi0xNC00!5e0!3m2!1sja!2sjp!4v1",
  },
  {
    slug: "hamabeya",
    name: "Hamabeya",
    nameJa: "ハマベヤ",
    area: "横浜",
    tagline: "完全無人 RFID ポーカールーム — 京急黄金町駅 徒歩5分",
    description:
      "ハマベヤは横浜・伊勢佐木モールエリアに位置するポカベヤ3号店。完全無人のプライベートポーカールーム。RFIDテーブル・オートシャフラー完備。サイドカメラによる配信にも対応しています。手ぶらでお越しいただけます。\n\nスタッフは遠隔でPCやLINEにてサポート。ファイヤースティック・スピーカーも備え、ポーカーをしながらのエンターテイメントも充実。POKER GOの視聴も可能です。部屋内での飲食自由、加熱式タバコOK、持ち込みも自由です。",
    maxGuests: 10,
    address: {
      lines: ["神奈川県横浜市中区若葉町", "伊勢佐木モール付近"],
    },
    access: "京急黄金町駅 徒歩5分 / JR桜木町駅 徒歩15分 / JR関内駅 徒歩13分",
    equipment: [
      "RFIDポーカーテーブル",
      "オートシャフラー",
      "チップ・カード各種",
      "大型TV・Fire Stick",
      "配信カメラ",
      "スピーカー",
      "電子レンジ・ケトル",
      "冷蔵庫",
      "飲食持ち込みOK",
    ],
    pricing: { early: 2200, day: 2750, night: 3300 },
    packs: [
      { hours: 6, price: 13200 },
      { hours: 9, price: 18150 },
      { hours: 12, price: 22000 },
      { hours: 24, price: 38500 },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.5!2d139.6300!3d35.4400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cf1a8!2z5qiq5rWc5biC5Lit5Yy66Iul6JGJ55S6!5e0!3m2!1sja!2sjp!4v1",
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
