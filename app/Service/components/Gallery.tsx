import Image from "next/image";
import Stock1 from "../../../public/assets/service-stock1.png";
import Stock2 from "../../../public/assets/service-stock2.png";
import Stock3 from "../../../public/assets/service-stock3.png";
import Stock4 from "../../../public/assets/service-stock4.png";
import Stock5 from "../../../public/assets/service-stock5.png";
import Stock6 from "../../../public/assets/service-stock6.png";

export default function Gallery() {
  return (
    <section className="mt-[200px] px-20 ">
      <p className="text-xs font-bold uppercase text-[#583FBC]">Gallery</p>
      <div className="mb-[100px] mt-4 flex  flex-col items-start justify-between gap-12 lg:flex-row">
        <h2 className="mt-4 max-w-[541px] text-5xl font-bold ">
          Some proof about our services for you
        </h2>
        <p className="mt-6 text-lg lg:max-w-[510px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 ">
        <Image
          src={Stock1}
          alt="Gallery image"
          width={510}
          height={300}
          className="rounded-3xl"
        />
        <Image
          src={Stock2}
          alt="Gallery image"
          width={290}
          height={300}
          className="rounded-3xl"
        />
        <Image
          src={Stock3}
          alt="Gallery image"
          width={400}
          height={300}
          className="rounded-3xl"
        />
        <Image
          src={Stock4}
          alt="Gallery image"
          width={290}
          height={300}
          className="rounded-3xl"
        />
        <Image
          src={Stock5}
          alt="Gallery image"
          width={400}
          height={300}
          className="rounded-3xl"
        />
        <Image
          src={Stock6}
          alt="Gallery image"
          width={510}
          height={300}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
