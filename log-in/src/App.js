import Login from "./Component/Login";
import Navber from "./Component/Navber";
import './App.css'
import { BrowserRouter, Routes } from "react-router-dom";
import { Route, } from "react-router-dom";
import Card from "./Component/Card";
import Product from "./Component/Pages/Product";
import About from "./Component/Pages/About";
import Signin from "./Component/Signin";

function App() {
  return (
    <div className="App">
          {/* <Navber/> */}
        <Routes>
          <Route path='/' element= {<Login/>}/>
          <Route path='/Navber' element= {<Navber/>} />
          <Route path="/Card"  element ={<Card/>}/>
          <Route path="/Product" exact element={<Product/>}/>
          <Route path="/About" exact element={<About/>}/>
          <Route path="/Signin" exact element={<Signin/>}/>
        </Routes>
      {/* <Login /> */}
    </div>
  );
}

export default App;
