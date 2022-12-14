import styled from 'styled-components'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from "react-router-dom"

function Search() {
   const [input, setInput] = useState("");
   const navigate = useNavigate();
   const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+ input)
   };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
      <FaSearch></FaSearch>
    <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
    </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
font-family: Helvetica, sans-serif;

    margin: 2rem 30%;
   display: flex;
   justify-content: center;

    div {
    position: relative;
    width: 100%;
    
  }
    input {
      border: none;
      background-color: #dc3545;
      font-size: 1.5rem;
      color: #fff;
      padding: 1rem 3rem;
      border: none;
      border-radius: 1rem;
      outline: none;
      width: 100%;
      transition: all 0.2s ease-out;
    }
    input:focus {
      transition: all 0.2s ease-in;
      background-color: #a71d2a;
    }
  svg {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: #fff;
    }
    @media (max-width: 1200px) {
     margin: 2rem 10%;
    }
  

`;

export default Search