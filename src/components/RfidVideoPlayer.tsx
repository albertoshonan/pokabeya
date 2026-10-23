"use client";

import { useEffect, useRef, useState } from "react";
import type { RfidVideo } from "@/data/rfid";

/**
 * サンプル動画のプレイヤー。ミュートで自動再生・ループする。
 * 4本を一度に読み込むと重いので、画面に入るまで src を付けず、
 * 画面外に出たら一時停止して通信と再生を止める。
 */
export default function RfidVideoPlayer({ video }: { video: RfidVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          // src が付く前の初回は空振りするが、autoPlay 側が拾う
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      // 少し手前から読み込み始めて、スクロール到達時には再生できている状態にする
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (started) ref.current?.play().catch(() => {});
  }, [started]);

  return (
    <video
      ref={ref}
      className="w-full h-full object-contain bg-black"
      src={started ? video.src : undefined}
      poster={video.poster}
      preload="none"
      autoPlay
      loop
      muted
      playsInline
      controls
    />
  );
}
