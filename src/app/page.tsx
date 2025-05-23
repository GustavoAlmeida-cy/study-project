import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/sections/footer";
import { Highlights } from "@/components/sections/highlights";
import Education from "@/components/sections/education";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-screen">
        <div className="max-w-screen">
          <Hero />
          <About />
          <Highlights />
          <Education />
        </div>
      </main>
      <Footer />
    </>
  );
}
