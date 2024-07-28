"use client";

import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogdata, setBlogsData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const fetchData = async () => {
    const { data } = await axios.get(`/api/blog`);
    setBlogsData(data);
    setIsExpanded(true);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const menuList = ["All", "Technology", "Lifestyle", "Start up"];
  return (
    <motion.div
      initial={{ width: "100%", height: 0 }}
      animate={{
        width: isExpanded ? "100%" : 0,
        height: isExpanded ? "100%" : 0,
        position: "relative",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="mx-auto min-h-[50vh]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex items-center justify-center my-10 gap-4 "
      >
        {menuList?.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setMenu(item);
              }}
              className={`${
                menu === item && "bg-black text-white px-4 py-1  rounded-sm"
              }`}
            >
              {item}
            </button>
          );
        })}
      </motion.div>
      <div className="flex justify-center flex-wrap gap-3 gap-y-10 mb-16 xl:mx-24">
        {blogdata
          ?.filter((item) => (menu === "All" ? true : item?.category === menu))
          .map((item) => {
            return (
              <BlogItem
                key={item._id}
                category={item.category}
                description={item.description}
                image={item.image}
                id={item._id}
              />
            );
          })}
      </div>
    </motion.div>
  );
};

export default BlogList;
