// src/components/MenuCard/MenuLabelVertical.tsx
export default function MenuLabelVertical({
  main,
  sub,
}: {
  main: string;
  sub?: string;
}) {
  return (
    <div
      className="relative flex flex-row items-center justify-center bg-white border-4 border-[#B32117] py-2 gap-x-3"
      style={{
        width: sub ? "90px" : "56px",
        minHeight: "300px",
        borderRadius: "0.5rem",
        boxShadow: "inset 0 0 0 4px #fff",
      }}
    >
      {sub && (
        <span
          className="text-xs text-[#B32117] flex items-center justify-center"
          style={{
            writingMode: "vertical-rl",
            textAlign: "center",
          }}
        >
          {sub}
        </span>
      )}
      <span
        className="font-bold text-[#B32117] text-2xl tracking-wider flex items-center justify-center"
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
