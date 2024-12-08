"use client";
import Image from "next/image";
import Title from "./Title";

import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiCss3,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiPython,
  SiJavascript,
  SiLeaflet,
  SiMongodb,
  SiScikitlearn,
  SiNextdotjs,
  SiNodedotjs,
  SiFramer,
  SiMysql,
  SiFlask,
  SiReact,
  SiPandas,
  SiNumpy,
  SiTailwindcss,
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    
    {
      title: "Automated Loan Prediction Systems",
      tech: [SiPython, SiMysql , SiPandas,SiNumpy],
      link: "https://github.com/arun3310/Machine_Learning_Projects_Supervised/tree/main/Automating_Loan_Prediction",
      cover: "/at-loan.png",
      background: "bg-green-500",
    },
    {
      title: "Spotify Data Analysis",
      tech: [SiPython,SiScikitlearn,SiReact,SiNumpy,SiPandas],
      link: "https://github.com/arun3310/Data_Analysis_Projects/tree/main/Spotify%20Data%20Analysis ",
      cover: "/spotify.png",
      background: "bg-indigo-500",
    },
    {
      title: "Website Analyzer",
      tech: [SiFlask,SiFirebase,SiCss3,SiPython],
      link: "https://github.com/arun3310/Website_Analyzer",
      cover: "/kop.png",
      background: "bg-green-500",
    },
    {
      title: "Github Finder",
      tech: [SiReact,SiTailwindcss,SiGithub,SiDaisyui],
      link: "https://github.com/arun3310/github-finder",
      cover: "/arun-finder.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className="w-8 h-8 " />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="py-8 px-4 space-y-4 text-sm text-center">
      <a 
        href="https://github.com/arun3310" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center gap-2 hover:underline"
      >
        More Projects at &rarr; <SiGithub className="w-5 h-5" />
      </a>
    </div>
    </div>
  );
}
