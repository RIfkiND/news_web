"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useParams } from "next/navigation";
import type { Post } from "@/types/post";

// Example posts database (replace with real fetch in production)
// If content is a string, treat as HTML (WYSIWYG); if array, treat as paragraphs.
const posts: Record<
  string,
  Post & {
    content: string | string[];
    images?: string[];
    links?: { label: string; href: string }[];
  }
> = {
  "ai-revolutionizes-healthcare": {
    title:
      "AI Revolutionizes Healthcare: Transforming Patient Care and Diagnostics",
    date: "17 June 2025",
    read: "8 min read",
    author: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=900&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
    ],
    links: [
      {
        label: "WHO: AI in Healthcare",
        href: "https://www.who.int/news-room/spotlight/artificial-intelligence-in-healthcare",
      },
      {
        label: "Nature: AI for Medical Diagnosis",
        href: "https://www.nature.com/articles/d41586-023-00000-0",
      },
    ],
    content: [
      "Artificial Intelligence (AI) is rapidly transforming the healthcare industry, from patient care to diagnostics and medical research. With the integration of advanced neural networks and big data, AI models are now able to detect rare diseases from medical images with unprecedented accuracy.",
      "This breakthrough is expected to revolutionize early diagnosis, reduce costs, and improve patient care worldwide. Hospitals and clinics are leveraging AI-powered tools to assist doctors in making faster and more accurate decisions.",
      "Moreover, AI is streamlining administrative tasks, optimizing hospital workflows, and enabling personalized treatment plans. As technology continues to evolve, the future of healthcare looks increasingly intelligent and efficient.",
      "However, experts emphasize the importance of ethical considerations, data privacy, and collaboration between technologists and healthcare professionals to ensure responsible AI adoption.",
      "Recent studies have shown that AI can outperform human radiologists in certain diagnostic tasks, such as detecting lung cancer or diabetic retinopathy. This has led to a surge in investment and research in AI-driven healthcare solutions.",
      "Despite the promise, there are challenges. Data privacy, algorithmic bias, and the need for transparent decision-making remain critical concerns. Regulatory bodies are working to establish guidelines for the safe and effective use of AI in clinical settings.",
      "In the coming years, we can expect AI to play an even greater role in drug discovery, personalized medicine, and remote patient monitoring. The collaboration between healthcare professionals and AI developers will be key to unlocking the full potential of this technology.",
      "For more information, see the resources below.",
    ],
  },
  "quantum-computing-breakthrough": {
    title: "Quantum Computing Breakthrough: Faster Computations Ahead",
    date: "18 June 2025",
    read: "6 min read",
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    ],
    links: [
      { label: "IBM Quantum", href: "https://www.ibm.com/quantum-computing/" },
      {
        label: "Quantum Magazine",
        href: "https://www.quantamagazine.org/tag/quantum-computing/",
      },
    ],
    content: `
      <h2>Quantum Leap in Computing</h2>
      <p>Quantum computing is set to change the world of computation. New algorithms promise to solve problems that were previously impossible for classical computers.</p>
      <ul>
        <li>Cryptography</li>
        <li>Materials Science</li>
        <li>Artificial Intelligence</li>
      </ul>
      <p>Researchers are optimistic about the future applications in these fields. Quantum computers, leveraging the principles of superposition and entanglement, can process information in fundamentally new ways. This could lead to breakthroughs in secure communications, drug discovery, and optimization problems that are currently intractable.</p>
      <p>Despite the excitement, significant engineering challenges remain. Quantum bits (qubits) are extremely sensitive to their environment, and error correction is a major hurdle. However, with continued investment and research, experts believe practical quantum computers could become a reality within the next decade.</p>
      <p>For more information, check the resources below.</p>
    `,
  },
};

function getRandomImage(images: string[] | undefined) {
  if (!images || images.length === 0) return null;
  const idx = Math.floor(Math.random() * images.length);
  return images[idx];
}

export default function PostPage() {
  const { slug } = useParams();
  const post = posts[slug as string];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
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

  // Pick a random image for the top (main) image
  const randomMainImage = getRandomImage(post.images) || post.image;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
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
          {/* Main random image */}
          <div className="w-full h-80 md:h-[420px] rounded-2xl overflow-hidden mb-10 relative">
            <Image
              src={randomMainImage}
              alt={post.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <article className="prose prose-invert prose-lg max-w-none">
            {Array.isArray(post.content) ? (
              post.content.map((para, idx) => (
                <React.Fragment key={idx}>
                  <p>{para}</p>
                  {/* Insert a random image after every 2nd paragraph if available */}
                  {post.images &&
                    post.images.length > 0 &&
                    (idx + 1) % 2 === 0 && (
                      <div className="w-full h-64 my-8 rounded-xl overflow-hidden relative">
                        <Image
                          src={getRandomImage(post.images)!}
                          alt={`${post.title} random`}
                          fill
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                </React.Fragment>
              ))
            ) : (
              // eslint-disable-next-line react/no-danger
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </article>
          {/* Additional Images (not shown as main or in content) */}
          {post.images && post.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 mt-10">
              {post.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full h-64 relative rounded-xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`${post.title} image ${idx + 1}`}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}
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
