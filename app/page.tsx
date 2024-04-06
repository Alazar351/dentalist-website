import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Cta />
    </main>
  );
}
