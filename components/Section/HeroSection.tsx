import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center bg-gray-50">
          和牛ストールへようこそ
        </h1>
        <p className="text-xl md:text-3xl mb-6 text-center bg-yellow-50">
          本格和牛をもっと身近に。
          <br />
          お友達やご家族と、気軽にどうぞ。
        </p>
        <div className="absolute bottom-10 flex flex-col items-center animate-bounce z-20">
          <a
            href="#menu"
            className="font-semibold hover:text-[#000000] transition"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto">
              <g>
                <path
                  d="M10 15 L20 28 L30 15"
                  stroke="#000000"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <span className="text-xs text-[#000000] mt-1 font-semibold">
              SCROLL
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
