import { FaBars, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
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

export default function Header({
  onSearch,
  // onCategoryChange,
  search,
  selectedCat,
}: {
  onSearch: (value: string) => void;
  onCategoryChange: (cat: string) => void;
  search: string;
  selectedCat: string;
}) {
  const [lang, setLang] = useState<"en" | "id">("en");
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false); // For mobile nav
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setShowMenu(false);
  }, [selectedCat]);
 
  return (
    <>
      <header className="py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Left: Hamburger and search */}
          <div className="flex items-center gap-3">
            {loading ? (
              <Skeleton className="w-10 h-10 rounded" />
            ) : (
              <button
                className="p-2 rounded "
                onClick={() => setShowMenu((v) => !v)}
                aria-label="Open menu"
              >
                <FaBars size={32} color="#000" />
              </button>
            )}
            <div className="relative ml-2 md:ml-7 w-full max-w-xs">
              {loading ? (
                <Skeleton className="w-36 md:w-48 h-10 rounded-full" />
              ) : (
                <>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Search AI news..."
                    className="pl-4 pr-10 py-2 text-base md:text-xl rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-black w-full"
                    style={{ minWidth: "120px", maxWidth: "230px" }}
                  />
                  <FaSearch
                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    size={18}
                    color="#000"
                  />
                </>
              )}
            </div>
          </div>
          {/* Center: Title */}
          {loading ? (
            <Skeleton className="w-32 md:w-52 h-10 md:h-12 rounded" />
          ) : (
            <h1 className="text-3xl md:text-6xl font-bold whitespace-nowrap mr-0 md:mr-100">
              .TechNews
            </h1>
          )}
          {/* Right: Language Switch */}
          <div className="flex items-center gap-2">
            {loading ? (
              <>
                <Skeleton className="w-12 md:w-16 h-8 md:h-10 rounded-full" />
                <Skeleton className="w-12 md:w-16 h-8 md:h-10 rounded-full" />
              </>
            ) : (
              <>
                <button
                  className={`cursor-pointer px-3 md:px-5 py-1.5 md:py-2 rounded-full text-base md:text-xl font-semibold transition ${
                    lang === "en"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <button
                  className={`cursor-pointer px-3 md:px-5 py-1.5 md:py-2 rounded-full text-base md:text-xl font-semibold transition ${
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
      {/* Category Bar */}
      <nav
        className="bg-white pt-4 md:pt-6"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          {/* Desktop category bar */}
          <div className="border-b gap-3 md:gap-6 justify-center hidden md:flex">
            {loading
              ? Array.from({ length: categories.length }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="w-16 md:w-20 h-7 md:h-8 rounded"
                  />
                ))
              : categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => {
                      if (cat.key === "all") {
                        router.push("/");
                      } else {
                        router.push(`/category/${cat.key}`);
                      }
                    }}
                    className={`px-2 md:px-4 pt-3 md:pt-4 text-base md:text-xl font-semibold transition relative
                ${
                  selectedCat === cat.key
                    ? "text-black font-bold"
                    : "text-gray-500 hover:text-black"
                }`}
                    style={{ minWidth: 60 }}
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
                ))}
          </div>
          {/* Mobile category bar (drawer style) */}
          <div
            className={`md:hidden fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <div className="flex justify-between items-center px-4 py-4 border-b">
              <span className="text-2xl font-bold">Categories</span>
              <button
                className="text-2xl"
                onClick={() => setShowMenu(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-2 px-4 py-4">
              {loading
                ? Array.from({ length: categories.length }).map((_, i) => (
                    <Skeleton key={i} className="w-32 h-8 rounded" />
                  ))
                : categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => {
                        if (cat.key === "all") {
                          router.push("/");
                        } else {
                          router.push(`/category/${cat.key}`);
                        }
                        setShowMenu(false);
                      }}
                      className={`text-left px-2 py-2 text-lg font-semibold transition rounded ${
                        selectedCat === cat.key
                          ? "bg-black text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
            </div>
          </div>
          {/* Overlay for mobile menu */}
          {showMenu && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
              onClick={() => setShowMenu(false)}
            />
          )}
        </div>
      </nav>
    </>
  );
}
