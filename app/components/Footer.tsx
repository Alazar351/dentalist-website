import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import Phone from "../../public/assets/phone.svg";
import Clock from "../../public/assets/clock.svg";
import Location from "../../public/assets/location.svg";
import Facebook from "../../public/assets/facebook.svg";
import Twitter from "../../public/assets/twitter.svg";
import Instagram from "../../public/assets/instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex min-h-[600px] flex-wrap justify-between gap-[150px] bg-[#041434] px-20 pb-[50px] pt-24">
      <div>
        <Link href={"/"} className="flex list-none gap-2 ">
          <Image src={Logo} width={24} height={24} alt="Logo image" />
          <span className="text-2xl font-extrabold text-white">
            Dentalist<span className="text-[#7B55EC]">.</span>
          </span>
        </Link>
        <p className="mt-8 max-w-[510px] text-lg text-white opacity-60">
          Dental Care Seattle is a top-rated local practice for cosmetic,
          preventative, and restorative dentistry on First Hill
        </p>
        <div className="mt-16">
          <p className="text-xs font-bold uppercase text-white opacity-60">
            Follow us on
          </p>
          <div className="mt-6 flex gap-12">
            <Image
              src={Facebook}
              alt="facebook logo"
              width={24}
              height={24}
              className="max-h-6"
            />
            <Image src={Twitter} alt="twitter logo" width={24} height={24} />
            <Image
              src={Instagram}
              alt="instagram logo"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-xs font-bold uppercase text-white opacity-60">
          Quick links
        </p>

        <Link href={"/About"} className="text-sm font-bold text-white">
          About us
        </Link>
        <Link href={"/Service"} className="text-sm font-bold text-white">
          Dental Service
        </Link>

        <Link href={"/#Services"} className="text-sm font-bold text-white">
          Dentist
        </Link>
        <Link href={"/Blog"} className="text-sm font-bold text-white">
          Blog
        </Link>
        <Link href={"/About#Faq"} className="text-sm font-bold text-white">
          FAQs
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-xs font-bold uppercase text-white opacity-60">
          Contact & Information
        </p>
        <div className="flex w-full items-center gap-8 lg:h-[64px] ">
          <Image src={Phone} width={64} height={64} alt="phone image" />
          <div>
            <p className="mb-1 text-xs font-bold uppercase text-white opacity-60">
              Phone Number
            </p>
            <p className="font-bold text-white">+003 482 394 123</p>
          </div>
        </div>
        <div className="flex w-full items-center gap-8 lg:h-[64px] ">
          <Image src={Clock} width={64} height={64} alt="phone image" />
          <div>
            <p className="mb-1 text-xs font-bold uppercase text-white opacity-60">
              Open Hour
            </p>
            <p className="font-bold text-white">09:00 AM - 18:00Pm</p>
          </div>
        </div>
        <div className="flex w-full items-center gap-8 lg:h-[64px] ">
          <Image src={Location} width={64} height={64} alt="phone image" />
          <div>
            <p className="mb-1 text-xs font-bold uppercase text-white opacity-60">
              Clinic Address
            </p>
            <p className="font-bold text-white">
              35 West Dental Street California 1004
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-white opacity-60">©Dentalist. All Right Reserved</p>
        <div className="flex w-full max-w-[220px] justify-between">
          <p className="text-white">Terms of Use</p>
          <p className="text-white">Privacy Policy</p>
        </div>
      </div>
    </section>
  );
}
