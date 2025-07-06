"use client";

// src/components/Common/Header.tsx
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const norenPanels = [
    {
      href: "#hero",
      label: "和牛\nストール",
      isLogo: true,
    },
    { href: "#menu", label: "メニュー" },
    { href: "#store", label: "店舗" },
    { href: "#store-details", label: "詳細" },
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-50 transition-all overflow-hidden
      group/header
      ${isScrolled ? "hover:h-[166px] h-6" : "h-[166px]"}
    `}
    >
      {/* 暖簾掛けの木製バー */}
      <div className="w-full h-6 relative">
        {/* 木材の基本色とグラデーション */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                #8B5E3C 0%,
                #D4B895 20%,
                #D4B895 80%,
                #8B5E3C 100%
              )
            `,
          }}
        />

        {/* 木目の細かい表現 */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 20px,
                rgba(139, 94, 60, 0.3) 20px,
                rgba(139, 94, 60, 0.3) 21px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 100px,
                rgba(139, 94, 60, 0.4) 100px,
                rgba(139, 94, 60, 0.4) 102px
              )
            `,
          }}
        />

        {/* 上下の影の表現 */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#3D2817]" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3D2817]" />
      </div>

      {/* 4枚の暖簾パネル */}
      <div
        className={`
        flex justify-between gap-1 px-1
        transition-all duration-300
        ${isScrolled ? "opacity-0 group-hover/header:opacity-100" : "opacity-100"}
      `}
      >
        {norenPanels.map((panel, index) => (
          <Link
            key={index}
            href={panel.href}
            className={`
              flex-1 group relative
              transition-all duration-1000 ease-out
              ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div
              className="h-[160px] w-full bg-[#1B4965] relative flex flex-col items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `
                  linear-gradient(0deg, rgba(0,0,0,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "8px 8px",
              }}
            >
              {/* 布の質感と光の透過効果 */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 30%, rgba(255,255,255,0.08))",
                }}
              />

              {/* 布目の細かい表現 */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      45deg,
                      #000,
                      #000 1px,
                      transparent 1px,
                      transparent 8px
                    )
                  `,
                }}
              />

              {/* 文字 */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
                <span
                  className={`
                  text-white relative text-center whitespace-pre-line font-bold
                  [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]
                  ${panel.isLogo ? "text-4xl leading-[1.2]" : "text-3xl"}
                  font-['YuMincho','Yu_Mincho','游明朝体','游明朝','ヒラギノ明朝_Pro_W3','HiraMinProN-W3']
                  tracking-[0.1em]
                `}
                >
                  {panel.label}
                  {/* ホバーエフェクトの装飾 */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 scale-95 group-hover:scale-100" />
                </span>
              </div>

              {/* 揺れのアニメーション */}
              <div
                className="absolute inset-0 animate-[noren-sway_4s_ease-in-out_infinite]"
                style={{
                  animationDelay: `${index * -0.5}s`,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: index % 2 === 0 ? "left" : "right",
                }}
              />

              {/* 布の端の影と質感 */}
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-r from-black/20 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-l from-black/20 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-b from-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </Link>
        ))}
      </div>

      {/* カスタムアニメーションのスタイル */}
      <style jsx>{`
        @keyframes noren-sway {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(${Math.random() * 10 + 5}px);
          }
        }
      `}</style>
    </header>
  );
}
