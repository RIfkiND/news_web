import { useEffect, useState } from "react";
import CardBody from "./CardBody";
import Carousel from "./Carousel";
import type { NewsItem, NewsAPIArticle } from "@/types/news";

const PAGE_SIZE = 10;

export default function MainBody() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    async function fetchNews() {
      setLoading(true);
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=${
          PAGE_SIZE * page
        }&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      const data = await res.json();
      const articles = (data.articles || []).map((a: NewsAPIArticle) => ({
        title: a.title,
        url: a.url,
        publishedAt: a.publishedAt,
        source: a.source?.name || "",
        image: a.urlToImage,
        description: a.description,
      }));
      setNews(articles);
      timer = setTimeout(() => setLoading(false), 1500);
    }
    fetchNews();
    return () => clearTimeout(timer);
  }, [page]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Carousel news={news} loading={loading} />
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      <CardBody news={news} loading={loading} setPage={setPage} page={page} />
    </div>
  );
}
