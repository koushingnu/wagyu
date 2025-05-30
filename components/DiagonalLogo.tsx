// components/DiagonalLogoStream.tsx
import Image from "next/image";

export default function DiagonalLogoStream() {
  const LOGOS_PER_COLUMN = 20; // 各列あたりのロゴ数
  const COLUMN_COUNT = 20; // 列の数
  const DURATION = 20; // アニメ１周の秒数
  const delayStep = DURATION / LOGOS_PER_COLUMN;
  const COLUMN_OFFSET = 300; // 列ごとの横オフセット (px)

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {Array.from({ length: COLUMN_COUNT }).map((_, col) => {
        const isReverse = col % 2 === 1;
        // 通常：243deg、逆向き：243deg − 180deg = 63deg
        const rotateDeg = isReverse ? "rotate-[63deg]" : "rotate-[243deg]";

        return (
          <div
            key={col}
            className="absolute top-0"
            style={{ left: `${col * COLUMN_OFFSET}px` }}
          >
            {Array.from({ length: LOGOS_PER_COLUMN }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 left-0 w-48 h-48"
                style={{
                  animationName: "slideDiagonalSmooth",
                  animationDuration: `${DURATION}s`,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDelay: `${-delayStep * i}s`,
                  animationDirection: isReverse ? "reverse" : "normal",
                }}
              >
                <div
                  className={`relative w-full h-full origin-center ${rotateDeg}`}
                >
                  <Image
                    src="/test.png"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
