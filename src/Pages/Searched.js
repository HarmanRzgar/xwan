import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import Styled from "styled-components"


function Searched() {

    const [searchedRecipes, setSR] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=f98b4022d5ea4a17b5be6e774de68080&query=${name}`
        );
        const recipes = await data.json();
        setSR(recipes.results);
        console.log(recipes.result);
    };

    useEffect(() => {
     getSearched(params.search);
    },[params.search]);

  return  <Grid>
        {searchedRecipes.map((item) => {
            return (
              <Card key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
              </Card>
            )
        })}
    </Grid>
  
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