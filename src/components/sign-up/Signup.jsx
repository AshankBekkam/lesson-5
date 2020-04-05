import React from 'react'


import './Signup.scss';
import Frominput from '../forminput/Forminput';
import Button from '../button/Button';

import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class Signup extends React.Component
{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state

        if(password!==confirmPassword){
            alert('passwords dont match');
            return;
        }

        try{
            const{user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user,{displayName});

            this.setState({ 
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''

            })
        }catch(error){
            alert(error)
        }


    }

    handleChange=(event)=>{
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state
        return(

            <div className = 'sign-up'>
                <h2 className = 'title'>I dont have an account</h2>
                <span>Signup with email and password</span>
                <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
                    <Frominput
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label = 'Display name'
                        required />
                    <Frominput
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label = 'Email ID'
                        required />
                    <Frominput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label = 'Password'
                        required />
                    <Frominput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label = 'Confirm Password'
                        required />
                        <Button type = 'submit'>SIGN UP</Button>
                </form>
            </div>
        )
    }
}

export default Signup


