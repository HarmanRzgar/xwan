import React from 'react'
import Styled from "styled-components"
import "../Components/Component.css"
import { SiGmail} from 'react-icons/si'

function About() {
  return (
    <AboutContainer>
        <h1 >About</h1>
        <p>Xwan is a food encyclopedia that aims to collect, and save various Kurdish and Middle-eastern dishes all in one place. It's goal is to have all main Kurdish dishes registered in it by the end of 2023. <br />  <br /> 
        There has been no place on the internet to fully collect all Kurdish dishes in one place. Xwan is pushing for that. Xwan wants to collect most, if not all Kurdish dishes in one unified encyclopedia. So that our culture doesn't die out.
        </p>
        <br /> 
        <p>This Current Version is a test and doesn't portray the final vision. The Project is being remade into a better version with better UI and a Kurdish database.</p>
        <div className='contact'>
          <br/>
          <br/>
            <h2>contact</h2>
            <ul className='Contact-List'>
           <li> <a href="mailto:info@example.com?subject=subject&cc=cc@example.com"><SiGmail/></a></li>
           <li><a href="https://harmanrzgar.netlify.app/" target={'_blank'} rel="noreferrer"> My portfolio</a></li>
            </ul>
            </div>
    </AboutContainer>
  )
}

const AboutContainer = Styled.div`
font-family: Helvetica, sans-serif;

display: flex;
justify-content: center;
align-items: center;
background-color: #a6e7ff;
border-radius: 10px;
flex-direction: column;
color: #000;
margin: 2rem 1rem;
padding: 3rem 1rem;
 p {
    font-size: 1.2rem;
 }
 h1 {
    font-size: 2rem;
    font-family: Montserrat;
    margin-bottom: 2rem;
 }


`
export default About