import React from "react";
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

class BitcoinLine extends React.Component {
  render() {
    const bitcoinPriceData = this.props.bitcoin.prices.map((values) => ({
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
          borderColor: "rgba(255, 99, 132, 0.5)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          pointRadius: 0,
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
        <Line options={options} data={data} />
      </div>
    );
  }
}
export default BitcoinLine;
