import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <>
     <div className='min-w-full flex justify-center'>
      <nav className='w-5/6 pt-10 pb-3 mb-4 flex justify-between sm:justify-evenly border-b-2 border-black'>
        <Link to="/" className='sm:hidden text-xl font-bold'>&#60;&#62; Mmaghakian. &#60;/&#62;</Link>
        <ul className='flex items-center'>
          <li className='text-lg font-bold'>
          <Link to='/about'>&#60; About /&#62; </Link>
          &nbsp;&nbsp;
           <Link to='/labs'>&#60;Labs /&#62;</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}
