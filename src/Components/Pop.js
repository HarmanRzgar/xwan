import {useEffect, useState} from "react"
import Styled from "styled-components"
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom"
import "./Component.css"

function Pop() {

const [populars, setPopular] = useState([]);

useEffect(()  => {
    popular();
},[]);

  const popular = async () => {

    const MY_KEY = process.env.REACT_APP_API_KEY;


    const check = localStorage.getItem('popular');

    if(check){
      setPopular(JSON.parse(check));
    } else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=f73d9f93408f484b9fd11ae30f14adcd&number=10`
        );
        const data = await api.json(); 


        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes)
        console.log(data.recipes);
    }

    
    
   
  };  


  return (
    <div ><h3>Popular Picks</h3>
          <div className="Wrapper">
            

           <Splide options={{
            perPage: 5,
             arrows: false, pagination: false,
            drag: 'free',
            gap: "2rem",
            breakpoints: {
              2000: {
                perPage: 4,
              },
              1750: {
                perPage: 3,
              },
              1500: {
                perPage: 2,
              },
              800: {
                perPage: 1,
              }
           }}}>

            {populars.map((recipe) => {
             return(
              <SplideSlide key={recipe.id}>
            <div className="Card">
              <Link to={"/recipe/" + recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <div className="Gradient"/>
               </Link>
            </div>
           
            </SplideSlide>
             );
            })}
            </Splide>
          </div>
        
    </div>
  )
}


export default Pop