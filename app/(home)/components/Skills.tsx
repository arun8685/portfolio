"use client";
import Image from "next/image";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { 
  SiHtml5, SiCss3, SiJavascript, SiMongodb, SiFlask, SiNodedotjs, SiReact, 
  SiTailwindcss, SiPython, SiDjango, SiMysql, SiAmazonaws, SiGooglecloud, 
  SiDocker, SiTensorflow, SiScikitlearn ,SiNumpy,SiPandas,SiMicrosoftazure 
} from "react-icons/si";
import { DiDjango, DiLinux, DiWindows, DiGit, DiGithub, } from "react-icons/di";
import { FaDatabase, FaGithub  } from "react-icons/fa";
import { TbApi, TbMathFunction } from "react-icons/tb";

export default function Skills() {
  const skills = [
    // Languages
    {
      title: "Python",
      Icon: SiPython
    },
    {
      title: "HTML",
      Icon: SiHtml5
    },
    {
      title: "CSS",
      Icon: SiCss3
    },
    {
      title: "JavaScript",
      Icon: SiJavascript
    },

    // Web Dev
    {
      title: "React.js",
      Icon: SiReact,
    },
    {
      title: "Node.js",
      Icon: SiNodedotjs
    },
    {
      title: "Flask",
      Icon: SiFlask
    },
    {
      title: "Django",
      Icon: SiDjango
    },
    {
      title: "REST APIs",
      Icon: TbApi
    },

    // Databases / Cloud / DevOps
    {
      title: "MySQL",
      Icon: SiMysql
    },
    {
      title: "Azure",
      Icon: SiMicrosoftazure 
    },
    {
      title: "GCP",
      Icon: SiGooglecloud
    },
    {
      title: "Docker",
      Icon: SiDocker
    },
    {
      title: "AWS",
      Icon: SiAmazonaws
    },

    // Other Tools
    {
      title: "Git",
      Icon: DiGit
    },
    {
      title: "GitHub",
      Icon: FaGithub 
    },
    {
      title: "Linux",
      Icon: DiLinux
    },
    {
      title: "MS Office",
      Icon: DiWindows
    },

    // Data Science & Machine Learning
    {
      title: "Pandas",
      Icon: SiPandas
    },
    {
      title: "NumPy",
      Icon: SiNumpy
    },
    {
      title: "TensorFlow",
      Icon: SiTensorflow
    },
    {
      title: "Scikit-Learn",
      Icon: SiScikitlearn
    },
    {
      title: "Statistical Analysis",
      Icon: TbMathFunction
    },
    {
      title: "Machine Learning",
      Icon: SiScikitlearn
    },
    {
      title: "NLP",
      Icon: SiFlask
    },
    {
      title: "Deep Learning",
      Icon: SiTensorflow
    },

    // Data Structures & Algorithms
    {
      title: "Data Structures & Algorithms",
      Icon: FaDatabase
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title text="Skills 🔪" className="flex flex-col items-center justify-center"/>
      <HoverEffect items={skills}/>
    </div>
  );
}
