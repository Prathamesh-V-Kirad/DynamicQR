import {BrowserRouter,Route , Routes} from "react-router-dom";
import Home from "./components/Home";
import Dynamic from "./components/Dynamic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path ='/' element={<Home/>}/>
        <Route  path ='/:CRN' element={<Dynamic/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
