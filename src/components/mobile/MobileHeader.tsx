import {
  FaBars,
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useEffect, useState,useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
const categories = [
  { key: "all", label: "All" },
  { key: "tech", label: "Tech" },
  { key: "ai", label: "AI" },
  { key: "programming", label: "Programming" },
  { key: "blockchain", label: "Blockchain" },
  { key: "robotics", label: "Robotics" },
  // Add more tech-related categories as needed
];
const VISIBLE_COUNT = 2;
export default function MobileHeader({
  onSearch,
//   onCategoryChange,
  search,
  selectedCat,
}: {
  onSearch: (value: string) => void;
  onCategoryChange: (cat: string) => void;
  search: string;
  selectedCat: string;
}) {
  // ...existing state...
  const [lang, setLang] = useState<"en" | "id">("en");
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [catIndex, setCatIndex] = useState(0);
  const router = useRouter();
  const catSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (catSliderRef.current) {
      const childWidth = catSliderRef.current.scrollWidth / categories.length;
      catSliderRef.current.scrollTo({
        left: catIndex * childWidth,
        behavior: "smooth",
      });
    }
  }, [catIndex]);

  const handlePrev = () => {
    setCatIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCatIndex((prev) => Math.min(prev + 1, categories.length - 3));
  };
  const showLeftArrow = catIndex > 0;
  const showRightArrow = catIndex < categories.length - VISIBLE_COUNT;

  return (
    <>
      <header className="bg-white py-2 shadow-sm">
        <div className="px-3 flex items-center justify-between">
          {/* Left: Hamburger & Search Icon */}
          <div className="flex items-center gap-2">
            {loading ? (
              <>
                <Skeleton className="w-8 h-8 rounded" />
                <Skeleton className="w-7 h-7 rounded-full" />
              </>
            ) : (
              <>
                <button className="p-1 rounded">
                  <FaBars size={20} color="#000" />
                </button>
                {/* Search Icon */}
                <button
                  className="p-2 rounded"
                  onClick={() => setShowSearch((v) => !v)}
                  aria-label="Show search"
                >
                  {showSearch ? (
                    <FaTimes size={16} color="#888" />
                  ) : (
                    <FaSearch size={16} color="#888" />
                  )}
                </button>
              </>
            )}
          </div>
          {/* Center: Title */}
          {loading ? (
            <Skeleton className="w-24 h-7 rounded" />
          ) : (
            <h1 className="text-xl font-bold whitespace-nowrap">.TechNews</h1>
          )}
          {/* Right: Language Switch */}
          <div className="flex items-center gap-1">
            {loading ? (
              <>
                <Skeleton className="w-8 h-6 rounded-full" />
                <Skeleton className="w-8 h-6 rounded-full" />
              </>
            ) : (
              <>
                <button
                  className={`cursor-pointer px-2 py-1 rounded-full text-xs font-semibold transition ${
                    lang === "en"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <button
                  className={`cursor-pointer px-2 py-1 rounded-full text-xs font-semibold transition ${
                    lang === "id"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setLang("id")}
                >
                  ID
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      {/* Category Bar - smooth slider with arrows */}
      <nav
        className="bg-white pt-2 pb-1 sticky top-0 z-10"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex items-center gap-2 px-2 border-b">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              className="p-1"
              onClick={handlePrev}
              aria-label="Previous categories"
            >
              <FaChevronLeft size={16} color="#888" />
            </button>
          )}
          {/* Categories - smooth scrollable */}
          <div
            className="flex gap-2 flex-1 overflow-hidden"
            ref={catSliderRef}
            style={{
              scrollBehavior: "smooth",
              transition: "scroll-left 0.3s",
              minWidth: 0,
            }}
          >
            {loading
              ? Array.from({ length: categories.length }).map((_, i) => (
                  <Skeleton key={i} className="w-14 h-6 rounded" />
                ))
              : categories.map((cat, idx) => {
                  // Calculate opacity: fully visible for the 2 in view, others semi-transparent
                  let opacity = 0.4;
                  if (idx >= catIndex && idx < catIndex + VISIBLE_COUNT) {
                    opacity = 1;
                  }
                  return (
                    <button
                      key={cat.key}
                      onClick={() => {
                        if (cat.key === "all") {
                          router.push("/");
                        } else {
                          router.push(`/category/${cat.key}`);
                        }
                      }}
                      className={`px-2 pt-2 text-xs font-semibold transition relative
                        ${
                          selectedCat === cat.key
                            ? "text-black font-bold"
                            : "text-gray-500 hover:text-black"
                        }`}
                      style={{
                        minWidth: 50,
                        flex: "0 0 33.3333%",
                        opacity,
                        pointerEvents: opacity === 1 ? "auto" : "none",
                        transition: "opacity 0.3s",
                      }}
                    >
                      <span className="relative inline-block cursor-pointer">
                        {cat.label}
                        {selectedCat === cat.key && (
                          <span
                            className="block h-1 bg-black rounded-t mt-1"
                            style={{ width: "100%" }}
                          />
                        )}
                      </span>
                    </button>
                  );
                })}
          </div>
          {/* Right Arrow */}
          {showRightArrow && (
            <button
              className="p-1"
              onClick={handleNext}
              aria-label="Next categories"
            >
              <FaChevronRight size={16} color="#888" />
            </button>
          )}
        </div>
      </nav>
      {/* Search Bar (toggle) - now below nav */}
      {showSearch && !loading && (
        <div className="px-3 mt-2">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search AI news..."
              className="pl-3 pr-8 py-1 text-sm border border-black focus:outline-none focus:ring-2 focus:ring-black w-full bg-white rounded-none"
              autoFocus
            />
            <FaSearch
              className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
              size={14}
              color="#888"
            />
          </div>
        </div>
      )}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}