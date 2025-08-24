"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const news = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    title:
      "AI in Healthcare: How Artificial Intelligence is Transforming Patient Care, Diagnostics, and Medical Research",
    description: "How AI is transforming patient care and diagnostics.",
    date: "14 June 2025",
    read: "5 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
    title:
      "Quantum Breakthrough: New Quantum Computers Promise Unprecedented Processing Power for Science and Industry",
    description: "Quantum computers are getting closer to reality.",
    date: "13 June 2025",
    read: "6 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80",
    title:
      "Self-driving Cars: Autonomous Vehicles Are Now Safer Than Ever Thanks to Advanced AI and Sensor Technology",
    description: "Autonomous vehicles are now safer than ever.",
    date: "12 June 2025",
    read: "4 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&q=80",
    title:
      "Meta's New AI Chip: Revolutionizing Machine Learning Performance for Next-Gen Applications and Devices",
    description: "Meta launches a new chip for AI workloads.",
    date: "11 June 2025",
    read: "5 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=700&q=80",
    title:
      "OpenAI GPT-5: The Next Generation Language Model Sets New Benchmarks in Natural Language Understanding",
    description: "OpenAI releases the next generation of language models.",
    date: "10 June 2025",
    read: "7 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=700&q=80",
    title:
      "Apple Vision Pro Review: Exploring the Features and Impact of Apple's Latest Augmented Reality Headset",
    description: "A review of Apple's latest AR headset.",
    date: "9 June 2025",
    read: "6 min read",
  },
];

export default function NewsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.08 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Card className="overflow-hidden shadow-lg bg-neutral-900 border-none group h-full flex flex-col">
            <CardHeader className="p-0">
              <div className="pt-1 px-2 pb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg "
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-neutral-400 mb-2">
                  <span>{item.date}</span>
                  <span>·</span>
                  <span>{item.read}</span>
                </div>
                <CardTitle className="text-xl font-bold text-white mb-2">
                  {item.title}
                </CardTitle>
              </div>
              <a
                href="#"
                className="mt-6 w-full text-orange-400 underline underline-offset-4 font-medium transition-colors text-left group"
              >
                Read More
                <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
