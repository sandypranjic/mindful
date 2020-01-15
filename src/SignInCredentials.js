import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class SignInCredentials extends Component {

    preventFormDefault = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <section className="signInCredentials">
                    <h2>Welcome Back</h2>
                </section>
                <form onSubmit={this.preventFormDefault}>
                    <label htmlFor="user">Username</label>
                    <input type="text" name="user" id="user" className="loginForm" placeholder="Username" />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" className="loginForm" placeholder="Password" />
                    <button type="submit">Sign In</button>
                </form>
            </React.Fragment>

        );
    }
}

export default SignInCredentials;
