import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MaizeGaze from "./Pages/MaizeGaze";
import NavigationBar from "./Components/NavigationBar";
import ScrollTop from "./Components/ScrollTop";
import MyResume from "./Pages/MyResume";
import SpamEmailDetection from "./Pages/SpamEmailDetection";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollTop /> 
      <div className="flex flex-col min-h-screen">
        <NavigationBar />
        <div className="flex-grow"> 
          <Routes>
            <Route
              exact
              path="/"
              element={<LandingPage />}
            />
            <Route
              exact
              path="/project/maizegaze"
              element={<MaizeGaze />}
            />
            <Route
                exact
                path="/project/myresume"
                element={<MyResume />}
              />

            <Route
                exact
                path="/project/spamdetection"
                element={<SpamEmailDetection />}
              />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
