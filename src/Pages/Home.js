import Pop from "../Components/Pop";
import List from "../Components/list";
import "../Components/Component.css"
import {motion} from "framer-motion"
import React from 'react'
import Search from "../Components/Search";
import {} from 'react-icons'

function Home() {
  return (
    <>
     <motion.div
     animate={{opacity: 1}}
     initial={{opacity: 0}}
     exit={{ opacity: 0}}
     transition={{ duration: 0.5}}
     >
     
        <Pop/>
        <List/>
    
       </motion.div>
    </>
  )
}

export default Home