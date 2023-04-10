import React, { useState } from "react";
import "../styles/App.css";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";

const App = () => {
  const [results, setResults] = useState([]);
  return (
    // <div id="main">
    // </div>
    <div>
      <Navbar setResults={setResults} />
      <Sidebar />
    </div>
  );
};

export default App;
