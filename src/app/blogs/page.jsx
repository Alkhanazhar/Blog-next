import BlogList from "@/components/BlogList";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-24">
        <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-center font-medium mt-10">All Blogs</h1>
        <BlogList />
        <Footer />
      </div>
    </div>
  );
};

export default page;

