import React from 'react';
import './about.css';
import fakhreddine from '../../images/fakhreddine.jpg'

const Apropos = () => {
    return (
        <div className="container">
            <div className="row about-row">
                <div className="col-6 text-center">
                    <div className="myphoto">
                        <img src={fakhreddine} className="img-fluid" alt=""/>
                    </div>
                    <div className="myname">
                        <h1>Fakhreddine Trabelsi</h1>
                    </div>
                    <div className="labor">
                        <h2>Full-Stack JS</h2>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <div className="myphoto">
                        <img src={fakhreddine} className="img-fluid" alt=""/>
                    </div>
                    <div className="myname">
                        <h1>Rami Znaki</h1>
                    </div>
                    <div className="labor">
                        <h2>Full-Stack JS</h2>
                    </div>
                </div>
            </div>
            <div className="row copyright">
                <div className="col">
                    <div>
                        <h2>© Copyright All rights reserved 2019.</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apropos