import React, { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";
import { Doughnut, Pie, getElementsAtEvent } from "react-chartjs-2";
import "./../../index.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
  const data = {
    labels: [
      "Ипотека кредитлари",
      "Микроқарзлар",
      "Истеъмол кредитлари",
      "Таълим кредитлари",
      "Тадбиркорликни ривожлантириш учун ажратилган кредитлар",
      "Бошқа кредитлар",
    ],
    datasets: [
      {
        label: "Жисмоний шахсларга ажратилган кредит қолдиғи",
        data: [26, 22, 196, 506, 39, 159],
        backgroundColor: [
          "rgba(255, 26, 104, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(0, 0, 0, 0.2)",
        ],
        borderColor: [
          "rgba(255, 26, 104, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 1,
        link: [
          "/jismoniy/ipoteka",
          "https://kun.uz",
          "https://amity.uz",
          "/jismoniy/ta'lim",
          "https://w3schools",
          "https://react.org",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "white",
      },
    },
    plugins: [ChartDataLabels],
  };
  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      const dataSetIndexNum = getElementsAtEvent(chartRef.current, event)[0]
        .datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;
      window.open(data.datasets[dataSetIndexNum].link[dataPoint]);
    }
  };
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "30px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "% da",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  const data2 = {
    labels: [
      "Кредит ташкилотлари бўлмаган юридик шахсларга ажратилган кредитлар",
      "Лизинг ва факторинг",
      "Банклараро кредитлар",
      "Микрокредитлар",
      "Синдициялаштирилган кредитлар",
    ],
    datasets: [
      {
        label: "Юридик шахсларга ажратилган кредит қолдиғи",
        data: [17, -16, -23, -41, 19],
        backgroundColor: [
          "rgba(255, 26, 104, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 26, 104, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        link: [
          "https://github.com",
          "/yuridik/lizing",
          "https://kun.uz",
          "/yuridik/mikrokreditlar",
          "https://amity.uz",
        ],
      },
    ],
  };
  const options2 = {
    plugins: {
      datalabels: {
        display: true,
        color: "white",
      },
    },
    plugins: [ChartDataLabels],
  };
  const chartRef2 = useRef();
  const onClick2 = (event) => {
    if (getElementsAtEvent(chartRef2.current, event).length > 0) {
      const dataSetIndexNum = getElementsAtEvent(chartRef2.current, event)[0]
        .datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef2.current, event)[0].index;
      window.open(data2.datasets[dataSetIndexNum].link[dataPoint]);
    }
  };

  return (
    <div>
      <div class="chartCard">
        <div class="chartBox">
          <h2>{data.datasets[0].label}</h2>
          <Doughnut
            data={data}
            options={options}
            onClick={onClick}
            ref={chartRef}
            plugins={[textCenter]}
          ></Doughnut>
        </div>
        <div class="chartBox">
          <h2>{data2.datasets[0].label}</h2>
          <Pie
            data={data2}
            options={options2}
            onClick={onClick2}
            ref={chartRef2}
          ></Pie>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
