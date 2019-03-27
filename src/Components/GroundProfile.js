import React from 'react'
import Sliderpictures from './SliderPictures';
import StarsView from './StarsView/StarsView';
import './groundProfile.css';

const GroundProfile = props => {
    console.log(props)
    return (
        <div className="container">
            <div class="row">
                <div className="col">
                    <div className="content-ground">
                        <div className="row">
                            <div className="col-6">
                                <div className="presentation-ground">
                                    <div>
                                        <h1 className="name-ground">Classico-Club</h1>
                                        <div className="presentation-place-ground">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <h3 className="place-ground">hhhhhhhhhhhhh</h3>
                                        </div>
                                        <div className="presentation-email-ground">
                                            <i class="fas fa-at"></i>
                                            <h3 className="email-ground">hhhhhhhhhhhhh</h3>
                                        </div>
                                        <div className="presentation-telephone-ground">
                                            <i class="fas fa-mobile-alt"></i>
                                            <h3 className="telephone-ground">hhhhhhhhhhhh</h3>
                                        </div>
                                    </div>
                                    <div>
                                        <Sliderpictures {...props}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="information-ground">
                                    <div className="price-ground">
                                        <h1>80dt<span>/match</span></h1>
                                    </div>
                                    <div className="number-ground">
                                        <h1><span>2</span> Terrains</h1>
                                    </div>
                                    <StarsView/>
                                    <div>
                                        <h1>A propos Local</h1>
                                        <p className="apropos-ground">Classico-Club est un complexe sportif offrant 2 terrains de Football couverts en gazon synthétique. Les parties de Football se jouent à 6 contre 6 ( 5 joueurs 1 gardien de but ).</p>
                                        <h1>Équipements</h1>
                                        <div className="parking">
                                            <i class="fas fa-parking"></i>
                                            <h2>Parking</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default GroundProfile;