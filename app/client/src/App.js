import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./components/auth/Login";
import Profile from "./components/Profile";
import ArtistById from "./components/ArtistById";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSuccessfulAuth = (data) => {
    this.handleLogin(data);
  };

  checkLoginStatus() {
    const url = "http://localhost:3001/logged_in";
    const options = {
      credentials: "include",
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        if (
          response.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.user,
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props) => (
              <Home
                {...props}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={"/profile"}
            render={(props) => (
              <Profile
                {...props}
                loggedInStatus={this.state.loggedInStatus}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            path={"/signup"}
            render={(props) => (
              <Signup
                {...props}
                loggedInStatus={this.state.loggedInStatus}
                handleLogout={this.handleLogout}
                handleSuccessfulAuth={this.handleSuccessfulAuth}
              />
            )}
          />
          <Route
            path={"/login"}
            render={(props) => (
              <Login
                {...props}
                loggedInStatus={this.state.loggedInStatus}
                handleLogout={this.handleLogout}
                handleSuccessfulAuth={this.handleSuccessfulAuth}
              />
            )}
          />
          <Route
            exact
            path={"/:artistId"}
            render={(props) => <ArtistById {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
