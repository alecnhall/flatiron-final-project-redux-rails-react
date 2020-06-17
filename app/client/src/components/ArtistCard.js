import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Artist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ width: "18rem" }} key={this.props.artist.key}>
        <Card.Img variant="top" src={this.props.artist.picture_medium} />
        <Card.Body>
          <Card.Title>{this.props.artist.name}</Card.Title>
          <Button
            variant="primary"
            as={Link}
            to={"/artist/" + this.props.artist.id}
          >
            See more...
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Artist;
