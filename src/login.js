import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase';
import "./login.css";
import { actionTypes } from './reducer';
import { UseStateValue } from './StateProvider';
import logo from "./Wa_logo.png";

function login() {
    const [{login}, dispatch] = UseStateValue();

    const signIn =() => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="Login">
            <div className = "login_cont">
                <img className="wa_logo" src={logo} alt="wa_logo" />
                <div className="login_text">
                    <h1>Sign in to whatsapp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign in with google
                </Button>
            </div>
            
        </div>
    )
}

export default login

