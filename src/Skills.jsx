import React from "react";
import styles from "./Skills.module.css"
import SkillItem from "./SkillItem";
import Title from "./Title";
import ReactIcon from "./assets/img/react.svg"
import JsIcon from "./assets/img/javascript.svg"
import Redux from "./assets/img/redux.svg"

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <Title titleName={"Мои скилы"}/>
                <div className={styles.items}>
                    <SkillItem
                        label={"React"}
                        icon={ReactIcon}
                    />
                    <SkillItem
                        label={"Redux"}
                        icon={Redux}
                    />
                    <SkillItem
                        label={"JavaScript"}
                        icon={JsIcon}
                    />
                </div>

            </div>
        </div>
    );
}


export default Skills;