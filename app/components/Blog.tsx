import BlogCard from "./BlogCard";
import BlogImg1 from "../../public/assets/blogimg1.png";
import BlogImg2 from "../../public/assets/blogimg2.png";
import BlogImg3 from "../../public/assets/blogimg3.png";
import Image from "next/image";

const blogData = [
  {
    category: "Technology",
    title: "New Technology Make for Dental Operation",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing ",
    img: BlogImg1,
    day: "23",
    month: "jan",
  },
  {
    category: "Dental",
    title: "Regular Dental care make Your Smile Brighter",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing",
    img: BlogImg2,
    day: "16",
    month: "mar",
  },
  {
    category: "Hygiene",
    title: "Dental Hygiene for All Age to Make Smile",
    description:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing ",
    img: BlogImg3,
    day: "18",
    month: "feb",
  },
];

export default function Blog() {
  return (
    <section className="mt-36 flex flex-col items-center">
      <p className="text-xs font-bold uppercase text-[#583FBC]">Blog</p>
      <h2 className="mt-4 text-center text-5xl font-bold ">
        Stay updated with our latest news
      </h2>
      <div className="mx-20 mt-24 grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-3">
        {blogData.map((card, index) => {
          return (
            <div key={index} className=" rounded-3xl border pb-[42px]">
              <div className="relative mx-4 mt-4 ">
                <Image
                  src={card.img}
                  alt="blog image"
                  width={368}
                  height={250}
                  className="w-full rounded-3xl"
                />
                <div className="absolute left-4 top-4 flex min-h-[60px] min-w-[60px]  flex-col items-center justify-center rounded-xl bg-white">
                  <p className="text-lg font-bold">{card.day}</p>
                  <p className="text-sm font-bold capitalize text-gray-700 opacity-70">
                    {card.month}
                  </p>
                </div>
              </div>
              <div className="mx-6 mt-6">
                <p className="text-xs font-bold uppercase text-[#583FBC]">
                  {card.category}
                </p>
                <h3 className="mt-2 text-lg font-bold">{card.title}</h3>
                <p className="mt-3  text-gray-700 opacity-70">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
