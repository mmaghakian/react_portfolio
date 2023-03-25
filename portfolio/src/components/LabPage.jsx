import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './Header';

function Button({ labNumber }) {
  return (
    <Link to={`/labs/${labNumber}`}>
      <span className='bg-gradient-to-r text-xl from-teal-400 to-teal-500 text-black px-4 py-4 rounded-lg border-none font-medium drop-shadow-xl'>BTH645 Lab {labNumber}</span>
    </Link>
  );
}

const Divider = styled.div`
  height: 6rem;
  width: 100%;
`
const LabSection = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 4px;
  display: flex;
  text-align: center;
  padding-top: 3rem;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const Section = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  //height: 100vh;
  min-height: 680px;
  //to compensate for nav 
  height: calc(100vh - 98px);
`

function LabPage() {
  return (
    <>  
    <Header/>
    <Section>
      <div className='flex min-h-100%'>
        <div className='w-1 py-6'>
          <h1 className='text-sm text-gray-500'>&#60;Labs/&#62;</h1>
        </div>
      </div>
      <LabSection>
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
        
        
      </LabSection>
    </Section>
  </>
  )
}

export default LabPage