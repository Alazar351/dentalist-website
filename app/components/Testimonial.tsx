import Image from "next/image";
import Person1 from "../../public/assets/person1.svg";
import Person2 from "../../public/assets/person2.svg";
import Person3 from "../../public/assets/person3.svg";
import Stars from "../../public/assets/stars.svg";

export default function Testimonial() {
  return (
    <section className="mx-6 mt-36 rounded-3xl bg-[#D9EBFA] pb-32 pt-24">
      <div className="mx-32">
        <p className="text-xs font-bold uppercase text-[#583FBC]">
          Testimonial
        </p>
        <div className="mt-4 flex  flex-col items-center justify-between gap-12 lg:flex-row">
          <h2 className="text-5xl font-bold lg:max-w-[525px]">
            What people have said about us
          </h2>
          <p className="text-lg lg:max-w-[550px]">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts
          </p>
        </div>
      </div>
      <div className="mx-14 mt-40 flex flex-col items-center justify-center gap-14 lg:flex-row lg:gap-10">
        <div className="relative flex max-w-[500px] flex-col items-center justify-evenly rounded-3xl bg-white pb-12 pt-[69px]">
          <div className="absolute top-[-50px] rounded-full border-[10px] border-[#D9EBFA]">
            <Image src={Person1} alt="Image of person" width={80} height={80} />
          </div>
          <h3 className="mb-2 text-lg font-bold">Robert Fox</h3>
          <p className="mx-[39px] mb-8 text-center text-gray-700 opacity-70">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts
          </p>
          <Image src={Stars} alt="rating" width={152} height={24} />
        </div>
        <div className="relative flex max-w-[500px] flex-col items-center rounded-3xl bg-white pb-12 pt-[69px]">
          <div className="absolute top-[-50px] rounded-full border-[10px] border-[#D9EBFA]">
            <Image src={Person2} alt="Image of person" width={80} height={80} />
          </div>
          <h3 className="mb-2 text-lg font-bold">Albert Flores</h3>
          <p className="mx-[39px] mb-8 text-center text-gray-700 opacity-70">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts
          </p>
          <Image src={Stars} alt="rating" width={152} height={24} />
        </div>
        <div className="relative flex max-w-[500px] flex-col items-center rounded-3xl bg-white pb-12 pt-[69px]">
          <div className="absolute top-[-50px] rounded-full border-[10px] border-[#D9EBFA]">
            <Image src={Person3} alt="Image of person" width={80} height={80} />
          </div>
          <h3 className="mb-2 text-lg font-bold">Bessie Cooper</h3>
          <p className="mx-[39px] mb-8 text-center text-gray-700 opacity-70">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts
          </p>
          <Image src={Stars} alt="rating" width={152} height={24} />
        </div>
      </div>
    </section>
  );
}
