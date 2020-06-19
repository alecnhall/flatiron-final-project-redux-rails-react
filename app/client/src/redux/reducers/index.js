import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  artists: artistsReducer,
  artist: artistReducer,
  albums: albumsReducer,
  userArtists: userArtistsReducer,
});

export default rootReducer;

function userArtistsReducer(
  state = { userArtists: [], loading: false },
  action
) {
  switch (action.type) {
    case "ADDING_ARTIST_TO_FAVORITES":
      return {
        ...state,
        userArtists: state.artists,
        loading: true,
      };

    case "ARTIST_ADDED":
      return {
        ...state,
        userArtists: action.userArtists,
        loading: false,
      };

    default:
      return state;
  }
}

function albumsReducer(state = { albums: [], loading: false }, action) {
  switch (action.type) {
    case "FETCHING_ARTIST_ALBUMS":
      return {
        ...state,
        albums: state.albums,
        loading: true,
      };

    case "ADD_ARTIST_ALBUMS":
      return {
        ...state,
        albums: action.artistAlbums,
        loading: false,
      };

    default:
      return state;
  }
}

function artistReducer(state = { artist: {}, loading: false }, action) {
  switch (action.type) {
    case "FETCHING_ARTIST":
      return {
        ...state,
        artist: state.artist,
        loading: true,
      };

    case "ADD_ARTIST":
      return {
        ...state,
        artist: action.artist,
        loading: false,
      };

    default:
      return state;
  }
}

function artistsReducer(state = { artists: [], loading: false }, action) {
  switch (action.type) {
    case "SEARCHING_ARTISTS":
      return {
        ...state,
        artists: [...state.artists],
        loading: true,
      };

    case "ADD_ARTISTS":
      return {
        ...state,
        artists: action.artists,
        loading: false,
      };

    default:
      return state;
  }
}

function userReducer(
  state = { user: {}, loading: false, loggedIn: false },
  action
) {
  switch (action.type) {
    case "FETCHING_USER":
      return {
        ...state,
        user: state.user,
        loading: true,
      };

    case "REGISTERING_USER":
      return {
        ...state,
        user: state.user,
        loading: true,
      };

    case "USER_LOGGED_IN":
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        loading: false,
      };

    case "LOGGING_USER_OUT":
      return {
        ...state,
        user: {},
        loading: true,
      };

    case "USER_LOGGED_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false,
        loading: false,
      };

    default:
      return state;
  }
}
