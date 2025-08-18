import React from "react";

type HeaderProps = {
  lang: string;
  setLang: (lang: string) => void;
  search: string;
  setSearch: (s: string) => void;
};

export default function Header({ lang, setLang, search, setSearch }: HeaderProps) {
  return (
    <header className="w-full bg-white text-black py-6 px-4 shadow-md mb-6" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3 w-full">
          {/* Hamburger menu */}
          <button className="mr-3 flex flex-col justify-center items-center w-8 h-8 group" aria-label="Menu">
            <span className="block w-6 h-0.5 bg-gray-700 mb-1 rounded transition-all group-hover:bg-blue-500"></span>
            <span className="block w-6 h-0.5 bg-gray-700 mb-1 rounded transition-all group-hover:bg-blue-500"></span>
            <span className="block w-6 h-0.5 bg-gray-700 rounded transition-all group-hover:bg-blue-500"></span>
          </button>
          <h1 className="text-3xl font-bold tracking-tight" style={{ fontFamily: 'Times New Roman, Times, serif' }}>AI News Portal</h1>
          <div className="flex gap-2 ml-4">
            <button
              className={`rounded-full border-2 border-gray-200 shadow-sm w-10 h-7 flex items-center justify-center transition-all ${lang === "en" ? "ring-2 ring-blue-400" : ""}`}
              style={{ background: lang === "en" ? "#f0f8ff" : "#fff" }}
              onClick={() => setLang("en")}
              aria-label="English"
              type="button"
            >
              <span role="img" aria-label="English" className="text-lg">🇬🇧</span>
            </button>
            <button
              className={`rounded-full border-2 border-gray-200 shadow-sm w-10 h-7 flex items-center justify-center transition-all ${lang === "id" ? "ring-2 ring-blue-400" : ""}`}
              style={{ background: lang === "id" ? "#f0f8ff" : "#fff" }}
              onClick={() => setLang("id")}
              aria-label="Indonesia"
              type="button"
            >
              <span role="img" aria-label="Indonesia" className="text-lg">🇮🇩</span>
            </button>
          </div>
          {/* Search bar */}
          <input
            className="ml-4 flex-1 max-w-xs px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 bg-gray-50 text-base"
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ fontFamily: 'Times New Roman, Times, serif' }}
          />
        </div>
        <span className="text-sm opacity-80 mt-2 sm:mt-0" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          Latest AI headlines from top sources
        </span>
      </div>
    </header>
  );
}
