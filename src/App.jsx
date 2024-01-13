import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, ListU, News, Search, UserProfile } from "./Pages/index";
import { Aside, Footer, SideNav } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="hidden sm:flex">
          <Aside />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/news" element={<News />} />
          <Route path="/listu" element={<ListU />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
