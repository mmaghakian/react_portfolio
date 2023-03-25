import React from 'react'
import styled from 'styled-components'
import { Header } from './Header'


const Image = styled.img`
width: auto;
height: auto;
margin-top: -6rem;
scale: 80%;
`
const Title = styled.span`
  font-weight:600;
  color: black;
  font-size: 1.4rem;
  line-height: 2.5rem;
  position: relative;
  padding-top: 8rem;
  text-align: center;
  padding-bottom: 10px;
`

const Section = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  //height: 100vh;
  min-height: 680px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //to compensate for nav 
  height: calc(100vh - 98px);
`

function About() {
  return (
    <>
    <Header/>
    <Section>
    <Title>This page is under construction. 
        <br></br>Visit back soon!</Title>
    <Image src='/construction.png'/>
    </Section>
    </>
    
  )
}

export default About