import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4"> 
          <div className="text-3xl font-bold text-blue-500 p-4">
            Tailwind is working! 🎉
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
