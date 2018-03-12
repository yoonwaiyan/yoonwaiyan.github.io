import React, { Component } from 'react';
import axios from 'axios';

import SiteTitle from './SiteTitle.jsx';
import ProjectList from './ProjectList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    const that = this;
    axios
      .get('https://api.github.com/users/yoonwaiyan/repos', {
        params: {
          sort: 'updated'
        }
      })
      .then(function(response) {
        // console.log(response);
        that.setState({ projects: response.data.slice(0, 6) });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="main-container">
        <SiteTitle title={'WAIYAN x OPEN-SOURCE'} />
        <div className="container">
          <ProjectList items={this.state.projects} />
        </div>
      </div>
    );
  }
}

export default App;
