"use client";
import Image from "next/image";
import Map from "../../public/assets/map.png";
import Appointment from "./Appointment";

export default function Book() {
  return (
    <section className="mx-20 mt-[200px] flex flex-col gap-28 lg:flex-row lg:justify-between  ">
      <Image
        src={Map}
        alt="map image"
        width={550}
        height={816}
        className="hidden xl:block"
      />
      <div className=" mx-auto flex flex-col gap-16 xl:mx-0">
        <div>
          <p className="text-xs font-bold uppercase text-[#583FBC]">
            Book Appointment
          </p>
          <h3 className="mt-4 text-5xl font-bold ">
            Care at Dentalist is pleasure
          </h3>
          <p className="mt-6 max-w-[550px] text-lg">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
          </p>
        </div>
        <Appointment />
      </div>
    </section>
  );
}
