import Image from "next/image";
import Hero1 from "../../public/assets/hero1.svg";
import Phone from "../../public/assets/phone.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-[24px] pt-8 ">
      <div className="relative w-full ">
        <Image
          className="z-[-1] w-full min-w-[615px]"
          src={Hero1}
          width={1392}
          height={700}
          alt="hero image"
        />
        <div>
          <div className=" absolute top-0 z-[1] flex max-w-xs flex-col gap-4  md:mt-[8%] lg:ml-[0%] lg:mt-[10%] lg:max-w-[550px] xl:ml-[5%]  ">
            <h1 className="text-[32px] font-bold lg:text-[64px] ">
              Entrust your smile to professionals
            </h1>
            <p className="text-xs lg:text-lg">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center ">
              <Link href={"/#Appointment"}>
                <Button className="h-12 w-[240px] rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#583FBC] hover:text-white lg:h-[64px] ">
                  Book appointment
                </Button>
              </Link>
              <div className="flex w-[240px] items-center gap-8 lg:h-[64px] ">
                <Image src={Phone} width={64} height={64} alt="phone image" />
                <div>
                  <p className="mb-1 text-xs font-bold uppercase text-[#583FBC]">
                    Dental 24H Emergency
                  </p>
                  <p className="font-bold ">03 482 394 123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mb-8 mt-40 max-w-[840px]  text-4xl">
        Dentalist is re-imagining what the dental experience can be and proudly
        setting a new standard for patient care.
      </p>
      <div className="mx-auto h-1 max-w-[120px] bg-[#583FBC] "></div>
    </section>
  );
}
