import "./App.css" ;
import Navbar from './common/Navbar/Navbar';
import Home from "./components/Pages/Home";
import About from "./components/About/About"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Product from "./components/product/Product";
import Service from "./components/Servicess/Home";
import SinglePage from "./SinglePage/SinglePage";

function App(){
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/'  element= {<Home />} />
            <Route path='/about'  element= {<About />} />
            <Route path='/product'  element= {<Product />} />
            <Route path='/services'  element= {<Service />} />
            <Route path='/singlepage/:id'  element= {<SinglePage />} />
          </Routes>
      </Router>
    </>
  )
}

export default App