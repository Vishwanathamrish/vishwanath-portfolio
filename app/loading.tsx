export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-background">
      <div className="glass flex items-center gap-3 rounded-full px-5 py-3 text-sm text-muted-foreground">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
        Preparing portfolio experience
      </div>
    </main>
  );
}
