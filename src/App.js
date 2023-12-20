import Home from "./Home";
import React from "react";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Create from "./Create";

import Update from "./Update";
import Edit from "./Edit";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
         <Route path="/create" element={<Create />}></Route>
         <Route path="/edit/:id" element={<Edit />}></Route>
         <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
