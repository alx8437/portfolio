import React from "react";
import styles from './Slogan.module.css'

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Рассматриваю варианты удаленной работы
                </div>
                <button className={styles.button}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Slogan;