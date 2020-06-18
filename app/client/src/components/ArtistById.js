import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtist, fetchArtistAlbums } from "../redux/actions/index";

class ArtistById extends Component {
  componentDidMount() {
    const id = this.props.match.params.artistId;
    this.props.fetchArtist(id);
    this.props.fetchArtistAlbums(id);
  }

  render() {
    return (
      <div>
        <code>{JSON.stringify(this.props.artist)}</code>
        <code>{JSON.stringify(this.props.albums)}</code>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    albums: state.albums,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchArtistAlbums: (id) => dispatch(fetchArtistAlbums(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistById);
