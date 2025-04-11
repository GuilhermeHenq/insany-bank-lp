import { useEffect, useState } from "react";
import Header from "../sections/Header";
import HeroSection from "../sections/HeroSection";
import { useBlog } from "@/context/BlogContext";
import Footer from "../sections/Footer";
import CustomSolutions from "../sections/CustomSolutions";
import Benefits from "../sections/Benefits";
import BlogSection from "../sections/BlogSection";
import Features from "../sections/Features";
import TwoBanners from "../sections/TwoBanners";
import FAQ from "../sections/FAQ";

export default function Home() {
  const { posts, isLoading } = useBlog();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("quem-somos");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      {isScrolled && <div style={{ height: "96px" }} />}
      <HeroSection id="quem-somos" />
      <CustomSolutions id="solucoes" />
      <Benefits  />
      <BlogSection />
      <Features id="carreira" />
      <TwoBanners/>
      <FAQ id="suporte" />
      <Footer id="contato" />
    </>
  );
}
