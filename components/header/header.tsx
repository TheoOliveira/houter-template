import React from "react";
import styles from './header.module.scss';
import {firstButtonHeader, fourthButtonHeader, secondButtonHeader, thirdButtonHeader} from "../../constants/content";

const header: React.FC = (): React.ReactElement => {
    return (<header className={styles.container}>
        <div className={styles.logoContainer}>
            <img src={"/images/logo.png"} alt="Logo"/>
            <div className={styles.logoText}>Hounter</div>
        </div>
        <div className={styles.buttonsHeader}>
            <a href="">{firstButtonHeader}</a><a href="">{secondButtonHeader}</a><a href="">{thirdButtonHeader}</a><a
            href="">{fourthButtonHeader}</a>
        </div>
    </header>);
}

export default header;
