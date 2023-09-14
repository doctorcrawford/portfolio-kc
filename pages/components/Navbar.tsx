import { logo } from "@/public/assets";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useState } from "react";
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active")
    });
    e.currentTarget.classList.add("active");
  }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image className="w-24" src={logo} alt="logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >Home</motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-textYellow">| </span>
                About
              </motion.li>
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-textYellow">| </span>
                Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-textYellow">| </span>
                Contact
              </motion.li>
            </Link>
          </ul>
        </div>
        {/* menu */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textYellow cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-3 group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {
          showMenu && (
            <div
              ref={(node) => (ref.current = node)}
              className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            >
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
              >
                <MdOutlineClose
                  onClick={() => setShowMenu(false)}
                  className="text-3xl text-textYellow cursor-pointer hover:text-red-500 absolute top-4 right-4"
                />
                <div className="flex flex-col items-center gap-7">
                  <ul className="flex flex-col text-base gap-7">
                    <Link
                      href="#home"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                          ease: "easeIn"
                        }}
                      >Home</motion.li>
                    </Link>
                    <Link
                      href="#about"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.2,
                          ease: "easeIn"
                        }}
                      >
                        <span className="text-textYellow">| </span>
                        About
                      </motion.li>
                    </Link>
                    <Link
                      href="#projects"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.3,
                          ease: "easeIn"
                        }}
                      >
                        <span className="text-textYellow">| </span>
                        Projects
                      </motion.li>
                    </Link>
                    <Link
                      href="#contact"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.4,
                          ease: "easeIn"
                        }}
                      >
                        <span className="text-textYellow">| </span>
                        Contact
                      </motion.li>
                    </Link>
                  </ul>
                </div>
              </motion.div>
            </div>
          )
        }
      </div>
    </div >
  )
};

export default Navbar;