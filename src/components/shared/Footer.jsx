import React from "react";
import Logo from "./Logo";
import { Facebook, Github, Twitter } from "lucide-react";
import Tags from "./Tags";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-2 sm:gap-0 sm:flex-row border-t p-5 py-2">
      <Logo />
      <p className="text-sm ">
        All right reserved &copy; opinion blogs{" "}
      </p>
      <Tags />
    </div>
  );
};

export default Footer;
