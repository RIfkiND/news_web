import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { NewsItem } from "@/types/news";

const carouselSlides = [
  {
    title: "Welcome to Today News!",
    image: "/globe.svg",
    desc: "Stay updated with the latest headlines."
  },
  {
    title: "Tech & Business",
    image: "/vercel.svg",
    desc: "Explore technology and business news."
  },
  {
    title: "Sports & Entertainment",
    image: "/next.svg",
    desc: "Catch up on sports and entertainment."
  }
];

export default function Carousel({ news, loading }: { news: NewsItem[]; loading: boolean }) {
  return (
    <div className="mb-8">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500 }}
      >
        {carouselSlides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative h-32 w-32 mb-4">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-lg text-gray-500">{slide.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
