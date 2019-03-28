import React, { Component } from 'react';
import client from '../../client';
import './signUpForm.css'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g

class SignUpForm extends Component {
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
            <div className="form-container">
                <div className="form">
                <Form>
                    
                    <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="name..."  value={this.state.name} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">SurName</Label>
                    <Input type="text" name="surname" id="surname" placeholder="surname..."  value={this.state.surname} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="adresse mail"  value={this.state.email} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePassword">Password Verification</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password verification" value={this.state.passwordVerification} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleSelect">Sexe</Label>
                    <Input type="select" name="select" id="exampleSelect" value={this.state.sexe} onChange={this.handleInputChange}>
                        <option>Homme</option>
                        <option>Femme</option>   
                    </Input>
                    </FormGroup>
                    
                    <Button  onClick={this.myFunction} >Submit</Button>
                </Form>
                </div>
            </div>
    
        )
    }
}


export default SignUpForm;