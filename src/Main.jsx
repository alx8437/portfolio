import React from "react";
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hello!</span>
                    <span>My name's Aleksandr Zelenskiy</span>
                    <span>I'm front-end developer!</span>
                </div>
                <div className={styles.photo}>
                    <img src="#" alt="photo"/>
                </div>
            </div>
        </div>
    );
}


export default Main;