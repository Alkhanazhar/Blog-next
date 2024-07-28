"use client";
import axios from "axios";
import TableBody from "./TableBody";
import { useEffect, useState } from "react";

const page = () => {
 
  return (
    <div className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-xl">All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border scrollhide ">
        <table className="w-full text-sm text-gray-500 ">
          <thead className="text-sm text-gray-700 bg-gray-100 text-left uppercase ">
            <tr>
              <th scope="col" className="sm:block px-6 py-3">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <TableBody />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
