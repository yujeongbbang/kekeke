import React, { useState } from "react";
import ReactResponsive, { Mobile, PC } from './component/ReactResponsive'
import Header_bf from "./component/Header_bf";
import Header_af from './component/Header_af'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cakes from "./pages/Cakes";
import CustomCake from "./pages/CustomCake";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Main from "./Main";
import GlobalStyle from "./component/GlobalStyle";
import Mypage from "./pages/Mypage";
import TourMain from "./pages/TourMain"
import TourOrder from "./pages/TourOrder"


function App() {
  const [toggle , setToggle] = useState(false);

  return (
    <BrowserRouter>    
  
        <Header_bf toggle={toggle} setToggle={setToggle}/>  
    <Routes>
      <Route path ='/cakes' element={<Cakes />}/>
      {/* <Route path ='/mypage' element={<Mypage />}/> */}
      <Route path ='/customcake' element={<CustomCake />}/>
      <Route path ='/login' element={<Login />}/>
      <Route path ='/join' element={<Join />}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/tourmain" element={<TourMain/>}/>
      <Route path="/tourorder" element = {<TourOrder/>}/>
    
    </Routes>
  
    </BrowserRouter>
  
  );
}

export default App;