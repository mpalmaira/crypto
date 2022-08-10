import React from 'react'
import axios from 'axios'
import BitcoinLine from '../BitcoinLine/BitcoinLine';
import BitcoinBar from '../ BitcoinBar/BitcoinBar';

class BitcoinTable extends React.Component{
    state = {
        isLoading: false,
        bitcoin: null,
        hasError: false,
        bitcoinHourly: null,
      }
      getData = async () => {
        try{
          this.setState({isLoading: true});
              const { data } = await axios('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily')
              const { data:dataHourly } = await axios ('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly');
              this.setState({ bitcoin: data, isLoading: false, bitcoinHourly: dataHourly })
        }catch(err){
          this.setState({ hasError: true, isLoading: false });
        }
      }
      componentDidMount(){
        this.getData()
      }


    render(){
        const showChart = this.state.bitcoin && !this.state.isLoading && !this.state.hasError
        return(
            <div>{showChart &&(
                <div>
                    <BitcoinLine bitcoin = {this.state.bitcoin}/>
                    <BitcoinBar bitcoin = {this.state.bitcoinHourly}/>
                </div>
            )}</div>
        )
    }
}

export default BitcoinTable