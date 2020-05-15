import React from "react";
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Меня зовут Александр Зеленский!</span>
                    <h1>Я FRONT-END РАЗРАБОТЧИК!</h1>
                </div>
                <div className={styles.photo}>
                    <img src="#" alt="photo"/>
                </div>
            </div>
        </div>
    );
}


export default Main;