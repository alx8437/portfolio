import React from "react";
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.communications}>Контакты</div>
                <div className={styles.formWrapper}>
                    <form >
                        <input/>
                        <input/>
                        <textarea></textarea>
                    </form>
                </div>
                <button className={styles.send}>Отправить</button>

            </div>


        </div>
    );
}


export default Contacts;