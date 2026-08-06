import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare
} from "lucide-react";

export const profile = {
  name: "Vishwanath Rajendran",
  shortName: "Vishwanath Rajendran",
  role: "AI Engineer | GenAI / LLM Specialist | AI Fullstack Developer",
  location: "UAE (Immediately Available)",
  email: "vishwanathamrish@gmail.com",
  phone: "+91 87542 42363",
  whatsapp: "https://wa.me/918754242363",
  github: "https://github.com/Vishwanathamrish",
  linkedin: "https://linkedin.com/in/vishwanath-r-4a940721b",
  twitter: "https://x.com/Vishwa84829045",
  resume: "/assets/VISHWANATH_UAE_Resume_2026.pdf",
  avatar: "/assets/Dubai%20Office%20Look(5).png"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "AI/ML", href: "#ai" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { label: "experience", value: "1+ yr" },
  { label: "Live enterprise products", value: "4" },
  { label: "Hiring focus", value: "UAE / Remote" }
];

export const skillGroups = [
  {
    title: "Full-Stack AI Products",
    icon: Code2,
    level: 91,
    skills: ["Learner dashboards", "Admin console", "Assessment UI", "Certificate automation", "Course catalogue", "API-connected UX"]
  },
  {
    title: "GenAI & LLM Systems",
    icon: BrainCircuit,
    level: 94,
    skills: ["LLM applications", "RAG", "AI Agents", "Prompt engineering", "Semantic search", "Arabic/English AI"]
  },
  {
    title: "Backend & API Engineering",
    icon: ServerCog,
    level: 92,
    skills: ["Python", "FastAPI", "REST APIs", "MySQL", "Assessment logic", "Server DB integration"]
  },
  {
    title: "ML, NLP & Data Science",
    icon: Database,
    level: 88,
    skills: ["NLP", "Transformers", "R Programming", "Model evaluation", "Pandas", "NumPy"]
  },
  {
    title: "Automation & DevOps",
    icon: Cloud,
    level: 84,
    skills: ["Vercel", "Docker", "Git", "GitHub", "Cron jobs", "Celery"]
  },
  {
    title: "Enterprise Data Integration",
    icon: TerminalSquare,
    level: 88,
    skills: ["HikVision integration", "Device-to-server sync", "GPS attendance", "Geo-fencing", "Multi-branch HRMS", "Power BI"]
  }
];

export const techMarquee = [
  "Next.js",
  "TypeScript",
  "Python",
  "R Programming",
  "FastAPI",
  "LangChain",
  "RAG",
  "AI Agents",
  "LLMs",
  "Hugging Face",
  "FAISS",
  "Qdrant",
  "n8n",
  "Flowise",
  "Cron/Celery",
  "HikVision",
  "GPS Attendance",
  "Geo-fencing",
  "Multi-Branch HRMS",
  "Streamlit",
  "Vercel",
  "Docker",
  "SQL",
  "MySQL",
  "HTML",
  "CSS",
  "v0.dev",
  "Cursor",
  "GitHub Copilot",
  "Antigravity",
  "Qoder",
  "Codex",
  "Claude Chat",
  "Claude Skills",
  "Claude Cowork",
  "Claude Code",
  "Claude Projects",
  "Power BI"
];

export const experience = [
  {
    company: "DigiDARA Technologies Pvt Ltd",
    role: "AI Engineer",
    period: "May 2025 - Present",
    location: "Tiruchirapalli, India",
    points: [
      "Led end-to-end delivery of DigiDARA AI Academy, a full-stack AI-powered LMS covering architecture, frontend development, backend engineering, admin systems, and AI integration.",
      "Engineered Python/FastAPI LMS workflows for course delivery, timed assessments, automated result evaluation, digital certificate generation, learner dashboards, course catalogue, enrollment flows, exam UI, and certificate access.",
      "Built centralized admin controls for course configuration, learner administration, exam scheduling, certificate issuance, real-time analytics, and automated email notifications for enrollment, exams, results, and certificates.",
      "Deployed two context-aware LMS chatbots: a Platform Assistant for navigation/onboarding/course discovery and a Course-Specific Doubt Clarification Chatbot trained on individual course content.",
      "Contributed to Career Mate AI Agent for KNCET Career Portal with automated job aggregation, LLM-powered recommendations, conversational career guidance, real-time REST API connectivity, placement funnel tracking, and institution-wide analytics.",
      "Developed DigiDARA People HRMS with employee management, attendance, leave administration, HikVision biometric device-to-server synchronization every 30 minutes via Cron/Celery, and two AI chatbots connected to live databases and internal APIs.",
      "Delivered GIA People, a client-facing HRMS extension with GPS-based attendance, 100m geo-fenced mobile check-in, independent multi-branch employee/attendance/leave data, centralized branch visibility, and branch-level control."
    ]
  },
  {
    company: "CodSoft, Accenture, PwC",
    role: "Data Analytics & BI Simulations",
    period: "2024 - 2025",
    location: "Remote",
    points: [
      "Worked on analytics, visualization, and business intelligence cases with executive-style storytelling.",
      "Translated raw datasets into decision-ready insights using Python, SQL, Excel, and Power BI.",
      "Strengthened enterprise communication habits for stakeholder-facing data work."
    ]
  }
];

