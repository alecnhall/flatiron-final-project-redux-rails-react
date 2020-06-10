import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchArtists } from "../actions/index";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
    };
  }

  

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchArtists(this.state.name);
    this.setState({
      name: "",
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    // console.log(dispatch)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Search Artist or Band"
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

function  mapDispatchToProps(dispatch) {
    return { fetchArtists: (name) => dispatch(fetchArtists(name)) }
  }

export default connect(null ,mapDispatchToProps)(Search);
