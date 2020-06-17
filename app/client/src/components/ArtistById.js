import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtist } from "../actions";

class ArtistById extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log(state);
  //   this.fetchArtist(id);
  // }

  render() {
    return (
      <div>
        <h1>Artist Info</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { fetchArtist: (id) => dispatch(fetchArtist(id)) };
}

export default connect(null, mapDispatchToProps)(ArtistById);
