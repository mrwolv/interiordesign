import React from "react";
import Button from "../ui/Button";

export default function Discuss() {
  return (
    <section className="mt-10 relative ">
      <div className="">
        <img
          src="https://preview.colorlib.com/theme/interd/assets/img/hero/h1_hero1.jpg.webp"
          alt=""
          className="w-[100%] h-[400px] object-cover"
        />
      </div>
      <div className="drop-shadow-xl absolute z-50 top-[30%]  h-[400px] w-[400px] md:left-[23%]   bg-gradient-to-b from-[#FF8E7D] to-[#ffc99e] md:h-[450px] md:w-[900px]">
        <div className="flex px-5 md:px-0 flex-col gap-6 items-center text-white justify-center my-[7rem]">
          <h1 className="text-xl md:text-3xl font-bold ">
            Lets Discuss Our Interrior
          </h1>
          <p className="md:text-lg text-sm">
            Even the all-powerful Pointing has no control about the
            <br />
            blindtexts it is an almost unorthographic.
          </p>
          <div className="flex items-center justify-between  gap-6 md:px-0 px-10 ">
            <Button
              colored={true}
              onClick={() => window.location.replace("/contact-us")}
            >
              Contact Us
            </Button>
            <Button className={""}>+98637869</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
