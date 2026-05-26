import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl text-center", className)}>
      <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}
