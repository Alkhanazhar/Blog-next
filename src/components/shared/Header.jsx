"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        fixed
          ? "backdrop-blur-md bg-[#ffffffd3] z-[100] drop-shadow-md duration-150 "
          : ""
      } px-5 py-2 lg:px-20 md:px-12 items-center border-b z-[100] transition-all duration-100 bg-white fixed top-0 left-0 w-full `}
    >
      <div className="flex-between items-center">
        <Logo />
        <ul className="hidden md:flex-between gap-8 font-medium md:text-md text-base md:mr-32 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About us</Link>
        </ul>
        <div className="flex items-center justify-center gap-4">
          <Link href={"/admin"} className="btn-shadow bg-white">
            Get Started
          </Link>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
