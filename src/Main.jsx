import React from "react";
import styles from './Main.module.css'
import foto from './img/IMG_20190712_174723.jpg'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я Александр <span>Зеленский</span></span>
                    <h1>Я front-end разработчик!</h1>
                </div>
                <div className={styles.photo}>
                    <img src={foto} alt="photo"/>
                </div>
            </div>
        </div>
    );
}


export default Main;