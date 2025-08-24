"use client";
import DarkVeil from "@/components/bits/DarkVeil";
import GradientText from "@/components/bits/GradientText";
import Footer from "@/components/Footer/Footer";
import Featured from "@/components/Home/Featured";
import NewsCards from "@/components/Home/NewsCards";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import TodaysCard from "@/components/Home/TodaysCard";
import AiNewsSection from "@/components/Home/AiNewsSection";
import DevNewsSection from "@/components/Home/DevNewsSection";
import BigImageCarousel from "@/components/Carousel/BigImageCarousel";
import NewsLetterCard from "@/components/Home/NewsLetterCard";
import { motion } from "framer-motion";

function WeeklyTopTechNews() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class text-5xl md:text-8xl font-extrabold text-left"
      >
        Weekly Top Tech News
      </GradientText>
      <motion.p
        className="mt-6 text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        Stay updated with our weekly news, bringing you the latest trends,
        insights, and developments from around the world — with a special focus
        on AI.
      </motion.p>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DarkVeil />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12">
        <Featured />
        <WeeklyTopTechNews />
        <NewsCards />
        <ImageCarousel />
        <TodaysCard />
        <AiNewsSection />
        <DevNewsSection />
        <BigImageCarousel />
        <NewsLetterCard />
        <Footer />
      </div>
    </div>
  );
}
