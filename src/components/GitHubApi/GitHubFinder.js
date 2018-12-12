import React, { Component } from "react";
import DisplayGitHubInfo from "./DisplayGitHubInfo";
import GitHubRepo from "./GitHubRepo";
import { connect } from "react-redux";
import { gitHubKeys } from "../../config/keys";
import { getGitHubUser } from "../Redux/actions/action";
import { getUserGitHubRepos } from "../Redux/actions/action";

export class GitHubFinder extends Component {
  state = {
    username: "",
    clientId: gitHubKeys.clientId,
    clientSecret: gitHubKeys.clientSecret,
    count: 5,
    sort: "created: asc"
  };

  onChange = e => {
    this.setState({ username: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, clientSecret, clientId, count, sort } = this.state;

    this.props.getGitHubUser(username);
    this.props.getUserGitHubRepos(
      username,
      clientSecret,
      clientId,
      count,
      sort
    );
  };

  render() {
    const { user } = this.props.user;

    return (
      <div className="container">
        <div className="searchContainer ">
          <h1 className="text-center">Search Github Users</h1>
          <p className="lead mt-4">
            Enter a username to fetch a users profile info and repos
          </p>

          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              id="searchUser"
              className="form-control mt-4"
              placeholder="Github Username..."
              value={this.state.username}
              onChange={this.onChange}
            />
            <input type="submit" value="Search" className="btn btn-info mt-4" />
          </form>
        </div>
        <br />
        <DisplayGitHubInfo GitHubUser={user} />
        <GitHubRepo />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getGitHubUser, getUserGitHubRepos }
)(GitHubFinder);
