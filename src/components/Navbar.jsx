import { useEffect, useState } from "react";
import { navLinks } from "../constants/constant";
import Button from "../ui/Button";
import Nav from "./Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);
  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-50); // Hide navbar
      }
      setPrevScrollpos(currentScrollPos);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <header className=" w-full flex items-center  justify-between px-6 py-4 shadow-xl bg-gradient-to-r from-[#FFFBFA] to-[#FFA79A]">
      <div className="">
        <img
          src="https://preview.colorlib.com/theme/interd/assets/img/logo/logo.png.webp"
          alt=""
        />
      </div>
      <div className="hidden md:hidden lg:flex items-center justify-between gap-x-44">
        <nav className=" flex items-center justify-between gap-x-12 ">
          {navLinks.map((link, index) => (
            <Link
              to={link.url}
              
              key={index}
              className="capitalize
                            inline-block
                            
                            relative
                            cursor-pointer
                            transition-all
                            duration-500
                            before:content-['']
                            before:absolute
                            before:-bottom-1
                            before:left-0
                            before:w-0
                            before:h-0.5
                            text-[#717891]
                            before:opacity-0
                            before:transition-all
                            before:duration-500
                            before:bg-gradient-to-r
                            before:from-gray-600
                            before:via-slate-400
                            before:to-zinc-500
                            hover:before:w-full
                            hover:before:opacity-100
                    "
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <Button>+097897897</Button>
      </div>
      <div className="md:hidden flex">
        <Nav />
      </div>
    </header>
  );
};

export default Navbar;
