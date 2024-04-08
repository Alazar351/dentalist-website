import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Info from "./components/Info";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Cta />
      <Features />
      <Info />
    </main>
  );
}
