import type { Post } from "@/types/post";

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
      // Add more paragraphs for a longer description:
      "The adoption of AI in healthcare is not without hurdles. Integration with existing systems, staff training, and the need for robust cybersecurity measures are ongoing challenges. Nevertheless, the potential benefits far outweigh the obstacles.",
      "AI-driven predictive analytics are helping hospitals anticipate patient admissions, manage resources more efficiently, and reduce wait times. These advancements are particularly valuable in emergency situations and during pandemics.",
      "Furthermore, wearable devices powered by AI are enabling continuous health monitoring, providing real-time feedback to both patients and healthcare providers. This proactive approach is leading to earlier interventions and better health outcomes.",
      "As AI continues to evolve, its role in healthcare will only expand, offering new opportunities for innovation and improved patient care.",
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
  "robotics-in-manufacturing": {
    title: "Robotics in Manufacturing: The Next Industrial Revolution",
    date: "20 June 2025",
    read: "7 min read",
    author: {
      name: "Emily Carter",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?w=900&q=80",
    ],
    links: [
      {
        label: "Robotics Business Review",
        href: "https://www.roboticsbusinessreview.com/",
      },
      {
        label: "IFR: Robotics Statistics",
        href: "https://ifr.org/worldrobotics/",
      },
    ],
    content: [
      "Robotics is transforming manufacturing by increasing efficiency, reducing costs, and improving safety. Automated robots now handle tasks ranging from assembly to quality control.",
      "The integration of AI with robotics is enabling smarter, more adaptive machines that can learn and optimize processes in real time.",
      "While robotics adoption is growing, companies must address workforce training and ethical concerns to ensure a smooth transition.",
      "Industry leaders predict that robotics will be central to the next industrial revolution, driving innovation and competitiveness.",
    ],
  },
  "cloud-computing-growth": {
    title: "Cloud Computing Growth: Powering the Digital Economy",
    date: "22 June 2025",
    read: "5 min read",
    author: {
      name: "Michael Lee",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80",
    ],
    links: [
      { label: "AWS Cloud Blog", href: "https://aws.amazon.com/blogs/aws/" },
      {
        label: "Google Cloud News",
        href: "https://cloud.google.com/blog/products/gcp",
      },
    ],
    content: [
      "Cloud computing has become the backbone of the digital economy, enabling businesses to scale rapidly and innovate faster.",
      "With the rise of hybrid and multi-cloud strategies, organizations are optimizing costs and improving resilience.",
      "Security, compliance, and data sovereignty remain top priorities as cloud adoption accelerates worldwide.",
    ],
  },
  "ai-art-creativity": {
    title: "AI Art: Redefining Creativity in the Digital Age",
    date: "25 June 2025",
    read: "4 min read",
    author: {
      name: "Sophia Turner",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80",
    ],
    links: [
      { label: "AI Artists", href: "https://aiartists.org/" },
      {
        label: "MIT Technology Review: AI Art",
        href: "https://www.technologyreview.com/topic/artificial-intelligence/",
      },
    ],
    content: [
      "AI-generated art is challenging traditional notions of creativity and authorship.",
      "Artists and technologists are collaborating to create works that blend human imagination with machine intelligence.",
      "The debate continues: Can AI truly be creative, or is it simply remixing existing ideas?",
    ],
  },
  "cybersecurity-threats-2025": {
    title: "Cybersecurity Threats in 2025: What to Watch For",
    date: "28 June 2025",
    read: "9 min read",
    author: {
      name: "Alex Kim",
      avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
    ],
    links: [
      { label: "Krebs on Security", href: "https://krebsonsecurity.com/" },
      {
        label: "Cybersecurity & Infrastructure Security Agency",
        href: "https://www.cisa.gov/",
      },
    ],
    content: [
      "Cybersecurity threats are evolving rapidly, with attackers leveraging AI and automation to launch more sophisticated attacks.",
      "Organizations must invest in advanced security tools, employee training, and incident response planning.",
      "Zero trust architectures and proactive threat hunting are becoming standard practices for leading enterprises.",
    ],
  },
  "space-exploration-advances": {
    title: "Space Exploration Advances: Humanity's Next Frontier",
    date: "30 June 2025",
    read: "10 min read",
    author: {
      name: "Liam Patel",
      avatar: "https://randomuser.me/api/portraits/men/80.jpg",
    },
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=900&q=80",
    ],
    links: [
      {
        label: "NASA News",
        href: "https://www.nasa.gov/news/releases/latest/index.html",
      },
      { label: "Space.com", href: "https://www.space.com/news" },
    ],
    content: [
      "Space agencies and private companies are making historic advances in exploration, from Mars missions to lunar bases.",
      "Reusable rockets, miniaturized satellites, and international collaboration are accelerating progress.",
      "The next decade could see humans return to the Moon and set foot on Mars for the first time.",
    ],
  },
};

export default posts;