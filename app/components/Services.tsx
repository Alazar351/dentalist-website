import Image from "next/image";
import Dentures from "../../public/assets/dentures.svg";
import Implants from "../../public/assets/implants.svg";
import Whitening from "../../public/assets/whitening.svg";
import RootCanal from "../../public/assets/root-canal.svg";
import Arrow from "../../public/assets/right-purple-arrow.svg";

export default function Services() {
  return (
    <section className="mx-20 mt-28">
      <p className="text-xs font-bold text-[#583FBC] ">Services</p>
      <div className="mt-4 flex  flex-col items-center justify-between gap-12 lg:flex-row">
        <h2 className="text-5xl font-bold lg:max-w-[525px]">
          Feel amazing about your oral health
        </h2>
        <p className="text-lg lg:max-w-[550px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4 ">
        <div className=" flex  flex-col items-center justify-center rounded-3xl border p-4">
          <div className="flex min-h-[200px] w-full min-w-[220px] flex-col items-center justify-center rounded-3xl bg-[#DBEFFA] ">
            <Image
              src={Dentures}
              width={100}
              height={100}
              alt="denture image"
            />
          </div>
          <h3 className="mb-2 mt-6 text-center text-xl font-bold">Dentures</h3>
          <p className="text-center text-gray-700 opacity-70 ">
            Lorem ipsum is placeholder text commonly used in the graphic.
          </p>
        </div>
        <div className=" flex  flex-col items-center justify-center rounded-3xl border p-4">
          <div className="flex min-h-[200px] w-full min-w-[220px] flex-col items-center justify-center rounded-3xl bg-[#DBDEFA] ">
            <Image
              src={Implants}
              width={100}
              height={100}
              alt="denture image"
            />
          </div>
          <h3 className="mb-2 mt-6 text-center text-xl font-bold">Implants</h3>
          <p className="text-center text-gray-700 opacity-70 ">
            Lorem ipsum is placeholder text commonly used in the graphic.
          </p>
        </div>
        <div className=" flex  flex-col items-center justify-center rounded-3xl border p-4">
          <div className="flex min-h-[200px] w-full min-w-[220px] flex-col items-center justify-center rounded-3xl bg-[#F6DBFA] ">
            <Image
              src={Whitening}
              width={100}
              height={100}
              alt="denture image"
            />
          </div>
          <h3 className="mb-2 mt-6 text-center text-xl font-bold">Whitening</h3>
          <p className="text-center text-gray-700 opacity-70 ">
            Lorem ipsum is placeholder text commonly used in the graphic.
          </p>
        </div>
        <div className=" flex  flex-col items-center justify-center rounded-3xl border p-4">
          <div className="flex min-h-[200px] w-full min-w-[220px] flex-col items-center justify-center rounded-3xl bg-[#FADBE2] ">
            <Image
              src={RootCanal}
              width={100}
              height={100}
              alt="denture image"
            />
          </div>
          <h3 className="mb-2 mt-6 text-center text-xl font-bold">
            Root Canal
          </h3>
          <p className="text-center text-gray-700 opacity-70 ">
            Lorem ipsum is placeholder text commonly used in the graphic.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-28 flex min-h-[64px] max-w-[240px] items-center justify-center gap-4 rounded-2xl bg-[#583FBC] bg-opacity-10">
        <p className="font-bold text-[#583FBC]">View all service list</p>
        <Image src={Arrow} alt="arrow image" width={24} height={24} />
      </div>
    </section>
  );
}
