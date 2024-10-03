import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Motivic Homotopy Theory</h3>
          <p>Working on an independent study in motivic homotopy theory under Jeremiah Heller.</p>
        </li>
        <li>
          <h3>Topological Quantum Field Theory</h3>
          <p>Researching TQFT with Dan Berwick-Evans.</p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
  );
}

export default Projects;
