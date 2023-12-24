import React from "react";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";
import "./../../../index.css";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

const Ipoteka = () => {
  const data = {
    labels: ["01.08.2022", "01.08.2023"],
    datasets: [
      {
        label: "Ипотека кредитлари",
        data: [41430, 52072],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {};

  return (
    <div>
      <div class="chartCard">
        <div class="chartBox">
          <h2>{data.datasets[0].label}</h2>
          <Bar data={data} options={options}></Bar>
        </div>
      </div>
    </div>
  );
};

export default Ipoteka;
