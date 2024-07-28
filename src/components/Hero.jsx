"use client";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Hero = () => {
  const [email, setEmail] = useState("");
  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  async function subscribeEmail(e) {
    e.preventDefault();

    if (!email) {
      return toast.warn("Please enter a valid email");
    }
    const formData = new FormData();
    formData.append("email", email);
    const { data } = await axios.post("/api/email", formData);
    toast.success("Email Subscribed successfully");
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center my-8"
    >
      <h1 className="text-3xl sm:text-5xl font-medium">Latest blogs</h1>
      <p className="mt-10 md:max-w-[700px] m-auto md:text-base text-xs sm:text-base max-w-[90%] ">
        A blog dedicated to the curious mind, exploring the unseen and the
        extraordinary. Dive deep into stories, ideas, and inspirations that
        shape our world.
      </p>
      <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border shadow-[-7px_7px_0px_#000000]">
        <input
          type="email"
          className="outline-none pl-4"
          placeholder="Enter your Email"
          onChange={handleEmailChange}
        />
        <button
          className="border-l font-medium border-black py-4 px-4 sm:px-8 "
          onClick={subscribeEmail}
        >
          subscribe
        </button>
      </form>
    </motion.div>
  );
};

export default Hero;
