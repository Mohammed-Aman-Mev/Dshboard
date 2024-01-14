import React from "react";
import { CirPro, Mainmoney, Moneyinfo, ProgressCh } from "./index";

const Analytics = () => {
  return (
    <div className="w-full pt-[45px] flex flex-col gap-[20px] pr-[10px] sm:pl-[60px] md:w-[55%] h-[400px] sm:h-full md:h-full lg:w-[45%]">
      <h5 className="text-[#2718ff] font-bold">Retirement Income</h5>
      <div className="gap-5 sm:flex">
        <div className="border-b-[1px] border-[#2718ff]">
          <Mainmoney />
        </div>
        <div className="border-b-[1px] border-[#2718ff]">
          <Mainmoney />
        </div>
        <div className="border-b-[1px] border-[#2718ff]">
          <Mainmoney />
        </div>
      </div>
      <ProgressCh />
      <Moneyinfo h={"How do I compare to peer?"} d={"These number present current goal peer"}/>
      <div className="flex gap-4">
        <CirPro />
        <CirPro />
        <CirPro />
      </div>
    </div>
  );
};

export default Analytics;
