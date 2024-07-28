import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex-between gap-2 items-center">
      <Image
        src={"/blog.png"}
        alt="Logo"
        width={100}
        height={80}
        className="w-16 h-16 mr-4 sm:w-auto"
      />
      <h2 className="tracking-[.3em] hidden md:flex mix-blend-multiply text-base font-bold  lg:text-xl">
        opinion blogs
      </h2>
    </Link>
  );
};

export default Logo;
