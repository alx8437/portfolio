import React from "react";
import styles from './Skills.module.css'
import SkillItem from "./SkillItem";
import Title from "./Title";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>

                <Title titleName={"My Skills"}/>

                <div className={styles.items}>
                    <SkillItem label={"React"}/>
                    <SkillItem label={"Redux"}/>
                    <SkillItem label={"Angular"}/>
                </div>

            </div>
        </div>
    );
}


export default Skills;