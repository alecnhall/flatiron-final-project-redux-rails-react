import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      registration_errors: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      withCredentials: true,
      body: JSON.stringify({
        user: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    this.props.registerUser(options);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/profile" />;
    }
    return (
      <div className="registration-box">
        <h2>Register Here</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              name="password_confirmation"
              placeholder="Password Confirmation"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant="outline-secondary">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return { registerUser: (options) => dispatch(registerUser(options)) };
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
