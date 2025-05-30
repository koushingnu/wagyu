"use client";
import { motion } from "framer-motion";

export default function MenuBlock() {
  const menuItems = [
    {
      nameJa: "和牛すき焼き",
      nameEn: "Wagyu Sukiyaki",
      price: "¥3,000",
      desc: "こだわりの和牛を使った、上品な味わいのすき焼きです。",
    },
    {
      nameJa: "和牛焼肉",
      nameEn: "Wagyu Yakiniku",
      price: "¥2,800",
      desc: "特製タレで味わう、柔らかジューシーな焼肉。",
    },
    {
      nameJa: "和牛牛丼",
      nameEn: "Wagyu Gyudon",
      price: "¥1,200",
      desc: "シンプルで深みのある味わいが特徴の牛丼。",
    },
    {
      nameJa: "和牛ハンバーグ",
      nameEn: "Wagyu Hamburg Steak",
      price: "¥1,500",
      desc: "ジューシーな肉汁たっぷりのハンバーグです。",
    },
    {
      nameJa: "和牛カツサンド",
      nameEn: "Wagyu Cutlet Sandwich",
      price: "¥2,200",
      desc: "サクサク衣と和牛の旨味が詰まったカツサンド。",
    },
    {
      nameJa: "和牛炙り寿司",
      nameEn: "Wagyu Aburi Sushi",
      price: "¥1,800",
      desc: "とろける和牛を寿司で贅沢に。",
    },
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 ">
        <h2 className="text-2xl font-bold mb-10 text-center tracking-wide">
          メニュー
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-2xl shadow-lg flex flex-col items-center px-4 py-8 md:px-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* 画像＋テキストはそのまま */}
              <div
                className={`w-full aspect-[4/3] max-w-lg rounded-xl mb-6 flex items-center justify-center ${
                  i % 3 === 0
                    ? "bg-yellow-100"
                    : i % 3 === 1
                      ? "bg-blue-100"
                      : "bg-green-100"
                }`}
              >
                <span
                  className={`text-2xl font-bold ${
                    i % 3 === 0
                      ? "text-yellow-700"
                      : i % 3 === 1
                        ? "text-blue-700"
                        : "text-green-700"
                  }`}
                >
                  画像
                </span>
              </div>
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold tracking-wide mb-1">
                  {item.nameJa}
                </span>
                <span className="text-xs text-gray-500 mb-2 tracking-wider">
                  {item.nameEn}
                </span>
                <span className="text-base font-semibold text-[#D33C19] mb-2">
                  {item.price}
                </span>
                <p className="text-xs text-gray-700 text-center">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
