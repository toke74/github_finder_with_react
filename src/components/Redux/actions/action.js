import axios from "axios";
import { GET_USER } from "../actions/Types";
import { GET_USER_REPOS } from "../actions/Types";

// Get  User GitHub info
export const getGitHubUser = username => dispatch => {
  axios
    .get(`https://api.github.com/users/${username}`, {
      client_id: "b6799a43a57ee1dac991",
      client_secret: "3e53cb3d8f0f9ade36ed33219f339beddbe8f397"
    })
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER,
        payload: {}
      })
    );
};

// // Get User GitHub repos
// export const getUserGitHubRepos = username => dispatch => {

//   axios
//     .get(`https://api.github.com/users/${username}/repos`, {
//       client_id: "b6799a43a57ee1dac991",
//       client_secret: "3e53cb3d8f0f9ade36ed33219f339beddbe8f397"
//     })
//     .then(datas =>
//       dispatch({
//         type: GET_USER_REPOS,
//         payload: datas.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_USER_REPOS,
//         payload: {}
//       })
//     );
// };

// Get User GitHub repos
export const getUserGitHubRepos = (
  username,
  clientSecret,
  clientId,
  count,
  sort
) => dispatch => {
  axios
    .get(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )

    .then(datas =>
      dispatch({
        type: GET_USER_REPOS,
        payload: datas.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_REPOS,
        payload: {}
      })
    );
};
