import { Bot, BrainCircuit, Code2, Database, Github, Linkedin, Mail, MessageCircle, ServerCog, Workflow } from "lucide-react";

export const profile = {
  name: "Vishwanath Rajendran", shortName: "Vishwanath Rajendran", role: "AI Engineer",
  specialization: "Generative AI, Agentic AI, RAG & AI Applications", location: "Dubai, UAE",
  email: "vishwanathamrish@gmail.com", whatsapp: "https://wa.me/971508399243",
  github: "https://github.com/Vishwanathamrish", linkedin: "https://linkedin.com/in/vishwanath-r-4a940721b",
  twitter: "https://x.com/Vishwa84829045", resume: "/assets/VISHWANATH_UAE_Resume_2026.pdf",
  avatar: "/assets/Dubai%20Office%20Look(5).png"
};

export const navItems = [
  { label: "About", href: "#about" }, { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" }, { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" }, { label: "Contact", href: "#contact" }
];

export const expertise = [
  { icon: BrainCircuit, title: "Generative AI Applications", description: "LLM-powered applications, assistants, structured generation, context engineering, and API-connected intelligent experiences." },
  { icon: Database, title: "RAG & Knowledge Systems", description: "Document processing, embeddings, vector search, retrieval pipelines, and grounded assistants built around enterprise knowledge." },
  { icon: Bot, title: "AI Agents & Automation", description: "Systems that retrieve information, call tools and APIs, and coordinate multi-step business workflows with appropriate human control." },
  { icon: ServerCog, title: "Production AI Engineering", description: "Python, FastAPI, REST APIs, databases, Docker, deployment, and frontend integration that turn AI prototypes into usable applications." }
];

export type Project = { title: string; subtitle: string; category: string; featured: boolean; professional: boolean; privacy?: string; description: string; contributions: string[]; technologies: string[]; liveUrl?: string; githubUrl?: string; image?: string; imageFit?: "cover" | "contain" };

