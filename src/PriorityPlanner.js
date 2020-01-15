import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class PriorityPlanner extends Component {

    componentDidMount() {
        this.props.checkUserProp();
        console.log("PriorityPlanner mounted to page");
    }

    componentDidUpdate() {
        console.log(`The user is ${this.props.usernameProp}`);
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <section className="priorityPlanner">
                        <h2>Welcome Back, {this.props.usernameProp}</h2>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}


export default PriorityPlanner;
