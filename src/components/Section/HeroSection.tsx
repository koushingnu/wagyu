import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      // iPhone 13 Pro Maxの幅（428px）よりも少し大きめに設定
      setIsMobile(width <= 1800);
      console.log("Window width:", width, "isMobile:", width <= 1800);
    };

    // 初期チェック
    checkMobile();

    // リサイズ時にチェック
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // 動画のパスを定数として定義（publicディレクトリからの相対パス）
  const videoSrc = isMobile
    ? "/video/Japan-in-halal-mobile.mp4"
    : "/video/Japan in halal.mp4";

  // 動画切り替え時のログ
  useEffect(() => {
    console.log("Video source changed:", videoSrc);
    console.log("isMobile state:", isMobile);
  }, [videoSrc, isMobile]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* 背景動画 */}
      <div className="absolute inset-0">
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          お使いのブラウザは動画の再生に対応していません。
        </video>
      </div>

      {/* デバッグ表示 */}
      <div className="fixed top-0 left-0 bg-black/50 text-white p-2 z-50">
        <div>Current video: {isMobile ? "Mobile" : "Desktop"}</div>
        <div>Width: {windowWidth}px</div>
        <div>Video: {videoSrc}</div>
      </div>

      {/* コンテンツコンテナ */}
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center">
        {/* 必要に応じてタイトルやその他のコンテンツを追加 */}
      </div>
    </section>
  );
}
