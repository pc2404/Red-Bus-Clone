import "./App.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import { Search } from "./components/Search";
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
