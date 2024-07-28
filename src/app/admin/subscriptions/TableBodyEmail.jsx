"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const TableBody = () => {
  const [blogData, setBlogsData] = useState([]);
  // fetching function
  const fetchData = async () => {
    const { data } = await axios.get(`/api/email`);
    setBlogsData(data);
  };
  const deleteBlog = async (id) => {
    await axios.delete("/api/email", {
      params: {
        id: id,
      },
    });
    toast.success(`Blog deleted successfully"`);
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (blogData.length == 0) {
    return (
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="items-center gap-2 hidden sm:flex px-6 py-4 font-medium md:flex"
        >
          <Image
            src={"/author_img.jpg"}
            width={30}
            height={30}
            alt="author"
            className="rounded-full "
          />
          no email subscriber
        </th>
        <td className="px-6 py-4 ">no title</td>
        <td className="px-6 py-4 ">2 oct 1883</td>
        <td className="px-6 py-4 ">
          <Trash className="bg-gray-500 p-2 w-10 h-10 cursor-pointer text-white rounded-lg border" />
        </td>
      </tr>
    );
  }
  return (
    <>
      {blogData.map((item) => {
        let date;
        if (item?.date) {
          date = new Date(item?.date);
        }
        return (
          <tr className="bg-white border-b" key={item?._id}>
            <th
              scope="row"
              className="items-center gap-2 hidden sm:flex px-6 py-4 font-medium md:flex"
            >
              <Image
                src={"/author_img.jpg"}
                width={30}
                height={30}
                alt="author"
                className="rounded-full "
              />
              {item?.author}
            </th>
            <td className="px-6 py-4 ">
              {item?.email ? item?.email : "No Title"}
            </td>
            <td className="px-6 py-4 ">
              {item?.date ? date.toLocaleString("en-US") : "11 jan"}
            </td>
            <td className="px-6 py-4 " onClick={() => deleteBlog(item?._id)}>
              <Trash className="bg-red-500 p-2 w-10 h-10 cursor-pointer text-white rounded-lg border" />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableBody;
