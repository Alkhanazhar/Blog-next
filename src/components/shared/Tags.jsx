import { Facebook, Github, Twitter } from "lucide-react";
import React from "react";

const Tags = () => {
  return (
    <>
      <div className="flex gap-2">
        <a href="/facebook" target="_blank">
          <Facebook className="w-[40px] border h-10 p-2 rounded-full shadow-lg cursor-pointer" />
        </a>
        <Twitter className="w-[40px] border h-10 p-2 rounded-full shadow-lg cursor-pointer" />
        <a href="www.google.com/github.com/alkhanazhar" target="_blank">
          <Github className="w-[40px] border h-10 p-2 rounded-full shadow-lg cursor-pointer" />
        </a>
      </div>
    </>
  );
};

export default Tags;
