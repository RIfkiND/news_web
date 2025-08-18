"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { NewsItem } from "@/types/news";
const PAGE_SIZE = 10;

export default function CardBody({ news, loading, setPage, page }: { news: NewsItem[]; loading: boolean; setPage: (page: number) => void; page: number; }) {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading && news.length === 0
          ? Array.from({ length: PAGE_SIZE }).map((_, idx) => (
              <Card
                key={idx}
                className="border-0 rounded-none shadow-none bg-card text-card-foreground flex flex-col gap-0 py-0"
              >
                <Skeleton className="w-full h-48 mb-6 rounded-lg" />
                <CardHeader className="p-0 items-start text-left">
                  <Skeleton className="w-2/3 h-4 mb-4" />
                  <Skeleton className="w-full h-8" />
                </CardHeader>
              </Card>
            ))
          : news.map((item, idx) => (
              <Card
                key={idx}
                className="border-0 rounded-none shadow-none bg-card text-card-foreground flex flex-col gap-0 py-0"
              >
                {item.image && item.image.startsWith("http") ? (
                  <div className="relative w-full h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={idx < 3}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                    <span className="text-gray-400 text-lg">No Image</span>
                  </div>
                )}
                <CardHeader className="p-0 items-start text-left">
                  <CardDescription className="mt-7 px-0">
                    {item.source} &middot;{" "}
                    {new Date(item.publishedAt).toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                  <CardTitle className="text-3xl font-bold px-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline block"
                    >
                      {item.title}
                    </a>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="font-bold underline text-lg px-6 py-2"
          onClick={() => setPage(page + 1)}
          disabled={loading}
        >
          {loading && news.length > 0 ? "Loading..." : "View More"}
        </button>
      </div>
    </>
  );
}
