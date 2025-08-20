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
  onCategoryChange,
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
const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Left: Hamburger and search */}
          <div className="flex items-center gap-3">
            {loading ? (
              <Skeleton className="w-10 h-10 rounded" />
            ) : (
              <button className="p-2 rounded">
                <FaBars size={32} color="#000" />
              </button>
            )}
            <div className="relative ml-7">
              {loading ? (
                <Skeleton className="w-48 h-10 rounded-full" />
              ) : (
                <>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Search AI news..."
                    className="pl-4 pr-10 py-2 text-xl rounded-full border border-black focus:outline-none focus:ring-2 focus:ring-black"
                    style={{ minWidth: "195px", maxWidth: "230px" }}
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
            <Skeleton className="w-52 h-12 rounded" />
          ) : (
            <h1 className="text-6xl font-bold whitespace-nowrap mr-100">
              .RifkiNews
            </h1>
          )}
          {/* Right: Language Switch */}
          <div className="flex items-center gap-2">
            {loading ? (
              <>
                <Skeleton className="w-16 h-10 rounded-full" />
                <Skeleton className="w-16 h-10 rounded-full" />
              </>
            ) : (
              <>
                <button
                  className={`cursor-pointer px-5 py-2 rounded-full text-xl font-semibold transition ${
                    lang === "en"
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <button
                  className={`cursor-pointer px-5 py-2 rounded-full text-xl font-semibold transition ${
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
        className="bg-white pt-6"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-b flex gap-6 justify-center">
            {loading
              ? Array.from({ length: categories.length }).map((_, i) => (
                  <Skeleton key={i} className="w-20 h-8 rounded" />
                ))
              : categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => {
                      if (cat.key === "all") {
                        router.push("/"); // Go to homepage for "all"
                      } else {
                        router.push(`/category/${cat.key}`); // Go to category page
                      }
                    }}
                    className={`px-4 pt-4 text-xl font-semibold transition relative
                ${
                  selectedCat === cat.key
                    ? "text-black font-bold"
                    : "text-gray-500 hover:text-black"
                }`}
                    style={{ minWidth: 70 }}
                  >
                    <span className="relative inline-block cursor-pointer">
                      {cat.label}
                      {selectedCat === cat.key && (
                        <span
                          className="block h-1.5 bg-black rounded-t mt-1"
                          style={{ width: "100%" }}
                        />
                      )}
                    </span>
                  </button>
                ))}
          </div>
        </div>
      </nav>
    </>
  );
}
