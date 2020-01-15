import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
// import firebase from './firebase';
import Header from './Header.js';
import Homepage from './Homepage.js';
import Login from './Login.js';
import PriorityPlanner from './PriorityPlanner.js';
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
        username: null,
        password: null,
    };
  }

  checkUser = () => {
    console.log("Check user function was here before");
      // const guest = "Guest";
      // if (this.state.username === null) {
      //     this.setState({
      //         username: guest,
      //     });
      // }
  }

  componentDidMount() {
    this.checkUser();
  }

  componentDidUpdate() {
    console.log(`The component updated`);
  }

  continueAsGuest = () => {
    const guest = "Guest";
    this.setState({
      username: guest,
    });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="wrapper">
            <Header></Header>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/login" render={() => { return <Login continueAsGuestProp={this.continueAsGuest} /> }} />
                <Route exact path="/planner" render={() => { return <PriorityPlanner usernameProp={this.state.username} checkUserProp={this.checkUser} continueAsGuestProp={this.continueAsGuest} />}} />
                {/* <Route strict exact path="/planner" render={() => { return <h1>this is working</h1>}} /> */}
              </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
