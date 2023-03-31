import React from 'react'
import styled from 'styled-components'
import {useParams, Link} from 'react-router-dom'
import { Lab1obj, Lab2obj, Lab3obj, Lab4obj, Lab5obj } from './LabData/Lab.data'
import { Header } from './Header';

const labList = [Lab1obj, Lab2obj, Lab3obj, Lab4obj, Lab5obj];

const Divider = styled.div`
  height: 6rem;
  width: 100%;
`

function NextButton({ labNumber }) {
  return (
    <Link to={`/labs/${labNumber}`}>
      <span className='bg-gradient-to-r text-xl from-teal-400 to-teal-500 text-black px-4 py-4 rounded-lg border-none font-medium drop-shadow-xl'>Next</span>
    </Link>
  );
}

function BackButton({ labNumber }) {
  return (
    <Link to={`/labs/${labNumber}`}>
      <span className='bg-gradient-to-r text-xl from-teal-400 to-teal-500 text-black px-4 py-4 rounded-lg border-none font-medium drop-shadow-xl'>Back</span>
    </Link>
  );
}

const LabSection = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  overflow-y: scroll;
  text-align: center;
  padding-top: 3rem;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const ButtonSection = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  text-align: center;
  margin-top: 2rem;
  flex-direction: row;
  position: relative;
  justify-content: center;
  
`

const Section = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  flex-direction: column;
  display: flex;
  //height: 100vh;
  min-height: 680px;
  //to compensate for nav 
  height: calc(100vh - 98px);
`

const LabCard = styled.div`
    background-color: #ffffff;
    color: white;
    max-width: 90%;
    min-width: 60%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const LabTitle = styled.span`
  font-weight:700;
  color: black;
  font-size: 1.2rem;
  line-height: 2.5rem;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`
const LabBody = styled.p`
  width: 60%;
  min-width: 280px;
  color: #252222;
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 600;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`

const LabDate = styled.span`
  font-weight: 400;
  font-size: .8rem;
  color: #252222;
  padding: 5px 0px 15px 0px;
`

export const Tasks = (props) => {
  const { propValue } = useParams();
  let labNumber = propValue;

  var currLab = labList.find(obj => {
    return obj.num === labNumber
  })

  let index = 1;
  
  if (currLab === undefined) {
    currLab = Lab1obj;
  }
  else {
    index = parseInt(currLab.num);
  }
  
  return (
    <>
     <Header/>
     <Section>

      <LabSection>
        <h1 className='text-3xl font-mono font-bold'>&#60; Lab {labNumber} /&#62;</h1>
        <Divider/>
        <LabCard>
          <LabDate>Added: {currLab.date}</LabDate>
          <LabTitle>{currLab.title}</LabTitle>
          <LabBody>{currLab.description}</LabBody>
          {currLab.image !== undefined &&         
          <LabCard>
             {currLab.image.map(image => (  
          <><img src={image} alt="img"/><Divider/></>
        ))}  
          </LabCard>
        }
        </LabCard> 
      </LabSection>

      <ButtonSection>
        {currLab.num > 1 &&         
          <div className=' call-to-action justify-center items-start flex px-4 pb-6'>
            <BackButton labNumber={index-1}/>
          </div>
        }
        {currLab.num < labList.length && 
          <div className=' call-to-action justify-center items-start flex px-4 pb-6'>
            <NextButton labNumber={index+1}/>
          </div>
        }
      </ButtonSection>
    </Section>
    </>
  )
}
