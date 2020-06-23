import React from "react";
import styles from './Footer.module.css'
import Title from "./Title"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title  titleName={"Зеленский Александр"} />
                <div className={styles.social}>
                    <FontAwesomeIcon icon={ faFacebookF } />
                    <FontAwesomeIcon icon={ faVk } />
                    <FontAwesomeIcon icon={ faInstagram } />
                    <FontAwesomeIcon icon={ faLinkedin } />
                </div>
                <div className={styles.copyright}>© Все права защищены 2020</div>
            </div>
        </div>
    );
}

export default Footer;