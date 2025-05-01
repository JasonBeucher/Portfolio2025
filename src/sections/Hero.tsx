'use client';

import { useRef } from 'react';
import memojiImage from "@/assets/images/avatar4.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SunIcon from "@/assets/icons/sun2.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import PaperPlaneIcon from "@/assets/icons/paper-plane.svg";
import { PaperPlaneAnimation } from "@/components/PaperPlaneAnimation";
import { HeroOrbit } from "@/components/HeroOrbit";
import { Cloud } from "@/components/Cloud";
import dynamic from "next/dynamic";
import { HeroSun } from "@/components/HeroSun";
import { TypeWriter } from "@/components/TypeWriter";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export const HeroSection = () => {
  const handleScrollToWork = () => {
    document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen py-32 md:py-48 lg:py-60 relative z-0 overflow-clip min-h-[800px]">
      <div className="absolute inset-0 -z-30 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5 dark:block hidden"
          style={{
            backgroundImage: `url(${grainImage.src})`
          }}>
        </div>
        <div className="">
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          <HeroSun />

          <div className="dark:block hidden">
            <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
              <SparkleIcon className="size-8 text-[#ffd983]/20" />
            </HeroOrbit>
            <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
              <SparkleIcon className="size-5 text-[#ffd983]/20" />
            </HeroOrbit>
            <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
              <div className="size-2 bg-[#ffd983]/20 rounded-full"></div>
            </HeroOrbit>
            <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
              <SparkleIcon className="size-10 text-[#ffd983]/20" />
            </HeroOrbit>
            <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
              <StarIcon className="size-12 text-[#ffd983]" />
            </HeroOrbit>
            <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
              <StarIcon className="size-8 text-[#ffd983]" />
            </HeroOrbit>
            <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
              <div className="size-2 bg-[#ffd983]/20 rounded-full"></div>
            </HeroOrbit>
            <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
              <SparkleIcon className="size-14 text-[#ffd983]/20" />
            </HeroOrbit>
            <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
              <div className="size-3 bg-[#ffd983]/20 rounded-full"></div>
            </HeroOrbit>
            <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
              <StarIcon className="size-28 text-[#ffd983]" />
            </HeroOrbit>

          </div>
          <PaperPlaneAnimation />
        </div>
      </div>
      <Cloud className="absolute bottom-[190px] right-[110px] md:bottom-[400px] md:right-[250px] lg:bottom-[500px] lg:right-[350px] xl:bottom-[700px] xl:right-[450px]" />
      <Cloud className="absolute bottom-[190px] left-[110px] md:block md:bottom-[400px] md:left-[250px] lg:bottom-[500px] lg:left-[350px] scale-x-[-1] xl:bottom-[700px] xl:left-[450px]" />
      <div className="container relative py-16">
        <div className="flex flex-col items-center relative">

          <Image src={memojiImage} className="size-[100px]" alt="Memoji" />
          <div className="bg-white/80 dark:bg-gray-950 border border-gray-200 text-sky-600 dark:text-white dark:border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Disponible pour de nouveaux projets</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Développeur Fullstack <br /> <TypeWriter />
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            J’aime créer des applications web à la fois performantes et évolutives, des interfaces fluide et un backend solide, pour offrir la meilleure expérience possible.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button 
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
            onClick={handleScrollToWork}
          >
            <span className="font-semibold">Découvrez mon travail</span>
            <ArrowDown className="size-4" />
          </button>
          
          <button 
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl"
            onClick={handleScrollToContact}
          >
            <span>👋</span>
            <span className="font-semibold">Contactez moi</span>
          </button>
        </div>
      </div>
    </div>
  );
};