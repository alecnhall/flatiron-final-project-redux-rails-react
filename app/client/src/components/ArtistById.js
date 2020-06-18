import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtist, fetchArtistAlbums } from "../redux/actions/index";
import ArtistDetails from "./ArtistDetails";
import ArtistAlbums from "./ArtistAlbums";
import Navigation from "./Nav";
import { Container } from "react-bootstrap";

class ArtistById extends Component {
  componentDidMount() {
    const id = this.props.match.params.artistId;
    this.props.fetchArtist(id);
    this.props.fetchArtistAlbums(id);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <ArtistDetails artist={this.props.artist.artist} />
          <ArtistAlbums albums={this.props.albums} />
        </Container>
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
