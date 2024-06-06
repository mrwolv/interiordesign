import React from "react";
import { whatWedo } from "../constants/constant";


export default function WhatWeDo() {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-20 px-5 md:px-0 " id="#what-we-do">
      <h1 className="text-xl md:text-center md:text-4xl font-semibold text-[#232F55]">
        What We Do{" "}
      </h1>
      <p className="md:text-center md:text-lg md:w-[500px] md:mb-7 text-[#A19E9B]">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic.
      </p>
      <div className="flex flex-col gap-y-10 md:gap-y-0  md:flex-row md:items-center md:justify-between md:gap-x-14 px-5 md:px-44 ">
        {whatWedo.map((item) => (
         <div className="relative flex flex-col justify-start gap-y-4 group" key={item.id}>
         <img
           src={item.imgLink}
           alt="ww"
           className="h-[300px] w-[380px] object-cover"
         />
         <h1
           className="text-lg md:text-xl font-medium hover:text-[#FF8E7D] hover:cursor-pointer transition-all duration-500
             animate__animated animate__fadeInUp group-hover:animate__fadeIn"
         >
           {item.title}
         </h1>
         <p className="text-[#A19E9B] animate__animated animate__fadeInUp group-hover:animate__fadeIn">
           {item.description}
         </p>
       </div>
        ))}
      </div>
    </section>
  );
}
