import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-6 flex flex-col items-center justify-center mt-auto">
      {/* Categories Section */}
      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="/ai"
          className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-orange-500 transition"
        >
          AI
        </a>
        <a
          href="/blockchain"
          className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-orange-500 transition"
        >
          Blockchain
        </a>
        <a
          href="/gadgets"
          className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-orange-500 transition"
        >
          Gadgets
        </a>
        <a
          href="/startups"
          className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-orange-500 transition"
        >
          Startups
        </a>
        <a
          href="/programming"
          className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-orange-500 transition"
        >
          Programming
        </a>
        <a
          href="/opensource"
          className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-orange-500 transition"
        >
          Open Source
        </a>
        <a
          href="/iot"
          className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-orange-500 transition"
        >
          IoT
        </a>
        <a
          href="/other"
          className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-orange-500 transition"
        >
          Other
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-full max-w-4xl border-t border-neutral-800 mb-6"></div>

      {/* Bottom Links */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="flex flex-row flex-wrap gap-4 text-sm text-neutral-400">
          <a href="/about" className="hover:text-blue-400 transition">
            About Us
          </a>
          <a href="/careers" className="hover:text-blue-400 transition">
            Careers
          </a>
          <a href="/contact" className="hover:text-blue-400 transition">
            Contact
          </a>
          <a href="/privacy" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-400 transition">
            Terms
          </a>
        </div>
        <div className="flex space-x-5">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="mailto:info@example.com"
            aria-label="Email"
            className="hover:text-green-400 transition-colors"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
      <div className="mt-6 text-xs text-neutral-500 text-center">
        <span className="font-bold text-lg text-white">🍏 News Portal</span>
        <span className="mx-2 text-neutral-400">|</span>©{" "}
        {new Date().getFullYear()} All rights reserved.
        <br />
        Made with <span className="text-pink-400">♥</span> by Rifki.
      </div>
    </footer>
  );
}
