import React from "react";
import styles from './NavMenu.module.css'

const NavMenu = () => {
    return (
        <div className={styles.navMenu}>
            <div className={styles.navMenu}>
                <a href="" className={styles.link}>Главная</a>
                <a href="" className={styles.link}>Скилы</a>
                <a href="" className={styles.link}>Проекты</a>
                <a href="" className={styles.link}>Контакты</a>
            </div>
        </div>
    );
}

export default NavMenu;