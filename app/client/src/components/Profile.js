import React, { Component } from "react";
import Nav from "./Nav";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Dashboard</h1>
        <h1>Hello, {this.props.username}!</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    username: state.user.user.username,
  };
};

export default connect(mapStateToProps)(Profile);
