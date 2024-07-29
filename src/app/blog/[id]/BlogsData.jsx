"use client";

import { Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import axios from "axios";
import Tags from "@/components/shared/Tags";
const BlogsData = ({ id }) => {
  const [blogData, setBlogsData] = useState([]);
  // fetching function
  const fetchData = async (id) => {
    const { data } = await axios.get(`/api/blog`, {
      params: {
        id: id,
      },
    });
    setBlogsData(data);
  };

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(id)
    window.scrollTo(0, 0);
    fetchData(id);
  }, []);

  return blogData ? (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-red-500 h-1 fixed top-0 left-0 w-full z-[1000]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-5 px-5 md:px-12 lg:px-28 bg-gray-200  z-10 "
      >
        <div className="text-center pb-24  ">
          <p className="text-2xl font-semibold sm:text-5xl max-w-[700px] mx-auto ">
            {blogData.title}
          </p>
          <Image
            src={"/author_img.jpg"}
            className="mx-auto mt-6 border border-white rounded-full "
            alt={blogData.title}
            width={60}
            height={60}
          />
          <p className="mt-2 pb-2 text-lg max-w-[740px] mx-auto  ">
            {blogData.author}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mx-5 max-w-[800px] md:mx-auto aspect-video  rounded-lg -mt-[150px] z-[100]  py-10 "
      >
        <Image
          src={blogData.image}
          className="border-4 border-white rounded-xl"
          alt={blogData.title}
          width={800}
          height={600}
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blogData.description }}
        ></div>

        <div className="my-24">
          <p className="font-semibold my-4 ">Share this on Article</p>
          <Tags />
        </div>
      </motion.div>
    </>
  ) : (
    <div>no data available</div>
  );
};

export default BlogsData;
