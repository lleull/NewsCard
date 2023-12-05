import React from "react";
import Success from "./Component/Success/Sucess";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import MainApp from "./Main";

const App = (props) => {
 


  return (
   
    <BrowserRouter>
    
    <Routes>
      <Route  exact path='/' Component={MainApp  }  />
      <Route  exact path='/success' Component={Success }  />
      </Routes>
    </BrowserRouter>
     

  );
};

export default App;
