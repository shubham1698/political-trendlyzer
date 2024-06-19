"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const activePathname = (path: string) => {
    console.log(usePathname().startsWith(path));
    return usePathname().startsWith(path);
  };
  return (
    <div className="flex flex-col  bg-customDark  w-1/5 h-full mr-4">
      <div className="ml-auto mr-auto text-slate-500 font-bold text-lg">
        Vote-Worthy Queries
      </div>
      <div className="flex flex-col mr-auto ml-auto mt-5 w-full">
        <Link href="/query1">
          <div
            className={`queryOption rounded-r-full w-full h-12 pl-2  ${
              activePathname("/query1") ? "activeLink" : ""
            }`}
          >
            Query 1
          </div>
        </Link>
        <Link href="/query2">
          <div
            className={`queryOption rounded-r-full w-full h-12 pl-2  ${
              activePathname("/query2") ? "activeLink" : ""
            }`}
          >
            Query 2
          </div>
        </Link>
        <Link href="/query3">
          <div
            className={`queryOption rounded-r-full w-full h-12 pl-2  ${
              activePathname("/query3") ? "activeLink" : ""
            }`}
          >
            Query 3
          </div>
        </Link>
        <Link href="/query4">
          <div
            className={`queryOption rounded-r-full w-full h-12 pl-2  ${
              activePathname("/query4") ? "activeLink" : ""
            }`}
          >
            Query 4
          </div>
        </Link>
      </div>
    </div>
  );
}
