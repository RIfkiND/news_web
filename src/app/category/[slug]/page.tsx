"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CardBody from "@/components/CardBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";    
import {
  NewsItem,
  NewsAPIArticle,
  NewsAPIResponse,
  GNewsResponse,
  MediastackArticle,
  MediastackResponse,
} from "@/types/news";

// Dummy fetch function, replace with your real API call
async function fetchNewsByCategory(slug: string): Promise<NewsItem[]> {
  // NewsAPI
  const newsApiRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${slug}&pageSize=10&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const newsApiData: NewsAPIResponse = await newsApiRes.json();
  const newsApiArticles: NewsItem[] = (newsApiData.articles || []).map(
    (a: NewsAPIArticle) => ({
      title: a.title,
      url: a.url,
      publishedAt: a.publishedAt,
      source: a.source?.name || "",
      image: a.urlToImage,
      description: a.content || a.description,
      
    })
  );

  // GNews
  const gnewsRes = await fetch(
    `https://gnews.io/api/v4/top-headlines?country=us&topic=${slug}&max=10&token=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}`
  );
  const gnewsData: GNewsResponse = await gnewsRes.json();
  const gnewsArticles: NewsItem[] = (gnewsData.articles || []).map((a) => ({
    title: a.title,
    url: a.url,
    publishedAt: a.publishedAt,
    source: a.source?.name || "GNews",
    image: a.image,
    description: a.content || a.description,
   
  }));

  // Mediastack
  const mediastackRes = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY}&categories=${slug}&countries=us&limit=10`
  );
  const mediastackData: MediastackResponse = await mediastackRes.json();
  const mediastackArticles: NewsItem[] = (mediastackData.data || []).map(
    (a: MediastackArticle) => ({
      title: a.title,
      url: a.url,
      publishedAt: a.published_at,
      source: a.source || "Mediastack",
      image: a.image,
      description: a.description,
      
    })
  );

  // Combine and sort by date
  return [...newsApiArticles, ...gnewsArticles, ...mediastackArticles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    fetchNewsByCategory(slug)
      .then((data) => {
        // Filter news by search term if present
        if (search) {
          setNews(
            data.filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
          );
        } else {
          setNews(data);
        }
      })
      .finally(() => setLoading(false));
  }, [slug, page, search]);

  // Handle category change (navigate to new slug)
  const handleCategoryChange = (cat: string) => {
    if (cat === "all") {
      router.push("/");
    } else {
      router.push(`/category/${cat}`);
    }
  };

  return (
    <>
      <Header
        onSearch={setSearch}
        onCategoryChange={handleCategoryChange}
        search={search}
        selectedCat={slug}
      />
      <div className="max-w-8xl mx-auto px-2 py-10">
        
        <CardBody
          news={news}
          loading={loading}
          setPage={setPage}
          page={page}
          category={slug}
        />
      </div>
      <Footer />
    </>
  );
}
