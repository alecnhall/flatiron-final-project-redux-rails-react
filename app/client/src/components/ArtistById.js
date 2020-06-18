import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtist, fetchArtistAlbums } from "../redux/reducers/index";

class ArtistById extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.artistId;
    // this.props.fetchArtist(id);
    // this.props.fetchArtistAlbums(id);
  }

  render() {
    return <div>Artist</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    // fetchArtistAlbums: (id) => dispatch(fetchArtistAlbums(id)),
  };
}
export default connect(null, mapDispatchToProps)(ArtistById);
