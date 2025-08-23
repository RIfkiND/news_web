"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const carouselItems = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
    title: "AI Revolutionizes Healthcare",
    description: "AI is transforming patient care, diagnostics, and research.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80",
    title: "Quantum Computing Breakthrough",
    description: "New quantum algorithms promise faster computations.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&q=80",
    title: "Self-driving Cars Update",
    description: "Autonomous vehicles are now safer and more reliable.",
  },
];

const sideCards = [
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600&q=90",
    headline: "Meta launches new AI chip",
    time: "Just now",
    date: "13 Jan 2024",
    read: "5 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=90",
    headline: "OpenAI releases GPT-5",
    time: "10 min ago",
    date: "12 Jan 2024",
    read: "7 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1600&q=90",
    headline: "Tesla unveils new battery tech",
    time: "30 min ago",
    date: "11 Jan 2024",
    read: "4 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1600&q=90",
    headline: "Apple Vision Pro review",
    time: "1 hour ago",
    date: "10 Jan 2024",
    read: "6 min read",
  },
];

export default function Featured() {
  return (
    <div className="w-full flex flex-row gap-6">
      {/* Carousel */}
      <div className="flex-1 max-w-full">
        <Carousel>
          <CarouselContent>
            {carouselItems.map((item, idx) => (
              <CarouselItem key={idx}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-140">
                  {/* Badge in top-left */}
                  <div className="absolute top-4 left-8 z-10">
                    <Badge className="bg-white text-black font-semibold px-5 py-2 text-base shadow-lg">
                      Featured Post
                    </Badge>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full"
                    priority={idx === 0}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-200 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/* Side Cards */}
      <div className="flex flex-col gap-4 w-[350px]">
        {sideCards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center rounded-2xl overflow-hidden shadow-md bg-neutral-900 h-32"
          >
            <Image
              src={card.image}
              alt={card.headline}
              width={112}
              height={112}
              className="w-40 h-29 object-cover rounded-xl p-1 ml-1 "
            />
            <div className="flex flex-col justify-center px-4 py-3 flex-1">
              <div className="flex items-center gap-4 mb-2 mt-1">
                <span className="text-xs text-neutral-400 font-medium">
                  {card.date}
                </span>
                <span className="text-xs text-neutral-400">{card.read}</span>
              </div>

              <div className="font-semibold text-base text-white">
                {card.headline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
