import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Available Projects</h2>
      <ul className="list-group">
        {projects.map(project => (
          <li key={project._id} className="list-group-item">
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
