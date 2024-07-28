"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";

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
        fixed ? "  backdrop-blur-lg bg-[#ffffff85] z-[100]" : ""
      } px-5 py-2 lg:px-20 md:px-12 items-center border-b z-[100] transition-all duration-100 bg-white fixed top-0 left-0 w-full`}
    >
      <div className="flex-between items-center">
        <Logo />
        <ul className="flex-between gap-8 font-medium md:text-md text-base md:mr-32">
          <Link href={"/"}>Home</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About us</Link>
        </ul>
        <Link href={"/admin"} className="btn-shadow bg-white">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Header;
