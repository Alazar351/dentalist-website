import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "../../../public/assets/blog-hero.svg";
import Search from "../../../public/assets/blog-search.svg";
import { Input } from "@/components/ui/input";

export default function News() {
  return (
    <section className="mx-20 mt-[100px] flex justify-between gap-28">
      <div className="mx-auto flex max-w-[500px] flex-col justify-center lg:mx-0">
        <h2 className="text-[64px] font-bold">News & Articles</h2>
        <p className="mt-8 text-lg">
          Stays updated with our latest blog and news and get healthy tips &
          trick for oral health
        </p>
        <div className="relative mt-[72px] flex items-center justify-center ">
          <Input
            type="search"
            placeholder="Search articles or news..."
            className="h-[60px]"
          />
          <Button
            type="submit"
            className="absolute right-[6px] top-[6px] h-[48px] rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#583FBC] hover:text-white lg:max-w-[240px] "
          >
            Search
            <Image
              className="ml-2"
              src={Search}
              alt="search icon"
              width={16}
              height={16}
            />
          </Button>
        </div>
      </div>
      <Image
        src={Hero}
        alt="patient and dentist image"
        width={417}
        height={419}
        className="hidden lg:block"
      />
    </section>
  );
}
