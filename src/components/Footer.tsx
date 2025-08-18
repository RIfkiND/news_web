import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-6 px-4 mt-10 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xs opacity-80">
          Powered by <a href="https://newsapi.org/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">NewsAPI</a>,{' '}
          <a href="https://gnews.io/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">GNews</a>, and{' '}
          <a href="https://open-platform.theguardian.com/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">The Guardian</a> APIs.<br />
          &copy; {new Date().getFullYear()} AI News Portal. All rights reserved.
        </span>
        <span className="text-xs opacity-60 mt-2 sm:mt-0">
          Made with <span className="text-red-500">♥</span> using Next.js & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
