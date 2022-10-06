import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import Styled from "styled-components"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"
import './Component.css'

function List() {

    const [ListRecipes, setSR] = useState([]);
    let params = useParams();

    const MY_KEY = process.env.REACT_APP_API_KEY;


    const getList = async () => {
        const data = await fetch( 
          `https://api.spoonacular.com/recipes/random?apiKey=5e323d7912af4e0384b0b9ae9b77b5fe&number=12`
        );
        const recipes = await data.json();
        setSR(recipes.recipes);
        console.log(recipes.recipes);
    };

    useEffect(() => {
     getList(params.recipes);
    },[params.recipes]);

  return ( 
    <>
    <div className='title'>
                <h2>Fooditionary</h2> </div>
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{ opacity: 0}}
    transition={{ duration: 0.5}}
              >
                
        {ListRecipes.map((item) => {
            return (
              <div className='ListCard' key={item.id}>
                <Link to={"/recipe/" + item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  </Link>
              </div>
            )
        })}
    </Grid>
    </>
    )
  
}

const Grid = Styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem 5rem;
   margin-top: 10px;
  padding: 3rem 5rem;
  background-color: #dc3545;
  border-radius: 10px;
  @media (max-width: 1200px) {
    margin: 0;
    padding-top: 10px;
    padding: 5px;
    border-radius: 10px 10px 0 0;

  }
`;



export default List