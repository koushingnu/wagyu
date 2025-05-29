interface AnimatedLogoColumnProps {
  reverse?: boolean;
  delay?: number;
}

export default function AnimatedLogoColumn({
  reverse,
  delay,
}: AnimatedLogoColumnProps) {
  const logos = Array.from({ length: 6 });

  return (
    <div
      className={`absolute flex flex-col items-center ${
        reverse ? "animate-flowDiagonal reverse" : "animate-flowDiagonal"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {[...logos, ...logos].map((_, i) => (
        <div
          key={i}
          className={`w-16 h-16 mb-6 flex items-center justify-center ${
            i % 2 === 0 ? "rotate-45" : "-rotate-45"
          }`}
        >
          <span className="text-xl font-bold">LOGO</span>
        </div>
      ))}
    </div>
  );
}