export const projects = [
  {
    title: "DigiDARA AI Academy",
    category: "Live Enterprise LMS",
    description:
      "AI-powered LMS covering course delivery, enrollments, certification exams, automated evaluation, certificate automation, admin control panel workflows, email automation, admin analytics, and two AI chatbot systems: a general platform support chatbot plus a course-specific learning chatbot that works separately for each course.",
    github: profile.github,
    live: "http://digidaraaiacademy.com/",
    stack: ["LMS", "Admin Control Panel", "Certificate Automation", "Python", "FastAPI", "REST APIs", "LLM chatbots", "Email automation"],
    metrics: ["2 chatbot systems", "~80% less manual certification work"],
    coverImage: "/assets/DigiDARA%20AI%20Academy.png",
    accent: "teal"
  },
  {
    title: "Career Mate AI Agent",
    category: "Live Institutional Career AI",
    description:
      "AI-enabled career portal for student job discovery, conversational career guidance, placement tracking, and department-level analytics.",
    github: profile.github,
    live: "https://kncetcareer.in",
    stack: ["LLM agent", "FastAPI", "Job aggregation", "Analytics", "REST APIs"],
    metrics: ["100+ listings/day", "3,000+ listings/month"],
    coverImage: "/assets/Career%20Mate%20AI%20Agent.png",
    accent: "amber"
  },
  {
    title: "DigiDARA People",
    category: "Live HRMS + Biometric AI",
    description:
      "Production HRMS with employee management, attendance, leave workflows, MySQL-backed server data, HikVision biometric device-to-server sync, and two AI chatbots for public and authenticated employee queries.",
    github: profile.github,
    live: "https://digidarapeople.com",
    stack: ["HRMS", "MySQL", "HikVision Biometric Integration", "Device-to-Server Sync", "Python", "FastAPI", "Cron/Celery", "LLM chatbots"],
    metrics: ["30-min sync", "2-3 hrs/day saved"],
    coverImage: "/assets/DigiDARA People.png",
    accent: "blue"
  },
  {
    title: "GIA People",
    category: "Client HRMS + GPS Attendance",
    description:
      "Client-facing HRMS extending DigiDARA People with GPS attendance, 100m geo-fenced mobile check-in, MySQL-backed HR data, independent multi-branch employee/attendance/leave data, and centralized branch-level admin control.",
    github: profile.github,
    live: "https://giaholidays.com/giapeople/",
    stack: ["HRMS", "GPS Attendance", "100m Geo-Fencing", "MySQL", "Multi-Branch Management", "FastAPI", "Admin dashboard"],
    metrics: ["100m geo-fence", "Mobile attendance", "Branch-level control"],
    coverImage: "/assets/GIA People.png",
    accent: "teal"
  },
  {
    title: "NAUTICORE Marine Equipment Repairing LLC – Corporate Website",
    category: "Client Project / Web Development",
    description:
      "After understanding the business requirements, service offerings, and customer journey, I designed, developed, and deployed a production-ready corporate website for a Dubai-based marine equipment repair and maintenance company. The responsive mobile-first website improves digital visibility through a clear service showcase, quote request workflow, SEO-optimized structure, and WhatsApp-powered customer enquiries.",
    github: profile.github,
    live: "https://nauticore-marine-equipment-repairing-cq58ib2p6.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: ["Mobile-first UI", "WhatsApp enquiries", "SEO + Vercel deployment"],
    coverImage: "/assets/NAUTICORE%20Marine%20Equipment%20Repairing%20LLC.png",
    accent: "blue"
  },
  {
    title: "Real Estate AI Advisor",
    category: "UAE GenAI Lead System",
    description:
      "AI-powered UAE real-estate advisor with Bayut API property recommendations, conversational investor guidance, email lead capture, Google Sheets storage, automated email alerts, and Hot/Warm/Cold lead scoring.",
    github: profile.github,
    live: "coming-soon",
    stack: ["n8n", "Flowise", "Bayut API", "LLM workflows", "Google Sheets", "Email automation"],
    metrics: ["UAE market", "Email lead capture", "Lead scoring"],
    coverImage: "/assets/Real Estate AI Advisor.png",
    accent: "slate"
  },
  {
    title: "DOCUMIND",
    category: "Enterprise AI Document Intelligence",
    description:
      "Document intelligence platform that turns static documents into multilingual Arabic/English assistants with RAG, FAISS semantic search, summarization, extraction, and conversation memory.",
    github: "https://github.com/Vishwanathamrish/DOCUMIND-ENTERPRISE-AI",
    live: "https://www.linkedin.com/posts/vishwanath-r-4a940721b_artificialintelligence-machinelearning-rag-activity-7445334215187140609-lD7z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdpUgEBhtLhjSEDnf7mVaTacUP9VemfGpg",
    stack: ["RAG", "FAISS", "LLMs", "Arabic/English", "Document parsing", "API-ready architecture"],
    metrics: ["Enterprise-ready", "Multilingual", "Queryable documents"],
    coverImage: "/assets/DOCUMIND.png",
    accent: "teal"
  },
  {
    title: "AI Banking Customer Support",
    category: "UAE Fintech AI Assistant",
    description:
      "Bilingual Arabic/English banking support assistant for account inquiries, service requests, transaction support, escalation workflows, and voice-driven interaction.",
    github: "https://github.com/Vishwanathamrish/AI-BANKING-CUSTOMER-SUPPORT-CHATBOT-ARABIC-ENGLISH-",
    live: "https://www.linkedin.com/posts/vishwanath-r-4a940721b_artificialintelligence-machinelearning-conversationalai-activity-7447500992348151808-DJkm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdpUgEBhtLhjSEDnf7mVaTacUP9VemfGpg",
    stack: ["LLMs", "NLP intent recognition", "Speech-to-text", "Text-to-speech", "Banking workflows"],
    metrics: ["Arabic + English", "Voice assistant", "Fintech-ready"],
    coverImage: "/assets/AI Banking Customer Support.png",
    accent: "amber"
  },
  {
    title: "AI Health & Wellness Coach",
    category: "LLM Health Assistant",
    description:
      "Full-stack LLM-powered health assistant using Streamlit, LangChain, and Mistral via Ollama, delivering personalized wellness recommendations from structured user inputs with health tracking and voice responses.",
    github: "https://github.com/Vishwanathamrish/HEALTH_COACH_AGENT",
    live: "https://www.linkedin.com/posts/vishwanath-r-4a940721b_ai-python-streamlit-activity-7349402363377459202-dG42?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdpUgEBhtLhjSEDnf7mVaTacUP9VemfGpg",
    stack: ["Streamlit", "LangChain", "Mistral", "Ollama", "gTTS", "Prompt engineering"],
    metrics: ["Sleep/mood/activity tracking", "Voice responses", "Real-time dashboards"],
    coverImage: "/assets/AI Health & Wellness Coach.png",
    accent: "blue"
  },
  {
    title: "TechMate AI Agent",
    category: "Semantic Search Educational Assistant",
    description:
      "AI educational assistant using Python, FastAPI, and LangChain that lets students query course material and receive context-aware answers through FAISS and Transformer-based semantic search.",
    github: "https://github.com/Vishwanathamrish/TechMate",
    live: "coming-soon",
    stack: ["Python", "FastAPI", "LangChain", "FAISS", "Transformers", "REST APIs"],
    metrics: ["Course Q&A", "Semantic search", "Learning recommendations"],
    coverImage: "/assets/TechMate AI Agent.png",
    accent: "teal"
  }
];

