"use client";
import { useState } from "react";
import Header from "@/components/Header";
import MainBody from "@/components/MainBody";
import Footer from "@/components/Footer";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileMainBody from "@/components/mobile/MobileMainBody";
// import MobileFooter from "@/components/mobile/MobileFooter";
// import Particles from "@/components/bits/Particel";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  return (
    <main className="relative min-h-screen overflow-hidde">
      {/* Particle background */}
      {/* <div className="absolute inset-0 -z-10 w-full h-full flex items-center justify-center pointer-events-none">
        <Particles
          particleColors={["#38bdf8", "#2563eb"]}
          particleCount={1000}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>  */}
      {/* Desktop layout */}
      <div className="hidden md:block">
        <Header
          onSearch={setSearch}
          onCategoryChange={setSelectedCat}
          search={search}
          selectedCat={selectedCat}
        />
        <MainBody search={search} selectedCat={selectedCat} />
        <Footer />
      </div>
      {/* Mobile layout */}
      <div className="block md:hidden">
        <MobileHeader
          onSearch={setSearch}
          onCategoryChange={setSelectedCat}
          search={search}
          selectedCat={selectedCat}
        />
        <MobileMainBody
          search={search}
          selectedCat={selectedCat}
        />
      </div>
    </main>
  );
}
