import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";


export default function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
