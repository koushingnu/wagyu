import AnimatedLogoColumn from "./AnimatedLogoColumn";

export default function AnimatedLogoArea() {
  const NUM_COLS = 5;
  const OFFSET = 100; // 斜めの初期位置調整

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {Array.from({ length: NUM_COLS }).map((_, idx) => (
        <div
          key={idx}
          className="absolute top-0"
          style={{
            left: `${idx * OFFSET}px`,
            top: `-${idx * OFFSET}px`,
          }}
        >
          <AnimatedLogoColumn reverse={idx % 2 === 1} delay={-5 * idx} />
        </div>
      ))}
    </div>
  );
}
