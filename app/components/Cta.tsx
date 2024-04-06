import Image from "next/image";
import Stock1 from "../../public/assets/stock1.svg";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <div className="mt-52 flex flex-col items-start justify-between gap-24 px-20 lg:flex-row lg:gap-64 ">
      <div className="min-h-[510px] max-w-[400px] rounded-3xl bg-[#DBEFFA]">
        <Image
          src={Stock1}
          alt="dentist with patient image"
          width={480}
          height={380}
          className="ml-20 mt-16"
        />
      </div>
      <div className="">
        <p className="text-xs font-bold text-[#583FBC]">Dental 24H Emergency</p>
        <h2 className="mt-4 text-5xl font-bold lg:max-w-[620px]">
          Gentle, friendly treatment from our locally practice.
        </h2>
        <p className="mt-6 text-lg lg:max-w-[510px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <Button className="mt-[72px] h-12 w-[240px] rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#583FBC] hover:text-white lg:h-[64px] ">
          Book appointment
        </Button>
      </div>
    </div>
  );
}
