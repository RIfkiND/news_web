"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    title: "AI Data Centers",
    description: "How AI is powering the next generation of data centers.",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80",
    title: "Coding with AI",
    description: "Developers leverage AI for smarter, faster code.",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    title: "Robotics Revolution",
    description: "AI-driven robots are transforming industries.",
  },
];

const aiCards = [
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80",
    title: "AI in Finance: Transforming Markets",
    date: "17 June 2025",
    read: "5 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    title: "AI for Good: Solving Global Challenges",
    date: "17 June 2025",
    read: "6 min read",
  },
];

export default function AiNewsSection() {
  return (
    <div className="w-full flex flex-col gap-8">
      <h2 className="text-6xl font-extrabold text-white mb-2 text-left">
        Ai News
      </h2>
      <div className="flex flex-col lg:flex-row items-stretch gap-1">
        {/* Carousel */}
        <div className="lg:w-[52%] w-full flex lg:justify-start">
          <Carousel>
            <CarouselContent>
              {carouselImages.map((item, idx) => (
                <CarouselItem key={idx}>
                  <div className="w-full h-[510px] rounded-2xl overflow-hidden shadow-lg flex items-center justify-center relative max-w-xl">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={700}
                      height={500}
                      className="object-cover w-full h-full"
                      priority={idx === 0}
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        {/* Side Cards */}
        <div className="flex flex-col gap-2 w-full lg:w-[48%]">
          {aiCards.map((item, idx) => (
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
                  {item.title} — The latest insights and analysis on artificial
                  intelligence trends and impacts.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
