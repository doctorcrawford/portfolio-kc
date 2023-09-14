import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin, SlSocialInstagram, SlMusicToneAlt } from 'react-icons/sl'

const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
      <div className='flex flex-col gap-4'>
        <a href="https://github.com/doctorcrawford" target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <TbBrandGithub />
            </span>
        </a>
        <a href="https://www.linkedin.com/in/kyle-crawford123/" target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialLinkedin />
            </span>
        </a>
        <a href="https://www.instagram.com/doctorcrawford" target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlSocialInstagram />
            </span>
        </a>
        <a href="https://linktr.ee/knxnmusic" target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <SlMusicToneAlt />
            </span>
        </a>
      </div>
    </div>
  );
};

export default LeftSide;