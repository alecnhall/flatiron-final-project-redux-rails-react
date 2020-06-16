import React, { Component } from "react";

import { Jumbotron, Button, Container } from "react-bootstrap";

import Login from "../components/auth/Login";
import Search from "../components/Search";
import Artists from "../components/Artists";
import Navigation from "../components/Nav";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data);
    this.props.history.push("/profile");
  };

  handleButtonClick = () => {
    this.props.history.push("/Signup");
  };

  render() {
    console.log(this.props.loggedInStatus);
    return (
      <div>
        <Navigation />
        <Container>
          <Jumbotron>
            <h1>Welcome to Favorites</h1>
            <p>
              Favorites is a music app that allows you to search artists and
              favorite them if you want too. When you favorite an artist you'll
              be able to visit that artist and look at alll the things that make
              you love them
            </p>
            <Button onClick={this.handleButtonClick}>Register</Button>
          </Jumbotron>
          <h1>{this.props.loggedInStatus}</h1>
          {/* <Login
            handleSuccessfulAuth={this.handleSuccessfulAuth}
            loggedInStatus={this.props.loggedInStatus}
          /> */}
          <Search />
          <Artists />
        </Container>
      </div>
    );
  }
}

export default Home;
