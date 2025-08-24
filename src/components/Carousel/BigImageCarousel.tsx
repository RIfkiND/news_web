"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
// High-quality, tech-related images (Unsplash, Pexels, etc.)
const images = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80", // Tech workspace
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80", // Circuit board
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80", // AI/robot
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80", // Laptop coding
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80", // Data center
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80", // VR headset
];

export default function BigImageCarousel() {
  return (
    <section className="w-full mx-auto mt-16">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((src, idx) => (
            <CarouselItem key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center items-center"
              >
                <div className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-lg">
                  <Image
                    src={src}
                    alt={`carousel-image-${idx}`}
                    width={1200}
                    height={500}
                    className="object-cover w-full h-full"
                    priority={idx === 0}
                  />
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
