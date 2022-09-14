import Pages from "./Pages/Pages";
import Search from "./Components/Search";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Search/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
