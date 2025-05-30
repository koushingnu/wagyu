// src/components/MenuLabelVertical.tsx
export default function MenuLabelVertical({
  main,
  sub,
}: {
  main: string;
  sub?: string;
}) {
  return (
    <div
      className="relative flex flex-col items-center bg-white border-4 border-[#B32117] py-2"
      style={{
        width: "120px", // ←細長に指定
        minHeight: "260px", // ←縦長感を強調
        borderRadius: "0.5rem",
        boxShadow: "inset 0 0 0 4px #fff",
      }}
    >
      {/* 四隅の角パーツ */}
      <div className="absolute left-0 top-0 w-4 h-4 border-t-4 border-l-4 border-[#B32117]"></div>
      <div className="absolute right-0 top-0 w-4 h-4 border-t-4 border-r-4 border-[#B32117]"></div>
      <div className="absolute left-0 bottom-0 w-4 h-4 border-b-4 border-l-4 border-[#B32117]"></div>
      <div className="absolute right-0 bottom-0 w-4 h-4 border-b-4 border-r-4 border-[#B32117]"></div>

      {/* メインタイトル（縦書き） */}
      <span
        className="font-bold text-[#B32117] text-2xl tracking-wider"
        style={{ writingMode: "vertical-rl" }}
      >
        {main}
      </span>
      {/* サブ説明文（小さく縦書き） */}
      {sub && (
        <span
          className="text-sm text-[#B32117] mt-2"
          style={{ writingMode: "vertical-rl" }}
        >
          {sub}
        </span>
      )}
    </div>
  );
}
