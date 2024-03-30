"use client";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <nav className="flex items-center justify-between gap-6 px-6 pt-8 md:flex-row">
      <div className="flex list-none gap-2">
        <Image src={Logo} width={24} height={24} alt="Logo image" />
        <span className="text-2xl font-extrabold">Dentalist.</span>
      </div>

      {isDesktop ? (
        <div className="flex list-none gap-8 text-sm font-bold md:gap-6 lg:gap-16 ">
          <div>About Us</div>
          <div>New Patient</div>
          <div>Our Services</div>
          <div>Contact Us</div>
        </div>
      ) : (
        <div>
          <div onClick={toggle}>{open ? <X /> : <Menu />}</div>
          {open ? (
            <div className="absolute ml-[-85px] mt-5 h-[200px] w-[200px] ">
              <div className="flex list-none flex-col items-center justify-center gap-8 pt-2 text-sm font-bold md:gap-6 lg:gap-16 ">
                <div>About Us</div>
                <div>New Patient</div>
                <div>Our Services</div>
                <div>Contact Us</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}

      <div className="list-none">
        <Button className="rounded-[10px] bg-[#583FBC] font-bold text-white hover:bg-[#583FBC] hover:text-white ">
          Book appointment
        </Button>
      </div>
    </nav>
  );
}
