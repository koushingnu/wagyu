import React, { useState } from "react";
import Link from "next/link";

export default function HeaderHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "#menu", label: "メニュー" },
    { href: "#store", label: "店舗情報" },
    { href: "#contact", label: "お問い合わせ" },
  ];

  return (
    <header className="fixed top-0 right-0 z-50">
      {/* ハンバーガーボタン */}
      <button
        onClick={toggleMenu}
        className="z-50 p-6 focus:outline-none"
        aria-label="メニュー"
      >
        <div className="relative w-8 h-6">
          <span
            className={`absolute w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "top-3 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "top-3 opacity-100"
            }`}
          />
          <span
            className={`absolute w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "top-3 -rotate-45" : "top-6"
            }`}
          />
        </div>
      </button>

      {/* オーバーレイメニュー */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* メニューコンテンツ */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-lg font-medium text-gray-800 hover:text-[#B32117] transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
