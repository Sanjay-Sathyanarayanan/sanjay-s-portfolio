"use client"; 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Projects } from "@/constants";


const ProjectSection = () => {
  return (
    <section id="projects" className="mt-12">
      <div className="flex flex-col items-center  ">
              <h1 className="font-semibold text-white text-[50px] ">
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">My Projects</span>
              </h1>
              
            </div>
      <div className="  md:flex md:flex-row  md:gap-4 flex flex-col  items-center justify-center ">
      {Projects.map( (project, index)=> {
        return (
        <motion.div 
        key={project.name}
        initial ={{opacity:0, translateX:-50, translateY:-30 }}
        animate={{opacity:1, translateX:0, translateY:0 }}
        transition={{duration:0.5, delay: index*0.4}}
        >
          
          <CardContainer className="inter-var  max-w-[360px]  ">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[500px]  rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            {project.name}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.image}
                height="400"
                width="600"
                className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-10 dark:text-neutral-300"
            >
             {project.description}
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl flex gap-1 text-xs font-normal dark:text-white"
              >
                <Link href={project.url }  target="_blank"> Live Demo  </Link> <HiOutlineExternalLink className='h-4 w-4' />
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-2  flex gap-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href={project.github} target="_blank" > Github  </Link><FaGithub className='h-4 w-4' />
              </CardItem>
            </div>
          </CardBody>
                </CardContainer>
        </motion.div>)
      })}
      </div>
        
        
    </section>
  );
}

export default ProjectSection