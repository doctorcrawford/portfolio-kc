import { logo } from "@/public/assets";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
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
            <Link href="#home" className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >Home</motion.li>
            </Link>
            <Link href="#about" className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-textYellow">01.</span>
                About
              </motion.li>
            </Link>
            <Link href="#projects" className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-textYellow">02.</span>
                Projects
              </motion.li>
            </Link>
            <Link href="#contact" className="flex items-center gap-1 font-medium text-textDark hover:text-textYellow cursor-pointer duration-300 nav-link">
              <motion.li
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-textYellow">03.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
        </div>
        {/* menu */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textYellow cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-3 group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div >
  )
};

export default Navbar;