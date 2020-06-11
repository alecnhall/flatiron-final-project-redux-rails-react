import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  artists: artistsReducer,
  user: usersReducer
});

export default rootReducer;

function artistsReducer(state = { artists: [], loading: false }, action){
  switch(action.type) {
    case "SEARCHING_FOR_ARTIST":
      return {
        ...state,
        artists: [...state.artists],
        loading: true
      }

    case "ADD_ARTISTS":
      return {
        ...state,
        artists: action.artists,
        loading: false
      }

    default:
      return state
  }
}

function usersReducer(state = { user: {}, loading: false}, action) {
  switch(action.type) {
    case "REGISTERING_USER":
      return {
        ...state,
        user: [...state.user],
        loading: true
      }

    case "USER_REGISTERED":
      return {
        ...state, 
        user: action.user,
        loading: false
      }  

    case "LOGGING_USER_IN":
      return {
        ...state,
        user: [...state.user],
        loading: true
      }

    case "USER_LOGGED_IN":
      return {
        ...state, 
        user: action.user,
        loading: false
        } 

    default: 
      return state;
  }
}