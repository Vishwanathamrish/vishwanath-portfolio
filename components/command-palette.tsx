"use client";

import { Command } from "cmdk";
import { ArrowUpRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { contactActions, navItems, profile } from "@/lib/portfolio-data";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || event.key === "/") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    window.open(href, "_self");
  };

  return (
    <>
      {open ? (
        <div className="fixed inset-0 z-[80] bg-background/70 p-4 backdrop-blur-md" onClick={() => setOpen(false)}>
          <Command
            className="glass mx-auto mt-24 max-w-xl overflow-hidden rounded-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Command.Input
                autoFocus
                placeholder="Jump to a section, resume, or contact..."
                className="h-14 flex-1 bg-transparent text-sm outline-none"
              />
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-muted-foreground">
                No result found.
              </Command.Empty>
              <Command.Group heading="Portfolio" className="text-xs text-muted-foreground">
                {navItems.map((item) => (
                  <Command.Item
                    key={item.href}
                    onSelect={() => go(item.href)}
                    className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm text-foreground aria-selected:bg-muted"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Actions" className="text-xs text-muted-foreground">
                <Command.Item
                  onSelect={() => go(profile.resume)}
                  className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm text-foreground aria-selected:bg-muted"
                >
                  Download CV
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Command.Item>
                {contactActions.map((item) => (
                  <Command.Item
                    key={item.label}
                    onSelect={() => go(item.href)}
                    className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm text-foreground aria-selected:bg-muted"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </div>
      ) : null}
    </>
  );
}
