import React from "react";
import styles from './Projects.module.css'
import ProjectItem from "./ProjectItem";
import Title from "./Title";

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <Title titleName={"Project"}/>
                <div className={styles.items}>
                    <ProjectItem title={"Social network"}/>
                    <ProjectItem title={"TodoList"}/>
                </div>
            </div>
        </div>
    );
}


export default Projects;