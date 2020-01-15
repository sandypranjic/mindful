import React, { Component } from 'react';
import './App.scss';
import mindfulLogo from './assets/mindfulLogo.svg';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="headerContainer">

                        <div className="logoContainer">
                            <Link to="/">
                                <img src={mindfulLogo} className="mindfulLogo" alt="logo"></img>
                            </Link>
                        </div>

                        <nav>
                            <ul>
                                <li><Link to="./login" className="link">Login</Link></li>
                                <li className="link">About Mindful</li>
                            </ul>
                        </nav>

                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
