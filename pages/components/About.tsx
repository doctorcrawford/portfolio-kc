import SectionTitle from "./SectionTitle";
import { FaOctopusDeploy } from 'react-icons/fa';
import Image from 'next/image'
import { headshot } from "@/public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Full stack software developer, with a foundation in JavaScript, Typescript, React, and C#/.NET. I enjoy playing and producing music, working with my hands and exploring the great outdoors.
          </p>
          <p>
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="max-w-[450] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              Javascript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              Three.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              C#/.Net
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              Firebase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              Material UI
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textYellow">
                <FaOctopusDeploy />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={headshot}
                alt="headshot"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textYellow/20 roudned-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            <div className="hidden lgl:inline-flex w-full h-80 translate-x-4 -translate-y-64 border-2 border-textYellow rounded-md group-hover:translate-x-2 group-hover:-translate-y-66 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;