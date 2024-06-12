import React from "react";
import { Bar } from "react-chartjs-2";
import "./../../../App.css";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Lizing = () => {
  const data = {
    labels: ["01.08.2022", "01.08.2023"],
    datasets: [
      {
        label: "Лизинг ва факторинг",
        data: [1699, 1436],
        backgroundColor: [
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: ["rgb(153, 102, 255)", "rgb(201, 203, 207)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: "y",
  };

  return (
    <div>
      <div className="chartCard">
        <div className="chartBox">
          <h2>{data.datasets[0].label}</h2>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Lizing;
