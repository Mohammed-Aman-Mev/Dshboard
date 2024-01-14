import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CirPro = () => {
  const percentage = 66;
  return (
    <div className="w-[70px] h-[70px]">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,

          textColor: "#f88",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
};

export default CirPro;
