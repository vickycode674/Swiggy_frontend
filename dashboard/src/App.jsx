import React from "react";
import LandingPages from "./vendor_dashboard/Components/pages/LandingPages";
import {Routes,Route} from 'react-router-dom';


import "./App.css";

const App = ()=>{
  return  (
    <div>
      <Routes>
         <Route path='/' element={<LandingPages />} />
      </Routes>
    </div>
  )
}

export default App;