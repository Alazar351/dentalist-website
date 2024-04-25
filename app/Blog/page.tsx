import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlogCards from "./components/BlogCards";
import News from "./components/News";

export default function Blog() {
  return (
    <>
      <Navbar />
      <News />
      <BlogCards />
      <Footer />
    </>
  );
}
