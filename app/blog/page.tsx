import Link from "next/link";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="container grid min-h-screen place-items-center pt-24 text-center">
        <section className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-primary">Blog</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">AI build notes are coming soon.</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            This route is ready for future posts on LLM apps, RAG, automation, dashboards, and UAE-focused engineering
            lessons.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">Back to portfolio</Link>
          </Button>
        </section>
      </main>
    </>
  );
}
