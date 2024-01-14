import React from "react";

const Moneyinfo = ({ h, d }) => {
  return (
    <div>
      <h2 className="font-bold text-xl">{h ? h : "$4000"}</h2>
      <p className="text-gray-500 text-[14px]">{d ? d : "ldkfdhglsgl"}</p>
    </div>
  );
};

export default Moneyinfo;
