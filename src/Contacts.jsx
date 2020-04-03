import React from "react";
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.communications}>Контакты</div>
                <div className={styles.form}>
                    <form action="">
                        <input type="text" size="500px"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </div>
                <button className={styles.send}>Отправить</button>

            </div>


        </div>
    );
}


export default Contacts;