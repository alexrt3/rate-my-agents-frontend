import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div>
          <Routes>
            <Route path = "/" element={<HomePage />} />
            <Route path = "/signup" element={<SignupPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
