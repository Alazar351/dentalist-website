import Image from "next/image";
import Doctor1 from "../../../public/assets/about-doctor1.png";
import Doctor2 from "../../../public/assets/about-doctor2.png";
import Doctor3 from "../../../public/assets/about-doctor3.png";
import Doctor4 from "../../../public/assets/about-doctor4.png";

export default function Team() {
  return (
    <section className="mx-20 mt-[200px]">
      <p className="text-xs font-bold uppercase text-[#583FBC]">
        Meet Our Team
      </p>
      <div className="mb-[100px] mt-4 flex  flex-col items-start justify-between gap-12 lg:flex-row">
        <h2 className="mt-4 max-w-[541px] text-5xl font-bold ">
          Get to know the dentalist dental Team
        </h2>
        <p className="mt-6 text-lg lg:max-w-[510px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className=" grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div className="relative mx-auto">
          <div className=" flex h-[350px] w-[290px] items-end justify-center rounded-3xl bg-[#DBEFFA]">
            <Image
              src={Doctor1}
              alt="Dianne Russell image"
              width={230}
              height={546}
              className="h-[320px] w-[200px]"
            />
          </div>
          <p className="mt-6 text-center text-lg font-bold">Dianne Russell</p>
        </div>
        <div className="relative mx-auto">
          <div className=" flex h-[350px] w-[290px] items-end justify-center rounded-3xl bg-[#DBDEFA]">
            <Image
              src={Doctor2}
              alt="Esther Howard image"
              width={230}
              height={546}
              className="h-[320px] w-[260px]"
            />
          </div>
          <p className="mt-6 text-center text-lg font-bold">Esther Howard</p>
        </div>
        <div className="relative mx-auto">
          <div className=" flex h-[350px] w-[290px] items-end justify-center rounded-3xl bg-[#F6DBFA]">
            <Image
              src={Doctor3}
              alt="Jenny Wilson image"
              width={230}
              height={546}
              className="h-[320px] w-[260px]"
            />
          </div>
          <p className="mt-6 text-center text-lg font-bold">Jenny Wilson</p>
        </div>
        <div className="relative mx-auto">
          <div className=" flex h-[350px] w-[290px] items-end justify-center rounded-3xl bg-[#FADBE2]">
            <Image
              src={Doctor4}
              alt="Darrell Steward image"
              width={230}
              height={546}
              className="h-[320px] min-w-[400px]"
            />
          </div>
          <p className="mt-6 text-center text-lg font-bold">Darrell Steward</p>
        </div>
      </div>
    </section>
  );
}
