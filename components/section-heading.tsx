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
    <div className={cn("section-heading mb-12 w-full", className)}>
      <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
        <span className="h-px w-8 bg-primary/70" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-foreground sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}
