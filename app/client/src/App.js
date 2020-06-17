import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import ArtistById from "./components/ArtistById";
import "./App.css";
import { connect } from "react-redux";
// import { checkLogin } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   // console.log(this.state.user);
  //   const options = {
  //     credentials: "include",
  //   };
  //   this.props.checkLogin(options);
  // }

  // handleLogout() {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user: {},
  //   });
  // }

  // handleLogin(data) {
  //   this.setState({
  //     loggedInStatus: "LOGGED_IN",
  //     user: data.user,
  //   });
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props) => (
              <Home {...props} loggedInStatus={this.props.loggedIn} />
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
                handleLogout={this.handleLogout}
                handleSuccessfulAuth={this.handleSuccessfulAuth}
              />
            )}
          />
          <Route path={"/login"} render={(props) => <Login {...props} />} />
          <Route
            exact
            path={"/artist/:artistId"}
            render={(props) => <ArtistById {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { checkLogin: (options) => dispatch(checkLogin(options)) };
}

export default connect(null, mapDispatchToProps)(App);
