import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 1000);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // 動画のパスを定数として定義（publicディレクトリからの相対パス）
  const videoSrc = isMobile
    ? "/video/smartPhone.mp4"
    : "/video/Japan in halal.mp4";

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* 動画オーバーレイ */}
      <div className="absolute inset-0">
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          お使いのブラウザは動画の再生に対応していません。
        </video>
      </div>
    </section>
  );
}
