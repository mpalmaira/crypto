import React from "react";
import BitcoinChart from "../../components/BitcoinChart/BitcoinChart";
import CoinTable from "../../components/CoinTable";
class HomePage extends React.Component{
    render(){
        return(
            <div>
                <BitcoinChart/>
                <CoinTable/>
            </div>
        )
    }
}
export default HomePage;