import { Button } from "@/components/ui/button";
import Stock1 from "../../../public/assets/about-stock1.png";
import Stock2 from "../../../public/assets/about-stock2.png";
import Doctor1 from "../../../public/assets/about-doctor1.png";
import Doctor2 from "../../../public/assets/about-doctor2.png";
import Doctor3 from "../../../public/assets/about-doctor3.png";
import Doctor4 from "../../../public/assets/about-doctor4.png";
import Video from "../../../public/assets/about-video.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="mx-20 mt-[100px] flex justify-between gap-28">
      <div className="flex max-w-[500px] flex-col justify-center">
        <h2 className="text-[64px] font-bold">About us</h2>
        <p className="mt-8 text-lg">
          We want you to feel amazing about your oral wellness. Not just twice a
          year, but every time you take a bite, tell a joke, laugh, or share a
          kiss.
        </p>
        <Button className="mt-[72px] rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#583FBC] hover:text-white lg:max-w-[240px] ">
          Contact Us
        </Button>
      </div>
      <Image
        src={Stock1}
        alt="patient and dentist image"
        width={620}
        height={480}
        className="hidden lg:block"
      />
    </section>
  );
}
