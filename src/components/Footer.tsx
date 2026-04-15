import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-light py-7 px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <Link href="/">
            <Image
              src="/images/logo-dark.png"
              alt="Pokabeya"
              width={100}
              height={33}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-[0.68rem] text-mid">&copy; Pokabeya. All rights reserved.</p>
        </div>
        <Link href="/policy" className="text-[0.68rem] text-mid hover:text-black transition-colors">
          利用規約
        </Link>
      </div>
    </footer>
  );
}
