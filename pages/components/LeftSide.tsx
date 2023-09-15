import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin, SlSocialSpotify, SlMusicToneAlt } from 'react-icons/sl';
import { motion } from 'framer-motion';


const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
    <div className='flex flex-col gap-4'>
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          ease: "easeIn"
        }}
        href="https://github.com/doctorcrawford"
        target='_blank'
      >
        <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <TbBrandGithub />
        </span>
      </motion.a>
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          ease: "easeIn"
        }}
        href="https://www.linkedin.com/in/kyle-crawford123/"
        target='_blank'
      >
        <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlSocialLinkedin />
        </span>
      </motion.a>
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          ease: "easeIn"
        }}
        href="https://open.spotify.com/artist/6IePE0TDlAmOQT7iZtlZ55?si=QdxoQNRgQMCTzVUv3PK4Iw"
        target='_blank'
      >
        <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlSocialSpotify />
        </span>
      </motion.a>
      <motion.a
        initial={{ y: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          ease: "easeIn"
        }}
        href="https://linktr.ee/knxnmusic"
        target='_blank'
      >
        <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlMusicToneAlt />
        </span>
      </motion.a>
    </div>
    <div className='w-[2px] h-32 bg-textDark'></div>
  </div>
  );
};

export default LeftSide;