import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "../../../public/assets/service-hero.png";
import Link from "next/link";

export default function ServiceInfo() {
  return (
    <section className="mx-6 mt-8 flex h-[600px]  items-center justify-center gap-[10%] rounded-3xl bg-[#DBEFFA]">
      <div className="mx-auto flex max-w-[500px] flex-col justify-center lg:mx-0">
        <h2 className="text-[64px] font-bold">Root canals</h2>
        <p className="mt-8 text-lg">
          Root canals have gotten a bad reputation, but us dentists don’t know
          why! These are the types of treatments that actually make you feel
          better!
        </p>
        <Link href={"/#Appointment"}>
          <Button className="mt-[72px] h-[64px] rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#583FBC] hover:text-white xl:max-w-[240px] ">
            Book Appointment
          </Button>
        </Link>
      </div>
      <Image
        src={Hero}
        alt="Hero image"
        width={720}
        height={600}
        className=" mr-[50px] mt-[160px] hidden h-[600px] w-[720px] xl:block"
      />
    </section>
  );
}
