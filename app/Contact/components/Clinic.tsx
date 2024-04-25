import Image from "next/image";
import Stock1 from "@/public/assets/contact-stock1.png";
import Stock2 from "@/public/assets/contact-stock2.png";
import Map from "@/public/assets/contact-map.png";

export default function Clinic() {
  return (
    <section className="mx-20 mt-[200px] lg:mx-[190px]">
      <div className="flex flex-col items-center justify-start">
        <p className="text-xs font-bold uppercase text-[#583FBC]">Our Clinic</p>
        <h2 className="mt-4 text-5xl font-bold ">
          Come to our clinic and get best dental services
        </h2>
      </div>
      <div className="mt-[112px] grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-3xl border">
          <div className="flex w-full gap-4 overflow-clip px-4 pt-4">
            <Image
              src={Stock1}
              alt="hallway image"
              width={274}
              height={250}
              className="flex flex-grow rounded-l-3xl"
            />
            <Image
              src={Map}
              alt="map image"
              width={188}
              height={250}
              className="flex flex-grow rounded-r-3xl"
            />
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 pb-12">
            <p className="text-lg font-bold">Dentalist Main Clinic</p>
            <p className="text-muted-foreground ">
              35 West Dental Street California 1004
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl border">
          <div className="flex w-full gap-4 overflow-clip px-4 pt-4">
            <Image
              src={Stock2}
              alt="hallway image"
              width={274}
              height={250}
              className="flex flex-grow rounded-l-3xl"
            />
            <Image
              src={Map}
              alt="map image"
              width={188}
              height={250}
              className="flex flex-grow rounded-r-3xl"
            />
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 pb-12">
            <p className="text-lg font-bold">Dentalist Branch Clinic</p>
            <p className="text-muted-foreground ">
              35 West Dental Street California 1004
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
