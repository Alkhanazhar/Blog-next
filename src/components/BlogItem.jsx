"use client";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ image, category, title, description, id }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.9 }}
      drag="x"
      dragConstraints={{ left: -10, right: 10 }}
      className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow duration-200"
    >
      <Link href={"/blog/" + id}>
        <Image
          src={image}
          alt={"title"}
          width={400}
          height={400}
          className="w-[400px] h-[200px] object-cover"
        />
      </Link>
      <p className="inline-block bg-black text-white text-sm px-1 ml-4 mt-5 ">
        {category}
      </p>
      <div className="p-4">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <h5
          className="mb-2 text-sm tracking-tight line-clamp-2 text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        >
          
        </h5>
        <Link href={"/blog/" + id}>
          <button className="flex items-center py-2 font-semibold text-center ">
            Read more <MoveRight className="ml-3 transition-all duration-200" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogItem;
