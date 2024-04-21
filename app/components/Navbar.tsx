"use client";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <nav className="flex items-center justify-between gap-6 px-20 pt-8 md:flex-row">
      <Link href={"/"} className="flex list-none gap-2">
        <Image src={Logo} width={24} height={24} alt="Logo image" />
        <span className="text-2xl font-extrabold">Dentalist.</span>
      </Link>

      {isDesktop ? (
        <div className="flex list-none gap-8 text-sm font-bold md:gap-6 lg:gap-16 ">
          <Link href={"/About"}>About us</Link>
          <Link href={"/#Features"}>New Patient</Link>
          <Link href={"/#Services"}>Our Service</Link>
          <div>Contact Us</div>
        </div>
      ) : (
        <div>
          <div onClick={toggle}>{open ? <X /> : <Menu />}</div>
          {open ? (
            <div className="absolute z-50 ml-[-85px] mt-5 h-[200px] w-[200px] rounded bg-white ">
              <div className="flex list-none flex-col items-center justify-center gap-8 pt-2 text-sm font-bold md:gap-6 lg:gap-16 ">
                <Link href={"/About"}>About us</Link>
                <Link href={"/#Features"}>New Patient</Link>
                <Link href={"/#Services"}>Our Service</Link>
                <div>Contact Us</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}

      <div className="list-none">
        <Link href={"/#Appointment"}>
          <Button className="rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#583FBC] hover:text-white ">
            Book appointment
          </Button>
        </Link>
      </div>
    </nav>
  );
}
