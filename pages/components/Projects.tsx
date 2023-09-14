import Image from 'next/image'
import synesthesia from '@/public/assets/images/synesthesia.png';
import SectionTitle from './SectionTitle'

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I Have Built' titleNo='02' />
      {/* Proejct one */}
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
            <p className='font-titleFont text-textGreen text-sm tracking-wide'>
              Featured Project
            </p>
            <h3 className='text-2xl font-bold'>Synethesia</h3>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
              A music visualizer with 3D artwork utilizing <span className='text-textGreen'>Three.js</span> that is <span className='text-textGreen'>interactive with the music</span> being played.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects