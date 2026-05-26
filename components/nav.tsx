"use client";

import Link from "next/link";
import { Download, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/86 shadow-sm backdrop-blur-2xl">
      <nav className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center font-semibold" aria-label="Vishwanath portfolio home">
          <span className="nav-signature">
            <span className="nav-signature-top" />
            <span className="nav-signature-left" />
            <span className="nav-signature-bottom" />
            <span className="nav-signature-right" />
            <span className="nav-signature-text">
              {profile.shortName}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 bg-transparent p-1.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3.5 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-primary/10 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-bold text-foreground shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            UAE available
          </span>
          <Button variant="secondary" size="sm" asChild>
            <Link href={profile.resume} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button variant="secondary" size="icon" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="mx-3 mt-2 rounded-lg border bg-background/95 p-3 shadow-glass backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href={profile.resume} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
