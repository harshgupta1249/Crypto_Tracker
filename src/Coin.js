import React, {useState} from 'react';
import './Coin.css';

const Coin = ({name, image, symbol, volume, price, priceChange, marketcap}) => {
    return ( 
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" className="coin-image" />
                    <div className="coin-name">{name}</div>
                    <div className="coin-symbol">{symbol}</div>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{price}</p>
                    <p className="coin-volume">{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ): (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                        Mkt Cap: {marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Coin;