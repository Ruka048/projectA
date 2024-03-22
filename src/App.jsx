import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RealEstatesSection from "./components/Card/Data";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <RealEstatesSection title="Popular Real Estate" />
      <RealEstatesSection title="New Construction For Sale" />
    </div>
  );
}

export default App;
