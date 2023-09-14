import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { motion } from 'framer-motion';
import Projects from "./components/Projects";
import Archive from "./components/Archive";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] flex flex-row xl:flex items-center gap-20 justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] w-full mx-auto px-4">
          <Banner />
          <About />
          <Projects />
          <Archive />
          <Contact />``
          {/* footer */}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </motion.div>
      </div>
    </main>
  )
}