export const companyProjectTitles = [
  "DigiDARA AI Academy",
  "Career Mate AI Agent",
  "DigiDARA People",
  "GIA People"
];

export const clientProjectTitles = [
  "NAUTICORE Marine Equipment Repairing LLC – Corporate Website"
];

export const personalProjectTitles = [
  "DOCUMIND",
  "AI Banking Customer Support",
  "Real Estate AI Advisor",
  "AI Health & Wellness Coach",
  "TechMate AI Agent"
];

export const aiCapabilities = [
  {
    icon: Bot,
    title: "LLM Applications",
    text: "Enterprise chatbots, career agents, banking assistants, wellness coaches, education assistants, HRMS assistants, prompt flows, and API orchestration."
  },
  {
    icon: Sparkles,
    title: "RAG & Semantic Search",
    text: "FAISS retrieval, embeddings, document chunking, domain-specific context assembly, Arabic/English support, and answer grounding."
  },
  {
    icon: Rocket,
    title: "Automation Systems",
    text: "n8n, Flowise, email automation, Google Sheets lead capture, scheduled jobs, and operational AI workflows."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Ready AI",
    text: "FastAPI backends, live dashboards, biometric data integration, REST APIs, measurable outcomes, and production delivery habits."
  }
];

export const certifications = [
  "Master's in Data Science & Business Analytics",
  "B.Sc. in Mathematics",
  "Python, SQL & Excel - Udemy",
  "Machine Learning, NLP, RAG, and LLM project portfolio",
  "Power BI, Excel, statistics, and analytics practice"
];

export const codingProfiles = [
  { label: "GitHub", value: "Active AI projects and source code portfolio", icon: Github, href: profile.github }
];

export const contactActions = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "WhatsApp", href: profile.whatsapp, icon: MessageCircle },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github }
];
