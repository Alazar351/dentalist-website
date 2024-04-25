import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Info from "./components/Info";
import Testimonial from "./components/Testimonial";
import BlogCard from "./components/BlogCard";
import Book from "./components/Book";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Cta />
      <Features />
      <Info />
      <Testimonial />
      <div>
        <p className="mt-36 flex flex-col items-center text-xs font-bold uppercase text-[#583FBC]">
          Blog
        </p>
        <BlogCard />
      </div>
      <Book />
      <Footer />
    </main>
  );
}
