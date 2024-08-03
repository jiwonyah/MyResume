import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

export default function AppRouter() {
	return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
					path="/"
					element={
							<LandingPage />
					}
                />

            </Routes>
        </BrowserRouter>
    );
}