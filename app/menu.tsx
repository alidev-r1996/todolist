"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiSolidBellRing, BiSolidUser } from "react-icons/bi";

const Menu = () => {

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="font-bold text-slate-800">Todo-List App</h1>
      <div className="flex items-center gap-3">
        <p  className="rounded-full p-1 cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300">
          <BiSolidBellRing className="w-5 h-5" />
        </p>
        <div
          className={`hover:bg-blue-600 hover:text-white rounded-full p-1 cursor-pointer  transition-all duration-300`}
        >
            <BiSolidUser className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
