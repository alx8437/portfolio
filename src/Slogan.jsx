import React from "react";
import styles from './Slogan.module.css'
import Title from "./Title";
import Button from "./Button";

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Title titleName={"Я тот кто Вам нужен"}/>
                </div>
                <div className={styles.buttonContainer}>
                    <Button nameButton={"Нанять меня"}/>
                </div>

            </div>
        </div>
    );
}

export default Slogan;