import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import Styled from "styled-components"
import {motion} from "framer-motion"
import { Link } from "react-router-dom"

function List() {

    const [ListRecipes, setSR] = useState([]);
    let params = useParams();

    const getList = async () => {
        const data = await fetch( 
          `https://api.spoonacular.com/recipes/random?apiKey=f73d9f93408f484b9fd11ae30f14adcd&number=12`
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
              <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  </Link>
              </Card>
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
  padding: 3rem 5rem;
  background-color: #dc3545;
  border-radius: 10px;
  @media (max-width: 1200px) {
    margin: 0;
    padding: 5px;
    border-radius: 10px 10px 0 0;

  }
`;


const Card = Styled.div`
font-family: Helvetica, sans-serif;
img {
  width: 90%;
  border-radius: 2rem;
}

a {
  text-decoration: none;
}

h4 {
  text-align: center;
  padding: 1rem;
  color: #fff;
}

@media (max-width: 1200px) {
display: flex;
justify content: center;
flex-direction: column;
align-items: center;
}

`;

export default List