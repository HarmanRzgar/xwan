import Pop from "../Components/Pop";
import Veggie from "../Components/Veggie";



import React from 'react'
import Search from "../Components/Search";

function Home() {
  return (
    <div>
      <Search/>
        <Veggie/>
        <Pop/>
    </div>
  )
}

export default Home