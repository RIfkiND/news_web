"use client";
import DarkVeil from "@/components/bits/DarkVeil";
import Header from "@/components/Header/Header";
import React from "react";
import GradientText from "@/components/bits/GradientText";
import { FaRegNewspaper } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import Featured from "@/components/Body/Featured";
import NewsCards from "@/components/Body/NewsCards"; // Add this import
import ImageCarousel from "@/components/Carousel/ImageCarousel"; // Add this import
import TodaysCard from "@/components/Body/TodaysCard"; // Add this import
import AiNewsSection from "@/components/Body/AiNewsSection"; // Add this import
import DevNewsSection from "@/components/Body/DevNewsSection"; // Add this import
import BigImageCarousel from "@/components/Carousel/BigImageCarousel";
import NewsLetterCard from "@/components/Body/NewsLetterCard";
export default function Home() {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          ariaLabel: "About Company",
          href: "/about/company",
        },
        {
          label: "Careers",
          ariaLabel: "About Careers",
          href: "/about/careers",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          ariaLabel: "Featured Projects",
          href: "/projects/featured",
        },
        {
          label: "Case Studies",
          ariaLabel: "Project Case Studies",
          href: "/projects/case-studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          href: "mailto:info@example.com",
        },
        {
          label: "Twitter",
          ariaLabel: "Twitter",
          href: "https://twitter.com/",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://linkedin.com/",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full z-0 bg-black">
      {/* Background only at the top */}
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DarkVeil />
      </div>

      {/* Foreground: Header and Main Content */}
      <main className="relative z-10 w-full min-h-screen flex flex-col -mt-[600px] pt-[600px]">
        <header className="w-full flex-none">
          <Header
            logo={<FaRegNewspaper size={32} />}
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
          />
        </header>

        {/* Featured is now right below the nav */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 -mt-100">
          <Featured />
        </div>

        <section className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 md:px-12 pb-8 mt-20">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-5xl md:text-8xl font-extrabold text-left"
          >
            Weekly Top Tech News
          </GradientText>
          <p className="mt-6 text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto text-center">
            Stay updated with our weekly news, bringing you the latest trends,
            insights, and developments from around the world — with a special
            focus on AI.
          </p>
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
