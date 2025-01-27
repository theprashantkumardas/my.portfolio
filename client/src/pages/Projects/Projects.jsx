import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import { Link } from 'react-router-dom';

import {webProjectsData } from '../../ProjectData/webProjectData';
import { androidProjectsData } from '../../ProjectData/androidProjectData';


const Projects = () => {

    return (
      <div className={styles.projects}>
        <h2 className={styles.title}>Projects for <span className={styles.span}>Web</span></h2>
        <div className={styles.projectGrid}>
          {webProjectsData.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} style={{textDecoration:"none", color:"#9FB1D1"}}>
              <ProjectCard {...project} />
              </Link>
          ))}
        </div>

        <div className={styles.title}></div>
        <div className={styles.title}></div>

        <h2 className={styles.title}>Projects for <span className={styles.span}>Android</span></h2>
        <div className={styles.projectGrid}>
          {androidProjectsData.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} style={{textDecoration:"none", color:"#9FB1D1"}}>
              <ProjectCard {...project} />
              </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;