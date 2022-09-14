import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import Styled from "styled-components"

function Searched() {

    const {searchedRecipes, setSR} = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch( `https://api.spoonacular.com/recipes/random?apiKey=62801a0f87064ba5b89ec4447980c615&&query=${name}`
        );
        const recipes = await data.json();
        setSR(recipes.results);
    };

    useEffect(() => {
     getSearched(params.search);
    }, [params.search]);

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return (
              <Card key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
              </Card>
            )
        })}
    </Grid>
  )
}

const Grid = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
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