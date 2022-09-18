import {useEffect, useState} from "react"
import Styled from "styled-components"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';

function Pop() {

const [populars, setPopular] = useState([]);

useEffect(()  => {
    popular();
},[]);

  const popular = async () => {

    const check = localStorage.getItem('popular');

    if(check){
      setPopular(JSON.parse(check));
    } else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=62801a0f87064ba5b89ec4447980c615&number=10`
        );
        const data = await api.json(); 


        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes)
        console.log(data.recipes);
    }

    
    
   
  };  


  return (
    <Grid>
        {populars.map((item) => {
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
export default Pop