"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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

export default function Carousel({
  news = [],
  loading = false,
}: {
  news?: NewsItem[];
  loading?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const slides = news.slice(0, 6);

  const goToPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const goToNext = () => {
    if (swiper) swiper.slideNext();
  };

  const goToSlide = (index: number) => {
    if (swiper) swiper.slideTo(index);
  };

    if ((!slides.length && !loading) || !news) {
      return (
        <div className="w-full max-w-7xl mx-auto p-0 h-64 flex items-center justify-center text-gray-400">
          No news available for carousel.
        </div>
      );
    }

  return (
    <div className="w-full max-w-7xl mx-auto p-0 pb-40">
      <div className="relative overflow-visible">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-[380px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[560px]"
        >
          {(loading ? Array(1).fill(null) : slides).map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                {loading ? (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-xl" /> // more rounded
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl" // more rounded
                    style={{
                      backgroundImage: `url(${item.image || "/globe.svg"})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20 rounded-xl" />{" "}
                    {/* more rounded */}
                  </div>
                )}
                {/* Badge (source) */}
                <div className="absolute top-4 left-4 z-10">
                  {loading ? (
                    <Skeleton className="w-16 h-6 rounded-md" />
                  ) : (
                    <span
                      className="bg-blue-400 text-gray-700 px-6 py-2 rounded-2xl text-base font-bold"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        minWidth: "120px",
                        minHeight: "40px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.source}
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Card is OUTSIDE Swiper, so it can overflow */}
        <div className="w-full flex justify-center -mt-60 relative z-30 pointer-events-auto">
          <div
            className="bg-white shadow-lg p-10 w-full max-w-6xl flex flex-col"
            style={{
              borderRadius: "2rem", // more square, less elongated
              minHeight: 700, // more height
              maxHeight: 700,
              aspectRatio: "1 / 1", // make it closer to a square
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
            }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              {loading ? (
                <Skeleton className="w-60 h-5" />
              ) : (
                <span>
                  {slides[activeIndex]?.source}
                  <span className="mx-2 font-bold text-lg">-</span>
                  {slides[activeIndex]?.publishedAt
                    ? new Date(
                        slides[activeIndex].publishedAt
                      ).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : ""}
                </span>
              )}
            </div>
            {loading ? (
              <>
                <Skeleton className="w-3/4 h-10 mb-4" />
                <Skeleton className="w-full h-6 mb-2" />
                <Skeleton className="w-5/6 h-6 mb-2" />
                <Skeleton className="w-2/3 h-6 mb-8" />
              </>
            ) : (
              <>
                <a
                  href={slides[activeIndex]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h2 className="text-7xl font-bold text-gray-900 mb-6 leading-tight hover:underline">
                    {slides[activeIndex]?.title}
                  </h2>
                </a>
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {slides[activeIndex]?.description ||
                      "No description available."}
                  </p>
                </div>
              </>
            )}
            {/* Pagination Dots and Arrows fixed at the bottom of the card */}
            <div className="mt-auto pt-6">
              <div className="flex justify-between items-center">
                {/* Pagination Dots */}
                <div className="flex gap-3">
                  {(loading ? Array(6).fill(null) : slides).map((_, index) =>
                    loading ? (
                      <Skeleton key={index} className="w-3 h-3 rounded-full" />
                    ) : (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 border-2 transition-colors duration-200 cursor-pointer ${
                          index === activeIndex
                            ? "bg-black border-black"
                            : "bg-white border-black hover:bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        style={{ borderRadius: "9999px" }}
                      />
                    )
                  )}
                </div>
                {/* React Icon arrows in circle buttons */}
                <div className="flex gap-4">
                  {loading ? (
                    <>
                      <Skeleton className="w-10 h-10 rounded-full" />
                      <Skeleton className="w-10 h-10 rounded-full" />
                    </>
                  ) : (
                    <>
                      <button
                        onClick={goToPrev}
                        className="transition-colors duration-200 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 cursor-pointer"
                        aria-label="Previous slide"
                        style={{
                          fontSize: "1.5rem",
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      >
                        <FiChevronLeft />
                      </button>
                      <button
                        onClick={goToNext}
                        className="transition-colors duration-200 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 cursor-pointer"
                        aria-label="Next slide"
                        style={{
                          fontSize: "1.5rem",
                          width: "2.5rem",
                          height: "2.5rem",
                        }}
                      >
                        <FiChevronRight />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
