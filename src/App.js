import "./App.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import { Search } from "./components/Search";
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";
import journeyContext from "./context/journeyContext";

const App = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div>
      <journeyContext.Provider
        value={{ from: from, to: to, setFrom: setFrom, setTo: setTo }}
      >
        <BrowserRouter>
          <Toaster />
          <Navbar />
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<SearchResults />} />
          </Routes>
        </BrowserRouter>
      </journeyContext.Provider>
    </div>
  );
};

export default App;
