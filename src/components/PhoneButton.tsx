"use client";

import { useState, useRef, useEffect } from "react";

export default function PhoneButton({ size = "default" }: { size?: "default" | "small" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={
          size === "small"
            ? "bg-black text-white text-[0.62rem] sm:text-[0.72rem] px-3 sm:px-4 py-2 rounded-full tracking-wider hover:opacity-80 transition-opacity flex items-center gap-1"
            : "border border-light text-dark text-sm px-6 py-3.5 rounded-full hover:border-black transition-colors flex items-center gap-2"
        }
      >
        <svg className={size === "small" ? "w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" : "w-4 h-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>電話予約</span>
        <span className={size === "small" ? "text-[0.55rem] text-white/60 hidden sm:inline" : "text-xs text-mid"}>(PayPay Only)</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-light rounded-xl shadow-lg overflow-hidden z-50 min-w-[180px]">
          <a
            href="https://page.line.me/515smhfk?oat_content=url&openQrModal=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-3 text-sm text-dark hover:bg-off transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            LINEで電話
          </a>
          <a
            href="tel:07090248529"
            className="flex items-center gap-2.5 px-4 py-3 text-sm text-dark hover:bg-off transition-colors border-t border-light"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            電話番号で発信
          </a>
        </div>
      )}
    </div>
  );
}
