import React from 'react'
import {BsGithub, BsLinkedin, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import {PDF} from './Pdf'

const Links = () => {
  return (
    <>
      <section className='min-h-screen h-auto px-10 bg-neutral-900 flex bg-[url("../public/neutral-lg.svg")] bg-no-repeat bg-bottom bg-cover' style={{"minHeight": "960px"}}>
        <div className='flex min-h-100%'>
          <div className='mr-2 border-r-2 border-gray-400 w-1' style={{"height": "100%"}} /> 
          <div className='w-1 py-6'>
            <h1 className='text-sm text-gray-500'>&#60;Links/&#62;</h1>
          </div>
        </div>
        
        <div className=' w-full pr-4 py-12'>
          <div className='pt-10 pb-16 px-40 h-fit md:hidden'>
          <h2 className='py-1 text-lime-700'>&#47;&#47;These are my most important links. Feel free to connect with me on LinkedIn, follow my Github, or downlod my CV!</h2>
            <h2 className='py-1 indent-0 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>div</span> <span className='text-sky-300'>className</span><span className='text-gray-200'>=</span><span className='text-amber-800'>&apos;bg-white px-10&apos;</span>&#62;</h2>
            <h2 className='py-1 indent-4 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>section</span> <span className='text-sky-300'>className</span><span className='text-gray-200'>=</span><span className='text-amber-800'>&apos;min-h-screen&apos;</span>&#62;</h2>
            <h2 className='py-1 indent-8 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>div</span> <span className='text-sky-300'>className</span><span className='text-gray-200'>=</span><span className='text-amber-800'>&apos;py-10 mb-12 flex justify-between&apos;</span>&#62;</h2>
            <h2 className='py-1 indent-12 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>ul</span> <span className='text-sky-300'>className</span><span className='text-gray-200'>=</span><span className='text-amber-800'>&apos;flex items-center&apos;</span>&#62;</h2>
            <h2 className='py-1 indent-16 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>li</span>&#62;</h2>
          
          </div>
          <div id='links' className='flex gap-10 text-8xl justify-center text-gray-200 pb-10 sm:flex-col md:justify-center md:items-center md:pt-40 sm:pt-0 sm:h-4/5 md:gap-20 sm:gap-24'>
            <a href="https://www.linkedin.com/in/matthew-maghakian/"><BsLinkedin/></a> <a href="https://github.com/mmaghakian"><BsGithub/></a> <a href="https://github.com/mmaghakian"><BsFillFileEarmarkTextFill/></a>
          </div>
          <div className='flex gap-10 text-xl justify-center sm:hidden md:gap-202'>
            <a href="https://www.linkedin.com/in/matthew-maghakian/" className='hover:bg-teal-500 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md border-none text-center text-lg' style={{"minWidth": "100px"}}>LinkedIn</a>          
            <a href="https://github.com/mmaghakian" className='bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-md border-none text-center text-lg' style={{"minWidth": "100px"}}>Github</a>
            <PDF />
          </div>
          <div className='pb-10 pt-16 px-40 h-fit md:hidden'>
          <h2 className='py-1 indent-16 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>li</span>/&#62;</h2>
            <h2 className='py-1 indent-12 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>ul</span>/&#62;</h2>
            <h2 className='py-1 indent-8 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>div</span>/&#62;</h2>
            <h2 className='py-1 indent-4 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>section</span>/&#62;</h2>
            <h2 className='py-1 indent-0 text-gray-400'>&#60;<span style={{"color": "#3569A6"}}>div</span>/&#62;</h2>
          </div>
        </div>
      
      </section>


 
    </>
  )
}

export default Links