import React, { Component } from 'react';

const Project = ({ project }) => {
  console.log('project', project);
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-content">
          <p className="title">{project.name}</p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Project;
