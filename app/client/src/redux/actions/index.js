export const registerUser = (options) => {
  return (dispatch) => {
    dispatch({ type: "REGISTERING_USER" });
    const url = "http://localhost:3001/registrations";
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "created") {
          const user = response.user;
          return dispatch({ type: "USER_LOGGED_IN", user });
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };
};

export const fetchUser = (options) => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_USER" });
    const url = "http://localhost:3001/sessions";
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.logged_in) {
          const user = response.user;
          return dispatch({ type: "USER_LOGGED_IN", user });
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };
};

export const handleLogout = () => {
  return (dispatch) => {
    dispatch({ type: "LOGGING_USER_OUT" });
    const url = "http://localhost:3001/logout";
    const options = {
      method: "DELETE",
      withCredentials: true,
    };
    fetch(url, options)
      .then((response) => {
        return dispatch({ type: "USER_LOGGED_OUT" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchArtists = (name) => {
  return (dispatch) => {
    dispatch({ type: "SEARCHING_ARTISTS" });
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${name}`
    )
      .then((res) => res.json())
      .then((res) => {
        const artists = res.data;
        return dispatch({ type: "ADD_ARTISTS", artists });
      });
  };
};

export const fetchArtist = (id) => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_ARTIST" });
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        const artist = res;
        return dispatch({ type: "ADD_ARTIST", artist });
      });
  };
};

export const fetchArtistAlbums = (id) => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_ARTIST_ALBUMS" });
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`
    )
      .then((res) => res.json())
      .then((res) => {
        const artistAlbums = res.data;
        return dispatch({ type: "ADD_ARTIST_ALBUMS", artistAlbums });
      });
  };
};

export const addArtistToFavorites = (options) => {
  return (dispatch) => {
    dispatch({ type: "ADDING_ARTIST_TO_FAVORITES" });
    fetch("http://localhost:3001/artists", options)
      .then((res) => res.json())
      .then((res) => {
        const artist = res.artist;
        return dispatch({ type: "ARTIST_ADDED", artist });
      });
  };
};
