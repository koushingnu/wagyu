// src/components/MenuCard/MenuLabelVertical.tsx
import { zenAntique, zenKurenaido } from "@/fonts/fonts";

export default function MenuLabelVertical({
  main,
  sub,
}: {
  main: string;
  sub?: string;
}) {
  return (
    <div
      className={`
        relative flex flex-row items-center justify-center 
        bg-[#FFF5EC] border-[3px] border-[#9D2328] 
        py-2 sm:py-2 gap-x-1 sm:gap-x-1
        ${sub ? "w-[48px] sm:w-[54px] md:w-[60px]" : "w-[32px] sm:w-[36px] md:w-[40px]"}
        min-h-[160px] sm:min-h-[180px] md:min-h-[200px]
        rounded-[2px]
      `}
    >
      {sub && (
        <span
          className={`text-xs sm:text-xs text-[#9D2328] flex items-center justify-center ${zenKurenaido.className}`}
          style={{
            writingMode: "vertical-rl",
            textAlign: "center",
            letterSpacing: "0.1em",
          }}
        >
          {sub}
        </span>
      )}
      <span
        className={`text-[#9D2328] text-base sm:text-lg md:text-xl tracking-[0.2em] flex items-center justify-center ${zenAntique.className}`}
        style={{
          writingMode: "vertical-rl",
          textAlign: "center",
        }}
      >
        {main}
      </span>
    </div>
  );
}
