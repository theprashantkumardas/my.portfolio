import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectDetails.module.css';
import { projectsData } from '../../ProjectData/projectdata';


const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projectsData.find(proj => proj.id === parseInt(projectId));

    if (!project) {
        return <div className={styles.notFound}>Project not found.</div>;
    }

    return (
        <div className={styles.projectDetails}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.gallery}>
                {project.images.map((image, index) => (
                    <img key={index} src={image} alt={`${project.title} Image ${index + 1}`} className={styles.image} />
                ))}
            </div>
             <div className={styles.descriptionWrapper}>
             <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.detailDescription }} />
            </div>

            <div className={styles.links}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                   <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                   </a>
              </div>
             <div className={styles.techStack}>
                {project.techStack.map((tech, index) => (
                    <span key={index} className={styles.techItem}>
                    {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetails;