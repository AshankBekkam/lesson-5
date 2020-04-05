import React from 'react';

import './Signin.scss'
import Frominput from '../forminput/Forminput';
import Button from '../button/Button'
import { withRouter } from 'react-router-dom';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
class Signin extends React.Component
{
    constructor(props){
        super(props);
        this.state ={
            email : '',
            password : '',
        }
    }

    handleSubmit = async (event)=>{


        event.preventDefault();
        const{email,password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        } catch (error) {
            console.log(error);
            
        }

        
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
                    <Button 
                    type = 'submit'
                    isGoogleSignIn 
                    onClick = {signInWithGoogle}
                    >SIGN IN WITH GOOGLE</Button>
                </form>
            </div>
        )
    }
}
export default Signin