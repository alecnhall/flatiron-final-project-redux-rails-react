import { combineReducers } from "redux";

const rootReducer = combineReducers({
  artists: artistReducer,
  user: userReducer,
});

export default rootReducer;

function artistReducer(state = { artists: [], loading: false }, action) {
  switch (action.type) {
    case "SEARCHING_FOR_ARTIST":
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

    case "LOADING_ARTIST":
      return {
        ...state,
        artist: [...state.artist],
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

function userReducer(
  state = { user: [], loading: false, loggedIn: false },
  action
) {
  switch (action.type) {
    case "FETCHING_USER":
      return {
        ...state,
        user: [...state.user],
        loading: true,
      };

    case "REGISTERING_USER":
      return {
        ...state,
        user: [...state.user],
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
        user: [...state.user],
        loading: true,
      };

    case "USER_LOGGED_OUT":
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        loading: false,
      };

    case "CHECKING_USER_LOGIN":
      return {
        ...state,
        user: [...state.user],
        loading: true,
      };

    default:
      return state;
  }
}
