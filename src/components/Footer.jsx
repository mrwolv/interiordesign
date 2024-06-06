import React from "react";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-20 bg-[#232F55] text-[#A5A7B3] min-h-screen flex flex-col gap-10 mt-28 py-10 md:py-0 md:mt-0 md:flex-row md:items-center md:justify-between">
      <div className="text-sm flex flex-col gap-6 w-[300px] ">
        <img
          src="https://preview.colorlib.com/theme/interd/assets/img/logo/logo.png.webp"
          alt=""
          className="text-white h-[100px] w-[300px] "
        />

        <p>
          The automated process starts as soon as your clothes go into the
          machine.
        </p>
        <div className="flex items-center gap-x-4">
          <div className="h-12 w-12 bg-slate-400/25 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-[#FF8C42]">
            <Twitter
              size={28}
              color="#8088FF"
              strokeWidth={1.25}
              className="hover:text-white"
            />
          </div>
          <div className="h-12 w-12 bg-slate-400/25 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-[#FF8C42]">
            <Twitter
              size={28}
              color="#8088FF"
              strokeWidth={1.25}
              className="hover:text-white"
            />
          </div>
          <div className="h-12 w-12 bg-slate-400/25 rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-[#FF8C42]">
            <Twitter
              size={28}
              color="#8088FF"
              strokeWidth={1.25}
              className="hover:text-white"
            />
          </div>
        </div>
      </div>
      <div className="md:mt-20">
        <h3 className="text-white font-semibold mb-10 md:text-xl">
          Our Solutions
        </h3>
        <ul className="flex flex-col justify-center gap-2">
          <li className="hover:underline hover:cursor-pointer">
            Design & Creatives
          </li>
          <li className="hover:underline hover:cursor-pointer">
            Telecommunications
          </li>
          <li className="hover:underline hover:cursor-pointer">Resturents</li>
          <li className="hover:underline hover:cursor-pointer">Programing</li>
          <li className="hover:underline hover:cursor-pointer">Architecture</li>
        </ul>
      </div>
      <div className="md:mt-20">
        <h3 className="text-white font-semibold mb-10 md:text-xl">
          Our Solutions
        </h3>
        <ul className="flex flex-col justify-center gap-2">
          <li className="hover:underline hover:cursor-pointer">
            Design & Creatives
          </li>
          <li className="hover:underline hover:cursor-pointer">
            Telecommunications
          </li>
          <li className="hover:underline hover:cursor-pointer">Resturents</li>
          <li className="hover:underline hover:cursor-pointer">Programing</li>
          <li className="hover:underline hover:cursor-pointer">Architecture</li>
        </ul>
      </div>
      <div className="md:mt-20">
        <h3 className="text-white font-semibold mb-10 md:text-xl">
          Our Solutions
        </h3>
        <ul className="flex flex-col justify-center gap-2">
          <li className="hover:underline hover:cursor-pointer">
            Design & Creatives
          </li>
          <li className="hover:underline hover:cursor-pointer">
            Telecommunications
          </li>
          <li className="hover:underline hover:cursor-pointer">Resturents</li>
          <li className="hover:underline hover:cursor-pointer">Programing</li>
          <li className="hover:underline hover:cursor-pointer">Architecture</li>
        </ul>
      </div>
      <div className="absolute top-[90%] md:left-[90%] ">
        <h1 className="text-white text-xs">Copyright &copy; Depu Singh 2024</h1>
      </div>
    </footer>
  );
}
