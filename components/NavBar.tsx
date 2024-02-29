"use client"
import Link from 'next/link';
import React,{useState, useEffect} from 'react';
import { Socials, NavLinks } from '@/constants';
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
        className={`fixed top-0 left-0 w-full  flex flex-col justify-center items-center  shadow-md shadow-blue-300  z-30 px-12 py-1  ${isScrolled ?'backdrop-blur-md bg-opacity-70':''}` }
      >
        <div className="w-full h-full  flex flex-row items-center md:justify-between justify-center py-1 relative">
          <Link href="#about" className='flex items-center justify-start gap-1'> <Image src='/images/logo.png' height={60} width={50} alt='logo' className='rounded-full'/> <div  className="text-white md:flex text-md font-medium hidden">Sanjay Sathyanarayanan</div></Link>
          <div className="w-[500px] h-full md:flex items-center justify-between  hidden  ">
            <div
              className="w-full h-auto flex items-center justify-between border-[2.5px] border-blue-300 rounded-full mr-4 px-5 py-2 text-gray-200 "
            >
              {NavLinks.map(link=> {
                return (<Link href={link.src} key={link.name}> {link.name} </Link>)
              })}
            </div>
          </div>
          
          <div className="md:flex flex-row gap-5 items-center justify-center rounded-full hidden">
            {Socials.map((social) => (
              <Link href={social.url} key={social.name}>
                
                <Image
                  src={social.src}
                  alt={social.name}
                  width={social.name=='Github'?28:40}
                  height={40}     
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div  className=' bottom-0  mb-4 fixed z-30 backdrop-blur-md bg-opacity-50 rounded-full '>
            <div
                className=" w-full h-12  flex items-center gap-6 justify-between border-[2.5px] border-blue-300 rounded-full mr-4 px-5 py-2 text-gray-200  md:hidden  "
              >
                <Link href="#about" > <CgProfile className='h-6 w-6' /></Link>
                <Link href="#skills" ><RxCode className='h-6 w-6' /></Link>
                <Link href="#projects"><GrProjects className='h-5 w-5' /></Link>
                <Link href="#contact"><IoMailOutline className='h-6 w-6' /></Link>
              </div>
          </div>
    </nav>
  );
};

export default NavBar;

