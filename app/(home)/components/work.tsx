"use client";
import { SiPython, SiDjango, SiMysql, SiFlask, SiSelenium, SiPlotly, SiJavascript,SiHtml5 } from "react-icons/si";
import Title from "./Title";
import { cn } from "@/lib/utils";

export default function Experience() {
  const workExps = [
    {
      title: "LECTURER, RAJIV GANDHI GOVT. POLYTECHNIC, NARWANA",
      duration: "Aug 2024 - Sep 2025",
      location: "Narwana Jind, Haryana",
      description: [
        "Delivered in-depth lectures on computer engineering and data science topics, fostering a strong theoretical and practical foundation among students",
        "Mentored polytechnic students, providing personalized guidance on academic projects and assisting them in implementing data science techniques to address real-world challenges.",
        "Performed network analysis for the social media team to uncover trends and strategies.",
        "Developed and evaluated assignments and practical exercises to enhance learning outcomes, ensuring students are equipped with industry-relevant skills.",
        "Actively supported students' academic and career growth by sharing insights on emerging technologies and tools in the field of computer science.",
      ],
      tech: [SiPython, SiMysql, SiFlask, SiSelenium, SiPlotly,SiHtml5,SiJavascript],
      background: "transparent",
    },
  ];

  const educationExps = [
    {
      title: "Bachelor’s of Engineering - Computer Science",
      institution: "Chitkara University, Himachal Pradesh",
      duration: "2020 - 2024",
      cgpa: "CGPA - 8.65",
    },
    {
      title: "Secondary Education - Science (Mathematics)",
      institution: "Durga Sr Sec School, Jind , Haryana",
      duration: "2020",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 mb-10">
      {/* Work Experience Section */}
      <Title text="Work Experience 💼" className="flex flex-col items-center justify-center " />
      <div className="grid grid-cols-1 sm:grid-cols-1 pt-20 gap-5">
        {workExps.map((work, index) => (
          <div key={index} className={cn("p-5 rounded-md", work.background)}>
            <div className="space-y-5">
              <h1 className="text-2xl font-bold">{work.title}</h1>
              <p className="text-sm">{work.duration}</p>
              <p className="text-sm">{work.location}</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                {work.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex items-center gap-5 pt-3">
                {work.tech.map((Icon, index) => (
                  <Icon key={index} className="w-8 h-8" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <Title text="Education 🎓" className="flex flex-col items-center justify-center mt-20 mb-20" />
      <div className="relative pt-10 mb-20">
        {/* Timeline Line */}
        <div className="absolute top-0 left-2.5 w-1 bg-gray-300 h-full"></div>

        <div className="grid grid-cols-1 gap-10">
          {educationExps.map((edu, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-blue-500"></div>
              <div className="space-y-2">
                <h1 className="text-xl font-bold">{edu.title}</h1>
                <p className="text-sm font-semibold">{edu.institution}</p>
                <p className="text-sm">{edu.duration}</p>
                {edu.cgpa && <p className="text-sm">{edu.cgpa}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
