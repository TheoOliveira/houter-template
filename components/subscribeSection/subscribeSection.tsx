import React from "react";
import styles from './subscribeSection.module.scss'


const SubscribeSection: React.FC = (props): React.ReactElement => {
    return < div className={styles.container}>
        <div className={styles.centralWrapper}>
            <h3></h3>
            <input type="email"/>
            <button type="submit"/>
        </div>
    </div>;
}

export default SubscribeSection;
