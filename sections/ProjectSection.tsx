"use client"; 
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";



const ProjectSection = () => {
  return (
    <section id="projects">
        
        <CardContainer className="inter-var  max-w-[360px]">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[500px] rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
            Project Name
            </CardItem>
        
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/images/hero-image.jpg"
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
             Project Describtion Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque sequi optio possimus, necessitatibus corporis quam explicabo suscipit pariatur beatae excepturi. Mollitia, numquam illum dolorum eligendi est porro recusandae aperiam!
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl flex gap-1 text-xs font-normal dark:text-white"
              >
                <Link href="" > Live Demo  </Link> <HiOutlineExternalLink className='h-4 w-4' />
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-3 py-2  flex gap-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href="" > Github  </Link><FaGithub className='h-4 w-4' />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
    </section>
  );
}

export default ProjectSection