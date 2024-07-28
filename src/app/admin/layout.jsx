"use client";
import SideBar from "@/components/adminComponents/SideBar";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex overflow-y-hidden">
        <SideBar />
        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          className="flex flex-col w-full"
        >
          <div className="flex justify-between w-full py-3 max-h-[60px] border-b px-12  border-black">
            <h3 className="font-medium text-xl">Admin Panel</h3>
            <User />
          </div>
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default layout;
