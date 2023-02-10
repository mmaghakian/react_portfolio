import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='px-10 bg-[url("../public/white-neutral.svg")] bg-no-repeat bg-bottom bg-cover flex-row' style={{"minHeight":"840px"}}>
    <div className='min-w-full flex justify-center'>
      <nav className='w-5/6 pt-10 pb-3 mb-4 flex justify-between sm:justify-evenly border-b-2 border-black'>
        <h1 className='sm:hidden text-xl font-bold'>&#60;&#62; Mmaghakian. &#60;/&#62;</h1>
        <ul className='flex items-center'>
          <li className='text-lg font-bold'>
          <a href='blog'>&#60; Blog /&#62; </a>&nbsp;&nbsp; <a href='contact'>&#60;Contact /&#62;</a>
          </li>
        </ul>
      </nav>
    </div>
      <div className='flex justify-center text-center items-center h-80 min-w-full flex-col'>
        <h2 className=' text-4xl font-medium py-2'>Matthew Maghakian</h2>
        <h3 className='text-xl font-medium pt-1 pb-2 text-teal-600'>Full Stack Software Developer.</h3>
      </div> 
      <div className='flex'>
        <div className='mr-2 border-r-2 h-96 border-gray-400 w-1' style={{"height": "423px"}}>
        </div>
        <div className='w-1'>
          <h1 className='text-sm text-gray-500'>&#60;Hero/&#62;</h1>
          <h4 className='text-xs text-gray-400'>SCROLL</h4>
        </div>
        <div className='call-to-action justify-center items-start w-full flex pb-6 pr-5'>
           <a href='#' className='bg-gradient-to-r text-xl from-teal-400 to-teal-500 text-black px-4 py-4 rounded-lg border-none font-medium drop-shadow-xl'>View My Portfolio</a>
        </div>
      </div>
  </section>
  </>
  )
}

export default Hero