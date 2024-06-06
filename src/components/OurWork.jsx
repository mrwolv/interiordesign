import React from "react";
import { whatWedo } from "../constants/constant";

import Button from "../ui/Button";

export default function OurWork() {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-20 px-5 md:px-0 ">
      <h1 className="text-xl md:text-center md:text-4xl font-semibold text-[#232F55]">
        What We Do{" "}
      </h1>
      <p className="md:text-center md:text-lg md:w-[500px] md:mb-7 text-[#A19E9B]">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic.
      </p>
      <div className="flex flex-col gap-y-10 md:gap-y-0  md:flex-row md:items-center md:justify-between md:gap-x-14 px-5 md:px-44 ">
        {whatWedo.map((item) => (
          <div
            className="relative flex flex-col justify-start gap-y-4 hover:cursor-pointer group"
            key={item.id}
          >
            <img
              src={item.imgLink}
              alt="ww"
              className="h-[300px] w-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-orange-400/60 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            <h1 className="absolute top-[54%] md:top-[70%] px-2 text-white font-bold text-lg md:text-xl transition-all duration-500 opacity-0 group-hover:opacity-100">
              {item.title}
            </h1>
            <p className="absolute top-[75%] md:top-[82%] px-2 text-[#A19E9B] transition-all duration-500 opacity-0 group-hover:opacity-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6 w-full">
        <Button colored={true}>More Work</Button>
      </div>
    </section>
  );
}
