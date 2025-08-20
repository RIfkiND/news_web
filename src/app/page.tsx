"use client"
import { useState } from "react";
import Header from "@/components/Header";
import MainBody from "@/components/MainBody";
import Footer from "@/components/Footer";
export default function Home() {
    const [search, setSearch] = useState("");
    const [selectedCat, setSelectedCat] = useState("all");

  return (
    <main>
      <Header
        onSearch={setSearch}
        onCategoryChange={setSelectedCat}
        search={search}
        selectedCat={selectedCat}
      />
      <MainBody search={search} selectedCat={selectedCat} />
      <Footer />
    </main>
  );
}