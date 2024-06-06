import React, { useEffect, useRef, useState } from 'react';


import { navLinks } from '../constants/constant';
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const wrapperRef = useRef(null);

    function useClickOutside(ref, onClickOutside) {
        useEffect(() => {
            const handleClick = (e) => {
                if (isOpen && !ref.current?.contains(e.target)) {
                    onClickOutside();
                }
            };

            // Bind the event listener
            document.addEventListener('click', handleClick);

            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('click', handleClick);
            };
        }, [isOpen, ref, onClickOutside]);
    }

    useClickOutside(wrapperRef, () => setIsOpen(false));







    return (
        <div className='relative' ref={wrapperRef}>
            <button onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col justify-center items-center">
                <span className={`bg-white  block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        'rotate-45 translate-y-1' : '-translate-y-0.5 '
                    }`} >
                </span>
                <span className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ?
                        'opacity-0' : 'opacity-100'
                    }`} >
                </span>
                <span className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${isOpen ?
                        '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
                </span>

            </button>
            <div className=' bg-slate-100/25' >


                {isOpen && <nav className=' absolute right-3 top-7 p-10 flex flex-col gap-y-6  animate__animated animate__fadeInUp'>
                    {
                        navLinks.map((link, index) => (

                            <Link  to={link.url} key={index} className="capitalize
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
                    ">{link.title}</Link>
                        ))
                    }
                </nav>}

            </div>
        </div>
    )
};

export default Nav;
