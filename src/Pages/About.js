import React from 'react'
import Styled from "styled-components"
import "../Components/Component.css"


function About() {
  return (
    <AboutContainer>
        <h1 >About</h1>
        <p>Xwan is a food encyclopedia that tries collect, and save various Kurdish and Middle-eastern dishes all in one place. It's aim is to have all Kurdish dishes registered in it by 2023. <br />
        Until now, there has been no place on the internet to fully collect all Kurdish dishes in one place. Xwan is pushing for that. Xwan wants to collect most, if not all Kurdish dishes in one unified encyclopedia. So that our culture doesn't die out.
        </p>
        <div className='contact'>
            <h2>contact</h2>
            <a href="mailto:info@example.com?subject=subject&cc=cc@example.com">Email us</a>
            </div>
    </AboutContainer>
  )
}

const AboutContainer = Styled.div`
font-family: Helvetica, sans-serif;

display: flex;
justify-content: center;
align-items: center;
background-color: #dc3545;
border-radius: 10px;
flex-direction: column;
color: #fff;
margin: 2rem 1rem;
padding: 3rem 1rem;
 p {
    font-size: 2rem;
 }
 h1 {
    font-size: 4rem;
 }


`
export default About