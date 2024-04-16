import Image from "next/image";
import Stock2 from "../../../public/assets/about-stock2.png";
import { Button } from "@/components/ui/button";
export default function Priority() {
  return (
    <section className="mt-[200px] flex flex-col-reverse items-start justify-between gap-24 px-20 lg:flex-row lg:gap-64 ">
      <div className="relative mt-[-42px]">
        <div className="hidden h-[306px] w-[400px] overflow-visible rounded-3xl bg-[#DBEFFA] lg:block"></div>
        <Image
          src={Stock2}
          alt="dentist with patient image"
          width={550}
          height={380}
          className="absolute left-[70px] top-[70px] hidden min-h-[352px] min-w-[510px] lg:block"
        />
      </div>
      <div className="mx-auto max-w-[510px] lg:mx-0">
        <p className="text-xs font-bold uppercase text-[#583FBC]">
          Our Priority
        </p>
        <h2 className="mt-4 text-5xl font-bold lg:max-w-[620px]">
          Our clients are our priority
        </h2>
        <p className="mt-6 text-lg lg:max-w-[510px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <Button className="mt-[72px] h-12 w-full rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#583FBC] hover:text-white lg:h-[64px] lg:w-[240px] ">
          Book appointment
        </Button>
      </div>
    </section>
  );
}
