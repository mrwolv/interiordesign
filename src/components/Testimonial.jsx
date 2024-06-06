import React from "react";
import { testimonial } from "../constants/constant";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css";

export default function Testimonial() {
  return (
    <section className="mt-10 slider-container bg-[#FFF9F5] max-w-[540px] md:min-w-[1000px] h-[320px] md:py-10 md:mx-[17rem] md:mt-20  ">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="hover:cursor-pointer"
      >
        {testimonial.map((item) => (
          <SwiperSlide
            className="flex flex-col items-center   gap-5  text-center"
            key={item.id}
          >
            <img src={item.imgLink} alt="" className="h-12 w-16 mb-5  " />
            <p className="text-[#A19E9B] w-fit md:w-[800px]   text-sm md:text-lg  mb-3">
              {item.description}
            </p>
            <h4 className="text-[#232F55]  font-semibold mb-6 md:mb-10">
              {" "}
              - {item.author}
            </h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
