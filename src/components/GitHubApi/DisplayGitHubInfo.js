import React, { Component } from "react";
import Moment from "react-moment";
export class DisplayGitHubInfo extends Component {
  render() {
    // console.log(this.props.GitHubUser);
    const user = this.props.GitHubUser;
    return (
      <div>
        <div className="card border-primary mb-3">
          <div className="card-header">
            <h3>{user.name}</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <img
                  className="img-thumbnail avatar"
                  src={user.avatar_url}
                  alt="thumbnail"
                />
                <a
                  target="_blank"
                  className="btn btn-primary btn-block"
                  href={user.html_url}
                >
                  View Profile
                </a>
              </div>
              <div className="col-md-9">
                <span className="badge badge-dark mr-2">
                  Public Repos: {user.public_repos}
                </span>
                <span className="badge badge-primary mr-2">
                  Public Gists: {user.public_gists}{" "}
                </span>
                <span className="badge badge-success mr-2">
                  Followers: {user.followers}{" "}
                </span>
                <span className="badge badge-info ">
                  Following: {user.following}{" "}
                </span>
                <br />
                <br />
                <ul className="list-group">
                  <li className="list-group-item">Company: {user.company}</li>
                  <li className="list-group-item">
                    Website/blog:{" "}
                    <a href={user.blog} target="_blank">
                      {user.blog}
                    </a>
                  </li>
                  <li className="list-group-item">Location: {user.location}</li>
                  <li className="list-group-item">
                    Member Since:
                    <Moment format=" MM/DD/YYYY">{user.created_at}</Moment>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayGitHubInfo;
