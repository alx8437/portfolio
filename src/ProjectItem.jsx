import React from "react"
import styles from './ProjectItem.module.css'

const ProjectItem = () => {
    return (
        <div className={styles.projectItem}>
            <div className={styles.preview}>
                <div className={styles.imgItem}>
                    <img src="" alt="картинка"/>
                </div>
            </div>
            <div className={styles.title}>
                My project on the React
            </div>
            <div className={styles.describe}>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate pariatur qui
                quia ut? Eius harum ipsa iste, iusto nisi                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate pariatur qui
                quia ut? Eius harum ipsa iste, iusto nisi                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate pariatur qui
                quia ut? Eius harum ipsa iste, iusto nisi

            </div>
        </div>
    )
};


export default ProjectItem