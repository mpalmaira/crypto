import React from "react";
import { Container } from "./BitcoinBar.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BitcoinBar(props) {
  const bitcoinVolumeData = props.bitcoin.total_volumes.map((values) => ({
    x: values[0],
    y: values[1],
  }));
  const data = {
    labels: bitcoinVolumeData.map((val) => {
      const date = new Date(val.x);
      return date.getDate();
    }),
    datasets: [
      {
        data: bitcoinVolumeData.map((val) => val.y),
        borderColor: "#2172E5",
        backgroundColor: "#2172E5",
        pointRadius: 3,
        borderWidth: 3,
        borderRadius: 5,
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
      },
    },
    tension: 0.5,
  };
  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
}
