import React from 'react'
import axios from 'axios'
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          align: "start",
          source: "auto",
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 7,
          font: {
            size: 9,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };
class BitcoinChart extends React.Component{
    state= {
        isLoading: false,
        bitcoin: null,
        hasError: false,

    }
  getBitcoinChart = async () =>{
    try{
        this.setState({isLoading: true});
        const { data } = await axios('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily')
        this.setState({bitcoin: data, isLoading: false})
    }catch(err){
        this.setState({ hasError: true});
    }
  }


  componentDidMount(){
    this.getBitcoinChart()
  }

    render(){
    return(
        <div>
        </div>
    )
  }
}


export default BitcoinChart;