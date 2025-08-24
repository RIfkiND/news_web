"use client";
import DarkVeil from "@/components/bits/DarkVeil";
import Header from "@/components/Header/Header";
import React from "react";
import GradientText from "@/components/bits/GradientText";
import Footer from "@/components/Footer/Footer";
import Featured from "@/components/Body/Featured";
import NewsCards from "@/components/Body/NewsCards";
import ImageCarousel from "@/components/Carousel/ImageCarousel";
import TodaysCard from "@/components/Body/TodaysCard";
import AiNewsSection from "@/components/Body/AiNewsSection";
import DevNewsSection from "@/components/Body/DevNewsSection";
import BigImageCarousel from "@/components/Carousel/BigImageCarousel";
import NewsLetterCard from "@/components/Body/NewsLetterCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full z-0 bg-black">
      {/* Background only at the top */}
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DarkVeil />
      </div> */}

      {/* Foreground: Header and Main Content */}
      <main className="relative z-10 w-full min-h-screen flex flex-col -mt-[600px] pt-[600px]">
        <header className="w-full flex-none">
          <Header />
        </header>

        {/* Featured is now right below the nav */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 -mt-100">
          <Featured />
        </div>

        <section className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 md:px-12 pb-8 mt-20">
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
              insights, and developments from around the world — with a special
              focus on AI.
            </motion.p>
          </motion.div>
          <div className="mt-12">
            <NewsCards />
          </div>
          <div className="mt-16">
            <ImageCarousel />
          </div>
          <div className="mt-16">
            <TodaysCard />
          </div>
          <div className="mt-16">
            <AiNewsSection />
          </div>
          <div className="mt-16">
            <DevNewsSection />
          </div>
          <div className="mt-16">
            <BigImageCarousel />
          </div>
          <div className="mt-16">
            <NewsLetterCard />
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
