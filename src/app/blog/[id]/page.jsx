import React from "react";
import Header from "@/components/shared/Header";
import BlogsData from "./BlogsData";

const page = ({ params }) => {
  return (
    <>
      <Header />
      <div className="bg-white h-screen mt-20">
        <BlogsData id={params.id} />
      </div>
    </>
  );
};

export default page;
