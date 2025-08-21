"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { NewsItem } from "@/types/news";
const PAGE_SIZE = 10;

export default function MobileCardBody({
  news,
  loading,
  setPage,
  page,
  category,
}: {
  news: NewsItem[];
  loading: boolean;
  setPage: (page: number) => void;
  page: number;
  category?: string;
}) {
  const heading =
    category && category.trim().length > 0
      ? category.charAt(0).toUpperCase() + category.slice(1) + " News"
      : "Top Highlights";

  return (
    <div className="w-full max-w-xl mx-auto px-2">
      <h2 className="text-3xl font-extrabold my-8 relative inline-block">
        {heading}
        <span
          className="block absolute left-0 mx-auto"
          style={{
            height: "10px",
            background: "#bae6fd",
            borderRadius: "0px",
            bottom: "2px",
            width: "100%",
            zIndex: -1,
          }}
        />
      </h2>
      <div className="flex flex-col gap-6">
        {loading && news.length === 0 ? (
          Array.from<NewsItem | undefined>({ length: PAGE_SIZE }).map(
            (_, idx) => (
              <div
                key={idx}
                className="flex flex-row gap-3 items-center bg-white rounded-xl shadow p-2"
              >
                <div className="flex-1 flex flex-col gap-2">
                  <Skeleton className="w-3/4 h-7 mb-2" />
                  <Skeleton className="w-1/2 h-5" />
                  <Skeleton className="w-full h-4" />
                </div>
                <Skeleton className="w-24 h-24 rounded-xl" />
              </div>
            )
          )
        ) : news.length === 0 ? (
          <div
            className="text-xl text-center text-gray-400 py-16 font-bold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            No news found for this category.
          </div>
        ) : (
          news.map((item, idx) => (
            <div
              key={item.url + "-" + idx}
              className="flex flex-row gap-3 items-center bg-white rounded-xl shadow p-2"
              style={{ border: "none" }}
            >
              {/* Text on the left */}
              <div className="flex-1 flex flex-col items-start justify-center min-w-0">
                {/* Source - Date line */}
                <div
                  className="text-gray-700 text-xs font-bold mb-1 truncate"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.source}
                  {item.publishedAt && (
                    <>
                      <span className="mx-1 font-extrabold text-xs">-</span>
                      {new Date(item.publishedAt).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </>
                  )}
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block w-full"
                >
                  <h3
                    className="text-base mb-1 text-black font-bold leading-snug line-clamp-2"
                    style={{
                      fontFamily: "Times New Roman, Times, serif",
                      fontWeight: 900,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                </a>
                {/* Description below the title */}
                <div
                  className="text-gray-600 text-xs mb-1 line-clamp-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.description ? item.description : ""}
                </div>
                <div
                  className="text-gray-500 text-xs mt-1 truncate"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.author && (
                    <span className="font-semibold">{item.author}</span>
                  )}
                  {item.author && " · "}
                  {item.publishedAt
                    ? new Date(item.publishedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""}
                </div>
              </div>
              {/* Image on the right */}
              {item.image && item.image.startsWith("http") ? (
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                    priority={idx < 3}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  {/* Golden badge */}
                  <span
                    className="absolute top-1 left-1 px-2 py-0.5 rounded text-[10px] font-bold"
                    style={{
                      background: "#FFD700",
                      color: "#111",
                      fontFamily: "Montserrat, sans-serif",
                      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
                    }}
                  >
                    {item.source}
                  </span>
                </div>
              ) : (
                <div className="relative w-24 h-24 bg-gray-200 flex items-center justify-center rounded-xl flex-shrink-0">
                  <span className="text-gray-400 text-xs">No Image</span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {news.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            className="font-extrabold underline text-lg px-6 py-2 cursor-pointer"
            onClick={() => setPage(page + 1)}
            disabled={loading}
          >
            {loading && news.length > 0 ? "Loading..." : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}
