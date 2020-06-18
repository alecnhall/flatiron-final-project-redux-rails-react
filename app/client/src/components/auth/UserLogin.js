import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchUser } from "../../redux/actions";

class UserLogin extends Component {
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
    this.props.fetchUser(options);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="registration-box">
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
    loggedIn: state.loggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return { fetchUser: (options) => dispatch(fetchUser(options)) };
}

export default connect(mapStateProps, mapDispatchToProps)(UserLogin);
