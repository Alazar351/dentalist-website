import { Button } from "@/components/ui/button";
import Stock1 from "../../../public/assets/about-stock1.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="mx-20 mt-[100px] flex justify-between gap-28">
      <div className="mx-auto flex max-w-[500px] flex-col justify-center lg:mx-0">
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
