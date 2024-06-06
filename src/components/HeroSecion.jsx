import React from "react";
import Button from "../ui/Button";

export default function HeroSecion({ title,description,buttonTitle ,buttonLink}) {
  return (
    <section className="flex flex-col gap-y-14 md:flex-row items-center justify-evenly  py-20 mt-10 md:px-0 px-8 ">
      <div className="flex flex-col gap-y-6 md:w-[600px] ">
        <h1
          className="text-[#232F55] text-xl md:text-7xl font-medium animate__animated animate__fadeInUp"
          id="heroText"
        >
        {title}
        </h1>
        <p className="text-[#A19E9B] md:text-lg animate__animated animate__fadeInUp animate__delay-1s">
          {description}
        </p>
        <Button
          colored="true"
          className="animate__animated animate__fadeInUp animate__delay-2s"
          onClick={()=>window.location.replace(buttonLink)}
        >
         {buttonTitle}
        </Button>
      </div>
      <div className="md:relative md:bg-[#FF8C42] md:h-[450px] md:w-[450px] md:top-10 md:left-20 animate__animated animate__fadeInRight animate__delay-1s">
        <img
          src="https://preview.colorlib.com/theme/interd/assets/img/hero/h1_hero1.jpg.webp"
          alt="ww"
          className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] object-cover object-center  shadow-xl"
        />
      </div>
    </section>
  );
}
