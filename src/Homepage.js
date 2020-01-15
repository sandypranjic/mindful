import React, { Component } from 'react';
import './App.scss';
import mindfulLogo from './assets/mindfulLogo.svg';
import {
    BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <section className="homepage">
                        <div className="homepageLogo"><h1>mindful<span className="accent">.</span></h1></div>
                        <div className="homepageInfo">
                            <div className="sloganContainer">
                                <h2>A place to prioritize your tasks<br/>when your day (and mind) is full.</h2>
                            </div>
                            <div className="loginButtonContainer">
                                <Link className="homepageLoginButton" to="./login">Let's Get Organized</Link>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Header;
