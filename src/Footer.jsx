import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.name}>Зеленский Александр</div>
                <div className={styles.social}>
                    <div className={styles.fb}>fb</div>
                    <div className={styles.vk}>vk</div>
                    <div className={styles.in}>in</div>
                    <div className={styles.ld}>ld</div>
                </div>
                <div className={styles.copyright}>2020 все защищено</div>


            </div>
        </div>
    );
}

export default Footer;