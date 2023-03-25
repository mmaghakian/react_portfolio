import React from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

const Divider = styled.div`
  height: 6rem;
  width: 100%;
`

const LabSection = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 16px;
  display: flex;
  text-align: center;
  padding-top: 3rem;
  flex-direction: column;
  position: relative;
`

const Section = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  height: 100vh;
  min-height: 680px;
`


export const Tasks = (props) => {
  const { propValue } = useParams();
  let labNumber = propValue;
  if (labNumber > 4 || labNumber< 1 || !Number.isInteger(labNumber)) {
    labNumber = 1;
  }
  return (
    <>
     <Section>
      <div className='flex min-h-100%'>
        <div className='mr-2 border-r-2 border-gray-400 w-1' style={{"height": "60%"}} /> 
        <div className='w-1 py-6'>
          <h1 className='text-sm text-gray-500'>&#60;Labs/&#62;</h1>
        </div>
      </div>
      <LabSection>
        <h1 className='text-3xl font-mono font-bold'>&#60; Lab {labNumber} /&#62;</h1>
        <Divider/>
      </LabSection>
      
    </Section>
    </>
  )
}
