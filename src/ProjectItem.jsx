import React from "react"
import styles from './ProjectItem.module.css'
import projectImg from './img/project_img.jpg'

const ProjectItem = () => {
    return (
        <div className={styles.projectItem}>
            <img src={projectImg} alt="картинка"/>
            <div className={styles.title}>
                My project on the React
            </div>
            <div className={styles.describe}>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate pariatur qui
            </div>
        </div>
    )
};


export default ProjectItem