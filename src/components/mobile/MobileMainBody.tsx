import { useEffect, useState } from "react";
import MobileCardBody from "@/components/mobile/MobileCardBody";
import MobileCarousel from "@/components/mobile/MobileCarousel";
import {
  NewsItem,
  NewsAPIArticle,
  NewsAPIResponse,
  GNewsResponse,
  MediastackArticle,
  MediastackResponse,
} from "@/types/news";

const PAGE_SIZE = 10;

const TECH_KEYWORDS = [
  "ai",
  "artificial intelligence",
  "machine learning",
  "deep learning",
  "neural network",
  "tech",
  "technology",
  "robot",
  "robotics",
  "data science",
  "automation",
  "cloud",
  "computing",
  "software",
  "hardware",
  "startup",
  "programming",
  "coding",
  "developer",
  "engineer",
  "blockchain",
  "crypto",
  "quantum",
  "iot",
  "internet of things",
];

function isTechNews(title: string, description?: string) {
  const text = (title + " " + (description || "")).toLowerCase();
  return TECH_KEYWORDS.some((kw) => text.includes(kw));
}

export default function MobileMainBody({
  search,
  selectedCat,
}: {
  search: string;
  selectedCat: string;
}) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    async function fetchNews() {
      setLoading(true);

      // Fetch from NewsAPI
      const newsApiRes = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=${
          PAGE_SIZE * page
        }&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
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

      // Fetch from GNews
      const gnewsRes = await fetch(
        `https://gnews.io/api/v4/top-headlines?country=us&topic=technology&max=${
          PAGE_SIZE * page
        }&token=${process.env.NEXT_PUBLIC_GNEWS_API_KEY}`
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

      // Fetch from Mediastack
      const mediastackRes = await fetch(
        `http://api.mediastack.com/v1/news?access_key=${
          process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY
        }&categories=technology&countries=us&limit=${PAGE_SIZE * page}`
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
      let combined: NewsItem[] = [
        ...newsApiArticles,
        ...gnewsArticles,
        ...mediastackArticles,
      ].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );

      // Filter for tech news (extra safety)
      combined = combined.filter((item) =>
        isTechNews(item.title, item.description)
      );

      // Filter by category (if not "all")
      if (selectedCat !== "all") {
        combined = combined.filter((item) =>
          item.title.toLowerCase().includes(selectedCat)
        );
      }
      // Filter by search
      if (search) {
        combined = combined.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      setNews(combined);
      timer = setTimeout(() => setLoading(false), 1200);
    }
    fetchNews();
    return () => clearTimeout(timer);
  }, [page, search, selectedCat]);

  return (
    <div className="max-w-xl mx-auto px-1 py-6">
        <MobileCarousel news={news} loading={loading} />
      <hr
        className="my-4 border-black bg-black border max-w-xl mx-auto"
        style={{ height: "4px" }}
      />
      <MobileCardBody
        news={news}
        loading={loading}
        setPage={setPage}
        page={page}
        category={selectedCat}
      />
    </div>
  );
}
