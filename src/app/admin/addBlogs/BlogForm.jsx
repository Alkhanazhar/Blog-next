"use client";

import axios from "axios";
import { Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
const BlogForm = () => {
  const [imageForm, setImageForm] = useState();
  const [image, setImage] = useState();
  const [data, setData] = useState({
    title: "",
    description: "",
    author: "foe doe",
    author_img: "/author_img.jpg",
    category: "",
  });
  async function handleChangeImage(e) {
    setImageForm(e.target.files[0]);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "gjkb1b4a");
    formData.append("cloud_name", "dhbz08p8u");
    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dhbz08p8u/image/upload",
        formData
      );
      setImage(data);
    } catch (error) {
      setImageForm(null);
      console.log(error, "Error uploading image to cloudinary");
    }
  }
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  async function onSubmitForm(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image?.url);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("author_img", data.author_img);
    formData.append("category", data.category);
    try {
      const { data } = await axios.post("/api/blog", formData);

      if (data.success) {
        toast("created successfully");
        setImage(false);
        setData({
          title: "",
          description: "",
          author: "foe doe",
          author_img: "/author_img.jpg",
          category: "",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="pt-5 px-5 sm:pt-12 sm:pl-16 overflow-y-hidden  ">
      <form onSubmit={onSubmitForm}>
        <div className="text-xl">Upload Image</div>
        <label htmlFor="image">
          {image ? (
            <Image
              src={image?.url}
              alt="image"
              width={80}
              height={80}
              className="mt-10"
            />
          ) : (
            <Upload className="border h-20 w-20 p-2 my-2" />
          )}
        </label>
        <input
          type="file"
          hidden
          required
          id="image"
          onChange={handleChangeImage}
        />
        <p className="text-xl mt-4 ">Blog Title</p>
        <input
          className="sm:w-[500px] px-4  mt-2 py-3 border"
          type="text"
          placeholder="Blog Title "
          value={data.title}
          name="title"
          onChange={handleDataChange}
        />
        <p className="text-xl mt-4 ">Blog Description</p>
        <textarea
          className="sm:w-[500px] px-4 py-3 mt-2 border"
          type="text"
          name="description"
          onChange={handleDataChange}
          value={data.description}
          placeholder="Blog Description "
        />
        <p className="text-xl mt-4 ">Blog Category</p>
        <select
          onChange={handleDataChange}
          name="category"
          className="w-40 mt-2 p-4 border text-gray-700"
        >
          <option className="rounded-none p-4" value="Technology">
            Technology
          </option>
          <option className="rounded-none p-4" value="Start Up">
            Start Up
          </option>
          <option className="rounded-none p-4" value="Lifestyle">
            Lifestyle
          </option>
        </select>

        <button
          type="submit"
          className="my-4 block bg-black px-6 py-3 text-xl text-white font-medium"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
