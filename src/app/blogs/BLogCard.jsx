import Image from "next/image";
import Link from "next/link";
import React from "react";

const BLogCard = ({ item }) => {
  let date;
  if (item?.date) {
    date = new Date(item?.date);
  }
  return (
    <article
      className="flex  bg-white transition hover:shadow-xl mb-5 "
      key={item?._id}
    >
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          datetime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span className="text-sm">{date && date.toLocaleDateString()}</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56 cursor-pointer">
        <Link href={"/blog/" + item?._id}>
          <Image
            alt=""
            src={item?.image}
            width={300}
            height={300}
            className="aspect-square h-full w-full object-cover"
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <Link href={"/blog/" + item?._id}>
            <h3 className="font-bold uppercase text-gray-900">{item?.title}</h3>
          </Link>

          <p
            className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          ></p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            href={"/blog/" + item?._id}
            className="block bg-white px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 border-2 transition hover hover:shadow-2 duration-150"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BLogCard;
