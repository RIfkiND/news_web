"use client";
import Image from "next/image";

const devCards = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    title: "Next.js 15 Released: What’s New for Developers",
    date: "20 August 2025",
    read: "7 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    title: "TypeScript 6.0: Major Features and Migration Tips",
    date: "19 August 2025",
    read: "6 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    title: "React Server Components: The Future of UI",
    date: "18 August 2025",
    read: "5 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
    title: "Open Source Spotlight: Top Projects This Month",
    date: "17 August 2025",
    read: "8 min read",
  },
];

export default function DevNewsSection() {
  return (
    <div className="w-full flex flex-col gap-8 mt-16">
      <h2 className="text-5xl font-extrabold text-white mb-2 text-left">
        Dev News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {devCards.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center rounded-2xl overflow-hidden shadow-md bg-neutral-900 h-[245px] min-h-[245px] w-full"
            style={{ minHeight: 230 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={260}
              height={230}
              className="w-[260px] h-[230px] object-cover rounded-xl p-1 ml-1"
              priority={idx === 0}
            />
            <div className="flex flex-col justify-start px-4 py-3 flex-1 h-full">
              <div className="flex items-center mb-1 mt-3">
                <span className="text-xs text-neutral-400 font-medium">
                  {item.date}
                </span>
                <span className="text-xs text-neutral-400 ml-auto">
                  {item.read}
                </span>
              </div>
              <div className="font-semibold text-xl mt-5 text-white leading-snug line-clamp-6">
                {item.title} — The latest insights and analysis on developer
                tools, frameworks, and open source.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
