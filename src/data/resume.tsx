import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anay Patil",
  initials: "",
  url: "https://anaypatil.dev",
  location: "Pune, MH",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "Backend, Cloud, and AI Developer focused on building scalable and intelligent systems.",
  summary:
    "I am a third-year Computer Engineering student at Pune Institute of Computer Technology with strong foundations in backend system design and full-stack development. I have built applications using Express.js, Spring Boot, FastAPI, and Next.js, with React on the frontend. I am currently expanding into Agentic AI engineering, working with frameworks such as LangChain, LangGraph, and Google ADK to build intelligent systems powered by large language models. I also have experience using cloud platforms to deploy and scale backend services and AI-powered applications. I am particularly interested in building intelligent systems that combine robust software architecture with modern AI capabilities.",
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
        "Building AI agents and orchestrating APIs while making them production-ready using Google Cloud.",
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
        "Took full ownership of a backend product built with Java and Spring Boot, designing, implementing, and testing access control mechanisms that reduced unauthorized API usage by 40%, enforced payment compliance across agencies, and restricted platform access for agents belonging to agencies blocked due to unpaid bills. Furthermore I evaluated and selected a suitable third-party credit verification provider after comparing multiple options, enabling reliable real-time tenant credit checks for the United Kingdom (UK) rental process.",
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
      title: "Real-Time Stock Market Simulator",
      href: "https://github.com/anaypatil101/realtime-stock-simulator",
      dates: "",
      active: true,
      description:
        "Real-time stock market simulator using WebSockets for live price updates, virtual trading with Razorpay wallet top-ups, and AI-based insights to guide buy decisions.",
      technologies: [
        "Node.js",
        "Express.js",
        "JWT Authentication",
        "MongoDB",
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
      ],
      image: "/medic-ai.png"
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
      title: "Rentora - Property Rental Marketplace",
      href: "https://github.com/anaypatil101/PASC-Co-Curricular-Activity-Management-System",
      dates: "",
      active: true,
      description: "Rentora is a rental marketplace platform where users can list properties, explore available listings, and directly message landlords. The application includes location visualization using the Mapbox API, image storage through the Cloudinary API, secure authentication using JSON Web Token, and a MongoDB database, built with Next.js.",
      technologies: [
        "Next.js",
        "Next Auth",
        "Typescript",
        "Mongo DB",
        "Mapbox API",
        "Cloudinary",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anaypatil101/rentora-rental-marketplace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rentora.png"
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
