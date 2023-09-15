import Image from 'next/image';
import synesthesia from '@/public/assets/images/synesthesia.png';
import mouseMingle from '@/public/assets/images/mouse-mingle.png';
import SectionTitle from './SectionTitle';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Projects = () => {
  return (
    <section id='projects' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I Have Built' />
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* Project one */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <a
              className='w-full xl:w-1/2 h-auto relative group'
              href='https://doctorcrawford.github.io/synesthesia/'
              target='_blank'
            >
              <Image
                className='w-full h-full object-contain'
                src={synesthesia}
                alt='synesthesia'
              />
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
              <p className='font-titleFont text-textYellow text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Synethesia</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                A music visualizer with 3D artwork utilizing that is <span className='text-textYellow'>interactive with the music</span> being played.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>Three.js</li>
                <li>React</li>
                <li>Typescript</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a
                  className='hover:text-textYellow duration-300'
                  href="https://github.com/doctorcrawford/synesthesia"
                  target='_blank'
                >
                  <TbBrandGithub />
                </a>
                <a
                  className='hover:text-textYellow duration-300'
                  href="https://doctorcrawford.github.io/synesthesia/"
                  target='_blank'
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <a
              className='w-full xl:w-1/2 h-auto relative group'
              href='https://github.com/doctorcrawford/MouseMingleMonoRepo'
              target='_blank'
            >
              <Image
                className='w-full h-full object-contain'
                src={mouseMingle}
                alt='mouse mingle'
              />
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
              <p className='font-titleFont text-textYellow text-sm tracking-wide'>
                Featured Project
              </p>
              <h3 className='text-2xl font-bold'>Mouse Mingle</h3>
              <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                A <span className='text-textYellow'>dating app for rodents</span>. User can login and see all the available rodents including their name, a photo, and a link to their further details. User can then upvote or downvote any of the rodents.
              </p>
              <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                <li>C#/.Net</li>
                <li>ASP.NET CORE</li>
                <li>EF Core</li>
                <li>MySQL</li>
                <li>Authentication</li>
              </ul>
              <div className='text-2xl flex gap-4'>
                <a
                  className='hover:text-textYellow duration-300'
                  href="https://github.com/doctorcrawford/MouseMingleMonoRepo"
                  target='_blank'
                >
                  <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects