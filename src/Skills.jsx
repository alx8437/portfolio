import React from "react";
import styles from './Skills.module.css'
import SkillItem from "./SkillItem";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>My skills</span>
                </div>
                <div className={styles.items}>
                    <SkillItem />
                    <SkillItem />
                    <SkillItem />
                </div>

            </div>
        </div>
    );
}


export default Skills;