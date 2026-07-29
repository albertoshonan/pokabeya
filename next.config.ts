import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 旧WordPressサイトのURLを新サイトの対応ページへ引き継ぐ
      { source: "/akiba_room", destination: "/rooms/akibabeya", permanent: true },
      { source: "/juku-room", destination: "/rooms/jukubeya", permanent: true },
      { source: "/mita_room", destination: "/rooms/mitabeya", permanent: true },
      { source: "/shibuya-room", destination: "/rooms/shibubeya", permanent: true },
      { source: "/user_policy", destination: "/policy", permanent: true },
      // 新サイトに問い合わせページはないためトップへ
      { source: "/contact", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
