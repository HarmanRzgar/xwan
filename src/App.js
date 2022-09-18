import Pages from "./Pages/Pages";
import Search from "./Components/Search";
import { BrowserRouter } from "react-router-dom"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Search/>
      <Pages/> 
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
