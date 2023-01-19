import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div>
      <Link to={"/home"}>Go to Home </Link>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App
