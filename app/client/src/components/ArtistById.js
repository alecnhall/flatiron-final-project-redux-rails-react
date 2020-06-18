import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtist, fecthArtistAlbums } from "../redux/reducers/index";

class ArtistById extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.artistId;
    this.props.fetchArtist(id);
  }

  render() {
    return <div>Artist</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fecthAlbums: (id) => dispatch(fetchArtistAlbums(id)),
  };
}
export default connect(null, mapDispatchToProps)(ArtistById);
