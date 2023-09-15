import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialSpotify, SlMusicToneAlt } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://github.com/doctorcrawford" target='_blank'>
        <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <TbBrandGithub />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/kyle-crawford123/" target='_blank'>
        <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://open.spotify.com/artist/6IePE0TDlAmOQT7iZtlZ55?si=QdxoQNRgQMCTzVUv3PK4Iw" target='_blank'>
        <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlSocialSpotify />
        </span>
      </a>
      <a href="https://linktr.ee/knxnmusic" target='_blank'>
        <span className='w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textYellow text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300'>
          <SlMusicToneAlt />
        </span>
      </a>
    </div>
  );
};

export default Footer;