import React from 'react'

const Labs = () => {
  return (
  <>  
        <section className='px-10 bg-white flex' style={{"minHeight":"680px"}}>
          
          <div className='flex min-h-100%'>
            <div className='mr-2 border-r-2 border-gray-400 w-1' style={{"height": "60%"}} /> 
            <div className='w-1 py-6's>
              <h1 className='text-sm text-gray-500'>&#60;Tasks/&#62;</h1>
            </div>
          </div>
          
          <div className='flex flex-col justify-start items-center min-w-full pr-4 py-12'>
            <div className='text-center'>
            <h1 className='text-3xl font-mono font-bold'>&#60; Tasks /&#62;</h1>          
            </div>
            <div className='mt-16 text-center py-8 px-8 border-none shadow-lg bg-neutral-800 rounded-lg text-white' style={{"minWidth": "20%"}}>
              <h1 className='text-2xl font-semibold'>Lab 1</h1>
              <h2 className='text-sm leading-10  text-lime-300'>Discussion Post - Web Usability.</h2>
              <p className='text-left mt-4'>
                In making this website, the core concepts of web usability were followed. It was designed mobile-first, making every part of the experience responsive.
              </p><br/>
              <p className='text-left'>
                Parts of the site that do not fit on mobile layouts are removed at a certain screen width.
              </p><br/>
              <p className='text-left'>
                The site makes sure to use minimal fonts, colours, and images to stay minimal and run smoothly on all platforms. This is important when considering the variety of mobile devices that may access the site.
              </p>
            </div>
          </div>

        </section>
  </>
  )
}

export default Labs