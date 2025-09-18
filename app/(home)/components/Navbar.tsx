import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin,SiTwitter } from "react-icons/si";

export default function Navbar({className}:{className ?: string}) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/arun3310/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/arun3310/",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://www.instagram.com/arun17_08",
      label: "Instagram",
      Icon: SiInstagram,
    },
    {
      link: "https://twitter.com/Arunsharma310/",
      label: "Twitter",
      Icon: SiTwitter,
    },
  ];

  return (
    <nav className={cn("py-10 animate-move-down flex justify-between items-center",className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Arun Sharma 🧑‍💻
      </h1>
      <div className=" flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} target="_blank" aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
