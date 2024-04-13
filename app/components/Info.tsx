import Image from "next/image";
import Stock2 from "../../public/assets/stock2.svg";
import Check from "../../public/assets/check.svg";

export default function Info() {
  return (
    <section className="mt-52 flex flex-col items-start justify-between gap-24 px-20 lg:flex-row lg:gap-64 ">
      <div>
        <p className="text-xs font-bold uppercase text-[#583FBC]">
          Experts in dental
        </p>
        <h2 className="mt-4 text-5xl font-bold lg:max-w-[620px]">
          Top-notch dentistry, from Seattle's top dentists.
        </h2>
        <p className="mt-6 text-lg lg:max-w-[510px]">
          LoLorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex gap-3">
            <Image src={Check} alt="checkmark" width={20} height={20} />
            <p className="text-lg">Top quality dental team</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex gap-3">
            <Image src={Check} alt="checkmark" width={20} height={20} />
            <p className="text-lg">State of the art dental services</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex gap-3">
            <Image src={Check} alt="checkmark" width={20} height={20} />
            <p className="text-lg">Discount on all dental treatment</p>
          </div>
        </div>
      </div>
      <div className="hidden rounded-3xl bg-[#FADBE2] lg:block lg:min-h-[510px] lg:max-w-[400px]">
        <Image
          src={Stock2}
          alt="expert dentist image"
          width={480}
          height={380}
          className="ml-[-80px] mt-16 "
        />
      </div>
    </section>
  );
}
