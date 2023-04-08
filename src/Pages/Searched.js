import React from 'react'
import {useEffect, useState} from "react"
import {useParams, Link} from 'react-router-dom'
import Styled from "styled-components"
import {motion} from "framer-motion"

function Searched() {

  const MY_KEY = process.env.REACT_APP_API_KEY;

    const [searchedRecipes, setSR] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch( `https://api.spoonacular.com/recipes/complexSearch?apiKey=f73d9f93408f484b9fd11ae30f14adcd&query=${name}&number=12`
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
font-family: Helvetica, sans-serif;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 3rem;
  margin: 3rem 5rem;
`;


const Card = Styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-left: -50px;
img {
  width: 400px;
  height: auto;
  border-radius: 2rem;
  border: 3px solid var(--textColor);
}

a {
  text-decoration: none;
}

h4 {
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
}

`;

export default Searched