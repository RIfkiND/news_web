"use client";
import { FaEnvelope } from "react-icons/fa";

export default function NewsLetterCard() {
  return (
    <div className="w-full flex flex-col gap-6 mt-16">
      <h2 className="text-4xl font-extrabold text-white mb-2 text-left">
        Subscribe to our Newsletter
      </h2>
      <p className="text-neutral-300 text-lg mb-2 text-left max-w-2xl">
        Get the latest tech and AI news delivered straight to your inbox. Stay
        informed with weekly updates, insights, and exclusive content!
      </p>
      <div
        className="flex flex-row items-center rounded-2xl shadow-md px-8 py-8 w-full mx-auto"
        style={{
          background:
            "linear-gradient(90deg, #f3a128 0%, #f6a029 50%, #f6a029 100%)",
        }}
      >
        <div className="flex-1">
          <div className="text-2xl font-semibold text-white mb-2">
            News Letter
          </div>
          <div className="text-white text-base font-medium">
            Get the latest tech and AI news delivered straight to your inbox
            every week.
          </div>
        </div>
        <form className="flex flex-row items-center gap-2 ml-8 w-full max-w-md">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-10 pr-28 py-3.5 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-2 rounded-lg bg-black text-white  font-bold transition h-[42px]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
