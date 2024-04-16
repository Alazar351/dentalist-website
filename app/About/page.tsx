import AboutUs from "./components/AboutUs";
import Navbar from "../components/Navbar";
import Priority from "./components/Priority";
import Safety from "./components/Safety";
import Team from "./components/Team";
import Faq from "./components/Faq";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Priority />
      <Safety />
      <Team />
      <Faq />
    </>
  );
}
