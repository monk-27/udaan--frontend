"use client"
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";



import store from "./components/redux/store";
import { Provider } from "react-redux";
import Login from "./components/login/register/login";
// import "./App.css";

const App=({ Component, pageProps }: AppProps)=> {
  store.subscribe(()=> console.log(store.getState()))
  
  return (
    <>
    
    <Provider store = {store}>
      <Login/>
  
    </Provider>
    </>
  
    
  );
}

export default App;