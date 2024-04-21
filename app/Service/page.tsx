import Book from "../components/Book";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Gallery from "./components/Gallery";
import ServiceInfo from "./components/ServiceInfo";
import Symptoms from "./components/Symptoms";

export default function Service() {
  return (
    <>
      <Navbar />
      <ServiceInfo />
      <Symptoms />
      <Gallery />
      <Book />
      <div className="mt-[200px]">
        <Footer />
      </div>
    </>
  );
}
