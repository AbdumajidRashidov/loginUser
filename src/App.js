import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'normalize.css';
import './Styles/styles.css'

import Profile from "./Pages/profile";
import NoPage from "./Pages/404";
import Signin from "./Pages/signin";
import Signup from './Pages/signup';
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Profile/>}>
        <Route path="*" element={<NoPage/>}/>
      </Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
