import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div className="input">
        <FaSearch id="input"></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
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

  .input {
    color: #000;
    
  }

  FaSearch {
  bg-color: #000;
}

  input {
    border: none;
    background-color: #A0E4CB;
    font-size: 1.5rem;
    color: #000;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    transition: all 0.2s ease-out;
  }
  input:focus {
    transition: all 0.2s ease-in;
    background-color: #58b492;
    color: #fff;
  }
  .input:focus {
    color: #fff;
  }
  #input {
    color: #fff;
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

export default Search;
