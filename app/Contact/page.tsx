import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Clinic from "./components/Clinic";
import ContactUs from "./components/ContactUs";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactUs />
      <Clinic />
      <div className="mt-[200px]">
        <Footer />
      </div>
    </>
  );
}
