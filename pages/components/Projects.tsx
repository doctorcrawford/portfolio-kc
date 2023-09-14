import React from 'react'
import SectionTitle from './SectionTitle'

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I Have Built' titleNo='02' />
      {/* Proejct one */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div></div>
        <div></div>
      </div>

    </section>
  )
}

export default Projects