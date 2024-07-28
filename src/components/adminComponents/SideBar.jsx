"use client";
import React from "react";
import Logo from "../shared/Logo";
import { Mail, Pen, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const SideBar = () => {
  const hoverArr = [
    { href: "blogList", title: "Blog list", icon: Pen },
    {
      href: "addBlogs",
      title: "Add Blog",
      icon: Plus,
    },
    {
      href: "subscriptions",
      title: "Subscriptions",
      icon: Mail,
    },
  ];
  return (
    <motion.div
      initial={{ x: "10%", opacity: 0 }}
      animate={{ x: "0", opacity: 1, duration: 3000 }}
      className="bg-slate-300 h-screen flex flex-col border-r-2 border-black overflow-hidden"
    >
      <div className="px-2 sm:pl-12 py-3 border-b border-black ">
        <Logo />
      </div>
      <div className="py-12 h-full w-full">
        {hoverArr.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              key={item.title}
            >
              <Link
                key={item.id}
                href={"/admin/" + item.href}
                className="shadow flex items-center py-4 justify-around cursor-pointer font-medium border border-black gap-3 mb-8 ml-10 border-r-0"
              >
                <item.icon />
                <p>{item.title}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SideBar;
