import React from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import { cn } from "@/app/lib/utils/cn";
import {  Socials } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-72 relative w-full  overflow-hidden flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-4xl text-3xl font-bold text-white mb-2 relative z-20"
        )}
      >
        Sanjay Sathyanarayanan
      </h1>
    

      <div className="flex gap-4 mt-5 items-center justify-center text-white z-20">
      {Socials.map(social=> {
                return (<Link key={social.name} className="hover:underline transition delay-100" href={social.url} target="_blank"> <Image src={social.src} height={social.height} width={social.width} alt={social.name}/> </Link>)
              })}
      </div>

      <p className="text-center text-xs mt-5 text-neutral-300 relative z-20">
        © Sanjay Sathyanarayanan {new Date().getFullYear()}.
      </p>
    </div>
  );
};

export default Footer;
