import React, { Component } from "react";
import Search from "../components/Search";
import Artists from "../components/ArtistsSearchResults";
import Navigation from "../components/Nav";
import { Container } from "react-bootstrap";
class SearchPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="search-and-results">
          <Container>
            <Search />
            <Artists />
          </Container>
        </div>
      </div>
    );
  }
}

export default SearchPage;
