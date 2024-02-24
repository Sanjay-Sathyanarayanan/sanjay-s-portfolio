"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section  id="#about"className="lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className=" bg-white bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Hello,  I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sanjay Sathyanarayanan",
                1500,
                "Student",
                1500,
                "Mern Stack Developer",
                1500,
                "Web 3.0 Enthusiastic ",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-[800px] ">
          Aspiring Full Stack Developer with a solid foundation in Computer Science. Passionate about building web applications and
exploring the potential of Blockchain technology.
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-block py-3 w-full sm:w-fit  mr-4  text-white"
            >
              <button className="  inline-flex h-11 px-12 py-3  animate-shimmer items-center justify-center rounded-md border border-white-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-white-400  transition-colors focus:outline-none focus:ring-2 focus:ring-white-400 focus:ring-offset-2 focus:ring-offset-white-50">
          Hire Me!
        </button>
  
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit  text-white mt-3"
            >
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-300 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white font-medium hover:bg-transparent">
                  Download CV
                </div>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gray-900 bg-opacity-60 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[90px] lg:top-[40%] left-1/2"
              width={380}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

        