import React, { useEffect } from "react";
import { APP_TITLE, PAGES } from "./App.constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import Donate from "./pages/donate/Donate";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";

function App() {
  useEffect(() => {
    document.title = APP_TITLE;
  }, []);

  return (
    <BrowserRouter>
      <NavBar pages={PAGES} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
