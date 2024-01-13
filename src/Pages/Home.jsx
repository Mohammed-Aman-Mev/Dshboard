import React from "react";
import { Analytics, Profile, SideNav, Strategy } from "../components/index";

const Home = () => {
  return (
    <div className="rounded-3xl bg-white w-full flex flex-col-reverse sm:flex-row sm:h-[100vh]">
      <div className="hidden sm:flex">
        <SideNav />
      </div>
      <div className="sm:flex w-full sm:h-full">
        <Profile />
        <Analytics />
        <Strategy />
      </div>
    </div>
  );
};

export default Home;
