
import React, { useState } from "react";
import Image from "next/image";
import type { NewsItem } from "../types/news";

export type NewsSliderProps = {
  news: NewsItem[];
};



const PLACEHOLDER =
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80";

export default function NewsSlider({ news }: NewsSliderProps) {
  const [index, setIndex] = useState(0);
  if (!news.length) return null;
  const main = news[index % news.length];
  function prev() {
    setIndex((i) => (i - 1 + news.length) % news.length);
  }
  function next() {
    setIndex((i) => (i + 1) % news.length);
  }
  const img = main.image || PLACEHOLDER;
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <div className="relative w-full max-w-2xl bg-card rounded-lg shadow-lg p-6 flex flex-col items-center border border-border min-h-[320px]">
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">&#8592;</button>
        <div className="w-full h-56 relative mb-4">
          <Image
            src={img}
            alt={main.title}
            fill
            className="object-cover rounded border border-gray-200"
            style={{ background: '#eee' }}
            sizes="(max-width: 640px) 100vw, 600px"
            priority={true}
            unoptimized={false}
          />
        </div>
        <a href={main.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-primary hover:underline text-center block mb-2">
          {main.title}
        </a>
        <div className="text-xs text-muted-foreground mb-1">{main.source} &middot; {new Date(main.publishedAt).toLocaleString()}</div>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">&#8594;</button>
      </div>
      <div className="flex gap-2 mt-2">
        {news.slice(0, 5).map((item, i) => (
          <button
            key={item.url + i}
            className={`w-3 h-3 rounded-full ${i === index % news.length ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
