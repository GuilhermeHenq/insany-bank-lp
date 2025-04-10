import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { useBlog } from "@/context/BlogContext";
import Footer from "@/components/Footer";
import CustomSolutions from "@/components/CustomSolutions";
import Benefits from "@/components/Benefits";
import BlogSection from "@/components/BlogSection";
import Features from "@/components/Features";
import TwoBanners from "@/components/TwoBanners";
import FAQ from "@/components/FAQ";

export default function Home() {
  const { posts, isLoading } = useBlog();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
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
      <HeroSection />
      <CustomSolutions />
      <Benefits />
      <BlogSection />
      <Features />
      <TwoBanners />
      <FAQ />
      <Footer />
    </>
  );
}
