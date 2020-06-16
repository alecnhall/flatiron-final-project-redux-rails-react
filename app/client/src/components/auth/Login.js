import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

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
    // this.props.fetchUser();
    event.preventDefault();
    const url = "http://localhost:3001/sessions";
    const options = {
      method: "POST",
      withCredentials: true,
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.logged_in) {
          this.props.handleSuccessfulAuth(response);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
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

function mapDispatchToProps(dispatch) {
  return { fetchUsers: () => dispatch(fetchUser) };
}

export default connect(null, mapDispatchToProps)(Login);
