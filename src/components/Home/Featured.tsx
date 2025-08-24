"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

// All images are now tech-related (servers, code, robotics, AI, etc.)
const carouselItems = [
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80", // AI/robot
    title: "AI Revolutionizes Healthcare",
    description: "AI is transforming patient care, diagnostics, and research.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80", // Circuit board
    title: "Quantum Computing Breakthrough",
    description: "New quantum algorithms promise faster computations.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80", // Data center
    title: "Self-driving Cars Update",
    description: "Autonomous vehicles are now safer and more reliable.",
  },
];

const sideCards = [
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80", // VR headset
    headline: "Meta launches new AI chip",
    time: "Just now",
    date: "13 Jan 2024",
    read: "5 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80", // Circuit board
    headline: "OpenAI releases GPT-5",
    time: "10 min ago",
    date: "12 Jan 2024",
    read: "7 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80", // Laptop coding
    headline: "Tesla unveils new battery tech",
    time: "30 min ago",
    date: "11 Jan 2024",
    read: "4 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", // Data center
    headline: "Apple Vision Pro review",
    time: "1 hour ago",
    date: "10 Jan 2024",
    read: "6 min read",
  },
];

export default function Featured() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-12 -mt-100">
      <div className="w-full flex flex-row gap-6">
        {/* Carousel */}
        <div className="flex-1 max-w-full">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {carouselItems.map((item, idx) => (
                <CarouselItem key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="h-full"
                  >
                    <Link
                      href="#"
                      className="relative rounded-2xl overflow-hidden shadow-lg w-full h-140 group block"
                      tabIndex={0}
                    >
                      {/* Badge in top-left */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                        className="absolute top-4 left-8 z-10"
                      >
                        <Badge className="bg-white text-black font-semibold px-5 py-2 text-base shadow-lg">
                          Featured Post
                        </Badge>
                      </motion.div>
                      <motion.div
                        initial={{ scale: 1.05, opacity: 0.7 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                          priority={idx === 0}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 + idx * 0.1 }}
                        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-6 py-4"
                      >
                        <h3 className="text-2xl font-bold text-white mt-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-200 mt-2">
                          {item.description}
                        </p>
                      </motion.div>
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        {/* Side Cards */}
        <div className="flex flex-col gap-4 w-[350px]">
          {sideCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              className="flex flex-row items-center rounded-2xl overflow-hidden shadow-md bg-neutral-900 h-32"
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 + idx * 0.08 }}
                className="w-40 h-29 object-cover rounded-xl p-1 ml-1 overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.headline}
                  width={112}
                  height={112}
                  className="w-40 h-29 object-cover rounded-xl"
                />
              </motion.div>
              <div className="flex flex-col justify-center px-4 py-3 flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.08 }}
                >
                  <div className="flex items-center gap-4 mb-2 mt-1">
                    <span className="text-xs text-neutral-400 font-medium">
                      {card.date}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {card.read}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="font-semibold text-base text-white hover:underline transition-colors"
                  >
                    {card.headline}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
