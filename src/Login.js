import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CreateAnAccount from './CreateAnAccount.js';
import SignInCredentials from './SignInCredentials.js';
// import PriorityPlanner from './PriorityPlanner.js';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            selectLogin: true,
            selectCreateAnAccount: false,
        };
    }

    selectSignInLink = () => {
        if (this.state.selectLogin === false) {
            this.setState({
                selectLogin: true,
                selectCreateAnAccount: false,
            });
            const selectLink = document.getElementsByClassName("signInLink");
            selectLink[0].classList.add("selected");
            const createAnAccountLink = document.getElementsByClassName("createAnAccountLink");
            createAnAccountLink[0].classList.remove("selected");
            console.log("The state was false and is now true");
        } else if (this.state.selectLogin === true) {
            console.log("The state is true");
        }
    }

    selectCreateAnAccountLink = () => {
        if (this.state.selectCreateAnAccount === false) {
            this.setState({
                selectCreateAnAccount: true,
                selectLogin: false,
            });
            const selectLink = document.getElementsByClassName("signInLink");
            selectLink[0].classList.remove("selected");
            const createAnAccountLink = document.getElementsByClassName("createAnAccountLink");
            createAnAccountLink[0].classList.add("selected");
            console.log("The state was false and is now true");
        } else if (this.state.selectCreateAnAccount === true) {
            console.log("The state is true");
        }
    }

    continueAsGuest = () => {
        this.props.continueAsGuestProp();
    }

    render() {
        // console.log(this.props.location.pathname);
        return (
            <React.Fragment>
                <main>
                    <section className="login">
                        <div className="loginLinks">
                            <Link to="/login" className="signInLink selected" onClick={this.selectSignInLink}>Sign In</Link>
                            <Link to="/login/createAnAccount" className="createAnAccountLink" onClick={this.selectCreateAnAccountLink}>Create an Account</Link>
                        </div>
                        <Route exact path="/login" component={SignInCredentials} />
                        <Route path="/login/createAnAccount" component={CreateAnAccount} />
                        <span className="continueAsGuest">
                            Want to see what Mindful is all about, but don't want to sign up? No pressure, you can <Link to="/planner" onClick={this.continueAsGuest}>continue as a guest</Link>.
                        </span>
                    </section>
                </main>
            </React.Fragment>

        );
    }
}

export default Login;
