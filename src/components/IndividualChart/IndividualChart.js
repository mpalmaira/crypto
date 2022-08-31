import React from "react";
import { Container } from "./IndividualChart.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function IndividualChart(props) {
  const chartData = props.chart.map((values) => ({
    x: values[0],
    y: values[1],
  }));
  const data = {
    labels: chartData.map((val) => {
      const date = new Date(val.x).toLocaleDateString();
      return date;
    }),
    datasets: [
      {
        data: props.chart,
        borderColor: "rgba(44, 47, 54, 1)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 210);
          gradient.addColorStop(0, "rgba(0, 0, 0, 0.0)");
          gradient.addColorStop(1, "rgba(44, 47, 54, .5)");
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      maintainAspectRatio: false,
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    tension: 0.5,
  };
  return (
    <Container>
      <Line options={options} data={data} height={70} />
    </Container>
  );
}
