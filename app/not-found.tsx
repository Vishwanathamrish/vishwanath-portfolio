import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="max-w-md">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">404</p>
        <h1 className="text-4xl font-semibold tracking-tight">This page is off the roadmap.</h1>
        <p className="mt-4 text-muted-foreground">
          The portfolio is intentionally focused. Head back to the main profile.
        </p>
        <Button asChild className="mt-7">
          <Link href="/">Back to portfolio</Link>
        </Button>
      </div>
    </main>
  );
}
