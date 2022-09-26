import React, { useState, useEffect } from 'react';
import Base from "./jsx/layout/base/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ...............Pages ...............
import Homepage from "./jsx/pages/homepage/Homepage";
import AboutUs from './jsx/pages/AboutUs/AboutUs';
import PlantPurchase from './jsx/pages/PlantPurchase/PlantPurchase';
import Nft from './jsx/pages/Nft/Nft';
import Affiliate from './jsx/pages/Affiliate/Affiliate';
import InVitro from './jsx/pages/InVitro/InVitro';

// footer pages 
import BankVerbindung from './jsx/pages/BankVerbindung/BankVerbindung';
import Faq from './jsx/pages/Faq/Faq';
import Jobs from './jsx/pages/Jobs/Jobs';
import Agb from './jsx/pages/Agb/Agb';
import Datenschutz from './jsx/pages/Datenschutz/Datenschutz';
import Impressum from './jsx/pages/Impressum/Impressum';
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
            <Route path="/affiliate" element={<Affiliate></Affiliate>}></Route>
            <Route path="/in-vitro" element={<InVitro></InVitro>}></Route>

            {/* footer links */}
            <Route path="/bankVerbindung" element={<BankVerbindung></BankVerbindung>}></Route>
            <Route path="/faq" element={<Faq></Faq>}></Route>
            <Route path="/jobs" element={<Jobs></Jobs>}></Route>
            <Route path="/agb" element={<Agb></Agb>}></Route>
            <Route path="/datenschutz" element={<Datenschutz></Datenschutz>}></Route>
            <Route path="/impressum" element={<Impressum></Impressum>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
