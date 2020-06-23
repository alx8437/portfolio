import React from "react"
import styles from './ProjectItem.module.css'
import Button from "./Button";

const ProjectItem = (props) => {
    return (
        <div className={styles.projectItem}>
            <div className={styles.preview}>
                <div className={styles.buttonPosition}>
                    <Button  nameButton={"Смотреть"}/>
                </div>
            </div>
            <div className={styles.titleWrapper}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.describe}>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Cupiditate pariatur qui
                </div>
            </div>
        </div>
    )
};


export default ProjectItem