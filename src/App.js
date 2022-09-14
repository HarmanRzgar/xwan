import Pages from "./Pages/Pages";
import Search from "./Components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Searched from "./Pages/Searched";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Search/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
