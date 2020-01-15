import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class CreateAnAccount extends Component {

    preventFormDefault = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <section className="createAnAccount">
                    <h2>Create an Account</h2>
                </section>
                <form onSubmit={this.preventFormDefault}>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname" className="loginForm" placeholder="First Name" />
                    <label htmlFor="user">Email</label>
                    <input type="text" name="user" id="user" className="loginForm" placeholder="Email" />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" className="loginForm" placeholder="Password" />
                    <button type="submit">Sign Up</button>
                </form>
            </React.Fragment>

        );
    }
}

export default CreateAnAccount;
