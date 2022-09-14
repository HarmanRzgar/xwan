import React from 'react'
import Home from './Home'
import Searched from './Searched'
import { Routes, Route } from "react-router-dom"


function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
    </Routes>
  )
}

export default Pages