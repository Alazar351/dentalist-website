/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Person1 from "@/public/assets/person1.svg";
import Stock1 from "@/public/assets/detail-stock1.png";
import Stock2 from "@/public/assets/detail-stock2.png";
import BlogImg1 from "@/public/assets/blogimg1.png";
import Link from "next/link";

export default function Detail() {
  return (
    <section className="mt-[72px]">
      <div className="mx-20 lg:ml-[190px] lg:mr-[300px]">
        <p className="text-left text-xs font-bold uppercase text-[#583FBC]">
          Technology
        </p>
        <h2 className="mt-4 text-left text-5xl font-bold lg:max-w-[710px]">
          New Technology Make for Better Dental Operation
        </h2>
        <div className="mt-8 flex gap-4">
          <Image src={Person1} alt="Robert Fox image" width={48} height={48} />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Robert Fox</p>
            <p className="text-xs text-muted-foreground">12 August 2021</p>
          </div>
        </div>
        <p className="mt-8 text-muted-foreground">
          The paper discusses the use of epoxy resins in construction and repair
          of offshore concrete structures. Typical properties of resin systems
          are described, and the range of conditions encountered in practice and
          the development of a wide range of epoxy
        </p>
      </div>
      <div className="mx-20 my-16 overflow-clip rounded-2xl">
        <Image
          src={Stock1}
          alt="Examination room image"
          width={1280}
          height={854}
          className="w-full"
        />
      </div>
      <div className="mx-20 lg:ml-[190px] lg:mr-[300px]">
        <p className="text-muted-foreground ">
          The paper discusses the use of epoxy resins in construction and repair
          of offshore concrete structures. Typical properties of resin systems
          are described, and the range of conditions encountered in practice and
          the development of a wide range of epoxy systems for a variety of
          applications are discussed. Several applications such as surface and
          underwater repairs, and the use of epoxy resins as curing membranes,
          and to seal cracks and joints are described in detail. It is shown
          that careful selection of materials and good quality of workmanship
          are essential to derive the maximum benefit from the use of epoxy
          systems. A wide range of properties could be obtained from epoxies to
          suit the requirements of the designer and the contractor.
        </p>
        <p className="mt-8 text-muted-foreground ">
          To this day, it’s not entirely clear which seven lines the article
          referenced. The prevailing theory is that it’s the roughly seven lines
          of curl it took to create a Charge. However, a search for the seven
          lines of code ultimately misses the point: the ability to open up a
          terminal, run this curl snippet, then immediately see a successful
          credit card payment felt like seven lines of code. It’s unlikely that
          a developer believed a production-ready payments integration involved
          literally only seven lines of code. But taking something as complex as
          credit card processing and reducing.
        </p>
        <h3 className="mt-16 text-left text-4xl font-bold lg:max-w-[743px]">
          New Technology Make for Better Dental Operation
        </h3>
        <p className="mt-6 text-muted-foreground ">
          A few years ago, Bloomberg Businessweek published a feature story on
          Stripe. Four words spanned the center of the cover: “seven lines of
          code,” suggesting that’s all it took for a business to power payments
          on Stripe. The assertion was bold—and became a theme and meme for us.
        </p>
        <p className="mt-8 text-muted-foreground ">
          To this day, it’s not entirely clear which seven lines the article
          referenced. The prevailing theory is that it’s the roughly seven lines
          of curl it took to create a Charge. However, a search for the seven
          lines of code ultimately misses the point: the ability to open up a
          terminal, run this curl snippet, then immediately see a successful
          credit card payment felt like seven lines of code. It’s unlikely that
          a developer believed a production-ready payments integration involved
          literally only seven lines of code. But taking something as complex as
          credit card processing and reducing the integration to only a few
          lines of code that, when run, immediately returns a successful Charge
          object is really quite magical.
        </p>
      </div>
      <div className="mx-20 mt-12 grid grid-cols-1 items-center justify-center gap-10 lg:ml-[190px] lg:mr-[300px] lg:grid-cols-2">
        <Image
          src={Stock2}
          alt="Examination room image"
          width={510}
          height={300}
          className="w-full rounded-3xl "
        />
        <Image
          src={BlogImg1}
          alt="Examination room image"
          width={400}
          height={300}
          className="w-full rounded-3xl"
        />
      </div>
      <div className="from mx-20 my-16 border-l-4 border-[#583FBC] bg-gradient-to-r from-[rgb(219,239,250,0.5)] to-[rgb(255,249,249,0.2)]  py-14 pl-10 pr-[114px] font-bold lg:ml-[260px] lg:mr-[300px]">
        “ Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
        lorem quis bibendum auctor, nisi elit consequat ipsum. Proin gravida
        nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
        auctor ”
      </div>
      <div className="mx-20 lg:ml-[190px] lg:mr-[300px]">
        <p className=" text-muted-foreground ">
          A few years ago, Bloomberg Businessweek published a feature story on
          Stripe. Four words spanned the center of the cover: “seven lines of
          code,” suggesting that’s all it took for a business to power payments
          on Stripe. The assertion was bold—and became a theme and meme for us.
        </p>
        <div className="my-12 flex items-center justify-start text-lg font-bold">
          <p className="">Related resource:</p>
          <Link className="text-[#583FBC]" href={"/Blog/Post"}>
            What is canal root and what's causing it
          </Link>
        </div>
        <p className=" text-muted-foreground ">
          A few years ago, Bloomberg Businessweek published a feature story on
          Stripe. Four words spanned the center of the cover: “seven lines of
          code,” suggesting that’s all it took for a business to power payments
          on Stripe. The assertion was bold—and became a theme and meme for us.
        </p>
      </div>
    </section>
  );
}
