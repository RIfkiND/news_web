
"use client";
import React, { useEffect, useState } from "react";



import Header from "../components/Header";
import Footer from "../components/Footer";

import type { NewsItem, NewsAPIResponse } from "../types/news";
import NewsList from "../components/NewsList";


const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || "";




const NEWSAPI_URL = (lang: string) =>
  `https://newsapi.org/v2/everything?q=artificial%20intelligence&language=${lang}&sortBy=publishedAt&pageSize=10&apiKey=${NEWS_API_KEY}`;




export default function Home() {


  const categories = [
    { label: "All", value: "artificial intelligence" },
    { label: "Tech", value: "technology" },
    { label: "Business", value: "business" },
    { label: "Science", value: "science" },
    { label: "Health", value: "health" },
    { label: "Sports", value: "sports" },
    { label: "Entertainment", value: "entertainment" },
  ];
  const [category, setCategory] = useState(categories[0].value);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState<string>("en");


  // Tech keywords for filtering
  const techKeywords = [
    "ai",
    "tech",
    "web3",
    "robotics",
    "blockchain",
    "cloud",
    "software",
    "cybersecurity",
    "mobile",
    "machine learning",
  ];
  const [selectedKeyword, setSelectedKeyword] = useState<string>(techKeywords[0]);

  function getNewsApiUrl(lang: string, keyword: string) {
    let url = `https://newsapi.org/v2/top-headlines?category=technology&language=${lang}&pageSize=20&apiKey=${NEWS_API_KEY}`;
    if (keyword && keyword.trim().length > 0) {
      url += `&q=${encodeURIComponent(keyword)}`;
    }
    return url;
  }

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const res = await fetch(getNewsApiUrl(lang, selectedKeyword));
        const data = (await res.json()) as NewsAPIResponse;
        const items =
          data.articles?.map((a) => ({
            title: a.title,
            url: a.url,
            publishedAt: a.publishedAt,
            source: a.source?.name || "NewsAPI",
            image: a.urlToImage,
            description: a.description,
          })) || [];
        setNews(items);
      } catch {
        setNews([]);
      }
      setLoading(false);
    }
    fetchNews();
  }, [lang, selectedKeyword]);

  const filtered = news;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <Header lang={lang} setLang={setLang} search={search} setSearch={setSearch} />
      <main className="flex flex-col flex-1 px-2 py-6 sm:px-0 w-full items-center">
        <div className="w-full max-w-5xl mx-auto">
          <NewsList
            news={filtered}
            loading={loading}
            techKeywords={techKeywords}
            selectedKeyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
