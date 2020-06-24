import React from "react";
import styles from './Contacts.module.css'
import Title from "./Title";
import Button from "./Button";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <Title titleName={"Контакты"}/>
                <div className={styles.formWrapper}>
                    <div className={styles.inputWrapper}>
                        <input className={styles.input} type="text" placeholder="Имя"/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <input className={styles.input} type="text" placeholder="E-mail"/>
                    </div>
                    <div className={styles.textareaWrapper}>
                        <textarea
                            className={styles.textarea}
                            placeholder="Сообщение"
                            wrap="off">
                        </textarea>
                    </div>
                </div>
                <div className={styles.send}>
                    <Button nameButton={"Отправить"}/>
                </div>

            </div>


        </div>
    );
}


export default Contacts;