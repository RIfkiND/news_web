"use client";

import Link from "next/link";
// import Image from "next/image";
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
        <div className="mb-10 relative h-64 w-full">
          {/* <Image
            src="/assets/ilustrasi/404.svg"
            alt="Page not found"
            fill
            className="object-contain"
            priority
          /> */}
        </div>

        <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin
          telah dipindahkan, dihapus, atau tidak pernah ada.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
