import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import MenuLabelVertical from "../../components/MenuLabelVertical";
import HeroSection from "../../components/Section/HeroSection";
import MenuBlock from "../../components/Section/MenuBlock";
import StoreInfo from "../../components/Section/StoreSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-gray-100 text-black min-h-[70vh]">
        <div id="hero" className="-mt-10">
          {/* -mt-10: ヘッダー高さの半分くらいを上に食い込ませる */}
          <HeroSection />
        </div>
        <section id="menu" className="scroll-mt-14">
          <MenuBlock />
        </section>
        <section id="store" className="scroll-mt-14">
          <StoreInfo />
        </section>
        <section>
          <div className="flex justify-center">
            <MenuLabelVertical
              main="炭火焼豚七八そば"
              sub="熟練の炭火焼き焼豚が自慢"
              // ここでstyleを渡してもOK
            />
          </div>
        </section>

        <section id="contact">{/* お問い合わせフォーム or ダミー */}</section>
      </main>
      <Footer />
    </>
  );
}
