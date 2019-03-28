import React from 'react';
import { Link } from "react-router-dom";
import './header.css';


const Header = () =>{
    return (
        <div className="aa-header">
            <div className="header-left">
                <img alt="" src="https://www.openplay.co.uk/assets/images/logo.png"></img>
            </div>
            <div className="header-right">
                <div className="header-right-top">
                    <ul className="header-list">
                        <li className="username"><input  type="text" name="email" className="username-input" placeholder="User Name"/></li>
                        <li className="username"><input  type="password" name="password" className="password-input" placeholder="Password"/></li>
                        <li className="connect"><button type="button">connect</button> </li>
                        <li className="login"><Link to="/sign-up">Sign-Up</Link></li>
                    </ul>
                </div>
                <div className="header-left-buttom">
                    <ul className="header-lists">
                        <li className="header-list"><Link to="/home"><span>Home </span><i className="fas fa-chevron-down"></i></Link></li>
                        <li className="header-list"><Link to="/news"><span>News </span><i className="fas fa-chevron-down"></i></Link></li>
                        <li className="header-list"><Link to="/contact"><span>Contact </span><i className="fas fa-chevron-down"></i></Link></li>
                        <li className="header-list"><Link to="/about"><span>About </span><i className="fas fa-chevron-down"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header