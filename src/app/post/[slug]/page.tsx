"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import { useParams } from "next/navigation";
import posts from "@/components/Data/post";

// Example posts database (replace with real fetch in production)
// If content is a string, treat as HTML (WYSIWYG); if array, treat as paragraphs.


export default function PostPage() {
  const { slug } = useParams();
  const post = posts[slug as string];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-0 py-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <Link
            href="/"
            className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-0 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="bg-blue-600 text-white px-4 py-2 mb-6">
            Featured
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-neutral-400 text-sm mb-8">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read}</span>
            <span>·</span>
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
          </div>
          <div className="w-full h-80 md:h-[420px] rounded-2xl overflow-hidden mb-10 relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Additional Images */}
          {/* {post.images && post.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {post.images.map((img, idx) => (
                <div key={idx} className="w-full h-64 relative rounded-xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`${post.title} image ${idx + 1}`}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )} */}
          <article className="prose prose-invert prose-lg max-w-none">
            {Array.isArray(post.content) ? (
              post.content.map((para, idx) => <p key={idx}>{para}</p>)
            ) : (
              
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </article>
          {/* Additional Links */}
          {post.links && post.links.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-2">Related Links</h3>
              <ul className="list-disc list-inside space-y-2">
                {post.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}