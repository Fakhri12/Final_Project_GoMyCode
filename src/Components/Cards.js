import React from 'react';
import './Cards.css';


const Card = () => {
    return (
<div>
        <h1 className="store">My Store</h1>
<div className="container">
        <div className="card__container">
            <div className="card card--blue">
                <div className="card__photo card__photo--mountain">
                    <div className="card__description">
                        <h2 className="store-title">Lorem ipsum dolor</h2>
                    </div>
                </div>
                <div className="card__polygon card__polygon--blue card__polygon--first"></div>
                <div className="card__polygon card__polygon--blue card__polygon--second"></div>
                <div className="card__polygon card__polygon--blue card__polygon--third"></div>
            </div>
        </div>
        <div className="card__container">
            <div className="card card--green">
                <div className="card__photo card__photo--grass">
                    <div className="card__description">
                        <h2 className="store-title">Lorem ipsum dolor</h2>
                    </div>
                </div>
                <div className="card__polygon card__polygon--green card__polygon--first"></div>
                <div className="card__polygon card__polygon--green card__polygon--second"></div>
                <div className="card__polygon card__polygon--green card__polygon--third"></div>
            </div>
        </div>
        <div className="card__container">
            <div className="card card--red">
                <div className="card__photo card__photo--setup">
                    <div className="card__description">
                        <h2 className="store-title">Lorem ipsum dolor</h2>
                    </div>
                </div>
                <div className="card__polygon card__polygon--red card__polygon--first"></div>
                <div className="card__polygon card__polygon--red card__polygon--second"></div>
                <div className="card__polygon card__polygon--red card__polygon--third"></div>
            </div>
        </div>
    </div>
    </div>
    ) }

export default Card;