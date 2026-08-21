import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pokabeya - 完全無人 RFID ポーカールーム",
    short_name: "Pokabeya ポカベヤ",
    description:
      "24時間営業の完全無人プライベートポーカールーム。RFID テーブル・オートシャフラー完備。新宿・秋葉原・渋谷・三田・池袋で展開中。",
    lang: "ja",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
