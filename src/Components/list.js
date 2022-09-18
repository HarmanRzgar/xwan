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
          `https://api.spoonacular.com/recipes/random?apiKey=d1177602d7b54d8db2f5115dfd86d5a4&number=12`
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
  
`;


const Card = Styled.div`
img {
  width: 100%;
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


`;

export default List