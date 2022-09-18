import React from 'react'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import Styled from "styled-components"


function List() {

    const [ListRecipes, setSR] = useState([]);
    let params = useParams();

    const getList = async () => {
        const data = await fetch( 
          `https://api.spoonacular.com/recipes/random?apiKey=57eb7fe27b7f47aea3b55511df88837b&number=10`
        );
        const recipes = await data.json();
        setSR(recipes.results);
        console.log(recipes.results);
    };

    useEffect(() => {
     getList(params.search);
    },[params.search]);

  return ( <Grid>
        {ListRecipes.map((item) => {
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

export default List