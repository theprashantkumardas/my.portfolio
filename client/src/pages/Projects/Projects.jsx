import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

import { projectsData } from '../../ProjectData/projectdata';


const Projects = () => {

    return (
      <div className={styles.projects}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectGrid}>
          {projectsData.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} style={{textDecoration:"none", color:"#9FB1D1"}}>
              <ProjectCard {...project} />
              </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;