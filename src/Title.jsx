import React from "react";
import styles from './Title.module.css'


const Title = (props) => {
    return (

        <div className={styles.headerTitle}>
            <h2 className={styles.title}>{props.titleName}</h2>
            <div className={styles.titleLine}>
            </div>
        </div>

    )
}

export default Title;