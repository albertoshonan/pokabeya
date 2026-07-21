import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-light py-7 px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <a
            href="https://www.instagram.com/pokabeya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pokabeya Instagram"
          >
            <Image
              src="/images/logo-dark.png"
              alt="Pokabeya"
              width={100}
              height={33}
              className="h-8 w-auto"
            />
          </a>
          <p className="text-[0.68rem] text-mid">&copy; Pokabeya. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/policy" className="text-[0.68rem] text-mid hover:text-black transition-colors">
            利用規約
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/pokabeya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pokabeya Instagram"
              className="text-mid hover:text-black transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://x.com/pokabeya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pokabeya X"
              className="text-mid hover:text-black transition-colors"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
