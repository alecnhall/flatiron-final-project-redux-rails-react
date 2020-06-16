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
        handleLogout();
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const fetchArtists = (name) => {
  return (dispatch) => {
    dispatch({ type: "SEARCHING_ARTIST" });
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
    dispatch({ type: "SEARCHING_ARTIST" });
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        const artist = res.data;
        return dispatch({ type: "ADD_ARTIST", artist });
      });
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_USER" });
    const url = "http://localhost:3001/sessions";
    const options = {
      method: "POST",
      withCredentials: true,
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.logged_in) {
          const user = response.user;
          return dispatch({ type: ADD_USER, user });
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };
};

export const registerUser = (formData) => {
  return (dispatch) => {
    dispatch({ type: "REGISTERING_USER" });
    fetch("http://localhost:3001/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: { formData },
    })
      .then((res) => res.json())
      .then((res) => {
        const user = res.data;
        return dispatch({ type: "ADD_USER", user });
      });
  };
};
