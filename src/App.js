import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "react-bootstrap";
import { Home } from './components/Blog/home';
import { Route, Routes } from 'react-router-dom';
import { About } from './about';
import { Search } from './components/Blog/searchPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
        <Route path='/about' element={<About/>}>



        </Route>

        <Route path='/search/:title' element={<Search/>} > 

        </Route>
      </Routes>

     
      
     




      
    </div>
    

  );
}

export default App;
