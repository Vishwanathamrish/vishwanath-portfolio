import { Nav } from "@/components/nav";
import { PortfolioPage } from "@/components/portfolio-page";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <PortfolioPage />
      </main>
    </>
  );
}
