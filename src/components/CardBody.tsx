"use client";

import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { NewsItem } from "@/types/news";
const PAGE_SIZE = 10;

export default function CardBody({
  news,
  loading,
  setPage,
  page,
  category,
}: {
  news: NewsItem[];
  loading: boolean;
  setPage: (page: number) => void;
  page: number;
  category?: string;
}) {
  const heading =
    category && category.trim().length > 0
      ? category.charAt(0).toUpperCase() + category.slice(1) + " News"
      : "Top Highlights";

 return (
   <div className="w-full max-w-7xl mx-auto">
     <h2 className="text-7xl font-extrabold my-25 relative inline-block">
       {heading}
       <span
         className="block absolute left-0 mx-auto"
         style={{
           height: "25px",
           background: "#bae6fd",
           borderRadius: "0px",
           bottom: "2px",
           width: "100%",
           zIndex: -1,
         }}
       />
     </h2>
     <div className="flex flex-col gap-16">
       {loading && news.length === 0 ? (
         Array.from<NewsItem | undefined>({ length: PAGE_SIZE }).map(
           (_, idx) => (
             <div key={idx} className="flex flex-row gap-8 items-center">
               <Skeleton className="w-[420px] h-64 rounded-2xl" />
               <div className="flex-1">
                 <Skeleton className="w-3/4 h-12 mb-4" />
                 <Skeleton className="w-1/2 h-6" />
               </div>
             </div>
           )
         )
       ) : news.length === 0 ? (
         <div
           className="text-3xl text-center text-gray-400 py-24 font-bold"
           style={{ fontFamily: "Montserrat, sans-serif" }}
         >
           No news found for this category.
         </div>
       ) : (
         news.map((item, idx) => (
           <div
             key={item.url}
             className="flex flex-col md:flex-row gap-8 items-center bg-white p-4 rounded-2xl"
             style={{ border: "none" }}
           >
             {item.image && item.image.startsWith("http") ? (
               <div className="relative w-full md:w-[420px] h-64 flex-shrink-0">
                 <Image
                   src={item.image}
                   alt={item.title}
                   fill
                   className="object-cover rounded-2xl"
                   sizes="(max-width: 768px) 100vw, 420px"
                   priority={idx < 3}
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = "none";
                   }}
                 />
                 {/* Golden badge */}
                 <span
                   className="absolute top-4 left-4 px-5 py-2 rounded-xl text-base font-extrabold"
                   style={{
                     background: "#FFD700",
                     color: "#111",
                     fontFamily: "Montserrat, sans-serif",
                     boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
                   }}
                 >
                   {item.source}
                 </span>
               </div>
             ) : (
               <div className="relative w-full md:w-[420px] h-64 bg-gray-200 flex items-center justify-center rounded-2xl flex-shrink-0">
                 <span className="text-gray-400 text-lg">No Image</span>
               </div>
             )}
             <div className="flex-1 flex flex-col items-start justify-center">
               {/* Source - Date line */}
               <div
                 className="text-gray-700 text-lg font-bold mb-2"
                 style={{ fontFamily: "Montserrat, sans-serif" }}
               >
                 {item.source}
                 {item.publishedAt && (
                   <>
                     <span className="mx-2 font-extrabold text-lg">-</span>
                     {new Date(item.publishedAt).toLocaleDateString("en-US", {
                       weekday: "long",
                       year: "numeric",
                       month: "long",
                       day: "numeric",
                     })}
                   </>
                 )}
               </div>
               <a
                 href={item.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:underline block"
               >
                 <h3
                   className="text-4xl mb-2 text-black"
                   style={{
                     fontFamily: "Times New Roman, Times, serif",
                     fontWeight: 900,
                     letterSpacing: "-0.01em",
                   }}
                 >
                   {item.title}
                 </h3>
               </a>
               <div
                 className="text-gray-600 text-lg mt-2"
                 style={{ fontFamily: "Montserrat, sans-serif" }}
               >
                 {item.author && (
                   <span className="font-semibold">{item.author}</span>
                 )}
                 {item.author && " · "}
                 {item.publishedAt
                   ? new Date(item.publishedAt).toLocaleTimeString([], {
                       hour: "2-digit",
                       minute: "2-digit",
                     })
                   : ""}
               </div>
             </div>
           </div>
         ))
       )}
     </div>
     {news.length > 0 && (
       <div className="flex justify-center mt-12">
         <button
           className="font-extrabold underline text-2xl px-8 py-3 cursor-pointer"
           onClick={() => setPage(page + 1)}
           disabled={loading}
         >
           {loading && news.length > 0 ? "Loading..." : "View More"}
         </button>
       </div>
     )}
   </div>
 );
}