export const projects: Project[] = [
  { title: "DigiDARA Finance", subtitle: "Finance Operations & Automation Platform", category: "Finance Operations • Workflow Automation", featured: true, professional: true, privacy: "Private / Production", description: "Contributing to a business finance platform covering structured invoicing, collection workflows, recurring bill and subscription tracking, renewal payments, financial notifications, and contract management.", contributions: ["Invoice Collection Workflows", "Bill & Subscription Tracker", "Renewal & Payment Automation", "Contract Management"], technologies: [], image: "/assets/DigiDARA%20Finance%20Cover%20v3.png", imageFit: "cover" },
  { title: "DigiDARA AI Academy", subtitle: "AI-Enabled Learning & Certification Platform", category: "Enterprise AI • Education Technology", featured: true, professional: true, privacy: "Professional Project", description: "Contributed to an AI-enabled learning platform for course delivery, assessments, and certification. Developed backend and admin workflows for exams, results, certificates, and learner communication while integrating platform and course-specific AI assistants.", contributions: ["Assessment workflows", "Certificate automation", "Admin operations", "Context-aware assistants"], technologies: ["Python", "FastAPI", "REST APIs", "LLMs", "Email Automation"], liveUrl: "https://digidaraaiacademy.com/", image: "/assets/DigiDARA%20AI%20Academy%20Cover%20v2.png", imageFit: "cover" },
  { title: "Career Mate", subtitle: "AI-Enabled Career Intelligence Platform", category: "Agentic AI • Career Technology", featured: true, professional: true, privacy: "Professional Project", description: "Contributed to an institutional career platform that connects job discovery, conversational guidance, placement tracking, and department analytics. Integrated intelligent recommendations and API-backed workflows into a practical student experience.", contributions: ["Job aggregation", "Career guidance", "Placement workflows", "Institution analytics"], technologies: ["LLMs", "FastAPI", "REST APIs", "Analytics"], liveUrl: "https://kncetcareer.in", image: "/assets/Career%20Mate%20AI%20Agent.png", imageFit: "cover" },
  { title: "DOCUMIND", subtitle: "Multilingual Document Intelligence System", category: "RAG • LLM Engineering • Document AI", featured: true, professional: false, description: "Built a document intelligence system that turns static documents into queryable Arabic and English knowledge experiences. The retrieval pipeline combines document parsing, semantic search, grounded responses, summarization, extraction, and conversation memory.", contributions: ["RAG pipeline", "FAISS semantic search", "Arabic / English support", "Document extraction"], technologies: ["RAG", "FAISS", "LLMs", "Document Parsing"], githubUrl: "https://github.com/Vishwanathamrish/DOCUMIND-ENTERPRISE-AI", liveUrl: "https://www.linkedin.com/posts/vishwanath-r-4a940721b_artificialintelligence-machinelearning-rag-activity-7445334215187140609-lD7z", image: "/assets/DOCUMIND.png", imageFit: "cover" },
  { title: "DigiDARA People", subtitle: "HRMS with Biometric Integration", category: "Enterprise / Professional", featured: false, professional: true, privacy: "Professional Project", description: "Developed HR workflows for employee, attendance, and leave management, including scheduled HikVision device-to-server synchronization and database-connected assistants.", contributions: ["HR workflows", "Biometric sync", "Scheduled jobs"], technologies: ["Python", "FastAPI", "MySQL", "Cron / Celery"], liveUrl: "https://digidarapeople.com", image: "/assets/DigiDARA People.png" },
  { title: "GIA People", subtitle: "Multi-Branch HR Operations Platform", category: "Enterprise / Professional", featured: false, professional: true, privacy: "Client Project", description: "Extended HR operations with GPS attendance, geo-fenced mobile check-in, and independent multi-branch employee, attendance, and leave workflows.", contributions: ["GPS attendance", "Geo-fencing", "Branch administration"], technologies: ["FastAPI", "MySQL", "GPS", "Admin Dashboard"], liveUrl: "https://giaholidays.com/giapeople/", image: "/assets/GIA People.png" },
  { title: "NAUTICORE Marine", subtitle: "Marine Services Corporate Website", category: "Client Project • Application Development", featured: false, professional: true, privacy: "Client Project", description: "Designed, developed, and deployed a responsive corporate website for a Dubai-based marine equipment repair and maintenance company after translating its business requirements, services, and customer journey into a clear digital experience.", contributions: ["Service-focused information architecture", "Quote request workflow", "WhatsApp enquiries", "SEO-ready structure"], technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"], liveUrl: "https://nauticore-marine-equipment-repairing-cq58ib2p6.vercel.app/", image: "/assets/NAUTICORE%20Marine%20Cover%20v2.png" },
  { title: "AI Banking Customer Support", subtitle: "Bilingual Banking Assistant", category: "Generative AI", featured: false, professional: false, description: "Developed an Arabic and English banking assistant for service requests, transaction support, escalation workflows, and voice interaction.", contributions: ["Intent recognition", "Bilingual support", "Voice interaction"], technologies: ["LLMs", "NLP", "Speech-to-Text", "Text-to-Speech"], githubUrl: "https://github.com/Vishwanathamrish/AI-BANKING-CUSTOMER-SUPPORT-CHATBOT-ARABIC-ENGLISH-", liveUrl: "https://www.linkedin.com/posts/vishwanath-r-4a940721b_artificialintelligence-machinelearning-conversationalai-activity-7447500992348151808-DJkm", image: "/assets/AI Banking Customer Support.png" },
  { title: "Real Estate AI Advisor", subtitle: "UAE Property Advisory & Lead Automation", category: "Generative AI • Workflow Automation", featured: false, professional: false, description: "Built a UAE real-estate advisor that combines Bayut API property recommendations with conversational investor guidance and automated lead follow-up workflows.", contributions: ["Bayut API property recommendations", "Conversational investor guidance", "Email lead capture and alerts", "Hot / Warm / Cold lead scoring"], technologies: ["n8n", "Flowise", "Bayut API", "LLM Workflows", "Google Sheets", "Email Automation"], image: "/assets/Real Estate AI Advisor.png", imageFit: "cover" },
  { title: "TechMate AI Agent", subtitle: "Semantic Learning Assistant", category: "RAG / NLP", featured: false, professional: false, description: "Built an educational assistant that retrieves relevant course context and serves grounded answers through an API-backed semantic search workflow.", contributions: ["Course Q&A", "Semantic retrieval", "API serving"], technologies: ["Python", "FastAPI", "LangChain", "FAISS", "Transformers"], githubUrl: "https://github.com/Vishwanathamrish/TechMate", image: "/assets/TechMate AI Agent.png" },
  { title: "AI Health & Wellness Coach", subtitle: "LLM-Powered Wellness Assistant", category: "Generative AI", featured: false, professional: false, description: "Created a structured-input wellness assistant with personalized guidance, activity tracking, dashboards, and voice responses.", contributions: ["Structured prompting", "Health tracking", "Voice responses"], technologies: ["Streamlit", "LangChain", "Mistral", "Ollama", "gTTS"], githubUrl: "https://github.com/Vishwanathamrish/HEALTH_COACH_AGENT", image: "/assets/AI Health & Wellness Coach.png" }
];

export const experience = [
  { company: "DigiDARA Technologies Pvt Ltd", role: "AI Engineer", period: "May 2025 — Present", location: "Tiruchirapalli, India", points: ["Build and contribute to AI-powered business applications across finance, education, career technology, and HR using Python, FastAPI, LLM integrations, REST APIs, and databases.", "Develop end-to-end AI-backed features that connect intelligent capabilities with application interfaces, backend services, and real business data.", "Implement backend APIs, database workflows, scheduled automation, notifications, and operational admin experiences.", "Work across AI, backend, and application layers to move practical product capabilities into live systems."] },
  { company: "CodSoft, Accenture & PwC", role: "Data Analytics & BI Simulations", period: "2024 — 2025", location: "Remote", points: ["Completed analytics and business intelligence cases using Python, SQL, Excel, and Power BI.", "Translated datasets into decision-focused analysis and stakeholder-ready visual stories."] }
];

export const skillGroups = [
  { title: "AI, ML & GenAI", icon: BrainCircuit, skills: ["Generative AI", "Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG", "AI Agents", "Transformers", "Embeddings", "Semantic Search", "Prompt Engineering", "Context Engineering"] },
  { title: "AI Frameworks & Infrastructure", icon: Database, skills: ["LangChain", "SentenceTransformers", "Hugging Face Transformers", "PyTorch", "TensorFlow", "Qdrant", "FAISS"] },
  { title: "Backend & Data", icon: ServerCog, skills: ["Python", "FastAPI", "Flask", "SQL", "MySQL", "REST APIs", "Pandas", "NumPy", "Scikit-learn"] },
  { title: "Application Development", icon: Code2, skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"] },
  { title: "Engineering & Deployment", icon: ServerCog, skills: ["Docker", "Git", "GitHub", "Vercel", "Render"] },
  { title: "Automation", icon: Workflow, skills: ["n8n", "Flowise", "Scheduled Jobs", "Workflow Automation", "API Integration"] }
];

export const primarySkills = new Set(["LLMs", "RAG", "AI Agents", "Python", "FastAPI", "Qdrant", "React", "Next.js", "Docker"]);

export const education = [
  { degree: "M.Sc. Data Science & Business Analytics", institution: "Vels Institute of Science, Technology & Advanced Studies, Chennai", year: "2024" },
  { degree: "B.Sc. Mathematics", institution: "Sri Krishna Arts & Science College, Coimbatore", year: "2022" }
];

export const contactActions = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin }, { label: "GitHub", href: profile.github, icon: Github },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }, { label: "WhatsApp", href: profile.whatsapp, icon: MessageCircle }
];
