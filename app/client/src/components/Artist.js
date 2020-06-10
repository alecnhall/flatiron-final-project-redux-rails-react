import React, { Component } from 'react';
import { connect } from 'react-redux'

class Artist extends Component {
    render() {
        const artists = this.props.artists.artists
         console.log(artists)
        return (
            <div>
                <ul>
                    {artists.map(artist => {
                        return <li key={artist.id}>{artist.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        artists: state.artists,
        loading: state.loading
    }
}

export default connect(mapStateToProps) (Artist);
