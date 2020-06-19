import React, { Component } from "react";
import Nav from "../components/Nav";
import { connect } from "react-redux";
import { fetchFavoriteArtists } from "../redux/actions/index";
import { Container } from "react-bootstrap";
import ProfileArtistCards from "../components/ArtistCards";

class Profile extends Component {
  componentDidMount() {
    const id = this.props.user.id;
    this.props.fetchFavoriteArtists(id);
  }

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h1>Hello, {this.props.user.username}!</h1>
          <ProfileArtistCards artists={this.props.userArtists} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    userArtists: state.userArtists.userArtists,
  };
};

function mapDispatchToProps(dispatch) {
  return { fetchFavoriteArtists: (id) => dispatch(fetchFavoriteArtists(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
