import React from "react";
import "./../../../index.css";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PolarAreaController,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  PolarAreaController,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend
);

const Mikrokreditlar = () => {
  const data = {
    labels: ["01.08.2022", "01.08.2023"],
    datasets: [
      {
        label: "Микрокредитлар",
        data: [9483, 5622],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      },
    ],
  };
  return (
    <div>
      <div className="chartCard">
        <div className="chartBox">
          <PolarArea data={data} />
        </div>
      </div>
    </div>
  );
};

export default Mikrokreditlar;
