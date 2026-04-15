"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"fade-in" | "hold" | "slide-out" | "done">("fade-in");

  useEffect(() => {
    // fade-in: 0ms → hold: 600ms → slide-out: 1400ms → done: 2200ms
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("slide-out"), 1400);
    const t3 = setTimeout(() => setPhase("done"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "slide-out" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Image
        src="/images/logo-white.png"
        alt="Pokabeya"
        width={200}
        height={200}
        className={`w-40 h-auto transition-opacity duration-500 ease-out ${
          phase === "fade-in" ? "opacity-0" : "opacity-100"
        }`}
        priority
      />
    </div>
  );
}
