import SectionTitle from "./SectionTitle"
import { FaOctopusDeploy} from 'react-icons/fa'

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="0.1" />
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
              <span className="text-textGreen">
                <FaOctopusDeploy />
              </span>
              Javascript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaOctopusDeploy />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaOctopusDeploy />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaOctopusDeploy />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaOctopusDeploy />
              </span>
              Three.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaOctopusDeploy />
              </span>
              C#/.Net
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaOctopusDeploy />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaOctopusDeploy />
              </span>
              Firebase
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default About;