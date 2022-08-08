import React from "react";
import axios from "axios";
import Coins from "../Coins/Coins";
class CoinChart extends React.Component {
    state = {
        isLoading: false,
        coins: null,
        hasError: false
    }
    
    getData = async () => {
        try{
            this.setState({isLoading: true});
            const { data } = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
            this.setState({ coins: data, isLoading: false });
            console.log(data)
        }catch(err){
            this.setState({ hasError: true, isLoading: false });
        }
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        return(
            <div>
                <Coins coins = {this.state.coins}/>
            </div>
        )
    }
}

export default CoinChart;