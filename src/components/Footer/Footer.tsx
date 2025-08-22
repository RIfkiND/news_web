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
    <footer className="w-full py-8 bg-neutral-900 text-neutral-200 flex flex-col items-center justify-center mt-auto">
      <div className="flex items-center space-x-2 mb-4">
        <span className="font-bold text-lg">🍏 News Portal</span>
        <span className="text-neutral-400">|</span>
        <span className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
      <div className="flex space-x-6 mb-2">
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
      <div className="mt-2 text-xs text-neutral-500 text-center">
        Made with <span className="text-pink-400">♥</span> by your team.
        <br />
        Follow us for more updates!
      </div>
    </footer>
  );
}
