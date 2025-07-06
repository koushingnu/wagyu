import MenuLabelVertical from "./MenuLabelVertical";
import Image from "next/image";

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
        relative flex flex-col items-center justify-between bg-[#B32117] py-12
        ${showBottomBorder ? "border-b-2 border-white" : ""}
        ${showRightBorder ? "border-r-2 border-white" : ""}
        rounded-none
        aspect-square
      `}
    >
      {/* タイトル */}
      <div className="w-full text-center mb-4">
        <span className="block text-white text-xl font-bold leading-tight tracking-wider">
          {title}
        </span>
      </div>
      {/* 画像＋帯ラベル */}
      <div className="relative flex justify-center w-full mb-4">
        <div className="w-full h-[250px] flex items-center justify-center mx-auto relative">
          <Image
            src="/images/menu1.png"
            alt={title}
            width={200}
            height={200}
            className="object-contain shadow-xl rounded-lg"
            priority
          />
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20">
          <MenuLabelVertical main={labelMain} sub={labelSub} />
        </div>
      </div>
      {/* 説明文 */}
      <div className="w-full mt-auto">
        <p className="text-white text-base text-center leading-relaxed px-4">
          {desc}
        </p>
      </div>
    </div>
  );
}
