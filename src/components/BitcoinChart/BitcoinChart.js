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
        this.setState({ bitcoin: data, isLoading: false });
    }catch(err){
        this.setState({ hasError: true, isLoading: false });
    }
  }

  
  
    render(){
    return(
        <div></div>
    )
  }
}

export default BitcoinChart