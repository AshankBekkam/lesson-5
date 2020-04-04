import React from 'react';

import './Signin.scss'
import Frominput from '../forminput/Forminput';
import Button from '../button/Button'
import { withRouter } from 'react-router-dom';

class Signin extends React.Component
{
    constructor(props){
        super(props);
        this.state ={
            email : '',
            password : '',
        }
    }

    handleSubmit = (event)=>{

        event.preventDefault();

        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = (event)=>{

        const {value,name} = event.target;
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Signin with email and password</span>
                
                <form onSubmit = {this.handleSubmit}>
                    <Frominput 
                        name = 'email'
                        type = 'email' 
                        value = {this.state.email} 
                        required
                        label = 'Email'
                        handleChange = {this.handleChange}
                />
                        
                    

                    <Frominput
                        name = 'password'
                        type = 'password'
                        value = {this.state.password}
                        required
                        label = 'Password'
                        handleChange = {this.handleChange}
                    />

                    

                    <Button 
                    type = 'submit' 
                    >SIGN IN</Button>
                </form>
            </div>
        )
    }
}
export default Signin