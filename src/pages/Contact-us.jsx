import React, { useState, useRef } from "react";
import HeroSecion from "../components/HeroSecion";
import { Home, HomeIcon, MailOpen, Smartphone } from "lucide-react";
import Button from "../ui/Button";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
export default function ContactUs() {
  const form = useRef();

  const initialState = {
    message: "",
    name: "",
    email: "",
    subject: "",
    phoneNumber:''
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      message: formData.message,
      email: formData.email,
      subject: formData.subject,
      phoneNumber: formData.phoneNumber,
    };
    emailjs
      .send("service_tjwvl0k", "template_l0cspth", templateParams, {
        publicKey: "hfCJUGs3X1sz55Xu4",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData(initialState);
          toast.success("Message Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    console.log(formData);
  };

  return (
    <section className="mb-5">
      <div>
        <HeroSecion
          title="Contact Us"
          description="Even the all-powerful Pointing has no control about the blind."
          buttonTitle="Contact Us"
          buttonLink="#contact"
        />
      </div>
      <div className="">
        <div className="flex flex-col mx-8 md:flex-row md:items-center md:justify-between md:mx-[10rem]">
          <div className=" flex flex-col gap-10 ">
            <h1 className="text-[#232F55] text-xl font-semibold">
              Get in Touch
            </h1>
            <form
              className="flex flex-col gap-7 text-xs"
              ref={form}
              onSubmit={handleSubmit}
            >
              <textarea
                placeholder="Enter your message"
                className="border md:w-[650px] h-[200px] p-2 focus:outline-none focus:ring-1 focus:ring-[#FF8C42] focus:border-transparent"
                name="message"
                onChange={handleChange}
                value={formData.message}
              />
              <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:gap-x-6 ">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border h-10 md:w-[200px] p-2   focus:outline-none focus:ring-1 focus:ring-[#FF8C42] focus:border-transparent"
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border h-10  w-[300px] md:w-[200px] p-2 focus:outline-none focus:ring-1 focus:ring-[#FF8C42] focus:border-transparent"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="border h-10  w-[300px] md:w-[200px] p-2 focus:outline-none focus:ring-1 focus:ring-[#FF8C42] focus:border-transparent"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
              </div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="border h-10  w-[300px]  w-[300px] md:w-[650px] p-2 focus:outline-none focus:ring-1 focus:ring-[#FF8C42] focus:border-transparent"
                name="subject"
                onChange={handleChange}
                value={formData.subject}
              />
              <Button
                type="submit"
                className="bg-white text-sm capitalize text-white h-10 w-[300px] md:w-[650px]"
                colored={true}
                icon={true}
              >
                submit
              </Button>
            </form>
          </div>
          <div className=" mt-6 md:mt-0 flex flex-col gap-y-7 md:mr-32 text-sm">
            <div className="flex items-center  gap-x-6">
              <Home size={30} color="#FF8C42" />
              <div className="flex flex-col justify-center gap-y-1 text-gray-400/75">
                <p>Delhi,India</p>
                <p>Shabhapur Delhi</p>
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <Smartphone size={30} color="#FF8C42" />
              <div className="flex flex-col  justify-center gap-y-1 text-gray-400/75">
                <p>+918882684762</p>
                <p className="">Mon - Sun 10am - 10pm</p>
              </div>
            </div>
            <div className="flex items-center   gap-x-6">
              <MailOpen size={30} color="#FF8C42" />
              <div className="flex flex-col justify-center gap-y-1 text-gray-400/75">
                <p>singhdepu566@gmail.com</p>
                <p>Shabhapur Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
