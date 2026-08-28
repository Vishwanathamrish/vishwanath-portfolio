import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandPalette } from "@/components/command-palette";
import { RecruiterChat } from "@/components/recruiter-chat";

const siteUrl = "https://vishwanath-portfolio-flax.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vishwanath Rajendran | AI Engineer in Dubai, UAE",
    template: "%s | Vishwanath Rajendran"
  },
  description:
    "AI Engineer based in Dubai building Generative AI, RAG, and Agentic AI applications with Python, FastAPI, LLMs, and modern web technologies.",
  keywords: [
    "AI Engineer UAE",
    "AI Engineer Dubai",
    "Generative AI Engineer",
    "Agentic AI Engineer",
    "RAG Engineer",
    "LLM Engineer",
    "Python AI Engineer",
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
    title: "Vishwanath Rajendran | AI Engineer in Dubai, UAE",
    description: "AI Engineer in Dubai building Generative AI, RAG, and Agentic AI applications with Python, FastAPI, and LLMs.",
    siteName: "Vishwanath Rajendran",
    images: [
      {
        url: "/assets/Viswa_linkedin1.png",
        width: 800,
        height: 800,
        alt: "Vishwanath Rajendran"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwanath Rajendran | AI Engineer in Dubai, UAE",
    description: "AI Engineer in Dubai building Generative AI, RAG, and Agentic AI applications with Python, FastAPI, and LLMs.",
    creator: "@Vishwa84829045",
    images: ["/assets/Viswa_linkedin1.png"]
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png"
  },
  alternates: { canonical: "/" },
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
          <RecruiterChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
