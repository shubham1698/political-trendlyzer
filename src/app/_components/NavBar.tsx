import React from "react";

export default function NavBar() {
  return (
    <div className="flex flex-row w-full ">
      <div className="flex flex-row w-2/5 ">
        <div className="mt-auto mb-auto ml-5 bg-cover bg-[url('/images/logo.svg')] w-20 h-20" />
        <span className="text-2xl font-bold mt-auto mb-auto mr-auto ml-2 text-white">
          Political Trendlyzer
        </span>
      </div>
    </div>
  );
}
