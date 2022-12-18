import './App.css';
import {BrowserRouter,Route , Routes} from "react-router-dom";
import Home from "./components/Home";
import Dynamic from "./components/Dynamic";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route  path ='/' element={<Home/>}/>
        <Route  path ='/:CRN' element={<Dynamic/>}/>
      </Routes>
    </div>
  </BrowserRouter>
      );
}

export default App;
