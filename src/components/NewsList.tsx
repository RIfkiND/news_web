import React from "react";
import Image from "next/image";
import type { NewsItem } from "../types/news";

export type NewsListProps = {
  news: NewsItem[];
  loading: boolean;
  techKeywords: string[];
  selectedKeyword: string;
  setSelectedKeyword: (kw: string) => void;
};

export default function NewsList({ news, loading, techKeywords, selectedKeyword, setSelectedKeyword }: NewsListProps) {
  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    // Editorial, readable format: e.g. Monday, August 18, 2025, 12:37 PM
    return d.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }
  const PLACEHOLDER = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80";
  return (
    <div className="w-full flex flex-col items-center">
      {/* Tech keyword filter bar */}
      <div className="w-full border-b border-gray-300 flex justify-center py-2 mb-2">
        <div className="flex flex-row gap-2 flex-wrap justify-center items-center w-full max-w-5xl px-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          {techKeywords.map((kw) => (
            <button
              key={kw}
              className={`px-4 py-2 rounded-full border border-gray-300 text-base mb-2 transition-colors whitespace-nowrap ${selectedKeyword === kw ? "bg-blue-700 text-white border-blue-700 font-bold" : "bg-white text-gray-700 hover:bg-blue-50"}`}
              onClick={() => setSelectedKeyword(kw)}
              type="button"
            >
              {kw.charAt(0).toUpperCase() + kw.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {loading ? (
        <div className="text-lg">Loading news...</div>
      ) : !news.length ? (
        <div className="text-lg">No news found.</div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {news.map((item, i) => (
            <div
              key={item.url + i}
              className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden h-full"
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              {item.image && (
                <div className="relative w-full h-40">
                  <Image
                    src={item.image || PLACEHOLDER}
                    alt={item.title}
                    fill
                    className="object-cover"
                    style={{ borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={false}
                    unoptimized={false}
                  />
                </div>
              )}
              <div className="p-6 flex flex-col gap-2 flex-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold leading-tight hover:underline text-lg mb-2"
                >
                  {item.title}
                </a>
                {item.description && (
                  <div className="text-base text-gray-700 mb-2 line-clamp-3">{item.description}</div>
                )}
                <div className="text-xs text-gray-500 mt-auto flex flex-row justify-between items-center">
                  <span>{item.source}</span>
                  <span>{formatDate(item.publishedAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
