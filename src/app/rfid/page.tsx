import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RfidSection from "@/components/RfidSection";

export const metadata: Metadata = {
  title: "RFID利用について | Pokabeya",
  description:
    "ポカベヤのRFIDテーブル利用プラン。オートモード・遠隔打ち込みモード・3カメ利用オプションの料金と内容をご案内します。",
};

export default function RfidPage() {
  return (
    <>
      <Nav showBack />

      <div className="pt-[52px]">
        <RfidSection />
      </div>

      <Footer />
    </>
  );
}
