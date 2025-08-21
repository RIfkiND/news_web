"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import { Skeleton } from "@/components/ui/skeleton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type NewsItem = {
  title: string;
  url: string;
  publishedAt: string;
  source: string;
  image?: string;
  description?: string;
};

export default function MobileCarousel({
  news = [],
  loading = false,
}: {
  news?: NewsItem[];
  loading?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const slides = news.slice(0, 6);

  const goToSlide = (index: number) => {
    if (swiper) swiper.slideTo(index);
  };

  if ((!slides.length && !loading) || !news) {
    return (
      <div className="w-full max-w-xl mx-auto p-0 h-48 flex items-center justify-center text-gray-400">
        No news available for carousel.
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto p-0 pb-10">
      <div className="relative overflow-visible">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-64 sm:h-72"
        >
          {(loading ? Array(1).fill(null) : slides).map((item, idx) => (
            <SwiperSlide key={(item?.url ?? "slide") + "-" + idx}>
              <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden">
                {/* Background Image */}
                {loading ? (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl"
                    style={{
                      backgroundImage: `url(${item.image || "/globe.svg"})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/30 rounded-xl" />
                  </div>
                )}
                {/* Overlayed Text */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                  {loading ? (
                    <>
                      <Skeleton className="w-24 h-6 mb-2" />
                      <Skeleton className="w-3/4 h-8 mb-2" />
                      <Skeleton className="w-1/2 h-5" />
                    </>
                  ) : (
                    <>
                      <span className="bg-blue-400/90 text-gray-900 px-3 py-1 rounded-lg text-xs font-bold mb-2 self-start">
                        {item.source}
                      </span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h2 className="text-2xl font-bold text-white mb-1 leading-tight drop-shadow-md">
                          {item.title}
                        </h2>
                      </a>
                      <span className="text-xs text-gray-200 drop-shadow-sm">
                        {item.publishedAt
                          ? new Date(item.publishedAt).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : ""}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination Dots and Arrows */}
        <div className="w-full flex justify-between items-center mt-2 px-2">
          {/* Pagination Dots */}
          <div className="flex gap-3">
            {(loading ? Array(6).fill(null) : slides).map((_, index) =>
              loading ? (
                <Skeleton key={index} className="w-3 h-3 rounded-full" />
              ) : (
                <button
                  key={(slides[index]?.url ?? "dot") + "-" + index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 border transition-colors duration-200 cursor-pointer ${
                    index === activeIndex
                      ? "bg-slate-800 border-black"
                      : "bg-white border-gray-400 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{ borderRadius: "9999px", borderWidth: 1.5 }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
