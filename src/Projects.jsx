import React from "react";
import styles from './Projects.module.css'
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>My projects</span>
                </div>
                <div className={styles.items}>
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    );
}


export default Projects;