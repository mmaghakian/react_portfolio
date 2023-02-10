import React from 'react'

const Labs = () => {
  return (
  <>  
    <section className='px-10 bg-white flex' style={{"minHeight":"680px"}}>
      <div className='flex min-h-100%'>
        <div className='mr-2 border-r-2 border-gray-400 w-1' style={{"height": "60%"}} /> 
        <div className='w-1 py-6'>
          <h1 className='text-sm text-gray-500'>&#60;Tasks/&#62;</h1>
        </div>
      </div>
      <div className='flex justify-center min-w-full pr-4 py-12'>
        <h1 className='text-3xl font-mono font-bold'>&#60; Tasks /&#62;</h1>          
      </div>
    </section>
  </>
  )
}

export default Labs