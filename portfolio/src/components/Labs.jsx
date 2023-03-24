import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Button({ labNumber }) {
  return (
    <Link to={`/labs/${labNumber}`}>
      <a className='bg-gradient-to-r text-xl from-teal-400 to-teal-500 text-black px-4 py-4 rounded-lg border-none font-medium drop-shadow-xl'>BTH645 Lab {labNumber}</a>
    </Link>
  );
}

const Divider = styled.div`
  height: 6rem;
  width: 100%;
`
const Labs = () => {
  return (
  <>  
    <section className='px-10 bg-white flex' style={{"minHeight":"680px"}}>
      <div className='flex min-h-100%'>
        <div className='mr-2 border-r-2 border-gray-400 w-1' style={{"height": "60%"}} /> 
        <div className='w-1 py-6'>
          <h1 className='text-sm text-gray-500'>&#60;Labs/&#62;</h1>
        </div>
      </div>
      <div className='flex-row justify-center min-w-full pr-8 py-12'>
        <h1 className='text-3xl font-mono font-bold'>&#60; Labs /&#62;</h1>          
        <Divider/>
        <div className='call-to-action justify-center items-start w-full flex py-6 pb-6'>
           <Button labNumber={1}/>
        </div>
        <div className='call-to-action justify-center items-start w-full flex py-6 pb-6'>
           <Button labNumber={2}/>
        </div>
        <div className='call-to-action justify-center items-start w-full flex py-6 pb-6'>
           <Button labNumber={3}/>
        </div>
        <div className='call-to-action justify-center items-start w-full flex py-6 pb-6'>
           <Button labNumber={4}/>
        </div>
        
        
      </div>
      
    </section>
  </>
  )
}

export default Labs