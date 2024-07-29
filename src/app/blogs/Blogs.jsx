"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BLogCard from "./BLogCard";

const Blogs = () => {
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
  return (
    <div className="flex flex-col p-10 max-w-3xl mx-auto ">
      {blogdata?.map((item) => {
        return <BLogCard key={item?._id} item={item} />;
      })}
    </div>
  );
};

export default Blogs;
