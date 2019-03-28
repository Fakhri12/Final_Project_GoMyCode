import React, { Component } from 'react';
import client from '../../client';
import './signUpForm.css'
import axios from 'axios'

const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g

class Form extends Component {
    state = {};
    
    handleInputChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
    }

    myFunction = () => {
        const { name, email, password } = this.state;
        if  (name ==='') {(alert('aaa'))}
        if	(email ==='') {(alert('bbb'))}
        if 	(password ==='') {(alert('ddd'))}
        
        else {
            const data = { name, email, password };
            this.saveUser(data);
            alert('Bienvenue')
        }
        
        if (password.length<8) alert('length min 8')
        if (!password.match(numbers)) alert('password undefined')
        if(!password.match(upperCaseLetters)) alert('password upperCase undefined')
        }

    saveUser = data => {
        axios.post('/addUser', data)
          .then(function (user) {
            console.log(user);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    render() {
        return (
            <div className="myform">
                <div className="header-form"></div>
                <form className="myform-content">
                    <h1>Sign up to your account</h1>
                    <hr/>
                    <div className="myinputs">
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} className="input-name" placeholder="First name"/>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} className="input-lastName" placeholder="Last name"/>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange} className="email" placeholder="Email address"/>
                        <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange} className="userName" placeholder="Username"/>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} className="password" placeholder="Password, min 8 characters long"/>
                        <input type="password" name="passwordVerification" value={this.state.passwordVerification} onChange={this.handleInputChange} className="password" placeholder="retape your password"/>
                        <input type="button" name="" value="Register" onClick={this.myFunction} />
                    </div>
                    <hr/>
                    <div className="myfacebook">
                        <a href="www.aaa.com"><img src="https://www.openplay.co.uk/assets/images/facebook-login.png" alt="" className="logo-facebook"/></a>
                        <div className="look">
                            <i className="fas fa-lock"></i> This will not allow us to post to Facebook, but you will be signed up for marketing communications -<a href="www.bbb.com">see details</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default Form