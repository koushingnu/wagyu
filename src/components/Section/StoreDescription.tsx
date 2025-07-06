"use client";

import Image from "next/image";

export default function StoreDescription() {
  const features = [
    {
      title: "厳選素材",
      description:
        "A5ランクの和牛を使用。素材の味を最大限に引き出す調理法にこだわっています。",
    },
    {
      title: "職人技",
      description:
        "熟練の職人が一つ一つ丁寧に仕上げます。伝統の技と現代の味わいを融合させた一品をご提供。",
    },
    {
      title: "くつろぎ空間",
      description: "和モダンの空間で、ゆったりとお食事をお楽しみいただけます。",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 和紙のような背景テクスチャ */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(#000 1px, transparent 1px),
            radial-gradient(#000 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-['YuMincho','Yu_Mincho','游明朝体','游明朝','ヒラギノ明朝_Pro_W3','HiraMinProN-W3']">
            和牛ストールの想い
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            伝統的な和の味わいと、現代的なスタイルを融合させた新しい食のカタチ。
            厳選された素材と職人の技が織りなす至福のひとときをお届けします。
          </p>
        </div>

        {/* メイン画像 */}
        <div className="relative w-full aspect-[16/9] mb-16 rounded-lg overflow-hidden">
          <Image
            src="/images/converted/_1108939.jpg"
            alt="店舗の雰囲気"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 特徴リスト */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-1"
            >
              {/* テキストコンテンツ */}
              <h3 className="text-xl font-bold mb-4 font-['YuMincho','Yu_Mincho','游明朝体','游明朝','ヒラギノ明朝_Pro_W3','HiraMinProN-W3']">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>

              {/* 装飾的な要素 */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-10">
                <svg viewBox="0 0 40 40" fill="currentColor">
                  <path d="M20 0L40 20L20 40L0 20L20 0Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* 店舗説明セクション */}
        <div className="mt-24">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-center font-['YuMincho','Yu_Mincho','游明朝体','游明朝','ヒラギノ明朝_Pro_W3','HiraMinProN-W3']">
              伝統と革新の調和
            </h3>
            <p className="text-gray-600">
              和牛ストールは、日本の伝統的な食文化を大切にしながら、
              現代のニーズに応える新しい食のスタイルを提案しています。
              厳選された素材と熟練の職人技が織りなす味わいを、
              くつろぎの空間でお楽しみください。
            </p>
            <p className="text-gray-600">
              店内は和モダンをコンセプトに、落ち着いた雰囲気と
              快適な空間を演出。お一人様でも、ご家族でも、
              大切な方との食事にも最適な環境をご用意しております。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
