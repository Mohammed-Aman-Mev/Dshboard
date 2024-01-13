import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, ListU, News, Search, UserProfile } from "./Pages/index";
import { SideNav } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/news" element={<News />} />
        <Route path="/listu" element={<ListU />} />
      </Routes>
      <div
        className="
      sm:hidden sticky bottom-0"
      >
        <SideNav />
      </div>
    </BrowserRouter>
  );
};

export default App;
