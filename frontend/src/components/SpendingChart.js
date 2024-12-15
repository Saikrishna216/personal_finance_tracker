// src/components/SpendingChart.js
import React from "react";
import { Chart } from "react-google-charts";

const SpendingChart = ({ data }) => {
  const chartData = [["Category", "Amount"], ...data];

  const options = {
    title: "Spending by Category",
    pieHole: 0.4,
    is3D: false,
    slices: [
      { color: "#ff7043" },
      { color: "#66bb6a" },
      { color: "#42a5f5" },
      { color: "#ab47bc" },
    ],
  };

  return (
    <div style={{ margin: "50px auto", textAlign: "center" }}>
      <h3>Monthly Spending</h3>
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default SpendingChart;
