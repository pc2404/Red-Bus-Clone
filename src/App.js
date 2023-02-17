import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";
import journeyContext from "./context/journeyContext";
import SeatSelection from "./components/SeatSelection";
import Journey from "./components/Journey";
import Login from "./components/Login";

const App = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div>
      <journeyContext.Provider
        value={{ from: from, to: to, setFrom: setFrom, setTo: setTo }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Journey Component={Home} />} />
            <Route
              path="/results"
              element={<Journey Component={SearchResults} />}
            />
            <Route
              path="/book-seat"
              element={<Journey Component={SeatSelection} />}
            />
          </Routes>
        </BrowserRouter>
      </journeyContext.Provider>
    </div>
  );
};

export default App;
