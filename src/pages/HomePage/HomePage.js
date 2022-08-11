import React from "react";
import BitcoinTable from "../../components/BitcoinTable/BitcoinTable";
import CoinTable from "../../components/CoinTable";
class HomePage extends React.Component{
    render(){
        return(
            <div>
                <BitcoinTable/>
                <CoinTable/>
            </div>
        )
    }
}
export default HomePage;