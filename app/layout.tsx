import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandPalette } from "@/components/command-palette";

const siteUrl = "https://vishwanath-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vishwanath Rajendran | AI Engineer, GenAI Specialist & AI Fullstack Developer",
    template: "%s | Vishwanath Rajendran"
  },
  description:
    "Premium recruiter-focused portfolio for Vishwanath Rajendran, an AI Engineer, GenAI / LLM Specialist, and AI Fullstack Developer immediately available in the UAE.",
  keywords: [
    "AI Engineer UAE",
    "ML Engineer Dubai",
    "GenAI Specialist UAE",
    "AI Fullstack Developer UAE",
    "LLM Developer",
    "LangChain",
    "FastAPI",
    "Next.js Portfolio",
    "Machine Learning Engineer"
  ],
  authors: [{ name: "Vishwanath Rajendran" }],
  creator: "Vishwanath Rajendran",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    title: "Vishwanath Rajendran | AI Engineer, GenAI Specialist & AI Fullstack Developer",
    description: "Production AI, LLM, RAG, FastAPI, automation, HRMS, LMS, and enterprise integration portfolio for UAE hiring.",
    siteName: "Vishwanath Rajendran",
    images: [
      {
        url: "/assets/Viswa_linkedin1.png",
        width: 1200,
        height: 630,
        alt: "Vishwanath Rajendran"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwanath Rajendran | AI Engineer, GenAI Specialist & AI Fullstack Developer",
    description: "Production AI, LLM, RAG, FastAPI, automation, HRMS, LMS, and enterprise integration portfolio for UAE hiring.",
    creator: "@Vishwa84829045",
    images: ["/assets/Viswa_linkedin1.png"]
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b14" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
