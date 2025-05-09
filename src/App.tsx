import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignupPage } from "./routes/SignupPage";
import { HomePage } from "./routes/HomePage";
import { LoginPage } from "./routes/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div>
          <Routes>
            <Route path = "/" element={<HomePage />} />
            <Route path = "/signup" element={<SignupPage />} />
            <Route path = "/login" element={<LoginPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
