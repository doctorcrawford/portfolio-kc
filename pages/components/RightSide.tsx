import { motion } from 'framer-motion';

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <motion.a
        initial={{opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          ease: "easeIn"
        }}
        href="#contact"
      >
        <p className="text-sm rotate-90 w-72 tracking-wide text-textYellow">
          email@me.com
        </p>
      </motion.a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;