import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  

class CoinChart extends React.Component{
    render(){
        const data = {
            labels: this.props.coins.sparkline_in_7d.price,
            datasets: [
                {
                    label: this.props.coins.id,
                    data: this.props.coins.sparkline_in_7d.price,
                    borderColor: this.props.coins.price_change_percentage_7d_in_currency > 0 ? 'rgb(0,255,0)' : 'rgb(255,0,0)',
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    pointRadius: 0,
                    borderWidth: 3,
                }
            ]
        }
        const options = {
            responsive: true,
            plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: false,
                  text: "Chart.js Line Chart",
                }
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
            }
        return(
            <div><Line options={options} data= {data} /></div>
        )
    }
}
export default CoinChart