"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-10 relative w-full">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-9xl font-extrabold text-gray-300 select-none"
          >
            404
          </motion.h1>
        </div>

        <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for could not be found. 
          It may have been moved, deleted, or never existed.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-orange-500 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
