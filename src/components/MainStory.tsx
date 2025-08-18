import React from "react";
import Image from "next/image";
import type { NewsItem } from "../types/news";

type MainStoryProps = {
  story: NewsItem;
};

export default function MainStory({ story }: MainStoryProps) {
  if (!story) return null;
  return (
    <div className="w-full bg-white rounded-xl shadow-lg mb-10 overflow-hidden border border-gray-200">
      {story.image && (
        <div className="relative w-full h-64 sm:h-80">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      )}
      <div className="p-8 flex flex-col gap-2">
        <span className="uppercase text-xs text-blue-700 font-semibold tracking-widest mb-2">Top Story</span>
        <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl font-bold leading-tight hover:underline">
          {story.title}
        </a>
        <div className="text-sm text-gray-500 mt-2">{story.source} &middot; {new Date(story.publishedAt).toLocaleString()}</div>
      </div>
    </div>
  );
}
