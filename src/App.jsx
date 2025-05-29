

import React, { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./CRUD/Home";
import Create from "./CRUD/Create";
import Update from "./CRUD/Update";
import Read from "./CRUD/BookDetails";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./App.css";

const App = () => {
   useEffect(() => {
   Aos.init();
 }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
