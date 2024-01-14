import React from "react";

const Mainmoney = ({pri,des}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl">{pri?pri:'$19,000'}</h1>
      <p className="text-gray-500 text-[14px]">{des?des:'Account balance'}</p>
    </div>
  );
};

export default Mainmoney;
