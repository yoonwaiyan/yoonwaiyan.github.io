import React, { Component } from 'react';

import Project from './Project.jsx';

class ProjectList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="row">
        <div className="columns is-multiline">
          {items.map(item => <Project project={item} key={item.id} />)}
        </div>
      </div>
    );
  }
}

export default ProjectList;
