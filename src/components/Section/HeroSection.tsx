import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 画像パスの配列
  const images = [
    "/images/converted/_1108927.jpg",
    "/images/converted/_1108939.jpg",
    "/images/converted/_1108960.jpg",
    "/images/converted/_1108961.jpg",
  ];

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
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

  // 画像の自動切り替え
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* 背景画像スライドショー */}

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

      {/* ナビゲーションドット */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>
    </section>
  );
}
