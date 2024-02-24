"use client"
import Link from 'next/link';
import React,{useState, useEffect} from 'react';
import { Socials } from '@/constants';
import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';
import { GrProjects } from "react-icons/gr";
import { RxCode } from "react-icons/rx";
import { IoMailOutline } from "react-icons/io5";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className="w-full h-[60px]  flex  flex-col items-center ">
     
      <div
        className={`fixed top-0 left-0 w-full  flex flex-col justify-center items-center  shadow-md shadow-blue-300  z-10 px-12 py-1  ${isScrolled ?'backdrop-blur-md bg-opacity-70':''}` }
      >
        <div className="w-full h-full  flex flex-row items-center md:justify-between justify-center py-1 relative">
          <Link href="#about" className="text-white ">San's Portfolio</Link>
          <div className="w-[500px] h-full md:flex items-center justify-between md:mr-20 hidden  ">
            <div
              className="w-full h-auto flex items-center justify-between border-[2.5px] border-blue-300 rounded-full mr-4 px-5 py-2 text-gray-200 "
            >
              <Link href="#about">About Me</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
          
          <div className="md:flex flex-row gap-5 items-center justify-center rounded-full hidden">
            {Socials.map((social) => (
              <Image
                key={social.name}
                src={social.src}
                alt={social.name}
                width={32}
                height={32}
                className="bg-white rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div  className=' bottom-0  mb-4 fixed z-10 backdrop-blur-md bg-opacity-50 rounded-full '>
            <div
                className=" w-full h-12  flex items-center gap-6 justify-between border-[2.5px] border-blue-300 rounded-full mr-4 px-5 py-2 text-gray-200  md:hidden  "
              >
                <Link href="#about"> <CgProfile className='h-6 w-6' /></Link>
                <Link href="#skills"><RxCode className='h-6 w-6' /></Link>
                <Link href="#projects"><GrProjects className='h-5 w-5' /></Link>
                <Link href="#contact"><IoMailOutline className='h-6 w-6' /></Link>
              </div>
          </div>
    </nav>
  );
};

export default NavBar;
