import {useEffect, useState} from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import {motion} from "framer-motion"
import './Pages.css'


function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions')

    const MY_KEY = process.env.REACT_APP_API_KEY;
 
const fetchDetails = async () => {
    const data = await fetch (
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=f73d9f93408f484b9fd11ae30f14adcd`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
};
     useEffect(() => {
    fetchDetails()},[params.id]);



  return (
    <motion.div className="DetailWrapper"
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{ opacity: 0}}
    transition={{ duration: 0.5}}
    >
       
       <div className="headTitle">
        <h2 className="title">{details.title}</h2>
        <div className="img">
        <img src={details.image} alt={details.title} /> </div> </div>
        <div className="Info">
            <button className="Button {activeTab === 'instructions' ? 'active' : '' }" onClick={() => setActiveTab("instructions")}>
                Instructions
            </button>
            <button className="Button {activeTab === 'ingredients' ? 'active' : '' }" onClick={() => setActiveTab("ingredients")}>
                Ingredients
            </button>
            {activeTab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{__html:details.summary }}></h3>
                <h3 dangerouslySetInnerHTML={{__html:details.instructions }}></h3>
            </div>
            )}
           {activeTab === 'ingredients' &&  (
             <ul>
                {details.extendedIngredients.map((ingredient) => 
                <li key={ingredient.id}>{ingredient.original}</li>
                )}
            </ul>
           )}
           
        </div>
      

    </motion.div>
    
  );
};


// const DetailWrapper = styled(motion.div)`
// font-family: Helvetica, sans-serif;
// 	margin-top: 10rem;
// 	margin-bottom: 5rem;
//     margin: 10px;
// 	display:flex;
//     text-align: left;
//     align-items: center;
//     flex-direction: column;
// }
// @media (max-width: 1200px) {
//     flex-direction: column;
//     justify-content: center;
//     margin-left: 0;
//    }
//    @media (max-width: 800px) {
//   img {
//     justify-content: center;
//     width: 80%;
//     height: auto;
//   }
//   .headTitle {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     margin: 0;
//     margin-left: 0rem;
// 	margin-bottom: 2rem;
//   }
//    }
// h2 {
// 	margin-bottom: 2rem;
//     color: #fff;

// }

// .img {
//     display: flex;
//     justify-content: center;
// }

// .headTitle {
//     background-color:  #a71d2a;
//     padding: 1rem;
//     display: inline;
//     justify-content: center;
//     align-items: center;
//     border-radius: 10px;
//     margin: 4rem;
    
// }

// li {
// 	font-size: 1.2rem;
// 	line-height: 2.5rem;
// }

// ul {
// 	margin-top: 2rem;

// }

// img {
//     border-radius: 10px;
//     margin: 2rem;
// }

// .active {
// 	color: var(--textColor);
// 	background: var(--mainColor);
// }
// `;

// const Button = styled.button`
// 	padding: 1rem 2rem;
//     margin: 1rem;
// 	background-color: var(--textColor);
// 	border: 2px solid black;
// 	margin-right: 2rem;
// 	font-weight: 600;
//     color: white;

// }
// `;
// const Info = styled.div`

// margin: 30px;

// }
// `;

export default Recipe
