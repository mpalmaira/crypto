import React from 'react'

const CoinItem = (props) => {
  return (
    <div>
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src ={props.coins.image} alt = ''/>
            </div>
            <p>{props.coins.name}</p>
            <p>({props.coins.symbol})</p>
            <p>${props.coins.current_price}</p>
            <p>${props.coins.current_price}</p>
            <p>{props.coins.price_change_percentage_1h_in_currency}%</p>
            <p>{props.coins.price_change_percentage_24h_in_currency}%</p>

        </div>

    </div>
  )
}

export default CoinItem