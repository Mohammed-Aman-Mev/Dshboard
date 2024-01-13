import React from "react";
import { Analytics, Profile, SideNav, Strategy } from "../components/index";

const Home = () => {
  return (
    <div className="rounded-3xl bg-white w-full flex flex-col-reverse sm:flex-row sm:h-[100vh]">
      <div className="sm:flex-col md:flex md:flex-row w-full sm:h-full sm:flex-wrap rounded-r-3xl lg:flex-row">
        <Profile />
        <Analytics />
        <Strategy />
      </div>
    </div>
  );
};

export default Home;
