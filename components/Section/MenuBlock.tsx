"use client";
import MenuCardList from "../MenuCardList";

export default function MenuBlock() {
  return (
    <section className="w-full py-10 bg-white px-0">
      {" "}
      {/* px-0で余白消す */}
      <h2 className="text-2xl font-bold mb-10 text-center tracking-wide">
        メニュー
      </h2>
      {/* max-w削除、w-full */}
      <MenuCardList />
    </section>
  );
}
