import Pages from "./Pages/Pages";
import Search from "./Components/Search";
import { BrowserRouter } from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
     <Search/>
      <Pages/> 
      <Footer/>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
