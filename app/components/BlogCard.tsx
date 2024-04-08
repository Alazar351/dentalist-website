import Image from "next/image";

interface BlogCard {
  category: string;
  title: string;
  description: string;
  img: any;
  day: string;
  month: string;
}

export default function BlogCard({
  category,
  title,
  description,
  img,
  day,
  month,
}: BlogCard) {
  return (
    <div className="max-w-[400px] rounded-3xl border pb-[42px]">
      <div className="relative mx-4 mt-4 ">
        <Image
          src={img}
          alt="blog image"
          width={368}
          height={250}
          className="rounded-3xl"
        />
        <div className="absolute left-4 top-4 flex min-h-[60px] min-w-[60px] max-w-[60px] flex-col items-center justify-center rounded-xl bg-white">
          <p className="text-lg font-bold">{day}</p>
          <p className="text-sm font-bold text-gray-700 opacity-70">{month}</p>
        </div>
      </div>
      <div className="mx-6 mt-6">
        <p className="text-xs font-bold uppercase text-[#583FBC]">{category}</p>
        <h3 className="mt-2 text-lg font-bold">{title}</h3>
        <p className="mt-3 text-gray-700 opacity-70">{description}</p>
      </div>
    </div>
  );
}
