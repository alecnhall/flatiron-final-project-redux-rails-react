import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      registration_errors: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchUser();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    // if (this.props.loggedInStatus === "LOGGED_IN") {
    //   return <Redirect to="/profile" />;
    // }
    return (
      <div>
        <h3>Login</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant="outline-secondary">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    user: state.user,
    loggedInStatus: state.loggedInStatus,
  };
};

function mapDispatchToProps(dispatch) {
  return { fetchUser: () => dispatch(fetchUser()) };
}

export default connect(mapStateProps, mapDispatchToProps)(Login);
