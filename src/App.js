import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

const ingredients = [
  {
    name: "avacado",
    id: 1,
    unit: "item"
  },
  {
    name: "baby spinach",
    id: 1,
    unit: "cup"
  },
  {
    name: "salt",
    id: 1,
    unit: "tablespoon"
  }
];

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
     
    </Router>
  );
}

export default App;
