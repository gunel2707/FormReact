import React from 'react'
import { useEffect, useState } from "react";
import Context from "./context/Context";
// import "./App.css";
import axios from "axios";
import Products from "./pages/Products";

import ProductDetails from "./pages/ProductDetails";
import { Route, Routes } from "react-router-dom";

import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";

import './App.css'
import SignIn from './components/SignIn'

function App() {
  useEffect(() => {
    getdata();
  }, []);

  const [productsData, setproductsData] = useState([]);
  const [array, setarray] = useState([]);
  const [count, setCount] = useState(0);
  const [modalshow, setmodalshow] = useState(false);

  async function getdata() {
    const request = await axios.get(apiKey1);
    
    setproductsData(request.data);
  }
  const apiKey1 = import.meta.env.VITE_API_KEY1;
  const data = {
    productsData,
    setproductsData,
    array,
    setarray,
    count,
    setCount,
    modalshow,
    setmodalshow,
  };

  return (
    <>
    <Context.Provider value={data}>

        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/products" element={<Products />} />
          <Route path="/shoppingcard" element={<Basket/>} />
          <Route path="/products/productdetail/:id" element={<ProductDetails />} />
          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Context.Provider>
    </>
  );
}
   

export default App
