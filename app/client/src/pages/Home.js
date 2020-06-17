import React, { Component } from "react";

import { Jumbotron, Button, Container } from "react-bootstrap";

import Search from "../components/Search";
import Artists from "../components/Artists";
import Navigation from "../components/Nav";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleRegisterClick = () => {
    console.log("click");
    this.props.history.push("/signup");
  };

  handleLoginClick = () => {
    this.props.history.push("/login");
  };

  render() {
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
            <Button onClick={this.handleRegisterClick}>Register</Button>
            <div className="login-button">
              <Button onClick={this.handleLoginClick}>Login</Button>
            </div>
          </Jumbotron>
          <h1>{this.props.loggedIn}</h1>
          <Search />
          <Artists />
        </Container>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     user: user.state,
//   };
// };
export default Home;
