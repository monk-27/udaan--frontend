"use client"
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/contact/contact";
import About from "./components/About/about";
import Courses from "./components/coursespage/courses";
import Banner from "./components/Buy/Buybanner";
import Card1 from "./components/coursespage/cards";
import store from "./components/redux/store";
import { Provider } from "react-redux";
// import "./App.css";

const Routing=()=> {
  store.subscribe(()=> console.log(store.getState()))
  
  return (
    <>
    <Provider store = {store}>
     
  
    <BrowserRouter>
    
  
   <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route  path="/card" element={<Card1/>} />
        <Route path="/banner" element ={<Banner/>} />
        
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
    
  );
}

export default Routing;