"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ServerCog,
  Sparkles,
  Workflow
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MotionDiv, Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import {
  aiCapabilities,
  certifications,
  codingProfiles,
  companyProjectTitles,
  contactActions,
  experience,
  personalProjectTitles,
  profile,
  projects,
  skillGroups,
  stats,
  techMarquee
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function AvailabilityBadge() {
  return (
    <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
      Immediate availability for UAE AI, ML, and GenAI roles
    </div>
  );
}

function TypingLine() {
  const words = useMemo(() => ["LLM systems", "FastAPI services", "RAG workflows", "AI SaaS products"], []);
  const [index, setIndex] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setIndex((value) => (value + 1) % words.length)}
      className="rounded-md text-primary underline decoration-primary/30 underline-offset-8 transition hover:decoration-primary"
      aria-label="Cycle professional focus"
    >
      {words[index]}
    </button>
  );
}

function ProjectVisual({ accent, title, coverImage }: { accent: string; title: string; coverImage?: string }) {
  const color =
    accent === "amber"
      ? "from-amber-400/30 to-amber-500/5"
      : accent === "blue"
        ? "from-sky-400/30 to-sky-500/5"
        : accent === "slate"
          ? "from-slate-400/30 to-slate-500/5"
          : "from-teal-400/30 to-teal-500/5";
  const companyCoverMap: Record<
    string,
    { label: string; headline: string; panels: string[]; signals: string[]; footer: string }
  > = {
    "DigiDARA AI Academy": {
      label: "LMS Command Center",
      headline: "Courses, exams, certificates, and AI learning support",
      panels: ["Courses", "Exams", "Certificates"],
      signals: ["Platform AI", "Course AI"],
      footer: "Admin + Learner Experience"
    },
    "Career Mate AI Agent": {
      label: "Career Intelligence Portal",
      headline: "Job matching, placement tracking, and student analytics",
      panels: ["Jobs", "Students", "Funnel"],
      signals: ["Career Agent", "Placement BI"],
      footer: "KNCET Career Portal"
    },
    "DigiDARA People": {
      label: "HRMS + Biometric AI",
      headline: "Employees, attendance, leave, chatbots, and device sync",
      panels: ["Employees", "Attendance", "Leave"],
      signals: ["HikVision Sync", "HR Chatbots"],
      footer: "Live HR Operations"
    },
    "GIA People": {
      label: "Client HRMS Platform",
      headline: "GPS attendance, geo-fencing, branches, and admin control",
      panels: ["GPS Check-in", "Branches", "Leave"],
      signals: ["100m Geo-Fence", "Branch Admin"],
      footer: "Mobile Attendance System"
    }
  };
  const companyCover = companyCoverMap[title];

  if (coverImage) {
    return (
      <div className="project-cover-frame relative aspect-[16/10] overflow-hidden rounded-lg border p-2">
        <img
          src={coverImage}
          alt={`${title} professional cover`}
          loading="lazy"
          className="h-full w-full rounded-md object-cover shadow-sm transition duration-500 group-hover:scale-[1.015]"
        />
      </div>
    );
  }

  if (companyCover) {
    return (
      <div className={cn("relative aspect-[16/10] overflow-hidden rounded-lg border bg-gradient-to-br", color)}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.40),transparent_45%,rgba(20,184,166,0.12))]" />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="rounded-full border bg-background/75 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            Company Project
          </span>
        </div>

        <div className="absolute left-4 right-4 top-12 rounded-lg border bg-background/78 p-4 shadow-glass backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{companyCover.label}</p>
              <h4 className="mt-2 max-w-md text-sm font-bold leading-5 text-foreground">{companyCover.headline}</h4>
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
              <BriefcaseBusiness className="h-5 w-5" />
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {companyCover.panels.map((panel) => (
              <div key={panel} className="rounded-md border bg-muted/55 p-3">
                <div className="h-2 w-10 rounded-full bg-primary/50" />
                <p className="mt-3 text-[11px] font-bold">{panel}</p>
                <div className="mt-2 h-8 rounded bg-background/65" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {companyCover.signals.map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center gap-1.5 rounded-full border bg-background/80 px-3 py-1.5 text-[11px] font-bold"
              >
                <Bot className="h-3.5 w-3.5 text-primary" />
                {signal}
              </span>
            ))}
          </div>
          <span className="rounded-full border bg-background/80 px-3 py-1.5 text-[11px] font-bold text-muted-foreground">
            {companyCover.footer}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden rounded-lg border bg-gradient-to-br", color)}>
      <div className="absolute inset-x-4 top-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="absolute left-4 right-4 top-12 grid gap-3">
        <div className="h-16 rounded-md border bg-background/70 p-3">
          <div className="h-2 w-24 rounded-full bg-primary/50" />
          <div className="mt-3 h-2 w-4/5 rounded-full bg-foreground/15" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-foreground/10" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-20 rounded-md border bg-background/55" />
          <div className="h-20 rounded-md border bg-background/55" />
          <div className="h-20 rounded-md border bg-background/55" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-10 pb-16 lg:grid-cols-[minmax(0,0.96fr)_minmax(420px,0.82fr)] xl:gap-14">
        <Reveal>
          <AvailabilityBadge />
          <h1 className="text-balance mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl 2xl:text-8xl">
            AI engineer building production-grade <TypingLine /> for enterprise and UAE teams.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Vishwanath Rajendran is an AI Engineer, ML Engineer, GenAI specialist, and AI Fullstack Developer with 1+
            year of production experience across LLM platforms, FastAPI backends, enterprise automation, RAG, NLP, and
            AI agents.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#projects">
                View flagship work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href={profile.resume} target="_blank">
                Download CV <Download className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="glass rounded-lg p-4 transition hover:-translate-y-1 hover:border-primary/35">
                <div className="text-2xl font-semibold text-primary">{item.value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <MotionDiv
            className="glass relative mx-auto w-full max-w-lg rounded-lg p-4 sm:p-5 xl:max-w-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative overflow-hidden rounded-lg border bg-muted">
              <Image
                src={profile.avatar}
                alt="Vishwanath Rajendran professional profile"
                width={900}
                height={1125}
                priority
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 rounded-lg border bg-background/78 p-4 shadow-sm sm:p-5">
              <p className="text-base font-semibold leading-7 sm:text-lg">{profile.role}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{profile.location}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-md border bg-background/72 p-3 shadow-sm">
                <MapPin className="mb-2 h-4 w-4 text-primary" />
                UAE
              </div>
              <div className="rounded-md border bg-background/72 p-3 shadow-sm">
                <BriefcaseBusiness className="mb-2 h-4 w-4 text-accent" />
                AI Fullstack / GenAI
              </div>
            </div>
          </MotionDiv>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Positioning"
          title="A production AI engineer with backend depth and enterprise delivery proof."
          description="I build scalable AI applications, LLM-powered platforms, backend systems, and automation workflows that move from prototype to live business usage."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            "M.Sc. in Data Science & Business Analytics with production AI, ML, NLP, statistics, and backend engineering experience.",
            "Led or contributed to three live enterprise systems: AI LMS, institutional career AI portal, and HRMS with biometric integration.",
            "Open to Dubai, Abu Dhabi, UAE AI Engineer, ML Engineer, GenAI Specialist, and remote international opportunities."
          ].map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <Card className="h-full">
                <CheckCircle2 className="mb-5 h-6 w-6 text-primary" />
                <p className="text-lg leading-8">{item}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const stackSignals = [
    ["Production AI Delivery", "Live LMS, HRMS, career AI, and client HRMS platforms"],
    ["GenAI & LLM Systems", "RAG, AI agents, prompt engineering, semantic search"],
    ["Backend + Data Integration", "FastAPI, REST APIs, device sync, server databases"],
    ["UAE Enterprise Fit", "Automation, analytics, dashboards, and measurable operations value"]
  ];
  const capabilityImpact: Record<string, string> = {
    "Full-Stack AI Products": "End-to-end product screens, HTML/CSS interfaces, admin systems, learner workflows, exam journeys, and certificate automation",
    "GenAI & LLM Systems": "Domain AI assistants, RAG workflows, AI agents, prompt systems, and semantic search experiences",
    "Backend & API Engineering": "Python/FastAPI services, secure REST APIs, MySQL-backed workflows, assessment engines, data services, and integration layers",
    "ML, NLP & Data Science": "NLP, Transformer models, R Programming, feature engineering, model evaluation, statistics, and applied analytics",
    "Automation & DevOps": "Cron/Celery jobs, email workflows, Docker readiness, Git/GitHub operations, and repeatable delivery",
    "Enterprise Data Integration": "HikVision biometric sync, device-to-server pipelines, GPS attendance, geo-fencing, branch systems, and BI"
  };
  const capabilityProof: Record<string, string> = {
    "Full-Stack AI Products": "DigiDARA AI Academy: frontend, backend, admin panel, learner dashboard, exam UI, certificate flow, and email notifications",
    "GenAI & LLM Systems": "LMS platform assistant, course-specific chatbot, Career Mate, DOCUMIND, banking AI, Qdrant/FAISS-ready retrieval, and applied personal AI systems",
    "Backend & API Engineering": "Python/FastAPI delivery across LMS, career portal, HRMS, biometric sync, GPS attendance, and admin workflows",
    "ML, NLP & Data Science": "Resume-aligned coverage across NLP, Transformers, supervised/unsupervised learning, R Programming, evaluation, Pandas, NumPy, and Scikit-learn",
    "Automation & DevOps": "Automated certification, HR attendance sync every 30 minutes, email alerts, Cron/Celery jobs, Docker, Git, and GitHub",
    "Enterprise Data Integration": "DigiDARA People and GIA People: biometric integration, server DB sync, GPS check-in, 100m geo-fencing, and multi-branch HRMS"
  };
  const roleFit: Record<string, string> = {
    "Full-Stack AI Products": "Product Layer",
    "GenAI & LLM Systems": "AI Product Layer",
    "Backend & API Engineering": "Platform Layer",
    "ML, NLP & Data Science": "Intelligence Layer",
    "Automation & DevOps": "Operations Layer",
    "Enterprise Data Integration": "Enterprise Layer"
  };
  const stackSummary = [
    ["Target roles", "AI Engineer, GenAI / LLM Specialist, AI Fullstack Developer"],
    ["Best-fit teams", "Dubai AI startups, SaaS platforms, HR tech, enterprise automation"],
    ["Delivery proof", "4 live products: AI LMS, career portal, HRMS, client HRMS"],
    ["UAE signal", "Immediately available with production AI and business-system experience"]
  ];

  return (
    <section id="skills" className="section-pad professional-band relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(20,184,166,0.10),transparent_28rem),radial-gradient(circle_at_85%_30%,rgba(245,158,11,0.10),transparent_30rem)]" />
      <div className="container">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Resume-aligned AI engineering stack for UAE product, SaaS, and enterprise teams."
          description="Organized by hiring value: full-stack AI product delivery, GenAI systems, backend/API reliability, ML/NLP depth, automation, and real enterprise data integration."
        />

        <div className="relative mb-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {stackSignals.map(([title, text]) => (
            <div key={title} className="glass rounded-lg p-4 transition hover:-translate-y-1 hover:border-primary/40">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{title}</p>
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(20,184,166,0.7)]" />
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="glass relative mb-6 overflow-hidden rounded-lg p-5">
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/10" />
          <div className="relative grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">UAE Technical Snapshot</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Skills organized by UAE hiring decisions, not buzzwords.</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                This view connects every skill to production outcomes: intelligent product experiences, reliable
                APIs, automated operations, device data integration, analytics, and measurable business value.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {stackSummary.map(([label, value]) => (
                <div key={label} className="rounded-lg border bg-background/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const featuredSkills = group.skills.slice(0, 3);
            const supportSkills = group.skills.slice(3);
            return (
              <Reveal key={group.title} delay={index * 0.04}>
                <Card className="group relative h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80" />
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
                  <div className="absolute -bottom-16 left-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl" />

                  <div className="relative p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full border bg-background/70 px-3 py-1 text-xs font-bold text-muted-foreground">
                        0{index + 1}
                      </span>
                      <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {roleFit[group.title]}
                      </span>
                    </div>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-lg border bg-background/75 text-primary shadow-sm transition group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold">{group.title}</h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            UAE hiring signal
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border bg-background/70 px-3 py-1 text-xs font-bold text-primary">
                        {group.level}% ready
                      </span>
                    </div>

                    <div className="mb-5 grid gap-3">
                      <div className="rounded-lg border bg-background/58 p-3">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Business use</p>
                        <p className="mt-2 text-sm font-semibold leading-6">{capabilityImpact[group.title]}</p>
                      </div>
                      <div className="rounded-lg border border-primary/20 bg-primary/10 p-3">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Proof signal</p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{capabilityProof[group.title]}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                        <span>Recruiter confidence</span>
                        <span>{group.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                        <MotionDiv
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${group.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.1 }}
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      {featuredSkills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center justify-between rounded-md border bg-background/70 px-3 py-2 text-sm transition group-hover:border-primary/25"
                        >
                          <span className="font-semibold">{skill}</span>
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {supportSkills.map((skill) => (
                        <span key={skill} className="rounded-full border bg-muted/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TechMarquee() {
  const priorityStack = [
    {
      label: "Full-Stack AI Product Delivery",
      text: "Learner dashboards, admin panels, course engines, exams, certificate workflows, and AI-enabled UX.",
      result: "Deliver complete AI products from interface to backend logic",
      icon: Code2
    },
    {
      label: "GenAI / LLM Systems",
      text: "LLM applications, RAG, AI agents, prompt engineering, semantic search, and domain chatbots.",
      result: "Build intelligent assistants for LMS, HRMS, documents, banking, and career workflows",
      icon: BrainCircuit
    },
    {
      label: "Backend + Enterprise Integration",
      text: "Python, FastAPI, REST APIs, server database sync, HikVision integration, GPS attendance, and geo-fencing.",
      result: "Connect AI products with real business systems and operational data",
      icon: ServerCog
    },
    {
      label: "Automation + Business Analytics",
      text: "Cron/Celery, email automation, n8n, Flowise, Power BI, Excel, dashboards, and reporting workflows.",
      result: "Reduce manual effort and turn platform data into decisions",
      icon: Workflow
    }
  ];
  const stackMatrix = [
    ["Programming & Querying", ["Python", "SQL", "R Programming"]],
    ["Frontend Foundations", ["HTML", "CSS", "Responsive UI", "Accessible Interfaces"]],
    ["Generative AI & LLMs", ["LLM Applications", "Agentic AI", "Retrieval-Augmented Generation", "AI Agents", "Prompt Engineering", "Semantic Search"]],
    ["Machine Learning & NLP", ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation", "NLP", "Transformer Models"]],
    ["Deep Learning", ["Neural Networks", "CNNs", "RNNs", "Transfer Learning", "Transformer Fine-Tuning"]],
    ["Statistics", ["Descriptive Statistics", "Inferential Statistics", "Probability", "Hypothesis Testing", "Regression Analysis"]],
    ["Frameworks & Backend", ["FastAPI", "LangChain", "Streamlit", "REST API Design"]],
    ["Libraries & Vector Search", ["Hugging Face Transformers", "FAISS", "Qdrant", "Scikit-learn", "Pandas", "NumPy"]],
    ["Deployment & DevOps", ["Docker", "Git", "GitHub", "Cron Jobs", "Celery"]],
    ["Databases & Data Integration", ["MySQL", "HikVision Biometric Integration", "Device-to-Server Sync", "GPS Attendance", "100m Geo-Fencing"]],
    ["Enterprise Product Systems", ["LMS", "HRMS", "Admin Control Panel", "Multi-Branch Management", "Certificate Automation"]],
    ["Analytics & BI", ["Power BI", "Microsoft Excel", "Real-Time Analytics", "Business Reporting"]],
    ["Automation & Development Tools", ["n8n", "Flowise", "VS Code", "Google Colab", "Replit", "Rocket", "LLM Flow Builder"]],
    [
      "AI Productivity Platforms",
      [
        "Antigravity",
        "Qoder",
        "Codex",
        "Claude Chat",
        "Claude Skills",
        "Claude Cowork",
        "Claude Projects",
        "Claude Code",
        "v0.dev",
        "Cursor",
        "GitHub Copilot",
        "Notion AI"
      ]
    ],
    ["Languages", ["English - Professional", "Tamil - Native"]]
  ];

  return (
    <section className="professional-band relative overflow-hidden border-y py-12 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(20,184,166,0.12),transparent_32%,rgba(245,158,11,0.10)_68%,transparent)]" />
      <div className="container">
        <div className="glass relative overflow-hidden rounded-lg p-5 sm:p-8">
          <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-primary/10" />
          <div className="absolute bottom-0 left-0 h-28 w-28 rounded-tr-full bg-accent/10" />

          <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                UAE Hiring Stack
              </div>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                UAE hiring stack mapped from the final resume to business outcomes.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Built for how UAE recruiters evaluate AI engineers: production GenAI capability, backend reliability,
                enterprise system integration, automation value, analytics awareness, and clear communication.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:max-w-lg">
                {[
                  ["UAE-ready", "Immediately available"],
                  ["Production proof", "AI LMS, career portal, HRMS, client HRMS"],
                  ["AI-first delivery", "LLMs, RAG, agents, NLP, automation"]
                ].map(([label, text]) => (
                  <div key={label} className="rounded-lg border bg-background/65 p-3">
                    <p className="text-sm font-bold">{label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {priorityStack.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-lg border bg-background/72 p-4 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:bg-background/95"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="text-sm font-bold">{item.label}</p>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">{item.text}</p>
                    <div className="mt-4 rounded-md bg-primary/10 px-3 py-2 text-xs font-bold text-primary">
                      {item.result}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 rounded-lg border bg-background/58 p-4">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                <Bot className="h-4 w-4 text-primary" />
                Core Technology Matrix
              </div>
              <span className="rounded-full border bg-background/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                Complete resume-aligned skill coverage
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {stackMatrix.map(([group, tools]) => (
                <div key={group as string} className="matrix-card rounded-lg border bg-background/72 p-4">
                  <p className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(tools as string[]).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border bg-muted/55 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition hover:border-primary/50 hover:bg-primary/10 hover:text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Timeline written around live systems, measurable outcomes, and ownership."
        />
        <div className="mx-auto max-w-5xl">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08}>
              <div className="relative border-l border-primary/25 pl-6 pb-8 last:pb-0">
                <span className="absolute -left-[10px] top-2 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_0_6px_rgba(20,184,166,0.12)]" />
                <Card className="relative overflow-hidden p-0">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                  <div className="border-b bg-background/46 p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-primary">{item.period}</p>
                      <h3 className="mt-1 text-2xl font-semibold">{item.role}</h3>
                      <p className="text-muted-foreground">{item.company}</p>
                    </div>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        <span className="rounded-full border bg-background/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                          {item.location}
                        </span>
                        <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          Production AI systems
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="grid gap-0 p-6 text-sm leading-7 text-muted-foreground">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 border-b py-3 last:border-b-0 first:pt-0 last:pb-0">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const [demoNotice, setDemoNotice] = useState<string | null>(null);
  const orderProjects = (titles: string[]) =>
    titles
      .map((title) => projects.find((project) => project.title === title))
      .filter((project): project is (typeof projects)[number] => Boolean(project));
  const companyProjects = orderProjects(companyProjectTitles);
  const personalProjects = orderProjects(personalProjectTitles);
  const renderProjectGrid = (items: typeof projects, options?: { showGithub?: boolean }) => (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((project, index) => (
        <Reveal key={project.title} delay={index * 0.06}>
          <Card className="project-card group h-full overflow-hidden p-4 hover:-translate-y-1 hover:border-primary/35">
            <div className="grid gap-6">
              <ProjectVisual
                accent={project.accent}
                title={project.title}
                coverImage={"coverImage" in project ? project.coverImage : undefined}
              />
              <div className="flex flex-col p-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{project.category}</p>
                  <span className="rounded-full border bg-background/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Case study
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md border bg-background/80 px-3 py-1 text-xs font-semibold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                      {metric}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  {options?.showGithub !== false ? (
                    <Button asChild size="sm" variant="secondary" className="sm:w-auto">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  ) : null}
                  {project.live === "coming-soon" ? (
                    <Button
                      type="button"
                      size="sm"
                      className="sm:w-auto"
                      onClick={() => {
                        setDemoNotice(`${project.title} demo video coming soon.`);
                        window.setTimeout(() => setDemoNotice(null), 4200);
                      }}
                    >
                      <ExternalLink className="h-4 w-4" /> Demo
                    </Button>
                  ) : (
                    <Button asChild size="sm" className="sm:w-auto">
                      <Link
                        href={project.live}
                        target={project.live.startsWith("http") ? "_blank" : undefined}
                        rel={project.live.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );

  return (
    <section id="projects" className="section-pad professional-band">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Separated by company delivery and personal AI product work."
          description="Company projects show production ownership and enterprise delivery. Personal projects show initiative, domain focus, and applied AI experimentation for UAE-relevant use cases."
        />
        <div className="space-y-12">
          {demoNotice ? (
            <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg border border-primary/30 bg-background/95 px-4 py-3 text-sm font-semibold text-foreground shadow-glass backdrop-blur-xl">
              {demoNotice}
            </div>
          ) : null}
          <div>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Company Projects</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">Production enterprise delivery</h3>
              </div>
              <span className="rounded-full border bg-background/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                {companyProjects.length} live / client systems
              </span>
            </div>
            {renderProjectGrid(companyProjects, { showGithub: false })}
          </div>

          <div>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Personal AI Projects</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">Applied AI experiments and domain products</h3>
              </div>
              <span className="rounded-full border bg-background/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                {personalProjects.length} AI builds
              </span>
            </div>
            {renderProjectGrid(personalProjects)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiSection() {
  return (
    <section id="ai" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="AI / ML Systems"
          title="LLM integrations, RAG, automation tools, intelligent APIs, and GenAI workflows."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aiCapabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="h-full">
                  <Icon className="mb-5 h-7 w-7 text-primary" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="section-pad professional-band">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            className="mx-0 text-left"
            eyebrow="Awards & Achievements"
            title="Recognized for production AI delivery and project impact."
            description="A compact recruiter layer for award proof, education, applied AI credibility, and production delivery signals."
          />
          <Card className="mb-4 overflow-hidden p-0">
            <div className="grid gap-0 sm:grid-cols-[0.78fr_1fr]">
              <div className="relative min-h-72 overflow-hidden bg-muted sm:min-h-full">
                <Image
                  src="/assets/ai-excellence-star-award.jpeg"
                  alt="AI Excellence Star Award 2026 presented to Vishwanath Rajendran"
                  width={900}
                  height={1600}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">AI Excellence Star</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">AI Excellence Star Award 2026</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Recognized by DigiDARA Technologies for sincere dedication, consistent excellence, and high-impact
                  AI project contributions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["DigiDARA Technologies", "March 2026", "Production AI"].map((item) => (
                    <span key={item} className="rounded-full border bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          <div className="grid gap-3">
            {certifications.map((item) => (
              <div key={item} className="glass flex items-center gap-3 rounded-lg p-4">
                <Sparkles className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-4">
            <Card>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Project Portfolio</p>
                  <h3 className="mt-2 text-2xl font-semibold">AI project activity and source-code visibility</h3>
                </div>
                <Github className="h-8 w-8 text-primary" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["9+", "AI / full-stack projects"],
                  ["4", "company enterprise systems"],
                  ["5", "personal AI builds"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border bg-background/70 p-4">
                    <div className="text-3xl font-semibold text-primary">{value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                GitHub is used as the main proof channel for AI experiments, FastAPI services, RAG systems, automation
                workflows, and project source references.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  ["Enterprise delivery", "LMS, HRMS, career portal, GPS attendance, and biometric data sync."],
                  ["AI implementation", "LLM chatbots, RAG, semantic search, AI agents, and automation workflows."],
                  ["Recruiter confidence", "Award proof, live product demos, GitHub projects, and resume-aligned skills."]
                ].map(([label, text]) => (
                  <div key={label} className="rounded-lg border bg-background/70 p-4">
                    <p className="text-sm font-bold text-foreground">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                {codingProfiles.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between gap-4 rounded-lg border bg-primary/10 p-4 text-primary transition hover:-translate-y-1 hover:border-primary/50"
                    >
                      <div className="flex items-center gap-4">
                        <span className="grid h-11 w-11 place-items-center rounded-md bg-background/75">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <div className="font-semibold">{item.label}</div>
                          <div className="mt-1 text-sm text-muted-foreground">{item.value}</div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "opened">("idle");

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const opportunity = String(formData.get("opportunity") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a recruiter"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Opportunity: ${opportunity || "Not specified"}`,
        "",
        "Message:",
        message
      ].join("\n")
    );

    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
    setFormStatus("opened");
  }

  return (
    <section id="contact" className="section-pad professional-band">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-primary">Contact</p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's discuss AI Engineer, ML Engineer, GenAI Specialist, Dubai startup, or remote SaaS opportunities.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Best fit: AI Engineer, ML Engineer, LLM Application Engineer, GenAI Specialist, backend AI platform engineer,
            or automation-focused product roles.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactActions.map((item) => {
              const Icon = item.icon;
              return (
                <Button key={item.label} asChild variant="secondary" className="justify-start">
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card>
            <form onSubmit={handleContactSubmit} className="grid gap-4">
              <input type="hidden" name="_subject" value="Portfolio inquiry for Vishwanath Rajendran" />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Name
                  <Input required name="name" placeholder="Your name" autoComplete="name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Work email
                  <Input required type="email" name="email" placeholder="you@company.com" autoComplete="email" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Opportunity
                <Input name="opportunity" placeholder="AI Developer role, SaaS build, consulting..." />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Message
                <Textarea required name="message" placeholder="Share the role, company, timeline, and location." />
              </label>
              <Button type="submit" className="w-full">
                Open email draft <Send className="h-4 w-4" />
              </Button>
              {formStatus === "opened" ? (
                <p className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                  Email draft opened. If your browser blocks it, use the Email or WhatsApp button on the left.
                </p>
              ) : null}
              <p className="text-xs leading-6 text-muted-foreground">
                This form uses your email app, so it works without SMTP or a backend. Direct email: {profile.email}
              </p>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-semibold">{profile.name}</div>
          <div className="mt-1 text-sm text-muted-foreground">
            © 2026 Vishwanath Rajendran · Innovating the Future with Artificial Intelligence
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            Resume
          </Link>
          {contactActions.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "_blank" : undefined}
                rel={item.href.startsWith("http") || item.href.startsWith("mailto:") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-md border text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url: "https://vishwanath-portfolio.vercel.app",
    image: profile.avatar,
    sameAs: [profile.github, profile.linkedin, profile.twitter],
    knowsAbout: techMarquee,
    seeks: "AI Engineer, ML Engineer, GenAI Specialist, and LLM Application Engineer roles in UAE and remote markets"
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function PortfolioPage() {
  return (
    <>
      <StructuredData />
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AiSection />
      <ProofSection />
      <ContactSection />
      <Footer />
    </>
  );
}
