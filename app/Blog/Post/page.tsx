import Navbar from "@/app/components/Navbar";
import Detail from "./components/Detail";
import BlogCard from "@/app/components/BlogCard";
import Footer from "@/app/components/Footer";

export default function Post() {
  return (
    <>
      <Navbar />
      <Detail />
      <div className="mt-[150px]">
        <BlogCard />
      </div>
      <div className="mt-[200px]">
        <Footer />
      </div>
    </>
  );
}
