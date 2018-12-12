import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class GitHubRepo extends Component {
  render() {
    const { user } = this.props;
    // const users = user.slice(0, 5).sort();

    const repoItems = user.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link to={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </Link>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return <div>{repoItems} ></div>;
  }
}
const mapStateToProps = state => ({
  user: state.user.userRepos
});
export default connect(mapStateToProps)(GitHubRepo);
