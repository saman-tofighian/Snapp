import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;
