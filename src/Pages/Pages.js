import React from 'react'
import Home from './Home'
import Recipe from "./Recipe"
import Searched from './Searched'
import { Routes, Route, useLocation, } from "react-router-dom"
import {AnimatePresence} from 'framer-motion'


function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:id" element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>

  )
}

export default Pages