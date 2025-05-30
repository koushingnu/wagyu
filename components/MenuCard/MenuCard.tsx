import MenuLabelVertical from "./MenuLabelVertical";

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
        relative flex flex-col items-center justify-between bg-[#B32117] py-20
        ${showBottomBorder ? "border-b-2 border-white" : ""}
        ${showRightBorder ? "border-r-2 border-white" : ""}
        rounded-none
        min-h-[780px]         // ← 高さを1.5倍に！
      `}
    >
      {/* タイトル */}
      <div className="w-full text-center mb-6">
        <span className="block text-white text-xl font-bold leading-tight tracking-wider">
          {title}
        </span>
      </div>
      {/* 画像＋帯ラベル */}
      <div
        className="relative flex justify-center w-full mb-8"
        style={{ minHeight: 170 }}
      >
        <div className="w-full h-[500px] rounded bg-gray-100 flex items-center justify-center mx-auto">
          <span className="text-gray-400 text-lg font-bold">画像</span>
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20">
          <MenuLabelVertical main={labelMain} sub={labelSub} />
        </div>
      </div>
      {/* 説明文 */}
      <div className="w-full mt-auto mb-4">
        <p className="text-white text-base text-center leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
