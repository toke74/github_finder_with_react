import { GET_USER } from "../actions/Types";
import { GET_USER_REPOS } from "../actions/Types";
const initialState = {
  user: {},
  userRepos: []
};

export const UserReducer = (state = initialState, action) => {
  // console.log(action.payload);

  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case GET_USER_REPOS:
      return {
        ...state,
        userRepos: action.payload
      };
    default:
      return state;
  }
};
