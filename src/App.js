import React from "react";
import { Routes, Route } from "react-router-dom";
import Ipoteka from "./components/Jismoniy/Ipoteka/Ipoteka";
import Talim from "./components/Jismoniy/Talim/Talim";
import Mikrokreditlar from "./components/Yuridik/Mikrokreditlar/Mikrokreditlar";
import Lizing from "./components/Yuridik/Lizing/Lizing";
import Navbar from "./components/Navbar/Navbar";
import MainCase from "./components/MainCase/maincase";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<MainCase />} />
        <Route path="/*" element={<h1>404 not found</h1>} />
        <Route path="/yuridik/mikrokreditlar" element={<Mikrokreditlar />} />
        <Route path="/yuridik/lizing" element={<Lizing />} />
        <Route path="jismoniy/ipoteka" element={<Ipoteka />} />
        <Route path="jismoniy/ta'lim" element={<Talim />} />
      </Routes>
    </div>
  );
};

export default App;
