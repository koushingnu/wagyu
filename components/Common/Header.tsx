// src/components/Common/Header.tsx
import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center gap-2 group">
          <UtensilsCrossed className="w-7 h-7 text-[#D33C19] group-hover:rotate-12 transition" />
          <span className="font-extrabold text-xl tracking-wider text-[#D33C19] drop-shadow-sm">
            和牛ストール
          </span>
        </Link>
        <nav className="flex gap-7">
          <a
            href="#menu"
            className="font-semibold text-gray-700 hover:text-[#D33C19] transition"
          >
            メニュー
          </a>
          <a
            href="#store"
            className="font-semibold text-gray-700 hover:text-[#D33C19] transition"
          >
            店舗情報
          </a>
          <a
            href="#contact"
            className="font-semibold text-gray-700 hover:text-[#D33C19] transition"
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}
