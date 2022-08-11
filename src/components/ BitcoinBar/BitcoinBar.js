import React from "react";
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

class BitcoinBar extends React.Component {
  render() {
    const bitcoinVolumeData = this.props.bitcoin.total_volumes.map(
      (values) => ({ x: values[0], y: values[1] })
    );
    const data = {
      labels: bitcoinVolumeData.map((val) => {
        const date = new Date(val.x);
        return date.getHours();
      }),
      datasets: [
        {
          data: bitcoinVolumeData.map((val) => val.y),
          borderColor: "rgba(43, 114, 229, 0.5)",
          backgroundColor: "rgba(43, 114, 229, 0.5)",
          pointRadius: 3,
          borderWidth: 3,
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
      <div>
        <Bar options={options} data={data} />
      </div>
    );
  }
}
export default BitcoinBar;
