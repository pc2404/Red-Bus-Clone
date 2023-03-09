import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import journeyContext from "../context/journeyContext";
import { Search } from "./Search";

const Journey = ({ Component }) => {
  const { to, from } = useContext(journeyContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else if (!to || !from) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Toaster />
      <Navbar />
      <Search />
      <Component />;
    </>
  );
};

export default Journey;
