import React from "react";
import { Moneyinfo, Withdraw } from "./index";
import { Button } from "keep-react";

const Profile = () => {
  return (
    <div className="w-full bg-white pt-[45px] md:w-[45%] flex flex-col items-start justify-between sm:pl-[100px] md:pl-[100px] sm:h-full md:bg-neutral-100 md:h-[100vh] lg:h-full lg:w-[30%] p-[50px] md:pr-[15px]">
      <div className="flex w-full items-center">
        <div className="w-[50px] h-[50px] bg-[#1f5d76] rounded-full" />
        <div>
          <h1 className="text-2xl font-bold ">Hi Mike,</h1>
          <p className="text-[12px]">welcome back</p>
        </div>
      </div>
      <div className="bg-neutral-100 my-[30px] md:my-1 py-3 flex flex-col justify-between w-[90%] sm:w-[70%] md:w-full px-[50px] md:px-[10px] rounded-[30px] gap-2 md:gap-1">
        <h2 className="font-bold text-2xl">Today</h2>
        <h1 className="font-bold text-3xl">$19,000</h1>
        <p className="text-gray-500 text-[14px]">Account balance</p>
        <div className="flex gap-5 md:flex-col">
          <Moneyinfo />
          <Moneyinfo />
        </div>
        <button className="bg-[#2718ff] text-white w-full rounded-lg p-3 font-semibold">
          I want to...
        </button>
      </div>
      <div className="bg-neutral-100 w-[90%] sm:w-[70%] md:w-full p-[50px] md:p-[10px] rounded-[30px]">
        <h2>Recent Transcetion</h2>
        <Withdraw />
        <Withdraw />
        <Withdraw />
      </div>
    </div>
  );
};

export default Profile;
