import React from "react";
import { Analytics, Profile, SideNav, Strategy } from "../components/index";

const Home = () => {
  return (
    <div className="rounded-3xl bg-white w-full flex flex-col-reverse sm:flex-row">
      <div className="hidden sm:flex">
        <SideNav />
      </div>
      <div className="sm:flex w-full h-auto">
        <Profile />
        <Analytics />
        <Strategy />
      </div>
    </div>
  );
};

export default Home;
