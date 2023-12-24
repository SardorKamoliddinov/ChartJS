import React from "react";
import Piechart from "./components/PieChart/piechart";
import { Routes, Route } from "react-router-dom";
import Yuridik from "./components/Yuridik/Yuridik";
import Jismoniy from "./components/Jismoniy/Jismoniy";
import Ipoteka from "./components/Jismoniy/Ipoteka/Ipoteka";
import Talim from "./components/Jismoniy/Talim/Talim";
import Mikrokreditlar from "./components/Yuridik/Mikrokreditlar/Mikrokreditlar";
import Lizing from "./components/Yuridik/Lizing/Lizing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Piechart />} />
        <Route path="/*" element={<h1>404 not found</h1>} />

        <Route path="/yuridik" element={<Yuridik />} />
        <Route path="/yuridik/mikrokreditlar" element={<Mikrokreditlar />} />
        <Route path="/yuridik/lizing" element={<Lizing />} />
        <Route path="/jismoniy/" element={<Jismoniy />} />
        <Route path="jismoniy/ipoteka" element={<Ipoteka />} />
        <Route path="jismoniy/ta'lim" element={<Talim />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
