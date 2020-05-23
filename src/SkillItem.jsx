import React from "react"
import styles from './SkillItem.module.css'

const SkillItem = (props) => {
    return (
        <div className={styles.skillItem}>
            <div className={styles.title}>
                <div className={styles.label}></div>
                <div className={styles.name}>{props.label}</div>
            </div>
            <div className={styles.describe}>
                    Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate pariatur qui
                quia ut? Eius harum ipsa iste, iusto nisi
                rem suscipit. Lorem ipsum dolor sit amet

            </div>
        </div>
    )
};


export default SkillItem