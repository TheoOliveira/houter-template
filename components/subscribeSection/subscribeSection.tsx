import React from "react";
import styles from './subscribeSection.module.scss'
import {subscribeButton, subscribePlaceholder, subscribeTitle} from "../../constants/content";
import ActionButton from "../actionButton/actionButton";


const SubscribeSection: React.FC = (props): React.ReactElement => {
    return < div className={styles.container}>
        <div className={styles.centralWrapper}>
            <h3>{subscribeTitle}</h3>
            <div className={styles.subscribeWrapper}>
            <input type="email" placeholder={subscribePlaceholder}/>
            <ActionButton label={subscribeButton} type="submit" url={""} />
            </div>
        </div>
    </div>;
}

export default SubscribeSection;
