import React, { Component } from "react";
import { Jumbotron, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const options = {
      method: "POST",
      body: {
        user_id: props.user_id,
        name: this.props.artist.name,
        img: this.props.picture_medium,
      },
    };
    console.log("click");
    this.props.addArtistToFavorites(options);
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <Image src={this.props.artist.picture_medium} rounded />
          <span className="artist-name">{this.props.artist.name}</span>
          <span className="favorite-button">
            <Button variant="primary" onClick={this.handleClick}>
              Favorite
            </Button>
          </span>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.user.user.id,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addArtistToFavorites: (options) => dispatch(addArtistToFavorites(options)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetails);
