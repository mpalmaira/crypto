import React from 'react'
import CoinItem from '../CoinItem/CoinItem'

const Coins = (props) => {
  return (
    <div>
        <div className='heading'>
            <p>#</p>
            <p>Name</p>
            <p>Name</p>
            <p>Price</p>
            <p>1h%</p>
            <p>7d%</p>
            <p>24h Volume/Market Cap</p>
            <p>Circulating/Total Supply</p>
        </div>
        {props.coins.map((coins)=>{
            return (
                <CoinItem coins = {coins}/>
            )
        })}
        
    </div>
  )
}

export default Coins