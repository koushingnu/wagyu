import MenuLabelVertical from "./MenuLabelVertical";
import Image from "next/image";
import { zenAntique, zenKurenaido } from "@/fonts/fonts";

type MenuCardProps = {
  title: string;
  labelMain: string;
  labelSub?: string;
  desc: string;
  gridIndex?: number;
};

export default function MenuCard({
  title,
  labelMain,
  labelSub,
  desc,
  gridIndex,
}: MenuCardProps) {
  // 区切り線
  const showBottomBorder = gridIndex !== undefined && gridIndex < 6;
  const showRightBorder = gridIndex !== undefined && gridIndex % 3 !== 2;

  return (
    <div
      className={`
        relative flex flex-col items-center justify-between 
        bg-[#9D2328] p-4 sm:p-6 md:p-8
        ${showBottomBorder ? "border-b-[3px] border-[#FFF5EC]" : ""}
        ${showRightBorder ? "border-r-[3px] border-[#FFF5EC]" : ""}
        rounded-none
        aspect-square
      `}
    >
      {/* タイトル */}
      <div className="w-full text-center mb-4 sm:mb-6">
        <span
          className={`block text-[#FFF5EC] text-lg sm:text-xl md:text-2xl tracking-[0.25em] leading-tight ${zenAntique.className}`}
        >
          {title}
        </span>
      </div>
      {/* 画像＋帯ラベル */}
      <div className="relative flex justify-center w-full mb-4 sm:mb-6">
        <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] flex items-center justify-center mx-auto relative">
          <Image
            src="/images/food_1.png"
            alt={title}
            width={180}
            height={180}
            className="object-contain w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px]"
            priority
          />
        </div>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 z-20">
          <MenuLabelVertical main={labelMain} sub={labelSub} />
        </div>
      </div>
      {/* 説明文 */}
      <div className="w-full mt-auto">
        <p
          className={`text-[#FFF5EC] text-sm sm:text-base tracking-[0.15em] leading-relaxed px-2 sm:px-4 ${zenKurenaido.className}`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
