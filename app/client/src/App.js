import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ArtistById from "./components/ArtistById";
import SearchPage from "./pages/Search";
import "./App.css";
import { connect } from "react-redux";
import { checkLogin } from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
  }

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
            render={(props) => <Profile {...props} />}
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
          <Route
            exact
            path={"/search"}
            render={(props) => <SearchPage {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

function mapDispatchToProps(dispatch) {
  return { checkLogin: (options, user) => dispatch(checkLogin(options, user)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
