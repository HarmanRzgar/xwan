import React from 'react'
import {useEffect, useState} from "react"
import {useParams, Link} from 'react-router-dom'
import Styled from "styled-components"
import {motion} from "framer-motion"

function Searched() {

    const [searchedRecipes, setSR] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=57eb7fe27b7f47aea3b55511df88837b&query=${name}`
        );
        const recipes = await data.json();
        setSR(recipes.results);
        console.log(recipes.result);
    };

    useEffect(() => {
     getSearched(params.search);
    },[params.search]);

        return  <Grid
          animate={{opacity: 1}}
          initial={{opacity: 0}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.5}}
          >
            
        {searchedRecipes.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={'/recipe/' + item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
             </Link>
              </Card>
            )
        })}
    </Grid>
  
}

const Grid = Styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem 5rem;
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
}

`;

export default Searched