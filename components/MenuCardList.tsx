import MenuCard from "./MenuCard/MenuCard";

const menuItems = [
  {
    title: "贅沢な一杯をどうぞ",
    labelMain: "特製和牛ラーメン",
    labelSub: "旨味あふれる贅沢スープ",
    desc: "特製和牛をじっくり煮込んだ贅沢スープと、もちもち自家製麺が絶妙に絡む、当店自慢の一杯。たっぷりの青ねぎととろけるチャーシューがアクセント。",
  },
  {
    title: "香ばしさ広がる逸品",
    labelMain: "炭火焼豚そば",
    labelSub: "炭の香りが食欲をそそる",
    desc: "炭火でじっくり焼き上げたチャーシューと、醤油ベースのコク深いスープが人気の理由。香ばしさとジューシーさがクセになる味。",
  },
  {
    title: "素材を活かしたあっさり系",
    labelMain: "塩だしラーメン",
    labelSub: "昆布と鶏のダシ",
    desc: "シンプルだけど奥深い味わい。昆布と鶏の旨味を存分に引き出した澄んだスープで、毎日食べても飽きない優しい一杯。",
  },
  {
    title: "ボリュームたっぷり！",
    labelMain: "和牛ステーキ丼",
    labelSub: "自家製特製ダレ",
    desc: "和牛ステーキを贅沢に盛りつけたご飯もの。特製ダレが肉の旨味をさらに引き立て、がっつり食べたい方にオススメです。",
  },
  {
    title: "濃厚まろやか仕立て",
    labelMain: "味噌バターコーン麺",
    labelSub: "北海道仕立て",
    desc: "まろやかな味噌とバターのコク、たっぷりのコーンが相性抜群。濃厚でクセになる味わいをお楽しみください。",
  },
  {
    title: "定番の味を追求",
    labelMain: "昔ながらの中華そば",
    labelSub: "懐かしの醤油スープ",
    desc: "あっさりだけどしっかりとしたコクのあるスープに、ちぢれ麺がよく合います。どこか懐かしさを感じる、定番の一杯。",
  },
  {
    title: "ご飯にもよく合う",
    labelMain: "和牛カレー",
    labelSub: "じっくり煮込んだ本格派",
    desc: "和牛の旨味をたっぷり閉じ込めた本格カレー。ご飯との相性も抜群で、リピーター続出の人気メニューです。",
  },
  {
    title: "ふんわり食感",
    labelMain: "卵とじ和牛丼",
    labelSub: "甘辛タレ仕立て",
    desc: "ふんわり卵と柔らか和牛の絶妙なハーモニー。甘辛タレがご飯にしみ込んだ、お子さまから大人まで愛される丼です。",
  },
  {
    title: "ピリ辛がクセになる",
    labelMain: "和牛麻辣麺",
    labelSub: "山椒香る本格派",
    desc: "ピリッとした山椒と唐辛子が効いた麻辣スープに、たっぷり和牛が入った旨辛麺。食欲そそる一杯です。",
  },
];

export default function MenuCardList() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 w-full
        bg-[#B32117] 
        border-2 border-white 
        rounded-none 
        overflow-hidden 
        divide-y-0 divide-x-0"
      style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.10)" }}
    >
      {menuItems.map((item, i) => (
        <MenuCard key={i} {...item} gridIndex={i} />
      ))}
    </div>
  );
}
