import React from "react";
import "./../../../App.css";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
const Talim = () => {
  const data = {
    labels: ["01.08.2022", "01.08.2023"],
    datasets: [
      {
        label: "Таълим кредитлари",
        data: [434, 2633],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const options = {};
  return (
    <div>
      <div className="chartCard">
        <div className="chartBox">
          <h2>{data.datasets[0].label}</h2>
          <Line data={data} options={options}></Line>
        </div>
      </div>
    </div>
  );
};

export default Talim;
