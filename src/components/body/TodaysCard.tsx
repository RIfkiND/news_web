"use client";
import Image from "next/image";

const todaysNews = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    title:
      "Today: AI Breakthrough in Medical Diagnostics — How Deep Learning Models Are Changing the Future of Rare Disease Detection and Patient Outcomes",
    description:
      "Researchers at a leading university have developed a new AI model that can detect rare diseases from medical images with unprecedented accuracy. This breakthrough is expected to revolutionize early diagnosis, reduce costs, and improve patient care worldwide by leveraging advanced neural networks and big data.",
    date: "17 June 2025",
    read: "8 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    title:
      "Quantum Computing: New Milestone Achieved as Startup Demonstrates Quantum Supremacy in Solving Complex Scientific Problems",
    description:
      "A tech startup has demonstrated a quantum computer that solves complex problems faster than any classical computer. This achievement marks a significant step forward in quantum technology, with potential applications in cryptography, materials science, and artificial intelligence.",
    date: "17 June 2025",
    read: "6 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    title:
      "Robotics in Everyday Life: How Autonomous Machines Are Transforming Urban Environments and Industry",
    description:
      "From delivery drones to automated warehouses, robotics is rapidly integrating into daily life. Experts discuss the societal impact, ethical considerations, and the future of human-robot collaboration in cities and workplaces.",
    date: "17 June 2025",
    read: "7 min read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    title:
      "AI-Powered Data Centers: Efficiency and Sustainability in the Digital Age",
    description:
      "Modern data centers are leveraging artificial intelligence to optimize energy consumption, reduce costs, and increase uptime. This shift is driving sustainability and reliability for cloud computing worldwide.",
    date: "17 June 2025",
    read: "5 min read",
  },
];

export default function TodaysCard() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-6xl font-extrabold text-white mb-2 text-left">
        News Today
      </h2>
      {todaysNews.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden"
        >
          <div className="md:w-[60%] w-full relative flex items-stretch">
            <div className="w-full aspect-[2/1] min-h-[320px] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover w-full h-full rounded-2xl"
                sizes="(max-width: 768px) 100vw, 48vw"
                priority={idx === 0}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between p-6 md:w-[52%] w-full">
            <div>
              <div className="flex items-center gap-4 text-xs text-neutral-400 mb-2">
                <span>{item.date}</span>
                <span>·</span>
                <span>{item.read}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-300 mb-4">{item.description}</p>
            </div>
            <div className="mt-10">
              <a
                href="#"
                className="inline-block px-6 py-2 rounded-lg bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-500 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
