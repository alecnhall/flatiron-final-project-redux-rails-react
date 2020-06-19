import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtists, clearSearch } from "../redux/actions/index";
import { Button, Form } from "react-bootstrap";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.props.clearSearch();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchArtists(this.state.name);
    this.setState({
      name: "",
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search for Artists or Bands"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit" variant="outline-secondary">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArtists: (name) => dispatch(fetchArtists(name)),
    clearSearch: () => dispatch(clearSearch()),
  };
}

export default connect(null, mapDispatchToProps)(Search);
