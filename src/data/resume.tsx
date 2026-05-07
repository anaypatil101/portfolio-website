import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anay Patil",
  initials: "",
  url: "https://anaypatil.dev",
  location: "Pune, MH",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "I build AI systems where outputs are evaluated, governed, and trusted before they're used.",
  summary:
    "I'm a third-year Computer Engineering student at PICT, Pune - currently building the AI recommendation pipeline at MindStriX from scratch, and previously a Backend Intern at Tenancy Passport, London\n\nI don't just integrate AI - I think about what happens when it's wrong. My projects are designed around evaluation, governance, and trust: from a multi-agent data context layer that flags ungoverned definitions before propagating them, to a RAG clinical assistant where answer faithfulness is the core constraint.\n\nI've rewired how I build - Cursor and Claude Code are daily tools, not experiments.\n\nI build systems that reach real users.",
  avatarUrl: "/me.png",
  skills: [
    "Langchain",
    "Generative AI",
    "Tensorflow",
    "Numpy",
    "Pandas",
    "React",
    "Next.js",
    "Spring Boot",
    "FastAPI",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "anaypatil0@gmail.com",
    tel: "+91 8999725775",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anaypatil101",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anaypatil29/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "",
        url: "https://x.com/anaytech",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "anaypatil0@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MindstriX Technologies",
      href: "https://www.linkedin.com/company/mindstrix/",
      badges: [],
      location: "Pune, IND",
      title: "AI Backend Engineer Intern",
      logoUrl: "/mindstrix.png",
      start: "April 2026",
      end: "Present",
      description:
        "Building the AI recommendation pipeline at MindStriX from scratch - Gemini Vision room analysis, multimodal embeddings fused via normalize(img + 0.5×text), and HNSW-indexed pgvector on GCP. Zero existing infrastructure, every architectural decision owned, serving 900+ indexed products.",
    },
    {
      company: "Tenancy Passport",
      href: "https://www.tenancypassport.com/",
      badges: [],
      location: "London, UK",
      title: "Backend Developer Intern",
      logoUrl: "/tenancypassport.png",
      start: "Jan 2026",
      end: "April 2026",
      description:
        "Built agency-level access control that blocked non-paying agencies from critical paid endpoints - enforcing payment compliance across the platform and reducing unauthorized API usage by 40%. Evaluated Experian, Equifax, and TransUnion for real-time tenant credit verification - integrated and validated Experian's API in sandbox against UK rental workflows.",
    },
  ],
  education: [
    {
      school: "Pune Institute Of Computer Technology",
      href: "https://pict.edu",
      degree: "Bachelor of Engineering in Computer Engineering",
      logoUrl: "/pict.png",
      start: "2024",
      end: "2027",
    },
    {
      school: "Maharashtra State Board Of Technical Education",
      href: "https://msbte.ac.in",
      degree: "Diploma in Computer Engineering",
      logoUrl: "/msbte.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Multi-Agent Data Context & Trust Layer",
      href: "https://github.com/anaypatil101/Multi-Agent-Data-Context-Trust-Layer",
      dates: "",
      active: true,
      description:
        "Enterprise AI fails where data governance fails. Built a LangGraph multi-agent pipeline that transforms ungoverned schemas into a trusted context layer - definitions, semantic types, PII classification, and calibrated trust scores. Because wrong context is worse than no context.",
      technologies: [
        "LangGraph",
        "LangChain",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "GCP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anaypatil101/Multi-Agent-Data-Context-Trust-Layer",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://web-production-16ba9.up.railway.app/demo/html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/context-layer-output.png",
    },
    {
      title: "MedicAI - RAG based Clinical Reference Assistant",
      href: "https://github.com/anaypatil101/MedicAI",
      dates: "",
      active: true,
      description:
        "Context-aware RAG medical assistant that provides accurate, cited answers to clinical queries. Includes a PDF ingestion and embedding pipeline with a FAISS vector store for fast, low-latency, document-grounded retrieval that reduces hallucinations.",
      technologies: [
        "Python",
        "Langchain",
        "HuggingFace",
        "Llama 3",
        "FAISS",
        "FastAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anaypatil101/MedicAI",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://medicai1.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/medic-ai.png",
    },
    {
      title: "Real-Time Stock Market Simulator",
      href: "https://github.com/anaypatil101/realtime-stock-simulator",
      dates: "",
      active: true,
      description:
        "Real-time stock market simulator using WebSockets for live price updates, virtual trading with Razorpay wallet top-ups, and AI-based insights to guide buy decisions.",
      technologies: [
        "Groq LLM",
        "MongoDB",
        "Node.js",
        "Express.js",
        "JWT Authentication",
        
        "Socket.IO",
        "TailwindCSS",
        "React.js",
        "Typescript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anaypatil101/realtime-stock-simulator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stock-simulator.gif",
    },
    {
      title: "Pulzion '25 Event Management System",
      href: "https://pulzion.pictacm.in/",
      dates: "September 2025 - October 2025",
      active: true,
      description:
        "Built and deployed the Event Management System for Pulzion ’25 enabling users to register and purchase event tickets, handling 500+ registrations and 1500+ visits, with HTTPS enabled using Certbot and served via Nginx.",
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Prisma ORM",
        "TailwindCSS",
        "Shadcn UI",
        "Nginx"
      ],
      links: [
        {
          type: "Website",
          href: "https://pulzion.pictacm.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pulzion.png",
    },
    {
      title: "PASC Co-Curricular Activity Management Platform",
      href: "https://github.com/anaypatil101/PASC-Co-Curricular-Activity-Management-System",
      dates: "",
      active: true,
      description: "The CCA platform for the PICT ACM Student Chapter helps students track their credit hours and attendance across various chapter events. It includes authentication, a personalized dashboard, announcements, event discovery, RSVP functionality, and an achievements system that gives students a clear view of their participation and contributions.",
      technologies: [
        "Next.js",
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Prisma ORM",
        "TailwindCSS",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://pasc-cca-frontend-2025-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cca.png"
    },
     {
      title: "AI News Digest",
      href: "https://github.com/anaypatil101/News-Digest-Agent",
      dates: "",
      active: true,
      description:
        "News Digest Agent is an AI application that autonomously researches the web and generates personalized news digests using a Research Agent and Writer Agent.",
      technologies: [
        "LangChain",
        "OpenAI GPT",
        "FastAPI",
        "Python",
        "Uvicorn",
        "TavilyAPI",
        "BeautifulSoup4",
        "React Js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anaypatil101/News-Digest-Agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/news-digest.png",
    }
  ],
  hackathons: [
    {
      title: "Software Hackathon - CCOEW",
      dates: "April 2025",
      location: "Pune, MH",
      description:
        "Developed ZeroQ, a smart checkout system enabling users to complete purchases offline using fingerprint authentication, with fingerprint data securely hashed using the SHA-256. The project finished in the Top 5 overall and received a Special Mention from judges and mentors from Mastercard at a software hackathon hosted by Cummins College of Engineering Pune.",
      image:
        "/mastercard.png",
        win:"Special Mention from Mastercard Judges",
      mlh: "",
      links: [],
    },
    {
      title: "TechFiesta '25",
      dates: "October 2024",
      location: "Pune, MH",
      description:
        "Developed end-to-end PathwayGenerator to help students and developers discover clear learning paths for specific goals. The platform generates curated roadmaps of relevant skills and technologies, simplifying how users navigate complex domains and plan what to learn next.",
      image:
        "/pict.png",
      win: "",
      mlh: "",
      links: [],
    },
    {
      title: "TechMaze - KJ Somaiya",
      dates: "March 2024",
      location: "Mumbai, MH",
      description:
        "Participated in TechMaze, a state-level intercollegiate technical competition hosted at KJ Somaiya College. As my first major tech competition, the experience helped strengthen my problem-solving and programming skills and sparked my interest in participating in more technical competitions and hackathons.",
      image:
        "/techmaze.png",
        win:"Special Mention from Mastercard Judges",
      mlh: "",
      links: [],
    }
  ],
} as const;
