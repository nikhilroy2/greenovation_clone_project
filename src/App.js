import React, { useState, useEffect } from 'react';
import Base from "./jsx/layout/base/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ...............Pages ...............
import Homepage from "./jsx/pages/homepage/Homepage";
import AboutUs from './jsx/pages/AboutUs/AboutUs';
import PlantPurchase from './jsx/pages/PlantPurchase/PlantPurchase';
import Nft from './scss/pages/Nft/Nft';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/en" element={<Homepage></Homepage>}></Route>
            <Route path="/about_us" element={<AboutUs></AboutUs>}></Route>
            <Route path="/pflanzenkauf" element={<PlantPurchase></PlantPurchase>}></Route>
            <Route path="/nft" element={<Nft></Nft>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
