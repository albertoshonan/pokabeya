import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-light py-7 px-10">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[0.68rem] text-mid">&copy; Pokabeya. All rights reserved.</p>
        <Link href="/policy" className="text-[0.68rem] text-mid hover:text-black transition-colors">
          利用規約
        </Link>
      </div>
    </footer>
  );
}
