import React from 'react';

function ProjectDetail({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetail;
