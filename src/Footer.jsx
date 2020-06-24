import React from "react";
import styles from './Footer.module.css'
import Title from "./Title"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title  titleName={"Зеленский Александр"} />
                <div className={styles.social}>
                    <div className={styles.socialIcon}>
                        <a href="#"><FontAwesomeIcon icon={ faTelegram }  /></a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="#"><FontAwesomeIcon icon={ faFacebookF } /></a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="#"><FontAwesomeIcon icon={ faVk } /></a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="#"><FontAwesomeIcon icon={ faLinkedin } /></a>
                    </div>
                </div>
                <div className={styles.copyright}>© Все права защищены 2020</div>
            </div>
        </div>
    );
}

export default Footer;