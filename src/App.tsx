// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import NavBar from './NavBar';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";




function App() {
  React
  // const [count, setCount] = useState(0)
 
  return (
  <div>
    

    <BrowserRouter>

    <NavBar></NavBar>
<Routes>
  <Route path='/' element = {<Home/>}></Route>
  <Route path='/About' element = {<About/>}></Route>
  <Route path='/Service' element = {<Service/>}></Route>
</Routes>
</BrowserRouter>



    </div>
  )

}

export default App
