import React from "react";
import { Container } from "./BitcoinLine.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function BitcoinLine(props) {
  const bitcoinPriceData = props.bitcoin.prices.map((values) => ({
    x: values[0],
    y: values[1],
  }));
  const data = {
    labels: bitcoinPriceData.map((val) => {
      const date = new Date(val.x);
      return date.getDate();
    }),
    datasets: [
      {
        data: bitcoinPriceData.map((val) => val.y),
        borderColor: "#0CF864",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
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
        display: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxRotation: 0
        },
      },
    },
    tension: 0.5,
  };
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}
