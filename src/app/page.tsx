"use client";

import Footer from "../components/Common/Footer";
import HeaderHamburger from "../components/Common/HeaderHamburger";
import HeroSection from "../components/Section/HeroSection";
import MenuBlock from "../components/Section/MenuBlock";
import StoreInfo from "../components/Section/StoreSection";
import StoreDescription from "../components/Section/StoreDescription";

export default function Home() {
  return (
    <>
      <HeaderHamburger />
      <main className="bg-gray-100 text-black min-h-[70vh]">
        <div id="hero">
          <HeroSection />
        </div>
        <section id="menu">
          <MenuBlock />
        </section>
        <section id="store-description" className="scroll-mt-14">
          <StoreDescription />
        </section>
        <section id="store" className="scroll-mt-14">
          <StoreInfo />
        </section>

        <section id="contact">{/* お問い合わせフォーム or ダミー */}</section>
      </main>
      <Footer />
    </>
  );
}
