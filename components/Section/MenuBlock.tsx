"use client";
import MenuCardList from "../MenuCardList";

export default function MenuBlock() {
  return (
    <section className="w-full py-0 bg-[#B32117] px-0">
      {/* max-w削除、w-full */}
      <MenuCardList />
    </section>
  );
}
