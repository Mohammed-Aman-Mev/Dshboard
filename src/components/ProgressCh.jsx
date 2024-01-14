import React from "react";
import { BarChart } from "keep-react";

const ProgressCh = ({ w, h }) => {
  const BarChartData = [
    {
      name: "2",
      price: 100,
    },
    {
      name: "4",
      price: 200,
    },
    {
      name: "6",
      price: 300,
    },
    {
      name: "8",
      price: 400,
    },
    {
      name: "10",
      price: 450,
    },
    {
      name: "11",
      price: 500,
    },
    {
      name: "12",
      price: 600,
    },
    {
      name: "13",
      price: 700,
    },
    {
      name: "14",
      price: 800,
    },
    {
      name: "15",
      price: 900,
    },
  ];
  return (
    <BarChart
      height={h ? h : 200}
      width={w ? w : 400}
      barSize={30}
      barRadius={[4, 4, 0, 0]}
      dataKey="price"
      chartData={BarChartData}
      showBg={true}
      showLegend={true}
      showTooltip={true}
      showXaxis={true}
      showYaxis={true}
    />
  );
};

export default ProgressCh;

// export const BarComponent = () => {

// };
