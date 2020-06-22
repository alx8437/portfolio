import React from "react"
import styles from './SkillItem.module.css'

const SkillItem = (props) => {
    return (
        <div className={styles.skillItem}>
            <div className={styles.title}>
                <div className={styles.label}>
                    <img src={props.icon} alt={'icon'}/>
                </div>
                <h3 className={styles.name}>{props.label}</h3>
            </div>
            <span className={styles.describe}>
                    Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate pariatur qui
                quia ut? Eius harum ipsa iste, iusto nisi
                rem suscipit. Lorem ipsum dolor sit amet

            </span>
        </div>
    )
};


export default SkillItem